import React from "react";
import Navbar from "../components/Navbar";
import {
  Code2,
  Cloud,
  Laptop,
  Palette,
  CircleUser,
  Shield,
  TrendingUp,
  Smartphone,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/houslylogo.png";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and applications built with modern technologies.",
    icon: Code2,
    delay: "0ms",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    icon: Cloud,
    delay: "270ms",
  },
  {
    title: "Software Dev",
    description: "Custom software solutions for business needs.",
    icon: Laptop,
    delay: "540ms",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design for better engagement.",
    icon: Palette,
    delay: "810ms",
  },
  {
    title: "IT Consulting",
    description: "Expert technology advisory services.",
    icon: CircleUser,
    delay: "0ms",
  },
  {
    title: "Cybersecurity",
    description: "Security solutions and threat protection.",
    icon: Shield,
    delay: "270ms",
  },
  {
    title: "Data Analytics",
    description: "Actionable insights from business data.",
    icon: TrendingUp,
    delay: "540ms",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications.",
    icon: Smartphone,
    delay: "810ms",
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

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr",
    title: "Facebook",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==",
    title: "Instagram",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/houlsy-finntech-realty/",
    title: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    href: "#",
    title: "Twitter",
  },
  {
    icon: <FaYoutube />,
    href: "#",
    title: "YouTube",
  },
];

