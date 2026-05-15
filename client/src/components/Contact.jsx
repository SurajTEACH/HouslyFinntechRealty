import React, { useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/houslylogo.png";
import { createProjectRequestApi } from "../api/projectApi";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/houlsy-finntech-realty/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    href: "#",
    icon: "twitter",
  },
  {
    name: "YouTube",
    href: "#",
    icon: "youtube",
  },
];

const usefulLinks = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Career", href: "/career" },
];

const companyLinks = [
  { label: "About Company", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Press & Media", href: "#" },
  { label: "Investor Relations", href: "#" },
];

const serviceLinks = [
  { label: "Web Development", href: "#" },
  { label: "AI & Chatbot Development", href: "#" },
  { label: "Cloud & DevOps", href: "#" },
  { label: "Software Development", href: "#" },
  { label: "IT Consulting", href: "#" },
];

const faqs = [
  {
    question: "What IT services does Hously Finntech provide?",
    answer:
      "We offer comprehensive IT solutions including web development, mobile app development, cloud services, AI/ML, cybersecurity, DevOps, and custom software development.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while enterprise applications can take 3-6 months. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you provide post-deployment support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, security patches, and technical assistance.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Absolutely! Our team is proficient in multiple technologies and can integrate seamlessly with your current systems or recommend optimal solutions.",
  },
];

const renderSocialIcon = (type, className = "h-4 w-4") => {
  switch (type) {
    case "facebook":
      return (
        <svg fill="currentColor" viewBox="0 0 320 512" className={className}>
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      );
    case "instagram":
      return (
        <svg fill="currentColor" viewBox="0 0 448 512" className={className}>
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg fill="currentColor" viewBox="0 0 448 512" className={className}>
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      );
    case "twitter":
      return (
        <svg fill="currentColor" viewBox="0 0 512 512" className={className}>
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
      );
    case "youtube":
      return (
        <svg fill="currentColor" viewBox="0 0 576 512" className={className}>
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      );
    default:
      return null;
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    service_required: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    try {
      await createProjectRequestApi(formData);
      setStatus("success");
      setFormData({
        full_name: "",
        company_name: "",
        email: "",
        phone: "",
        inquiry_type: "",
        service_required: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .breadcumb-content {
          height: 35vh;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
          margin-top: 80px;
        }

        .breadcumb-content::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0076d8 0%, #0066c0 100%);
          z-index: 0;
        }

        .breadcumb-content::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80') center/cover;
          opacity: 0.1;
          z-index: 0;
        }

        .font-space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }

        .breadcrumb-title {
          position: relative;
          display: inline-block;
          z-index: 1;
        }

        .breadcrumb-title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterReveal 0.5s forwards;
        }

        @keyframes letterReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }
      `}</style>

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="breadcumb-content text-center">
          <h1 className="font-space-grotesk font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-3 md:mb-6 px-4 relative z-10">
            <div className="breadcrumb-title">
              {"Contact Us".split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    marginRight: char === " " ? "0.5em" : "0.1em",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h1>

          <ul className="inline-flex items-center gap-2 text-white text-sm md:text-base lg:text-lg font-space-grotesk font-medium relative z-10">
            <li className="flex items-center">
              <a
                className="hover:text-[#ffd801] transition-colors duration-300 hover:scale-105 inline-block"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mx-2 text-white/60">/</li>
            <li className="text-[#ffd801] font-semibold">
              <span className="cursor-default">Contact Us</span>
            </li>
          </ul>

          <div className="absolute top-1/2 left-4 w-8 h-8 border-2 border-white/20 rounded-full animate-pulse z-10"></div>
          <div
            className="absolute top-1/4 right-4 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse z-10"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border border-white/10 rounded-full z-10"></div>
        </div>

        {/* Main Section */}
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <div className="bg-[#dbeafe] text-black py-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-2xl md:text-5xl font-bold mb-4">
                Let&apos;s Build Something Great Together
              </h1>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Transform your business with cutting-edge IT solutions. Our expert team is ready
                to help you innovate, scale, and succeed in the digital world.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 -mt-8 pb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Form */}
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0270e1] to-blue-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-white"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0270e1]">
                      Let&apos;s Discuss Your Project
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Share your requirements with our IT experts
                    </p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Success / Error Banner */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Your inquiry has been submitted! We'll get back to you soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="Your company or organization"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiry_type"
                      required
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="New Project">New Project</option>
                      <option value="Free Consultation">Free Consultation</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      name="service_required"
                      required
                      value={formData.service_required}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Cloud Solutions">Cloud Solutions</option>
                      <option value="AI & Machine Learning">AI &amp; Machine Learning</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="DevOps & Automation">DevOps &amp; Automation</option>
                      <option value="Custom Software">Custom Software</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirement or challenge..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#0270e1] to-blue-600 hover:from-blue-600 hover:to-[#0270e1] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Get Free Consultation"
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#fed700] to-amber-400 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-gray-900"
                    >
                      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0270e1]">Get In Touch</h2>
                    <p className="text-gray-600 text-sm">Connect with our IT experts</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Call */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#0270e1]"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600 text-sm mb-1">
                        Speak with our IT consultants
                      </p>
                      <a
                        href="tel:+919371009381"
                        className="text-[#0270e1] font-medium hover:underline text-lg"
                      >
                        +91 9371009381
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#0270e1]"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm mb-1">
                        Send your project requirements
                      </p>
                      <a
                        href="mailto:info@hously.in"
                        className="text-[#0270e1] font-medium hover:underline text-lg"
                      >
                        info@hously.in
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#0270e1]"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit Our Office</h3>
                      <p className="text-gray-600 text-sm mb-1">
                        Meet us at our technology hub
                      </p>
                      <p className="text-gray-700 text-sm">
                        First Floor, Tamara Uprise Rahatni, Pune, 411017
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#0270e1]"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-700 text-sm">Mon - Fri: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-700 text-sm">Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Support */}
            <div className="mb-8">
              <div className="relative bg-gradient-to-br from-[#0c6ac8] via-[#3a7bc8] to-[#77a6dc] rounded-2xl shadow-xl p-6 md:p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="lg:flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full mb-4">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-xs font-medium">24/7 Emergency Support</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                      Need <span className="text-yellow-300">Urgent</span> IT Support?
                    </h3>

                    <div className="space-y-2 mb-6 lg:mb-0">
                      <p className="text-white/95 text-lg flex items-center justify-center lg:justify-start gap-2">
                        <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Instant response from technical experts
                      </p>

                      <p className="text-white/80 flex items-center justify-center lg:justify-start gap-2">
                        <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Available 24/7 for critical issues
                      </p>

                      <p className="text-white/80 flex items-center justify-center lg:justify-start gap-2">
                        <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Average response time: under 15 minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-auto lg:w-64">
                    <div className="group relative">
                      <button className="relative bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 w-full lg:w-64 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-lg font-bold">Call Now</div>
                          <div className="text-sm text-gray-600">Emergency Line</div>
                        </div>
                      </button>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Direct to technical team
                      </div>
                    </div>

                    <div className="group relative">
                      <button className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 w-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                        <div className="bg-white/20 p-2 rounded-lg">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-lg font-bold">WhatsApp Chat</div>
                          <div className="text-sm text-white/90">Quick text support</div>
                        </div>
                      </button>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Typically responds in 5 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#0270e1] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mb-6">
                Quick answers to common IT service inquiries
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="border-b border-gray-200 pb-4">
                    <summary className="font-semibold text-gray-900 cursor-pointer hover:text-[#0270e1] transition-colors">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="relative overflow-hidden max-w-[1820px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>

          <div className="relative z-10 pt-[20px] pb-[20px] px-6">
            <div className="container mx-auto max-w-[1488px]">
              <div className="flex flex-wrap justify-between -mx-3">
                {/* Logo */}
                <div className="w-full md:w-auto px-3 pl-[20px] mb-10 md:mb-0 animate-slideInUp">
                  <div className="max-w-[283px]">
                    <div className="flex items-center mb-8">
                      <img
                        alt="Hously Logo"
                        className="h-[100px] w-auto transform hover:scale-105 transition-transform duration-300"
                        src={logo}
                      />
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8">
                      Leading provider of comprehensive IT solutions including web development, AI
                      integration, cloud services, and digital transformation for businesses
                      worldwide.
                    </p>

                    <div className="flex gap-3">
                      {socialLinks.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                          title={`Follow us on ${item.name}`}
                        >
                          {renderSocialIcon(item.icon)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Useful Links */}
                <div
                  className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp"
                  style={{ animationDelay: "270ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                    Useful Links
                  </h3>
                  <ul className="space-y-3">
                    {usefulLinks.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div
                  className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp"
                  style={{ animationDelay: "540ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div
                  className="w-full md:w-auto px-3 mb-10 md:mb-0 animate-slideInUp"
                  style={{ animationDelay: "810ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    {serviceLinks.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div
                  className="w-full md:w-auto px-3 animate-slideInUp"
                  style={{ animationDelay: "1080ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                    Contact Us
                  </h3>

                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3 mb-4">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 384 512"
                        className="text-[#fed700] mt-1 flex-shrink-0 h-4 w-4"
                      >
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                      <p className="text-gray-300">
                        First Floor,Tamara Uprise Rahatni,
                        <br />
                        Pune, 411017
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="text-[#fed700] flex-shrink-0 h-4 w-4"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                      <a href="tel:+919371009381" className="text-gray-300 hover:text-white transition-colors">
                        +91 9371 00 9381
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="text-[#fed700] flex-shrink-0 h-4 w-4"
                      >
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                      <a href="mailto:info@hously.in" className="text-gray-300 hover:text-white transition-colors">
                        info@hously.in
                      </a>
                    </div>
                  </div>

                  <div className="max-w-[250px]">
                    <p className="text-gray-300 mb-4 text-sm">Subscribe to our newsletter</p>
                    <div className="flex items-center gap-2">
                      <input
                        placeholder="Enter your email"
                        className="w-full h-[45px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        type="email"
                      />
                      <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                        <svg fill="currentColor" viewBox="0 0 448 512" className="text-sm text-white h-4 w-4">
                          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="block lg:hidden">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900/80 to-gray-900">
          <div className="px-3 py-4">
            <div className="mb-5 text-center">
              <div className="flex items-center mb-2 justify-start">
                <img
                  alt="Hously Logo final"
                  className="h-[92px] w-auto transform hover:scale-105 transition-transform duration-300"
                  src={logo}
                />
              </div>

              <p className="text-gray-300 text-sm mb-2 text-left sm:text-center">
                Leading provider of comprehensive IT solutions including web development, AI
                integration, cloud services, and digital transformation.
              </p>

              <div className="flex justify-start gap-3 mb-2">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    {renderSocialIcon(item.icon, "text-sm h-4 w-4")}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Useful Links
                </h3>
                <ul className="space-y-2">
                  {usefulLinks.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Company
                </h3>
                <ul className="space-y-2">
                  {companyLinks.slice(0, 4).map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {serviceLinks.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                        {item.label.length > 18 ? item.label.slice(0, 18) + "..." : item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 384 512"
                      className="text-[#0076d8] mt-1 text-xs flex-shrink-0 h-3 w-3"
                    >
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                    <p className="text-gray-300 text-xs">
                      First Floor,Tamara Uprise,
                      <br />
                      Pune, 411017
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8] flex-shrink-0 text-sm h-4 w-4"
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                    <a
                      href="tel:+919371009381"
                      className="text-gray-300 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm"
                    >
                      +91 9371 00 9381
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8] text-xs flex-shrink-0 h-3 w-3"
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                    </svg>
                    <a href="mailto:info@hously.in" className="text-gray-300 hover:text-white text-xs">
                      info@hously.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
              <div className="flex items-center gap-2">
                <input
                  placeholder="Enter your email"
                  className="w-full h-[45px] bg-white/10 border border-white/20 rounded-full px-4 text-white placeholder-gray-400 text-sm focus:outline-none"
                  type="email"
                />
                <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 448 512" className="text-sm text-white h-4 w-4">
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="bg-gray-900 py-4">
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between">
          <p className="text-gray-400 text-xs sm:text-sm text-left pl-2">
            © 2026 <span>Hously Finntech Realty</span>. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs sm:text-sm pr-2">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-white transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
