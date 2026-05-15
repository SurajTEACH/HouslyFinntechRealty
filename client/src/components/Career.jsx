import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/houslylogo.png";

const breadcrumbText = "Career Opportunities".split("");

const hiringSteps = [
  {
    number: "1",
    title: "Job Opportunities",
    active: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
      </svg>
    ),
  },
  {
    number: "2",
    title: "Shortlisting",
    active: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="M12 11h4"></path>
        <path d="M12 16h4"></path>
        <path d="M8 11h.01"></path>
        <path d="M8 16h.01"></path>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Technical Interview",
    active: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 18 6-6-6-6"></path>
        <path d="m8 6-6 6 6 6"></path>
      </svg>
    ),
  },
  {
    number: "4",
    title: "HR Interview",
    active: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    number: "5",
    title: "Decision & Offer",
    active: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
        <path d="m21 3 1 11h-2"></path>
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
        <path d="M3 4h8"></path>
      </svg>
    ),
  },
];

const socialIcons = {
  facebook: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
    </svg>
  ),
  instagram: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  ),
  linkedin: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
  ),
  twitter: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
  ),
  youtube: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      className="text-base"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
    </svg>
  ),
};

const FooterSocial = ({ href, children, mobile = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={
      mobile
        ? "w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
        : "w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
    }
  >
    {children}
  </a>
);

const Carrer = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        .font-space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
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

        @keyframes floatY {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }

        .animate-float {
          animation: floatY 3s ease-in-out infinite;
        }

        .breadcrumb-title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterReveal 0.5s forwards;
        }
      `}</style>

      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Section */}
        <section
          className="h-[35vh] min-h-[180px] flex flex-col justify-center items-center relative overflow-hidden text-center mt-[80px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,118,216,1) 0%, rgba(0,102,192,1) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <h1 className="font-space-grotesk font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-3 md:mb-6 px-4 relative z-10">
            <div className="breadcrumb-title">
              {breadcrumbText.map((char, index) => (
                <span
                  key={index}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    marginRight: char === " " ? "0.5em" : "0.1em",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </h1>

          <ul className="inline-flex items-center gap-2 text-white text-sm md:text-base lg:text-lg font-space-grotesk font-medium relative z-10">
            <li className="flex items-center">
              <a
                href="/"
                className="hover:text-[#ffd801] transition-colors duration-300 hover:scale-105 inline-block"
              >
                Home
              </a>
            </li>
            <li className="mx-2 text-white/60">
              <span className="transition-colors duration-300">/</span>
            </li>
            <li className="flex items-center text-[#ffd801] font-semibold">
              <span className="cursor-default">Career</span>
            </li>
          </ul>

          <div className="absolute top-1/2 left-4 w-8 h-8 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/4 right-4 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border border-white/10 rounded-full"></div>
        </section>

        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-[#dbeafe] py-10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0270e1] rounded-full blur-3xl opacity-10"></div>
              <div className="absolute top-1/2 -right-24 w-72 h-72 bg-[#fed700] rounded-full blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
              <h1 className="font-bold text-gray-900 leading-tight mb-4">
                <span className="block text-3xl md:text-5xl lg:text-6xl">
                  Join <span className="text-[#0270e1]">Hously</span> Finntech
                  Realty
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-1 text-gray-700">
                  Build the Future with Technology
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                Hously is a fast-growing IT solutions company delivering
                innovative web, cloud, and AI services. Join our team and
                create technology that matters.
              </p>

              <a href="/career/job">
                <button className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] hover:from-[#024a9e] hover:to-[#0270e1] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Opportunities
                </button>
              </a>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Why Work With Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="text-center transition-all duration-500 hover:scale-105">
                <div className="w-[72px] h-[72px] bg-gradient-to-br from-[#0270e1] to-[#024a9e] rounded-full flex items-center justify-center mx-auto mb-6 animate-float transition-all duration-500 shadow-lg hover:shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At Hously, innovation drives everything we do. We don't just
                  follow trends — we build future-ready technology.
                </p>
              </div>

              <div className="text-center transition-all duration-500 hover:scale-105">
                <div
                  className="w-[72px] h-[72px] bg-gradient-to-br from-[#0270e1] to-[#024a9e] rounded-full flex items-center justify-center mx-auto mb-6 animate-float transition-all duration-500 shadow-lg hover:shadow-xl"
                  style={{ animationDelay: "0.3s" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We thrive on teamwork and shared vision, creating a culture
                  where ideas grow through collaboration.
                </p>
              </div>

              <div className="text-center transition-all duration-500 hover:scale-105">
                <div
                  className="w-[72px] h-[72px] bg-gradient-to-br from-[#0270e1] to-[#024a9e] rounded-full flex items-center justify-center mx-auto mb-6 animate-float transition-all duration-500 shadow-lg hover:shadow-xl"
                  style={{ animationDelay: "0.6s" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We invest in your growth with continuous learning, mentorship,
                  and clear career progression paths.
                </p>
              </div>
            </div>
          </section>

          {/* How We Hire */}
          <section className="bg-gray-50 py-5 px-4">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  How We Hire
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Discover exciting career opportunities at Hously Finntech
                  Realty and take the next step in your professional journey.
                  Apply for your desired position by submitting your resume
                  along with a detailed summary of your skills, qualifications,
                  and professional experience.
                </p>
              </div>

              <div className="relative max-w-5xl mx-auto mb-10 md:mb-12 py-5 px-4 md:px-0">
                <div className="absolute left-11 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 md:hidden"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>

                <div className="absolute left-11 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-500 md:hidden transition-all duration-500 h-0"></div>
                <div className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 -translate-y-1/2 hidden md:block transition-all duration-500 w-0"></div>

                <div className="relative flex flex-col gap-8 md:flex-row md:justify-between md:items-center z-20">
                  {hiringSteps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex flex-row items-start gap-6 md:flex-col md:items-center md:gap-0 group"
                    >
                      <div className="absolute left-[-17px] top-6 h-full w-0.5 bg-transparent md:hidden"></div>

                      <div
                        className={`absolute left-[-28px] top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 md:hidden ${
                          step.active
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-white border-gray-300 text-gray-500"
                        }`}
                      >
                        {step.number}
                      </div>

                      <button
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all relative z-20 focus:outline-none ${
                          step.active
                            ? "bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-200"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        <div className="hidden md:block">{step.icon}</div>
                        <div className="md:hidden">{step.icon}</div>
                      </button>

                      <div className="flex-1 md:flex-none md:text-center md:mt-4 md:max-w-[120px]">
                        <p
                          className={`text-base font-semibold mb-1 ${
                            step.active ? "text-blue-600" : "text-gray-700"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-sm text-gray-500 md:hidden">
                          Step {step.number} of 5
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-lg border-t-4 border-blue-600 text-center min-h-[180px]">
                <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                  Job Opportunities
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Discover exciting career opportunities at Hously Finntech
                  Realty and take the next step in your professional journey.
                  Apply for your desired position by submitting your resume
                  along with a detailed summary of your skills, qualifications,
                  and professional experience. Our team carefully reviews each
                  application to match candidates with the right role.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="relative overflow-hidden max-w-[1820px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>

          <div className="relative z-10 pt-[20px] pb-[20px] px-6">
            <div className="container mx-auto max-w-[1488px]">
              <div className="flex flex-wrap justify-between -mx-3">
                <div className="w-full md:w-auto px-3 pl-[20px] mb-10 md:mb-0 animate-slideInUp">
                  <div className="max-w-[283px]">
                    <div className="flex items-center mb-8">
                      <div className="flex items-center">
                        <img
                          alt="Hously Logo"
                          className="h-[100px] w-auto transform hover:scale-105 transition-transform duration-300"
                          src={logo}
                        />
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8">
                      Leading provider of comprehensive IT solutions including
                      web development, AI integration, cloud services, and
                      digital transformation for businesses worldwide.
                    </p>

                    <div className="flex gap-3">
                      <FooterSocial href="https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr">
                        {socialIcons.facebook}
                      </FooterSocial>
                      <FooterSocial href="https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==">
                        {socialIcons.instagram}
                      </FooterSocial>
                      <FooterSocial href="https://www.linkedin.com/company/houlsy-finntech-realty/">
                        {socialIcons.linkedin}
                      </FooterSocial>
                      <FooterSocial href="#">
                        {socialIcons.twitter}
                      </FooterSocial>
                      <FooterSocial href="#">
                        {socialIcons.youtube}
                      </FooterSocial>
                    </div>
                  </div>
                </div>

                <div
                  className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp"
                  style={{ animationDelay: "270ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Useful Links
                  </h3>
                  <ul className="space-y-3">
                    <li><a href="/" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Home</a></li>
                    <li><a href="/services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Services</a></li>
                    <li><a href="/about" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">About Us</a></li>
                    <li><a href="/contact" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Contact</a></li>
                    <li><a href="/career" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Career</a></li>
                  </ul>
                </div>

                <div
                  className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp"
                  style={{ animationDelay: "540ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">About Company</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Our Team</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Careers</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Partners</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Press & Media</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Investor Relations</a></li>
                  </ul>
                </div>

                <div
                  className="w-full md:w-auto px-3 mb-10 md:mb-0 animate-slideInUp"
                  style={{ animationDelay: "810ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Web Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">AI & Chatbot Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Cloud & DevOps</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Software Development</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">IT Consulting</a></li>
                  </ul>
                </div>

                <div
                  className="w-full md:w-auto px-3 animate-slideInUp"
                  style={{ animationDelay: "1080ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Contact Us
                  </h3>

                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3 mb-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 384 512"
                        className="text-[#fed700] mt-1 flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
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
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-[#fed700] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                      </svg>
                      <a href="tel:+919371009381" className="text-gray-300 hover:text-white transition-colors">
                        +91 9371 00 9381
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-[#fed700] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                      <a href="mailto:info@hously.in" className="text-gray-300 hover:text-white transition-colors">
                        info@hously.in
                      </a>
                    </div>
                  </div>

                  <div className="max-w-[250px]">
                    <p className="text-gray-300 mb-4 text-sm">
                      Subscribe to our newsletter
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        placeholder="Enter your email"
                        className="w-full h-[45px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        type="email"
                      />
                      <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="text-sm text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
              <div className="flex items-center mb-2 justify-start sm:justify-start">
                <div className="flex items-center">
                  <img
                    alt="Hously Logo final"
                    className="h-[92px] w-auto transform hover:scale-105 transition-transform duration-300"
                    src={logo}
                  />
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-2 text-left sm:text-center">
                Leading provider of comprehensive IT solutions including web
                development, AI integration, cloud services, and digital
                transformation.
              </p>

              <div className="flex justify-start gap-3 mb-2">
                <FooterSocial mobile href="https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr">
                  {socialIcons.facebook}
                </FooterSocial>
                <FooterSocial mobile href="https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==">
                  {socialIcons.instagram}
                </FooterSocial>
                <FooterSocial mobile href="https://www.linkedin.com/company/houlsy-finntech-realty/">
                  {socialIcons.linkedin}
                </FooterSocial>
                <FooterSocial mobile href="#">
                  {socialIcons.twitter}
                </FooterSocial>
                <FooterSocial mobile href="#">
                  {socialIcons.youtube}
                </FooterSocial>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Useful Links
                </h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white text-sm transition-colors">Services</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</a></li>
                  <li><a href="/career" className="text-gray-300 hover:text-white text-sm transition-colors">Career</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About Company</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Our Team</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Partners</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Web Development</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">AI & Chatbot</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cloud & DevOps</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Software Dev</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">IT Consulting</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      className="text-[#0076d8] mt-1 text-xs flex-shrink-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
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
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8] flex-shrink-0 text-sm sm:text-base"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                    <a
                      href="tel:+919371009381"
                      className="text-gray-300 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm md:text-base"
                    >
                      +91&nbsp;9371&nbsp;00&nbsp;9381
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#0076d8] text-xs flex-shrink-0"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
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
              <h3 className="text-white text-lg font-bold mb-4">
                Subscribe to our Newsletter
              </h3>
              <div className="flex items-center gap-2">
                <input
                  placeholder="Enter your email"
                  className="w-full h-[45px] bg-white/10 border border-white/20 rounded-full px-4 text-white placeholder-gray-400 text-sm focus:outline-none"
                  type="email"
                />
                <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-sm text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-center sm:justify-between">
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

export default Carrer;