const Service = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white font-['Inter']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes letterReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
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

        .breadcrumb-title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterReveal 0.5s forwards;
        }

        .font-space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-dm {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      {/* Navbar from your existing component */}
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Section */}
        <section className="relative mt-[80px] min-h-[180px] h-[35vh] flex flex-col justify-center items-center overflow-hidden text-center">

          {/* Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0376d5] to-[#0066c0]" />

          {/* Image overlay */}
          <div
            className="absolute inset-0 z-10 bg-center bg-cover opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
            }}
          />

          {/* Content */}
          <h1 className="relative z-20 font-space-grotesk font-bold text-white text-4xl md:text-6xl lg:text-7xl mb-3 md:mb-6 px-4">
            <div className="breadcrumb-title">
              {"Our Services".split("").map((char, index) => (
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

          <ul className="relative z-20 inline-flex items-center gap-2 text-white text-sm md:text-base lg:text-lg font-space-grotesk font-medium">
            <li className="flex items-center">
              <a
                href="/home"
                className="hover:text-[#ffd801] transition-all duration-300 hover:scale-105 inline-block"
              >
                Home
              </a>
            </li>
            <li className="mx-2 text-white/60">/</li>
            <li className="text-[#ffd801] font-semibold">
              <span className="cursor-default">Our Services</span>
            </li>
          </ul>

          {/* floating dots */}
          <div className="absolute top-1/2 left-4 w-8 h-8 border-2 border-white/20 rounded-full animate-pulse" />
          <div
            className="absolute top-1/4 right-4 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border border-white/10 rounded-full" />

        </section>
        {/* Services Section */}
        <section
          id="service-sec"
          className="relative z-10 bg-[#F5F5F5] pt-6 sm:pt-8 pb-16 overflow-hidden"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] pointer-events-none">
            <img
              src="https://html.themehour.net/robor/demo/assets/img/shape/bg-shape1.png"
              alt="Background shape"
              className="max-w-full h-auto origin-bottom scale-98 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="container mx-auto max-w-[1488px] px-3">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-8/12 xl:w-6/12">
                <div className="text-center relative z-10 mb-10 mt-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-max opacity-50 select-none">
                    <h2 className="text-[120px] md:text-[180px] lg:text-[300px] font-bold text-white leading-none m-0 font-space-grotesk">
                      Services
                    </h2>
                  </div>

                  <div className="flex items-center justify-center space-x-2 mb-5">
                    <div className="w-8 h-0.5 bg-[#0174d7]" />
                    <span className="inline-block text-[#0174d7] text-base font-medium uppercase tracking-wide relative pb-1 animate-slideInUp font-space-grotesk">
                      OUR SERVICES
                    </span>
                    <div className="w-8 h-0.5 bg-[#0174d7]" />
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-[#051600] mb-4 mt-[-0.4em] animate-slideInUp leading-tight font-space-grotesk">
                    Innovative IT Solutions for Business
                  </h2>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center -mx-3 -mt-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="w-full lg:w-1/2 xl:w-1/4 px-3 mt-3 animate-slideInUp group/card"
                      style={{ animationDelay: service.delay }}
                    >
                      <div className="bg-white rounded-2xl p-6 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-gray-50/30 to-transparent"></div>
                        </div>

                        <div className="mb-4 relative z-10">
                          <div className="relative inline-block transition-all duration-300 ease-out">
                            <div className="relative text-[#0174d7] transition-all duration-300 group-hover/card:scale-105 group-hover/card:-translate-y-[2px]">
                              <Icon size={48} strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-[#051600] mb-2 relative z-10 font-space-grotesk">
                          <a href="#" className="text-[#051600] no-underline relative inline-block">
                            {service.title}
                          </a>
                        </h3>

                        <p className="text-sm text-[#6F756D] leading-relaxed mt-2 mb-4 flex-grow font-dm">
                          {service.description}
                        </p>

                        <button className="inline-flex items-center font-medium text-xs text-[#051600] hover:text-[#0174d7] transition-all duration-500 pb-0.5 relative group/button mt-auto z-10 bg-transparent border-none cursor-pointer overflow-hidden font-space-grotesk">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0174d7]/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></span>

                          <span className="relative z-10 flex items-center gap-2">
                            Read More
                            <ArrowRight
                              size={14}
                              className="transition-all duration-500 group-hover/button:translate-x-2 group-hover/button:text-[#0174d7]"
                            />
                          </span>

                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0174d7] transition-all duration-500 group-hover/card:w-full group-hover/card:delay-150"></span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <div className="relative overflow-hidden max-w-[1820px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>

          <div className="relative z-10 pt-[20px] pb-[20px] px-6">
            <div className="container mx-auto max-w-[1488px]">
              <div className="flex flex-wrap justify-between -mx-3">
                {/* About */}
                <div className="w-full md:w-auto px-3 pl-[20px] mb-10 md:mb-0 animate-slideInUp">
                  <div className="max-w-[283px]">
                    <div className="flex items-center mb-8">
                      <img
                        src={logo}
                        alt="Hously Logo"
                        className="h-25 w-auto transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8 font-dm">
                      Leading provider of comprehensive IT solutions including web
                      development, AI integration, cloud services, and digital
                      transformation for businesses worldwide.
                    </p>

                    <div className="flex gap-3">
                      {socialLinks.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={item.title}
                          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                        >
                          {item.icon}
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
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Useful Links
                  </h3>
                  <ul className="space-y-3">
                    {usefulLinks.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-dm"
                        >
                          {link.label}
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
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-dm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Services */}
                <div
                  className="w-full md:w-auto px-3 mb-10 md:mb-0 animate-slideInUp"
                  style={{ animationDelay: "810ms" }}
                >
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    {serviceLinks.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-dm"
                        >
                          {link.label}
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
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
                    Contact Us
                  </h3>

                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="text-[#fed700] mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300 font-dm">
                        First Floor,Tamara Uprise Rahatni,
                        <br />
                        Pune, 411017
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="text-[#fed700] flex-shrink-0" size={16} />
                      <a
                        href="tel:+919371009381"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        +91 9371 00 9381
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-[#fed700] flex-shrink-0" size={16} />
                      <a
                        href="mailto:info@hously.in"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        info@hously.in
                      </a>
                    </div>
                  </div>

                  <div className="max-w-[250px]">
                    <p className="text-gray-300 mb-4 text-sm font-dm">
                      Subscribe to our newsletter
                    </p>

                    <div className="flex items-center gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-[45px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      />
                      <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                        <ArrowRight className="text-white" size={16} />
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
                <img
                  src={logo}
                  alt="Hously Logo final"
                  className="h-23 w-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <p className="text-gray-300 text-sm mb-2 text-left sm:text-center">
                Leading provider of comprehensive IT solutions including web
                development, AI integration, cloud services, and digital
                transformation.
              </p>

              <div className="flex justify-start gap-3 mb-2">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    {item.icon}
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
                  {usefulLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
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
                  {companyLinks.slice(0, 4).map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
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
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      AI & Chatbot
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      Cloud & DevOps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      Software Dev
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      IT Consulting
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-[#0076d8] mt-1 text-xs flex-shrink-0" size={14} />
                    <p className="text-gray-300 text-xs font-dm">
                      First Floor,Tamara Uprise,
                      <br />
                      Pune, 411017
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="text-[#0076d8] flex-shrink-0 text-sm sm:text-base" size={14} />
                    <a
                      href="tel:+919371009381"
                      className="text-gray-300 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm md:text-base"
                    >
                      +91&nbsp;9371&nbsp;00&nbsp;9381
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="text-[#0076d8] text-xs flex-shrink-0" size={14} />
                    <a
                      href="mailto:info@hously.in"
                      className="text-gray-300 hover:text-white text-xs"
                    >
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
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[45px] bg-white/10 border border-white/20 rounded-full px-4 text-white placeholder-gray-400 text-sm focus:outline-none"
                />
                <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                  <ArrowRight className="text-white" size={16} />
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

export default Service;
