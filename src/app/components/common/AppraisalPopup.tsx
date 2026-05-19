"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";

type PopupStep = "location" | "details" | "contact" | "success";

type AppraisalPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  periodLabel?: string;
  regionLabel?: string;
  suburbLabel?: string;
  amountLabel?: string;
  defaultAddress?: string;
  defaultSuburb?: string;
};

type FormState = {
  address: string;
  suburb: string;
  propertyType: string;
  bedrooms: string;
  parking: string;
  bathrooms: string;
  name: string;
  phone: string;
  email: string;
};

const BRAND_RED = "#ee2125";
const DEFAULT_FORM: FormState = {
  address: "",
  suburb: "auckland",
  propertyType: "",
  bedrooms: "",
  parking: "",
  bathrooms: "",
  name: "",
  phone: "",
  email: "",
};

const propertyTypeOptions = [
  "House",
  "Townhouse",
  "Apartment",
  "Unit",
  "Studio",
] as const;

const bedroomOptions = ["1", "2", "3", "4", "5+"] as const;
const bathroomOptions = ["1", "2", "3", "4", "5+"] as const;
const parkingOptions = ["0", "1", "2", "3+"] as const;

function FieldSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none rounded-2xl border-2 border-[rgb(238_33_37/0.95)] bg-white px-5 py-5 pr-16 text-lg font-semibold text-black outline-none"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-5 top-1/2 h-8 w-8 -translate-y-1/2 text-[rgb(238_33_37/0.95)]"
        strokeWidth={3}
      />
    </div>
  );
}

function FieldInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border-2 border-[rgb(238_33_37/0.95)] bg-white px-5 py-5 text-lg font-semibold text-black outline-none placeholder:text-black"
      required
    />
  );
}

