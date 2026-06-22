"use client";

import { ChangeEvent, useEffect, useId, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";

import {
  getDefaultLocationForPathname,
  getPropertyManagerReferral,
  TENANCY_LOCATIONS,
  type TenancyLocation,
} from "@/src/app/lib/tenancy-routing";

type Step = 1 | 2 | 3 | 4;

type ApplicantKey = "second" | "third";

type TenancyFormState = {
  contactName: string;
  firstApplicantName: string;
  idDocumentType: string;
  idDocumentFile: File | null;
  email: string;
  phone: string;
  propertyWishToApply: string;
  propertyLocation: TenancyLocation | "";
  currentAddress: string;
  aboutYourself: string;
  reasonForLeaving: string;
  isFirstTimeRenter: boolean;
  currentLandlordName: string;
  currentLandlordEmail: string;
  currentLandlordPhone: string;
  reference1Name: string;
  reference1Phone: string;
  reference2Name: string;
  reference2Phone: string;
  proofOfIncomeFile: File | null;
  secondApplicantEnabled: boolean;
  secondApplicantName: string;
  secondApplicantIdType: string;
  secondApplicantIdFile: File | null;
  thirdApplicantEnabled: boolean;
  thirdApplicantName: string;
  thirdApplicantIdType: string;
  thirdApplicantIdFile: File | null;
  referralManagerSlug: string;
  referralManagerName: string;
  submissionPath: string;
  consentAccepted: boolean;
};

const idDocumentOptions = [
  "Driving Licence",
  "Passport",
  "18+ Card",
  "Other",
] as const;

function createInitialFormState({
  propertyLocation = "",
  referralManagerSlug = "",
  referralManagerName = "",
  submissionPath = "",
}: {
  propertyLocation?: TenancyLocation | "";
  referralManagerSlug?: string;
  referralManagerName?: string;
  submissionPath?: string;
} = {}): TenancyFormState {
  return {
    contactName: "",
    firstApplicantName: "",
    idDocumentType: "Driving Licence",
    idDocumentFile: null,
    email: "",
    phone: "",
    propertyWishToApply: "",
    propertyLocation,
    currentAddress: "",
    aboutYourself: "",
    reasonForLeaving: "",
    isFirstTimeRenter: false,
    currentLandlordName: "",
    currentLandlordEmail: "",
    currentLandlordPhone: "",
    reference1Name: "",
    reference1Phone: "",
    reference2Name: "",
    reference2Phone: "",
    proofOfIncomeFile: null,
    secondApplicantEnabled: false,
    secondApplicantName: "",
    secondApplicantIdType: "Driving Licence",
    secondApplicantIdFile: null,
    thirdApplicantEnabled: false,
    thirdApplicantName: "",
    thirdApplicantIdType: "Driving Licence",
    thirdApplicantIdFile: null,
    referralManagerSlug,
    referralManagerName,
    submissionPath,
    consentAccepted: false,
  };
}

export function Tenancy() {
  return (
    <Suspense>
      <TenancyForm />
    </Suspense>
  );
}

function TenancyForm() {
  const searchParams = useSearchParams();
  const referralManagerSlug = searchParams.get("referralManager") ?? "";
  const referralManager = getPropertyManagerReferral(referralManagerSlug);

  const [routeContext, setRouteContext] = useState(() => ({
    propertyLocation: "" as TenancyLocation | "",
    referralManagerSlug: "",
    referralManagerName: "",
    submissionPath: "",
  }));

  useEffect(() => {
    setRouteContext({
      propertyLocation: getDefaultLocationForPathname(window.location.pathname),
      referralManagerSlug: referralManager?.slug ?? "",
      referralManagerName: referralManager?.name ?? "",
      submissionPath: window.location.pathname,
    });
  }, [referralManager?.slug, referralManager?.name]);

  const formDefaults = useMemo(
    () => createInitialFormState(routeContext),
    [routeContext],
  );
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<TenancyFormState>(formDefaults);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      propertyLocation: prev.propertyLocation || formDefaults.propertyLocation,
      referralManagerSlug: formDefaults.referralManagerSlug,
      referralManagerName: formDefaults.referralManagerName,
      submissionPath: formDefaults.submissionPath,
    }));
  }, [formDefaults]);

  const totalApplicants = useMemo(() => {
    return (
      1 +
      Number(formData.secondApplicantEnabled) +
      Number(formData.thirdApplicantEnabled)
    );
  }, [formData.secondApplicantEnabled, formData.thirdApplicantEnabled]);

  const handleInputChange = (
    field: keyof TenancyFormState,
    value: string | boolean | File | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const clearApplicantState = (
    applicant: ApplicantKey,
    currentState: TenancyFormState,
  ): TenancyFormState => {
    if (applicant === "second") {
      return {
        ...currentState,
        secondApplicantEnabled: false,
        secondApplicantName: "",
        secondApplicantIdType: "Driving Licence",
        secondApplicantIdFile: null,
      };
    }

    return {
      ...currentState,
      thirdApplicantEnabled: false,
      thirdApplicantName: "",
      thirdApplicantIdType: "Driving Licence",
      thirdApplicantIdFile: null,
    };
  };

  const handleToggleApplicant = (applicant: ApplicantKey, enabled: boolean) => {
    if (enabled) {
      if (applicant === "second") {
        setFormData((prev) => ({
          ...prev,
          secondApplicantEnabled: true,
        }));
        return;
      }

      setFormData((prev) => {
        if (!prev.secondApplicantEnabled) {
          return prev;
        }

        return {
          ...prev,
          thirdApplicantEnabled: true,
        };
      });
      return;
    }

    setFormData((prev) => {
      if (applicant === "second") {
        return clearApplicantState(
          "third",
          clearApplicantState("second", prev),
        );
      }

      return clearApplicantState("third", prev);
    });
  };

  const handleAddApplicant = () => {
    if (!formData.secondApplicantEnabled) {
      handleToggleApplicant("second", true);
      return;
    }

    if (!formData.thirdApplicantEnabled) {
      handleToggleApplicant("third", true);
    }
  };

  const handleFirstTimeRenterChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      isFirstTimeRenter: checked,
      currentLandlordName: checked
        ? "First Time Renter"
        : prev.currentLandlordName === "First Time Renter"
          ? ""
          : prev.currentLandlordName,
      currentLandlordEmail: checked ? "" : prev.currentLandlordEmail,
      currentLandlordPhone: checked ? "" : prev.currentLandlordPhone,
    }));
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      if (
        !formData.contactName ||
        !formData.firstApplicantName ||
        !formData.idDocumentType ||
        !formData.idDocumentFile ||
        !formData.email ||
        !formData.phone ||
        !formData.propertyWishToApply ||
        !formData.propertyLocation ||
        !formData.currentAddress
      ) {
        setMessage("Please complete all required fields before continuing.");
        return false;
      }
    }

    if (step === 2) {
      if (
        !formData.aboutYourself ||
        !formData.reasonForLeaving ||
        !formData.reference1Name ||
        !formData.reference1Phone ||
        !formData.reference2Name ||
        !formData.reference2Phone ||
        !formData.proofOfIncomeFile
      ) {
        setMessage("Please complete all required fields before continuing.");
        return false;
      }

      if (
        !formData.isFirstTimeRenter &&
        (!formData.currentLandlordName ||
          !formData.currentLandlordEmail ||
          !formData.currentLandlordPhone)
      ) {
        setMessage(
          "Please add your current landlord details or mark yourself as a first-time renter.",
        );
        return false;
      }
    }

    if (step === 3) {
      if (
        formData.secondApplicantEnabled &&
        (!formData.secondApplicantName ||
          !formData.secondApplicantIdType ||
          !formData.secondApplicantIdFile)
      ) {
        setMessage(
          "Please complete the second applicant details or turn it off.",
        );
        return false;
      }

      if (
        formData.thirdApplicantEnabled &&
        (!formData.thirdApplicantName ||
          !formData.thirdApplicantIdType ||
          !formData.thirdApplicantIdFile)
      ) {
        setMessage(
          "Please complete the third applicant details or turn it off.",
        );
        return false;
      }
    }

    if (step === 4 && !formData.consentAccepted) {
      setMessage("Please accept the consent statement before submitting.");
      return false;
    }

    setMessage("");
    return true;
  };

  const handleNextStep = () => {
    if (!validateCurrentStep()) {
      return;
    }

    setStep((prev) => Math.min(prev + 1, 4) as Step);
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          payload.append(key, value);
          return;
        }

        if (value === null) {
          payload.append(key, "");
          return;
        }

        if (typeof value === "boolean") {
          payload.append(key, value ? "true" : "false");
          return;
        }

        payload.append(key, value);
      });

      payload.append("totalApplicants", String(totalApplicants));

      const response = await fetch("/api/tenancy-application", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        setMessage("Failed to submit application. Please try again.");
        return;
      }

      setSubmitted(true);
      setFormData(formDefaults);
      setStep(1);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="tenancy"
      className="bg-[#f8f8f8] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-start">
            <div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-black mt-3 mb-6">
                Apply for Tenancy
              </h2>
              <p className="max-w-3xl text-[#555] text-lg leading-relaxed">
                Are one of our properties speaking to you? Complete the form
                below to apply for tenancy. You will receive a confirmation
                email upon submisson. Our team will review your application
                within 5 working days.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[30px] p-6 lg:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
            {submitted ? (
              <div className="text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Application Submitted
                </h3>
                <p className="text-gray-700 mb-6">
                  Thanks for sending through your tenancy application. Our team
                  has received it and will review it shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                  }}
                  className="w-full flex flex-row justify-center text-white bg-[#ef2b2d] text-lg px-3 py-2 rounded-lg border-2 hover:bg-black transition-colors hover:cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className="space-y-5">
                    <StepHeader
                      step={step}
                      title="Main Applicant Details"
                      description="Start with the main applicant and the property you want to apply for."
                    />

                    <div className="grid gap-4 lg:grid-cols-12">
                      <div className="lg:col-span-6">
                        <TextField
                          label="Your Name"
                          value={formData.contactName}
                          onChange={(value) =>
                            handleInputChange("contactName", value)
                          }
                          placeholder="Your full name"
                          required={true}
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <TextField
                          label="First Applicant Name"
                          value={formData.firstApplicantName}
                          onChange={(value) =>
                            handleInputChange("firstApplicantName", value)
                          }
                          placeholder="First applicant full name"
                          required={true}
                        />
                      </div>
                      <div className="lg:col-span-5">
                        <TextField
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(value) =>
                            handleInputChange("email", value)
                          }
                          placeholder="name@example.com"
                          required={true}
                        />
                      </div>
                      <div className="lg:col-span-3">
                        <TextField
                          label="Phone Number"
                          type="tel"
                          value={formData.phone}
                          onChange={(value) =>
                            handleInputChange("phone", value)
                          }
                          placeholder="+64"
                          required={true}
                        />
                      </div>
                      <div className="lg:col-span-4">
                        <SelectField
                          label="ID Document Type"
                          value={formData.idDocumentType}
                          onChange={(value) =>
                            handleInputChange("idDocumentType", value)
                          }
                          options={idDocumentOptions}
                          required={true}
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <TextField
                          label="Property You Wish to Apply"
                          value={formData.propertyWishToApply}
                          onChange={(value) =>
                            handleInputChange("propertyWishToApply", value)
                          }
                          placeholder="Property address or listing reference"
                          required={true}
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <LocationField
                          value={formData.propertyLocation}
                          onChange={(value) =>
                            handleInputChange("propertyLocation", value)
                          }
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <TextField
                          label="Current Address"
                          value={formData.currentAddress}
                          onChange={(value) =>
                            handleInputChange("currentAddress", value)
                          }
                          placeholder="Your current address"
                          required={true}
                        />
                      </div>
                      <div className="lg:col-span-6">
                        <UploadField
                          label="ID Document"
                          helperText="Driving Licence, Passport etc"
                          file={formData.idDocumentFile}
                          onChange={(file) =>
                            handleInputChange("idDocumentFile", file)
                          }
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          required={true}
                        />
                      </div>
                      {formData.referralManagerName && (
                        <div className="lg:col-span-12">
                          <div className="rounded-xl border border-red/10 bg-[#fff8f8] px-4 py-3 text-sm text-[#1a202c]">
                            This application will referred to{" "}
                            <strong>{formData.referralManagerName}</strong>.
                          </div>
                        </div>
                      )}
                    </div>

                    <StepActions isFirstStep={true} onNext={handleNextStep} />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <StepHeader
                      step={step}
                      title="Rental History and References"
                      description="Tell us a bit about yourself, your current tenancy, and who we can contact for references."
                    />

                    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                      <div className="space-y-4">
                        <TextAreaField
                          label="Brief About Yourself"
                          value={formData.aboutYourself}
                          onChange={(value) =>
                            handleInputChange("aboutYourself", value)
                          }
                          placeholder="Work, study, lifestyle, who will be living in the home, and anything useful for the application."
                          required={true}
                        />

                        <TextAreaField
                          label="Reason For Leaving the Current Address"
                          value={formData.reasonForLeaving}
                          onChange={(value) =>
                            handleInputChange("reasonForLeaving", value)
                          }
                          placeholder="Why are you moving?"
                          required={true}
                        />
                      </div>

                      <div className="space-y-4 rounded-2xl border border-gray-200 p-5">
                        <div className="space-y-2">
                          <p className="block text-sm font-medium text-black">
                            First Time Renter
                            <span className="text-red"> *</span>
                          </p>
                          <label className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                            <input
                              type="checkbox"
                              checked={formData.isFirstTimeRenter}
                              onChange={(event) =>
                                handleFirstTimeRenterChange(
                                  event.target.checked,
                                )
                              }
                              className="mt-1 h-4 w-4 accent-[#ef2b2d]"
                            />
                            <span className="text-sm text-gray-700">
                              Tick this if you are a{" "}
                              <strong>First Time Renter</strong>. Otherwise,
                              fill in the landlord details below.
                            </span>
                          </label>
                        </div>

                        <TextField
                          label="Current Landlord or Property Manager Name"
                          value={formData.currentLandlordName}
                          onChange={(value) =>
                            handleInputChange("currentLandlordName", value)
                          }
                          placeholder="Current landlord or property manager"
                          required={!formData.isFirstTimeRenter}
                          disabled={formData.isFirstTimeRenter}
                        />
                        <TextField
                          label="Current Landlord or Property Manager Email"
                          type="email"
                          value={formData.currentLandlordEmail}
                          onChange={(value) =>
                            handleInputChange("currentLandlordEmail", value)
                          }
                          placeholder="landlord@example.com"
                          required={!formData.isFirstTimeRenter}
                          disabled={formData.isFirstTimeRenter}
                        />
                        <TextField
                          label="Current Landlord or Property Manager Phone Number"
                          type="tel"
                          value={formData.currentLandlordPhone}
                          onChange={(value) =>
                            handleInputChange("currentLandlordPhone", value)
                          }
                          placeholder="+64"
                          required={!formData.isFirstTimeRenter}
                          disabled={formData.isFirstTimeRenter}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 xl:grid-cols-3">
                      <div className="rounded-2xl border border-gray-200 p-5 space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red">
                          Reference 1
                        </p>
                        <TextField
                          label="Reference - 1 Name"
                          value={formData.reference1Name}
                          onChange={(value) =>
                            handleInputChange("reference1Name", value)
                          }
                          placeholder="Reference name"
                          required={true}
                        />
                        <TextField
                          label="Reference - 1 Phone Number"
                          type="tel"
                          value={formData.reference1Phone}
                          onChange={(value) =>
                            handleInputChange("reference1Phone", value)
                          }
                          placeholder="+64"
                          required={true}
                        />
                      </div>

                      <div className="rounded-2xl border border-gray-200 p-5 space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red">
                          Reference 2
                        </p>
                        <TextField
                          label="Reference - 2 Name"
                          value={formData.reference2Name}
                          onChange={(value) =>
                            handleInputChange("reference2Name", value)
                          }
                          placeholder="Reference name"
                          required={true}
                        />
                        <TextField
                          label="Reference - 2 Phone Number"
                          type="tel"
                          value={formData.reference2Phone}
                          onChange={(value) =>
                            handleInputChange("reference2Phone", value)
                          }
                          placeholder="+64"
                          required={true}
                        />
                      </div>

                      <div className="rounded-2xl border border-gray-200 p-5">
                        <UploadField
                          label="Rent Affordability / Proof Of Income Document"
                          helperText="Payslips, employment letter, bank statement, or similar."
                          file={formData.proofOfIncomeFile}
                          onChange={(file) =>
                            handleInputChange("proofOfIncomeFile", file)
                          }
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          required={true}
                        />
                      </div>
                    </div>

                    <StepActions
                      onBack={() => setStep(1)}
                      onNext={handleNextStep}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <StepHeader
                      step={step}
                      title="Additional Applicants"
                      description="Add second or third applicants only if they are included in this application."
                    />

                    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium text-black">
                          Applicants on this form: {totalApplicants} of 3
                        </p>
                        <p className="text-sm text-gray-600">
                          Add applicants one at a time, up to a maximum of
                          three.
                        </p>
                      </div>
                      {totalApplicants < 3 && (
                        <button
                          type="button"
                          onClick={handleAddApplicant}
                          className="rounded-lg border border-red px-4 py-2 text-sm font-medium text-red transition-colors hover:bg-[#fff8f8] hover:cursor-pointer"
                        >
                          Add{" "}
                          {formData.secondApplicantEnabled ? "third" : "second"}{" "}
                          applicant
                        </button>
                      )}
                    </div>

                    {(formData.secondApplicantEnabled ||
                      formData.thirdApplicantEnabled) && (
                      <div className="grid gap-4 xl:grid-cols-2">
                        {formData.secondApplicantEnabled && (
                          <ApplicantCard
                            title="Second Applicant"
                            name={formData.secondApplicantName}
                            idType={formData.secondApplicantIdType}
                            file={formData.secondApplicantIdFile}
                            onNameChange={(value) =>
                              handleInputChange("secondApplicantName", value)
                            }
                            onIdTypeChange={(value) =>
                              handleInputChange("secondApplicantIdType", value)
                            }
                            onFileChange={(file) =>
                              handleInputChange("secondApplicantIdFile", file)
                            }
                            onRemove={() =>
                              handleToggleApplicant("second", false)
                            }
                          />
                        )}

                        {formData.thirdApplicantEnabled && (
                          <ApplicantCard
                            title="Third Applicant"
                            name={formData.thirdApplicantName}
                            idType={formData.thirdApplicantIdType}
                            file={formData.thirdApplicantIdFile}
                            onNameChange={(value) =>
                              handleInputChange("thirdApplicantName", value)
                            }
                            onIdTypeChange={(value) =>
                              handleInputChange("thirdApplicantIdType", value)
                            }
                            onFileChange={(file) =>
                              handleInputChange("thirdApplicantIdFile", file)
                            }
                            onRemove={() =>
                              handleToggleApplicant("third", false)
                            }
                          />
                        )}
                      </div>
                    )}

                    <StepActions
                      onBack={() => setStep(2)}
                      onNext={handleNextStep}
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-5">
                    <StepHeader
                      step={step}
                      title="Consent and Submit"
                      description="Review the key details below, then confirm the consent statement to send your application."
                    />

                    <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-4 text-sm text-gray-700">
                        <SummaryRow
                          label="Primary contact"
                          value={`${formData.contactName} (${formData.email})`}
                        />
                        <SummaryRow
                          label="First applicant"
                          value={formData.firstApplicantName}
                        />
                        <SummaryRow
                          label="Property applying for"
                          value={formData.propertyWishToApply}
                        />
                        <SummaryRow
                          label="Property location"
                          value={formData.propertyLocation}
                        />
                        <SummaryRow
                          label="Current address"
                          value={formData.currentAddress}
                        />
                        {formData.referralManagerName && (
                          <SummaryRow
                            label="Referred property manager"
                            value={formData.referralManagerName}
                          />
                        )}
                        <SummaryRow
                          label="Applicants on this form"
                          value={String(totalApplicants)}
                        />
                      </div>

                      <div className="rounded-xl border border-red/10 bg-[#fff8f8] p-5 text-sm leading-7 text-gray-700">
                        <p>
                          I authorise the Landlord/Property Manager to collect,
                          retain and use this information for the purpose of
                          assessing my creditworthiness and suitability for the
                          tenancy.
                        </p>
                        <p className="mt-3">
                          I understand that a credit reporting agency may hold
                          and disclose my information for credit checking or
                          debt collection, and that they may check the Ministry
                          of Justice fines database for overdue fines.
                        </p>
                        <p className="mt-3">
                          I consent that no physical signature is needed while
                          filling in this e-application form.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="block text-sm font-medium text-black">
                        Confirmation
                        <span className="text-red"> *</span>
                      </p>
                      <label className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                        <input
                          type="checkbox"
                          checked={formData.consentAccepted}
                          onChange={(event) =>
                            handleInputChange(
                              "consentAccepted",
                              event.target.checked,
                            )
                          }
                          className="mt-1 h-4 w-4 accent-[#ef2b2d]"
                        />
                        <span className="text-sm text-gray-700">
                          I confirm the information provided is correct and I
                          agree to the consent statement above.
                        </span>
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 bg-transparent border rounded-lg py-3 hover:cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex-1 flex flex-row justify-center text-white bg-[#ef2b2d] text-lg group px-3 py-3 rounded-lg border-2 gap-1 hover:bg-black transition-colors hover:cursor-pointer disabled:opacity-50"
                        disabled={loading}
                      >
                        <span>
                          {loading ? "Submitting..." : "Submit Application"}
                        </span>
                        {!loading && (
                          <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {message && (
                  <p className="mt-6 text-center text-sm text-red">{message}</p>
                )}

                <p className="mt-6 text-xs text-gray-500 text-center">
                  Your details and supporting documents are sent securely to our
                  team for review.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepActions({
  isFirstStep = false,
  onBack,
  onNext,
}: {
  isFirstStep?: boolean;
  onBack?: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex gap-3">
      {!isFirstStep && (
        <button
          type="button"
          className="flex-1 bg-transparent border rounded-lg py-3 hover:cursor-pointer"
          onClick={onBack}
        >
          Back
        </button>
      )}
      <button
        type="button"
        className="flex-1 flex flex-row justify-center text-white bg-[#ef2b2d] text-lg group px-3 py-3 rounded-lg border-2 gap-1 hover:bg-black transition-colors hover:cursor-pointer"
        onClick={onNext}
      >
        <span>Continue</span>
        <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

function StepHeader({
  step,
  title,
  description,
}: {
  step: Step;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-red">
          Step {step} of 4
        </p>
        <h3 className="mt-2 text-xl font-semibold text-black">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:justify-end lg:pb-0">
        {[1, 2, 3, 4].map((currentStep) => (
          <div key={currentStep} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors shrink-0 ${
                step >= currentStep
                  ? "bg-[#ef2b2d] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {currentStep}
            </div>
            {currentStep < 4 && (
              <div
                className={`w-10 h-0.5 shrink-0 ${step > currentStep ? "bg-[#ef2b2d]" : "bg-black/20"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  const id = useId();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-black">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red/20 disabled:bg-gray-100 disabled:text-gray-400"
      />
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  const id = useId();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-black">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <textarea
        id={id}
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red/20"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  required?: boolean;
}) {
  const id = useId();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-black">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-red/20"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function UploadField({
  label,
  helperText,
  file,
  onChange,
  accept,
  required = false,
}: {
  label: string;
  helperText: string;
  file: File | null;
  onChange: (file: File | null) => void;
  accept: string;
  required?: boolean;
}) {
  const id = useId();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files?.[0] ?? null);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-black">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <label
        htmlFor={id}
        className="flex min-h-29 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 px-4 py-5 text-center transition-colors hover:border-red"
      >
        <Upload className="mb-3 h-6 w-6 text-red" />
        <span className="text-sm font-medium text-black">
          {file ? file.name : "Click to upload"}
        </span>
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      </label>
      <input
        id={id}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

function LocationField({
  value,
  onChange,
}: {
  value: TenancyLocation | "";
  onChange: (value: TenancyLocation) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="block text-sm font-medium text-black">
        Property Location
        <span className="text-red"> *</span>
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {TENANCY_LOCATIONS.map((location) => {
          const id = `property-location-${location.toLowerCase()}`;
          const checked = value === location;

          return (
            <label
              key={location}
              htmlFor={id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                checked
                  ? "border-red bg-[#fff8f8]"
                  : "border-gray-200 bg-white hover:border-red/30"
              }`}
            >
              <input
                id={id}
                type="radio"
                name="propertyLocation"
                checked={checked}
                onChange={() => onChange(location)}
                className="mt-1 h-4 w-4 accent-[#ef2b2d]"
              />
              <span>
                <span className="block font-medium text-black">{location}</span>
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function ApplicantCard({
  title,
  name,
  idType,
  file,
  onNameChange,
  onIdTypeChange,
  onFileChange,
  onRemove,
}: {
  title: string;
  name: string;
  idType: string;
  file: File | null;
  onNameChange: (value: string) => void;
  onIdTypeChange: (value: string) => void;
  onFileChange: (file: File | null) => void;
  onRemove: () => void;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-lg font-semibold text-black">{title}</h4>
        <button
          type="button"
          onClick={onRemove}
          className="text-sm font-medium text-red-600 transition-colors hover:text-red-700 hover:cursor-pointer"
        >
          Remove
        </button>
      </div>
      <TextField
        label={`${title} Name`}
        value={name}
        onChange={onNameChange}
        placeholder={`${title} full name`}
        required={true}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label={`ID Document Type (${title})`}
          value={idType}
          onChange={onIdTypeChange}
          options={idDocumentOptions}
        />
        <UploadField
          label={`ID Document (${title})`}
          helperText="Driving Licence, Passport etc"
          file={file}
          onChange={onFileChange}
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          required={true}
        />
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
      <span className="font-medium text-black">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}
