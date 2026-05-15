import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Briefcase, MapPin, DollarSign, Calendar, CircleCheckBig, X, Loader2, CheckCircle } from "lucide-react";
import Navbar from "./Navbar";
import logo from "../assets/houslylogo.png";
import { applyForJobApi } from "../api/jobApplications";

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
          <div className="mb-5">
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
                <div className="flex items-center gap-2">
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

// ─── Apply Now Modal ──────────────────────────────────────────────────────────
function ApplyModal({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    tenth_percentage: "",
    twelfth_percentage: "",
    graduation_percentage: "",
    college_name: "",
    branch: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowed = ["application/pdf", "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowed.includes(file.type)) {
        setError("Only PDF or DOC/DOCX files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5 MB.");
        return;
      }
      setResumeFile(file);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) { setError("Please upload your resume."); return; }
    setLoading(true);
    setError("");

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => v && payload.append(k, v));
      payload.append("resume", resumeFile);
      await applyForJobApi(payload);
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ full_name:"", email:"", phone:"", experience:"", skills:"",
      tenth_percentage:"", twelfth_percentage:"", graduation_percentage:"",
      college_name:"", branch:"" });
    setResumeFile(null);
    setLoading(false);
    setSubmitted(false);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6 overflow-y-auto">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto">

          {/* Header */}
          <div className="bg-gradient-to-r from-[#0c1e4a] to-[#0270e1] px-8 py-6 text-white">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/25 transition"
            >
              <X size={18} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Apply Now</h2>
                <p className="text-white/80 text-sm mt-0.5">{jobTitle}</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
            {/* Success State */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-500 mb-6">We've received your application for <strong>{jobTitle}</strong>. We'll be in touch soon.</p>
                <button
                  onClick={handleClose}
                  className="bg-[#0270e1] hover:bg-[#024a9e] text-white px-8 py-3 rounded-xl font-semibold transition"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    <X size={15} className="shrink-0" />
                    {error}
                  </div>
                )}

                {/* ── Personal Info ── */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0270e1] mb-3">Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input required name="full_name" value={formData.full_name} onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <select name="experience" value={formData.experience} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm bg-white transition">
                        <option value="">Select experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="0-1 year">0–1 Year</option>
                        <option value="1-2 years">1–2 Years</option>
                        <option value="2-5 years">2–5 Years</option>
                        <option value="5+ years">5+ Years</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ── Skills ── */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                  <textarea name="skills" value={formData.skills} onChange={handleChange} rows={2}
                    placeholder="e.g. React, Node.js, Python, Communication..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm resize-none transition" />
                </div>

                {/* ── Academic Info ── */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0270e1] mb-3">Academic Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">10th % </label>
                      <input type="number" min="0" max="100" step="0.01" name="tenth_percentage"
                        value={formData.tenth_percentage} onChange={handleChange}
                        placeholder="e.g. 85.50"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">12th % </label>
                      <input type="number" min="0" max="100" step="0.01" name="twelfth_percentage"
                        value={formData.twelfth_percentage} onChange={handleChange}
                        placeholder="e.g. 78.00"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Graduation %</label>
                      <input type="number" min="0" max="100" step="0.01" name="graduation_percentage"
                        value={formData.graduation_percentage} onChange={handleChange}
                        placeholder="e.g. 72.00"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">College / University</label>
                      <input name="college_name" value={formData.college_name} onChange={handleChange}
                        placeholder="e.g. Pune University"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Branch / Stream</label>
                      <input name="branch" value={formData.branch} onChange={handleChange}
                        placeholder="e.g. Computer Science"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0270e1] focus:border-transparent outline-none text-sm transition" />
                    </div>
                  </div>
                </div>

                {/* ── Resume Upload ── */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0270e1] mb-3">Resume *</h3>
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl py-6 px-4 cursor-pointer hover:border-[#0270e1] hover:bg-blue-50/40 transition group"
                  >
                    {resumeFile ? (
                      <div className="flex items-center gap-2 text-[#0270e1]">
                        <CheckCircle size={20} />
                        <span className="text-sm font-medium">{resumeFile.name}</span>
                      </div>
                    ) : (
                      <>
                        <svg className="w-8 h-8 text-gray-400 group-hover:text-[#0270e1] mb-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-sm text-gray-500">Click to upload or drag & drop</p>
                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX — max 5 MB</p>
                      </>
                    )}
                    <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#0270e1] to-[#024a9e] hover:from-[#024a9e] hover:to-[#0270e1] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 text-base"
                >
                  {loading ? (
                    <><Loader2 size={20} className="animate-spin" /> Submitting...</>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Main JobPost Page ────────────────────────────────────────────────────────
export default function JobPost() {
  const location = useLocation();
  const navigate = useNavigate();
  const [applyOpen, setApplyOpen] = useState(false);

  // Get job data passed from Job.jsx via navigate state
  const job = location.state?.job;

  // Fallback if someone lands directly without state
  if (!job) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Job not found</h2>
            <p className="text-gray-500 mb-6">Please go back and select a job from the listings.</p>
            <button
              onClick={() => navigate("/career")}
              className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Jobs
            </button>
          </div>
        </main>
      </div>
    );
  }

  const locationBadgeClass =
    job.locationType === "remote"
      ? "bg-blue-100 text-blue-700"
      : "bg-purple-100 text-purple-700";

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="min-h-screen bg-gray-50">

          {/* Back Button */}
          <div className="max-w-6xl mx-auto px-4 pt-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              Back to Jobs
            </button>
          </div>

          {/* Job Detail Content */}
          <div className="max-w-6xl mx-auto px-4 pb-16">

            {/* ── Top Card: Title + Meta ── */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">{job.company}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                      {job.type}
                    </span>
                    <span className={`px-4 py-2 rounded-full font-medium ${locationBadgeClass}`}>
                      {job.location}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setApplyOpen(true)}
                  className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-4 md:mt-0"
                >
                  Apply Now
                </button>
              </div>

              {/* Meta Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Job Type</p>
                    <p className="font-semibold">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <DollarSign className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p className="font-semibold">{job.salary || "Negotiable"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-orange-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Posted</p>
                    <p className="font-semibold">{job.postedDate}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* ── Two Column Section ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left: Main Details */}
              <div className="lg:col-span-2 space-y-8">

                {/* About Company */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">About {job.company}</h2>
                  <p className="text-gray-700 leading-relaxed">{job.aboutCompany}</p>
                </div>

                {/* Key Responsibilities */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
                  <ul className="space-y-4">
                    {(job.responsibilities || []).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                  <ul className="space-y-4">
                    {(job.requirements || []).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="space-y-8">

                {/* What You'll Gain */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Gain</h2>
                  <ul className="space-y-4">
                    {(job.gains || []).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CircleCheckBig className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply CTA */}
                <div className="bg-gradient-to-br from-[#0270e1] to-[#024a9e] rounded-2xl shadow-lg p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
                  <p className="mb-6 opacity-90">
                    Don't miss this opportunity. We are excited to review your application!
                  </p>
                  <button
                    onClick={() => setApplyOpen(true)}
                    className="w-full bg-white text-[#0270e1] py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    Apply Now
                  </button>
                  <p className="text-sm opacity-80 mt-4 text-center">
                    Applications are reviewed on a rolling basis
                  </p>
                </div>

                {/* Job Summary */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-600">Job Type:</span>
                      <span className="font-semibold">{job.type}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold">{job.location}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-600">Salary:</span>
                      <span className="font-semibold">{job.salary || "Negotiable"}</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-600">Posted:</span>
                      <span className="font-semibold">{job.postedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* ── Apply Modal ── */}
      <ApplyModal
        isOpen={applyOpen}
        onClose={() => setApplyOpen(false)}
        jobTitle={job?.title || ""}
      />
    </div>
  );
}