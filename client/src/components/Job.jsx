import { useState, useEffect } from "react";
import { Search, MapPin, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../assets/houslylogo.png";
import { getAllJobsApi } from "../api/jobpost";


// ─── Social Icons ─────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);
const InstagramIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);
const TwitterIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
  </svg>
);

const socialLinks = [
  { href: "https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr", Icon: FacebookIcon, title: "Follow us on Facebook" },
  { href: "https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==", Icon: InstagramIcon, title: "Follow us on Instagram" },
  { href: "https://www.linkedin.com/company/houlsy-finntech-realty/", Icon: LinkedInIcon, title: "Follow us on LinkedIn" },
  { href: "#", Icon: TwitterIcon, title: "Follow us on Twitter" },
  { href: "#", Icon: YouTubeIcon, title: "Follow us on YouTube" },
];

// ─── Job Card ────────────────────────────────────────────────────────────────
function JobCard({ job, onViewDetails }) {
  const locationBadgeClass =
    job.locationType === "remote"
      ? "bg-blue-100 text-blue-700"
      : "bg-purple-100 text-purple-700";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition-all duration-300 p-6 flex flex-col group hover:border-blue-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
        {job.isNew && (
          <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
            New
          </span>
        )}
      </div>

      {/* Badges */}
      <div className="flex gap-2 mb-4">
        <span className="text-xs px-3 py-1 rounded-full font-medium bg-green-100 text-green-700">
          {job.type}
        </span>
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${locationBadgeClass}`}>
          {job.location}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm flex-grow mb-6 line-clamp-3">
        {job.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500">
          <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
          <span>{job.location}</span>
          <span className="mx-2">•</span>
          <span>Posted {job.postedDate}</span>
        </div>
        <button
          onClick={() => onViewDetails(job)}
          className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity hover:shadow-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

// ─── Desktop Footer ───────────────────────────────────────────────────────────
function DesktopFooter() {
  return (
    <div className="hidden lg:block">
      <div className="relative overflow-hidden max-w-[1820px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        <div className="relative z-10 pt-[20px] pb-[20px] px-6">
          <div className="container mx-auto max-w-[1488px]">
            <div className="flex flex-wrap justify-between -mx-3">
              {/* Brand */}
              <div className="w-full md:w-auto px-3 pl-[20px] mb-10 md:mb-0">
                <div className="max-w-[283px]">
                  <div className="flex items-center mb-8">
                <img src={logo} alt="Hously Logo" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Leading provider of comprehensive IT solutions including web development, AI integration, cloud services, and digital transformation for businesses worldwide.
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map(({ href, Icon, title }) => (
                      <a
                        key={title}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={title}
                        className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="w-full sm:w-auto px-3 mb-10 sm:mb-0">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                  Useful Links
                </h3>
                <ul className="space-y-3">
                  {["Home", "Services", "About Us", "Contact", "Career"].map((item) => (
                    <li key={item}>
                      <a href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="w-full sm:w-auto px-3 mb-10 sm:mb-0">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                  Company
                </h3>
                <ul className="space-y-3">
                  {["About Company", "Our Team", "Careers", "Partners", "Press & Media", "Investor Relations"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div className="w-full md:w-auto px-3 mb-10 md:mb-0">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {["Web Development", "AI & Chatbot Development", "Cloud & DevOps", "Software Development", "IT Consulting"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="w-full md:w-auto px-3">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700]">
                  Contact Us
                </h3>
                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3 mb-4">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-[#fed700] mt-1 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                    </svg>
                    <p className="text-gray-300">First Floor, Tamara Uprise Rahatni,<br />Pune, 411017</p>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#fed700] flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                    </svg>
                    <a href="tel:+919371009381" className="text-gray-300 hover:text-white transition-colors">+91 9371 00 9381</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#fed700] flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                    </svg>
                    <a href="mailto:info@hously.in" className="text-gray-300 hover:text-white transition-colors">info@hously.in</a>
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
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-sm text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
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
  );
}

// ─── Mobile Footer ────────────────────────────────────────────────────────────
function MobileFooter() {
  return (
    <div className="block lg:hidden">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/80 to-gray-900">
        <div className="px-3 py-4">
          {/* Brand */}
          <div className="mb-5 text-center">
            <div className="flex items-center mb-2 justify-start">
            <img src={logo} alt="Hously Logo" className="h-20 w-auto" />
            </div>
            <p className="text-gray-300 text-sm mb-2 text-left">
              Leading provider of comprehensive IT solutions including web development, AI integration, cloud services, and digital transformation.
            </p>
            <div className="flex justify-start gap-3 mb-2">
              {socialLinks.map(({ href, Icon, title }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">Useful Links</h3>
              <ul className="space-y-2">
                {["Home", "Services", "About Us", "Contact", "Career"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">Company</h3>
              <ul className="space-y-2">
                {["About Company", "Our Team", "Careers", "Partners"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">Our Services</h3>
              <ul className="space-y-2">
                {["Web Development", "AI & Chatbot", "Cloud & DevOps", "Software Dev", "IT Consulting"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-[#0076d8] mt-1 text-xs flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                  <p className="text-gray-300 text-xs">First Floor, Tamara Uprise,<br />Pune, 411017</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#0076d8] flex-shrink-0 text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                  <a href="tel:+919371009381" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap text-xs">+91 9371 00 9381</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#0076d8] text-xs flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                  <a href="mailto:info@hously.in" className="text-gray-300 hover:text-white text-xs">info@hously.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
            <div className="flex items-center gap-2">
              <input
                placeholder="Enter your email"
                className="w-full h-[45px] bg-white/10 border border-white/20 rounded-full px-4 text-white placeholder-gray-400 text-sm focus:outline-none"
                type="email"
              />
              <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-sm text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Job Page ────────────────────────────────────────────────────────────
export default function Job() {
  const navigate = useNavigate();

  // ─── Backend Data State ──────────────────────────────────────────────────────
  const [allJobs, setAllJobs] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await getAllJobsApi();
        setAllJobs(response.data || []);
      } catch {
        setFetchError("Failed to load jobs. Please try again later.");
      } finally {
        setFetchLoading(false);
      }
    };
    loadJobs();
  }, []);

  // ─── Filter / Sort State ─────────────────────────────────────────────────────
  const [searchKeyword, setSearchKeyword] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedLocation, setAppliedLocation] = useState("all");
  const [appliedType, setAppliedType] = useState("all");

  const handleSearch = () => {
    setAppliedSearch(searchKeyword);
    setAppliedLocation(locationFilter);
    setAppliedType(typeFilter);
  };

  const handleReset = () => {
    setSearchKeyword("");
    setLocationFilter("all");
    setTypeFilter("all");
    setAppliedSearch("");
    setAppliedLocation("all");
    setAppliedType("all");
  };

  // Navigate to JobPost page with the selected job data
  const handleViewDetails = (job) => {
    navigate("/career/job-detail", { state: { job } });
  };

  const filtered = allJobs.filter((job) => {
    const matchKeyword =
      !appliedSearch ||
      job.title.toLowerCase().includes(appliedSearch.toLowerCase()) ||
      job.company.toLowerCase().includes(appliedSearch.toLowerCase());
    const matchLocation =
      appliedLocation === "all" || job.locationType === appliedLocation;
    const matchType =
      appliedType === "all" ||
      job.type.toLowerCase() === appliedType.toLowerCase();
    return matchKeyword && matchLocation && matchType;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "newest") return b.id - a.id;
    if (sortOrder === "oldest") return a.id - b.id;
    if (sortOrder === "az") return a.title.localeCompare(b.title);
    if (sortOrder === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      {/* ── Main ── */}
      <main className="flex-grow">
        <div className="bg-gray-50 min-h-screen">
          {/* Hero / Search */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                Find Your Dream Job
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg mb-10">
                Browse through our latest job openings and take the next step in your career journey.
              </p>

              {/* Search Box */}
              <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                  {/* Keyword */}
                  <div className="md:col-span-5">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                      <input
                        placeholder="Job title, keywords, or company"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="md:col-span-3">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                      <select
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                      >
                        <option value="all">All Locations</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="md:col-span-2">
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="internship">Internship</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                    </select>
                  </div>

                  {/* Buttons */}
                  <div className="md:col-span-2 flex gap-2">
                    <button
                      onClick={handleSearch}
                      className="flex-1 bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Search
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      title="Reset filters"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div>
                    {fetchLoading ? (
                      <span>Loading jobs...</span>
                    ) : (
                      <>
                        Showing <span className="font-semibold">{sorted.length}</span> of{" "}
                        <span className="font-semibold">{allJobs.length}</span> jobs
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                Latest Job Opportunities
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">Sort by:</span>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="az">Job Title (A-Z)</option>
                  <option value="za">Job Title (Z-A)</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {fetchLoading && (
              <div className="flex justify-center items-center py-16">
                <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Error State */}
            {!fetchLoading && fetchError && (
              <div className="text-center py-16 text-red-500">{fetchError}</div>
            )}

            {/* Jobs Grid */}
            {!fetchLoading && !fetchError && (
              sorted.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sorted.map((job) => (
                    <JobCard key={job.id} job={job} onViewDetails={handleViewDetails} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-gray-500 text-lg">
                  No jobs found matching your search criteria.
                </div>
              )
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* ── Desktop Footer ── */}
      <DesktopFooter />

      {/* ── Mobile Footer ── */}
      <MobileFooter />

      {/* ── Bottom Footer Bar ── */}
      <footer className="bg-gray-900 py-4">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-center sm:justify-between">
          <p className="text-gray-400 text-xs sm:text-sm text-left pl-2">
            © 2026 <span>Hously Finntech Realty</span>. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs sm:text-sm pr-2">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}