export function AppraisalPopup({
  isOpen,
  onClose,
  title = "Median Market rent",
  periodLabel = "01 Jun 2025 - 30 Nov 2025",
  regionLabel = "Auckland",
  suburbLabel = "Albany",
  amountLabel = "$673",
  defaultAddress = "",
  defaultSuburb = "auckland",
}: AppraisalPopupProps) {
  const [step, setStep] = useState<PopupStep>("location");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<FormState>({
    ...DEFAULT_FORM,
    address: defaultAddress,
    suburb: defaultSuburb,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const storedDraft = window.sessionStorage.getItem("home-appraisal-draft");

    if (!storedDraft) {
      setForm((prev) => ({
        ...prev,
        address: defaultAddress,
        suburb: defaultSuburb,
      }));
      return;
    }

    try {
      const draft = JSON.parse(storedDraft) as {
        address?: string;
        suburb?: string;
      };

      setForm((prev) => ({
        ...prev,
        address: draft.address || defaultAddress || prev.address,
        suburb: draft.suburb || defaultSuburb || prev.suburb,
      }));
    } catch {
      window.sessionStorage.removeItem("home-appraisal-draft");
    }
  }, [defaultAddress, defaultSuburb, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const closeAndReset = () => {
    setStep("location");
    setLoading(false);
    setMessage("");
    setForm({
      ...DEFAULT_FORM,
      address: defaultAddress,
      suburb: defaultSuburb,
    });
    onClose();
  };

  const handleLocationContinue = () => {
    if (!form.address || !form.suburb) {
      setMessage("Please enter the property address and select a location.");
      return;
    }

    window.sessionStorage.setItem(
      "home-appraisal-draft",
      JSON.stringify({
        address: form.address,
        suburb: form.suburb,
      }),
    );

    setMessage("");
    setStep("details");
  };

  const handleContinue = () => {
    if (
      !form.propertyType ||
      !form.bedrooms ||
      !form.parking ||
      !form.bathrooms
    ) {
      setMessage("Please fill in all property details.");
      return;
    }

    setMessage("");
    setStep("contact");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) {
      setMessage("Please enter your full name, phone number, and email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        payload.append(key, value);
      });

      const response = await fetch("/api/appraisal", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Failed to submit appraisal request.");
      }

      setStep("success");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/45 px-4 py-6 backdrop-blur-[2px] lg:items-center lg:py-10"
      onClick={closeAndReset}
      role="dialog"
      aria-modal="true"
      aria-label="Rental appraisal popup"
    >
      <div
        className="relative w-full max-w-160"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeAndReset}
          className="absolute -right-2.5 -top-5.5 z-20 flex h-15 w-15 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-[1.02] hover:cursor-pointer"
          aria-label="Close appraisal popup"
        >
          <X className="h-5 w-5" strokeWidth={3} />
        </button>

        {step === "success" ? (
          <div className="rounded-[18px] border-2 border-[rgb(238_33_37/0.9)] bg-white px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:px-10 lg:px-12 lg:py-14">
            <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[3rem] lg:leading-[1.08]">
              Your Application Submitted Successfully
            </h2>

            <div className="mx-auto mt-10 flex h-34 w-34 items-center justify-center rounded-full border-[5px] border-[rgb(238_33_37/0.95)] text-[color:rgb(238_33_37_/_0.95)]">
              <Check className="h-16 w-16" strokeWidth={4} />
            </div>

            <p className="mx-auto mt-10 max-w-4xl text-xl font-semibold leading-[1.45] text-black sm:text-2xl">
              Our team will review it and we will contact you soon with your
              personalized rental appraisal
            </p>

            <button
              type="button"
              onClick={closeAndReset}
              className="mt-10 inline-flex min-w-[220px] justify-center rounded-[18px] bg-[rgb(238_33_37/0.98)] px-8 py-4 text-xl font-bold text-white transition-colors hover:cursor-pointer hover:bg-black"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[18px] border-2 border-[rgb(238_33_37/0.9)] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            {/* <div
              className="px-6 py-8 text-white sm:px-10 lg:px-14 lg:py-10"
              style={{ backgroundColor: BRAND_RED }}
            >
              <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-[4rem]">
                {title}
              </h2>
              <p className="mt-3 text-center text-2xl font-bold text-black sm:text-4xl">
                {periodLabel}
              </p>

              <div className="mt-10 grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-10">
                <div>
                  <div className="flex items-center gap-3 text-white">
                    <MapPin className="h-9 w-9 shrink-0" fill={BRAND_WHITE} />
                    <span className="text-3xl font-bold sm:text-4xl">
                      {regionLabel}
                    </span>
                  </div>
                  <p className="mt-1 text-6xl font-bold leading-none sm:text-7xl lg:text-[5.5rem]">
                    {suburbLabel}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-7xl font-bold leading-none sm:text-8xl lg:text-[8.5rem]">
                    {amountLabel}
                  </p>
                </div>
              </div>
            </div> */}

            <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
              {step === "location" ? (
                <>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[3rem]">
                      Let&apos;s start with your property
                    </h3>
                    <p className="mt-4 text-xl text-black sm:text-2xl">
                      Enter the address and location
                    </p>
                  </div>

                  <div className="mx-auto mt-10 max-w-190 space-y-5">
                    <FieldInput
                      value={form.address}
                      onChange={(value) => updateField("address", value)}
                      placeholder="Property Address..."
                    />
                    <FieldSelect
                      label="Location"
                      value={form.suburb}
                      onChange={(value) => updateField("suburb", value)}
                      options={["Auckland", "Hamilton", "Cambridge"]}
                    />
                  </div>

                  {message ? (
                    <p className="mt-5 text-center font-medium text-[rgb(202_18_22)]">
                      {message}
                    </p>
                  ) : null}

                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={handleLocationContinue}
                      className="inline-flex min-w-55 justify-center rounded-[18px] bg-[rgb(238_33_37/0.98)] px-8 py-4 text-xl font-bold text-white transition-colors hover:cursor-pointer hover:bg-black"
                    >
                      Continue
                    </button>
                  </div>
                </>
              ) : step === "details" ? (
                <>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[3rem]">
                      Get your Free
                    </h3>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[3rem]">
                      <span style={{ color: BRAND_RED }}>Personalized</span>{" "}
                      Rental Appraisal
                    </p>
                    <p className="mt-4 text-xl text-black sm:text-2xl">
                      Fill-up few more details
                    </p>
                  </div>

                  <div className="mt-10 grid gap-5 md:grid-cols-2">
                    <FieldSelect
                      label="Property Type"
                      value={form.propertyType}
                      onChange={(value) => updateField("propertyType", value)}
                      options={propertyTypeOptions}
                    />
                    <FieldSelect
                      label="Bedroom"
                      value={form.bedrooms}
                      onChange={(value) => updateField("bedrooms", value)}
                      options={bedroomOptions}
                    />
                    <FieldSelect
                      label="Parking"
                      value={form.parking}
                      onChange={(value) => updateField("parking", value)}
                      options={parkingOptions}
                    />
                    <FieldSelect
                      label="Bathroom"
                      value={form.bathrooms}
                      onChange={(value) => updateField("bathrooms", value)}
                      options={bathroomOptions}
                    />
                  </div>

                  {message ? (
                    <p className="mt-5 text-center font-medium text-[rgb(202_18_22)]">
                      {message}
                    </p>
                  ) : null}

                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={handleContinue}
                      className="inline-flex min-w-[220px] justify-center rounded-[18px] bg-[color:rgb(238_33_37_/_0.98)] px-8 py-4 text-xl font-bold text-white transition-colors hover:cursor-pointer hover:bg-black"
                    >
                      Continue
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[3rem]">
                      Where Should we send it!
                    </h3>
                    <p className="mt-4 text-xl text-black sm:text-2xl">
                      Final Step
                    </p>
                  </div>

                  <div className="mx-auto mt-10 max-w-190 space-y-5">
                    <FieldInput
                      value={form.name}
                      onChange={(value) => updateField("name", value)}
                      placeholder="Full Name..."
                    />
                    <FieldInput
                      value={form.phone}
                      onChange={(value) => updateField("phone", value)}
                      placeholder="Mobile Number..."
                      type="tel"
                    />
                    <FieldInput
                      value={form.email}
                      onChange={(value) => updateField("email", value)}
                      placeholder="Email Address..."
                      type="email"
                    />
                  </div>

                  {message ? (
                    <p className="mt-5 text-center font-medium text-[rgb(202_18_22)]">
                      {message}
                    </p>
                  ) : null}

                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="inline-flex min-w-[220px] justify-center rounded-[18px] bg-[rgb(238_33_37/0.98)] px-8 py-4 text-xl font-bold text-white transition-colors hover:cursor-pointer hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? "Submitting..." : "Rent My Home"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
