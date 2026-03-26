"use client";

import { useRef, useState } from "react";

import {
  Download,
  Upload,
  CheckCircle2,
  ArrowRight,
  FileText,
} from "lucide-react";

export function Tenancy() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const initialFormData = {
    propertyInterest: "",
    moveInDate: "",
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
        formDataToSend.append(`application_${index}`, file);
      });
      const response = await fetch("/api/tenancy-application", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setFormData(initialFormData);
        setFiles([]);
        setStep(1);
        setSubmitted(true);
      } else {
        setMessage("Failed to submit application. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="flex items-center min-h-screen py-8 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mt-3 mb-6">
                Tenancy Application
                <br />
                Submitted
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Thank you for your interest in our properties. We will review
                your application and get back to you soon.
              </p>

              <div className="space-y-4">
                {[
                  "Application received",
                  "Review within 24-48 hours",
                  "We'll contact you for next steps",
                  "Secure and confidential process",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-white">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-black text-center mb-4">
                Application Submitted!
              </h3>
              <p className="text-black text-center mb-6">
                Your tenancy application has been submitted successfully. We
                will contact you within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full flex flex-row justify-center text-white bg-blue-600 text-lg px-3 py-2 rounded-lg border-2 hover:cursor-pointer"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="tenancy"
      className="flex items-center min-h-screen py-8 bg-blue-600"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mt-3 mb-6">
              Apply for Tenancy
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Ready to find your perfect home? Download our tenancy application
              form, fill it out, and submit it here. We'll get back to you
              quickly.
            </p>

            <div className="space-y-4">
              {[
                "Download and fill application form",
                "Upload completed form",
                "Submit with your details",
                "Response within 24-48 hours",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border-white border">
            {/* Progress Steps */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      step >= s
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-12 h-0.5 ${
                        step > s ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Download Application Form
                </h3>

                <p className="text-gray-600 mb-4">
                  Please download our tenancy application form, fill it out
                  completely, and save it as a PDF.
                </p>

                <a
                  href="https://assets.zyrosite.com/mP4n9qZQLlfnawr2/pre-tenancy-application-form_a_cube_rentals-Aq2v0e61B9Sw2XGJ.pdf"
                  download
                  onClick={() => setStep(2)}
                  className="w-full flex flex-row justify-center text-white bg-blue-600 text-lg group px-6 py-3 rounded-lg border-2 gap-2 hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Application Form</span>
                </a>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Upload Completed Form
                </h3>

                <div className="space-y-2">
                  <label>Upload Your Filled Application Form</label>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      {files.length > 0
                        ? `${files.length} file(s) selected`
                        : "Click to upload your completed form (PDF)"}
                    </p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    className="flex-1 bg-transparent border rounded-lg hover:cursor-pointer"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    className="flex-1 flex flex-row justify-center text-white bg-blue-600 text-lg group px-3 py-2 rounded-lg border-2 gap-1 hover:bg-blue-700 transition-colors"
                    onClick={() => setStep(3)}
                    disabled={files.length === 0}
                  >
                    <p>Continue</p>
                    <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Your Contact Details
                </h3>

                <div className="space-y-2">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+64 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    className="flex-1 bg-transparent border rounded-lg hover:cursor-pointer"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>
                  <button
                    className="flex-1 flex flex-row justify-center text-white bg-blue-600 text-lg group px-3 py-2 rounded-lg border-2 gap-1 hover:bg-blue-700 transition-colors disabled:opacity-50"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    <p>{loading ? "Submitting..." : "Submit Application"}</p>
                    {!loading && (
                      <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>

                {message && (
                  <p
                    className={`text-center ${
                      message.includes("success")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy. We&apos;ll
                  never share your details.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.facebook.com/acuberentalsltd/"
            target="_blank"
            className=" text-white px-6 py-3 hover:underline mt-16"
          >
            See Available Rentals
          </a>
        </div>
      </div>
    </section>
  );
}
