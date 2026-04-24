"use client";

import { useRef, useState } from "react";

import { MapPin, Upload, CheckCircle2, ArrowRight } from "lucide-react";

export function Appraisal() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const initialFormData = {
    address: "",
    suburb: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    propertyType: "",
    name: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      files.forEach((file, index) => {
        formDataToSend.append(`photo_${index}`, file);
      });
      const response = await fetch("/api/appraisal", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setFormData(initialFormData);
        setFiles([]);
        setStep(1);
        setSubmitted(true);
      } else {
        setMessage("Failed to submit request. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="flex items-center py-32 bg-red" id="landlords">
      <div className="flex flex-col gap-16 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mt-3 mb-6">
              Get Your Free
              <br />
              Rent Appraisal
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Find out what your property could earn. Our expert team will
              provide a comprehensive market analysis within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                "Accurate market rent assessment",
                "Comparable property analysis",
                "No obligation, completely free",
                "Response within 24 hours",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form / Success Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-white border">
            {submitted ? (
              <div className="text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Thank You!
                </h3>
                <p className="text-black mb-6">
                  Your appraisal request has been submitted successfully. We
                  will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="w-full flex flex-row justify-center text-white bg-red text-lg px-3 py-2 rounded-lg border-2 hover:cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          step >= s
                            ? "bg-red text-white"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`w-12 h-0.5 ${step > s ? "bg-red" : "bg-black/20"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(2);
                    }}
                  >
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Property Address
                    </h3>

                    <div className="space-y-2">
                      <label htmlFor="address">Street Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                        <input
                          id="address"
                          placeholder="123 Example Street"
                          className="pl-8 py-2 border rounded-lg w-full"
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          required={true}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="suburb">City/Region</label>
                      <select
                        id="suburb"
                        value={formData.suburb}
                        onChange={(e) =>
                          handleInputChange("suburb", e.target.value)
                        }
                        required={true}
                        className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="" disabled>
                          Select location
                        </option>
                        <option value="auckland">Auckland</option>
                        <option value="hamilton">Hamilton</option>
                        <option value="cambridge">Cambridge</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex flex-row justify-center text-white bg-red text-lg group px-3 py-2 rounded-lg border-2 gap-1 hover:cursor-pointer"
                    >
                      <p>Continue</p>
                      <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}

                {step === 2 && (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(3);
                    }}
                  >
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Property Details
                    </h3>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label>Bedrooms</label>
                        <select
                          value={formData.bedrooms}
                          onChange={(e) =>
                            handleInputChange("bedrooms", e.target.value)
                          }
                          required={true}
                          className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="" disabled>
                            --
                          </option>
                          {[1, 2, 3, 4, 5, "6+"].map((num) => (
                            <option key={num} value={String(num)}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label>Bathrooms</label>
                        <select
                          value={formData.bathrooms}
                          onChange={(e) =>
                            handleInputChange("bathrooms", e.target.value)
                          }
                          required={true}
                          className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="" disabled>
                            --
                          </option>
                          {[1, 2, 3, 4, "5+"].map((num) => (
                            <option key={num} value={String(num)}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label>Parking</label>
                        <select
                          value={formData.parking}
                          onChange={(e) =>
                            handleInputChange("parking", e.target.value)
                          }
                          required={true}
                          className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="" disabled>
                            --
                          </option>
                          {[0, 1, 2, 3, "4+"].map((num) => (
                            <option key={num} value={String(num)}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label>Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) =>
                          handleInputChange("propertyType", e.target.value)
                        }
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="" disabled>
                          --
                        </option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="unit">Unit</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label>Upload Photos (Optional)</label>
                      <div
                        className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-[#ad0000] transition-colors cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="h-8 w-8 text-black mx-auto mb-2" />
                        <p className="text-sm text-black">
                          {files.length > 0
                            ? `${files.length} file(s) selected`
                            : "Click or drag photos here"}
                        </p>
                      </div>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="flex-1 bg-transparent border rounded-lg hover:cursor-pointer"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 flex flex-row justify-center text-white bg-red text-lg group px-3 py-2 rounded-lg border-2 gap-1 hover:cursor-pointer"
                      >
                        <p>Continue</p>
                        <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Your Details
                    </h3>

                    <div className="flex flex-row px-3 py-2 border rounded-lg w-full gap-4">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="px-3 py-2 border rounded-lg w-full flex flex-row gap-4">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="px-3 py-2 border rounded-lg w-full flex flex-row gap-4">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+64 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="flex-1 bg-transparent border rounded-lg hover:cursor-pointer"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 flex flex-row justify-center text-white bg-red text-lg group px-3 py-2 rounded-lg border-2 gap-1 hover:cursor-pointer disabled:opacity-50"
                        disabled={loading}
                      >
                        <p>
                          {loading ? "Submitting..." : "Get a Free Appraisal"}
                        </p>
                        {!loading && (
                          <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    </div>

                    {message && (
                      <p
                        className={`text-center ${message.includes("success") ? "text-green-600" : "text-red-600"}`}
                      >
                        {message}
                      </p>
                    )}

                    <p className="text-xs text-black text-center">
                      By submitting, you agree to our privacy policy. We&apos;ll
                      never share your details.
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
