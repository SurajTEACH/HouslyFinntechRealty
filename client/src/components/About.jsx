import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/houslylogo.png";
import kamlesh from "../assets/Kamlesh-Jl-L_9-7.jpg";
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

const teamMembers = [
  {
    name: "Laxman Vhadade",
    role: "Founder & CEO",
    desc: "12+ years of experience in Building trusted, customer-centric real estate and fintech solutions.",
    image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_3.png",
    socials: {
      linkedin: "#",
      instagram: "#",
      whatsapp: "#",
    },
  },
  {
    name: "Kamlesh Shah",
    role: "Senior Full Stack Developer & AI Solutions Architect",
    desc: "Building scalable and secure full-stack web solutions.",
    image: kamlesh,
    socials: {
      linkedin: "https://www.linkedin.com/in/kamlesh-shah-833a61366",
      instagram: "https://www.instagram.com/",
      whatsapp: "https://wa.me/917049776747",
    },
  },
];

const serviceCards = [
  {
    title: "IT Consulting",
    desc: "Expert IT consulting to optimize your business processes.",
    icon: "https://html.themehour.net/robor/demo/assets/img/icon/feature-icon4-1.svg",
  },
  {
    title: "Cloud Solutions",
    desc: "Secure and scalable cloud infrastructure for productivity.",
    icon: "https://html.themehour.net/robor/demo/assets/img/icon/feature-icon4-2.svg",
  },
  {
    title: "Cybersecurity",
    desc: "Protect your data and systems with advanced security.",
    icon: "https://html.themehour.net/robor/demo/assets/img/icon/feature-icon4-3.svg",
  },
  {
    title: "Software Development",
    desc: "Custom software, web, and mobile applications.",
    icon: "https://html.themehour.net/robor/demo/assets/img/icon/feature-icon4-4.svg",
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

const footerServices = [
  { label: "Web Development", href: "#" },
  { label: "AI & Chatbot Development", href: "#" },
  { label: "Cloud & DevOps", href: "#" },
  { label: "Software Development", href: "#" },
  { label: "IT Consulting", href: "#" },
];

function SocialIcon({ type, className = "w-4 h-4" }) {
  switch (type) {
    case "facebook":
      return (
        <svg viewBox="0 0 320 512" className={className} fill="currentColor">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 448 512" className={className} fill="currentColor">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 448 512" className={className} fill="currentColor">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 512 512" className={className} fill="currentColor">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 576 512" className={className} fill="currentColor">
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 448 512" className={className} fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      );
    default:
      return null;
  }
}

function IconLocation({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor">
      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
    </svg>
  );
}

function IconPhone({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor">
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

function IconEmail({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor">
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor">
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </svg>
  );
}

function PlayIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor">
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
      <path
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialButton({ href, icon, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
    >
      <SocialIcon type={icon} className="w-4 h-4" />
    </a>
  );
}

function FooterHeading({ children }) {
  return (
    <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] font-space-grotesk">
      {children}
    </h3>
  );
}

function BreadcrumbTitle() {
  const text = "About Us";
  return (
    <div className="breadcrumb-title">
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.05}s`,
            marginRight: char === " " ? "0.5em" : "0.1em",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function CircularText() {
  const text = "IT SOLUTIONS-TECHNOLOGY & INNOVATION.";
  const chars = text.split("");

  return (
    <span className="absolute top-1/2 left-1/2 -ml-[111.5px] -mt-[111.5px] inline-block w-[220px] h-[223px] font-bold text-white text-base animate-spinSlow">
      {chars.map((char, i) => (
        <span
          key={i}
          className="absolute h-[236px] w-[20px] left-[45.5%] top-[-5px] origin-center-bottom"
          style={{
            transform: `rotate(${(i + 1) * 9.4}deg)`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

const About = () => {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        .font-space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }

        .font-dm-sans {
          font-family: 'DM Sans', sans-serif;
        }

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes movingX {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes letterReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 900ms ease both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 900ms ease both;
        }

        .animate-slideInRight {
          animation: slideInRight 900ms ease both;
        }

        .animate-movingX {
          animation: movingX 8s linear infinite;
        }

        .animate-spinSlow {
          animation: spinSlow 20s linear infinite;
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
          z-index: -1;
        }

        .breadcumb-content::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80') center/cover;
          opacity: 0.1;
          z-index: -1;
        }

        .breadcrumb-title {
          position: relative;
          display: inline-block;
        }

        .breadcrumb-title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: letterReveal 0.5s forwards;
        }

        .footer-bg {
          background: linear-gradient(to bottom right, rgb(15 23 42), rgb(30 58 138), rgb(30 41 59));
        }
      `}</style>

      <Navbar />

      <main className="flex-grow">
        {/* Hero / Breadcrumb */}
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
              {"About Us".split("").map((char, index) => (
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
              <span className="cursor-default">About Us</span>
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

        {/* About Section */}
        <section className="pt-12 md:pt-8 pb-12 md:pb-16 lg:pb-10 bg-white overflow-hidden">
          <div className="max-w-[1464px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left Images */}
              <div className="relative lg:pr-[110px] lg:pb-[200px] animate-slideInLeft">
                <div className="rounded-[30px] overflow-hidden inline-block">
                  <img
                    src="https://html.themehour.net/robor/demo/assets/img/normal/about-thumb4-1.jpg"
                    alt="About"
                    className="max-w-full h-auto"
                  />
                </div>

                <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:right-[50px] border-8 border-white rounded-[30px] overflow-hidden animate-movingX shadow-lg">
                  <img
                    src="https://html.themehour.net/robor/demo/assets/img/normal/about-thumb4-2.jpg"
                    alt="About Sub"
                    className="max-w-full h-auto"
                  />
                </div>

                <div className="hidden lg:inline-flex absolute top-[145px] right-0 items-center justify-center w-[244px] h-[244px] border-[38px] border-white/30 rounded-full bg-black/30">
                  <CircularText />
                  <a className="z-10 inline-flex items-center justify-center w-[56px] h-[56px] rounded-full bg-white text-[#6D30FB] cursor-pointer hover:scale-110 transition-transform">
                    <PlayIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="hidden lg:block absolute bottom-0 left-0 -z-10">
                  <img
                    src="https://html.themehour.net/robor/demo/assets/img/normal/about-thumb1-3.png"
                    alt="Decoration"
                    className="w-[113px]"
                  />
                  <div className="absolute bottom-0 left-0 -z-10 translate-x-[-200px] text-[280px] font-bold leading-[0.73] bg-gradient-to-b from-[#f8f8f8] to-transparent text-transparent bg-clip-text">
                    Hously
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative z-20">
                <div className="mb-[20px]">
                  <span
                    className="inline-block text-[#0076d8] font-medium uppercase tracking-wider mb-4 animate-slideInLeft"
                    style={{ animationDelay: "200ms" }}
                  >
                    About Us
                  </span>

                  <h2
                    className="text-[32px] md:text-[42px] lg:text-[48px] leading-tight font-bold mb-4 animate-slideInLeft"
                    style={{ animationDelay: "300ms" }}
                  >
                    Comprehensive IT Services for Modern Business Transformation
                  </h2>

                  <p
                    className="text-[#6F756D] leading-[1.6] animate-slideInUp"
                    style={{ animationDelay: "400ms" }}
                  >
                    We provide end-to-end IT solutions including cloud
                    infrastructure, cybersecurity, custom software development,
                    and digital transformation to help businesses grow and
                    innovate.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div
                    className="space-y-4 animate-slideInUp"
                    style={{ animationDelay: "500ms" }}
                  >
                    <div className="inline-flex items-center justify-start pb-3">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#0076d8]/10 rounded-2xl text-[#0076d8]">
                        <CheckCircleIcon />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        100% Customer Satisfaction
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We bring experienced IT specialists, cloud architects,
                        and technology experts committed to delivering
                        excellence.
                      </p>
                    </div>
                  </div>

                  <div
                    className="space-y-4 animate-slideInUp"
                    style={{ animationDelay: "600ms" }}
                  >
                    <div className="inline-flex items-center justify-start pb-3">
                      <div className="w-16 h-16 flex items-center justify-center bg-[#ffd801]/20 rounded-2xl text-[#0076d8]">
                        <ShieldIcon />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        Quality Assurance Guarantee
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our rigorous testing and quality standards ensure
                        reliable, secure, and high-performance solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a className="inline-flex items-center gap-2 text-[#0076d8] font-medium hover:gap-3 transition-all cursor-pointer">
                    More About Us
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section className="relative overflow-hidden bg-[#F5F5F5] pt-4 md:pt-6 lg:pt-4 pb-8 md:pb-10 lg:pb-8">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('https://html.themehour.net/assets/img/bg/about-bg-1-1.png')",
            }}
          />
          <div className="relative z-10 max-w-[1464px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="lg:order-2">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden animate-slideInRight">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="IT Work Process"
                    className="w-full h-[300px] md:h-[380px] lg:h-[460px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:order-1">
                <div className="relative z-20 mb-4 md:mb-5 lg:mb-6">
                  <span className="inline-block text-[#0076d8] text-sm md:text-base font-medium uppercase tracking-wider mb-2 animate-slideInUp">
                    Work Process
                  </span>
                  <h2 className="text-[#051600] text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight font-bold mt-0 mb-2 animate-slideInUp">
                    How Does it Work?
                  </h2>
                  <p className="mt-1 text-[#6F756D] text-sm md:text-base leading-relaxed md:leading-[1.6] animate-slideInUp">
                    We follow a structured approach to understand requirements,
                    design effective solutions, develop with precision, and
                    deliver reliable results aligned with business goals.
                  </p>
                </div>

                <div className="relative mt-2 space-y-6">
                  <div className="relative flex gap-6 md:gap-8 lg:gap-14 animate-slideInUp">
                    <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 border-[#0076d8] rounded-xl text-base md:text-lg font-medium text-[#051600]">
                      1
                    </span>
                    <div>
                      <h3 className="text-[#051600] text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                        Discovery & Planning
                      </h3>
                      <p className="text-[#6F756D] text-sm md:text-base leading-relaxed max-w-sm">
                        We analyze business needs, define goals, and create
                        clear roadmaps.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-6 md:gap-8 lg:gap-14 lg:ml-24 animate-slideInUp">
                    <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 border-[#0076d8] rounded-xl text-base md:text-lg font-medium text-[#051600]">
                      2
                    </span>
                    <div>
                      <h3 className="text-[#051600] text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                        Design & Development
                      </h3>
                      <p className="text-[#6F756D] text-sm md:text-base leading-relaxed max-w-sm">
                        We design interfaces and develop scalable, secure
                        systems.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-6 md:gap-8 lg:gap-14 lg:ml-48 animate-slideInUp">
                    <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 border-[#0076d8] rounded-xl text-base md:text-lg font-medium text-[#051600]">
                      3
                    </span>
                    <div>
                      <h3 className="text-[#051600] text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                        Testing & Support
                      </h3>
                      <p className="text-[#6F756D] text-sm md:text-base leading-relaxed max-w-sm">
                        We test thoroughly and provide technical support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-16 bg-[#051600]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-blue-500 uppercase tracking-wider font-medium animate-slideInUp">
                Expert IT Team
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2 animate-slideInUp">
                Meet Our Technology Leaders
              </h2>
            </div>

            <div className="flex flex-wrap justify-center -mx-4">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
                >
                  <div
                    className="bg-[#141414] rounded-3xl p-6 text-center border border-[#1f1f1f] hover:border-transparent hover:shadow-[0_0_20px_rgba(1,119,209,0.45)] transition duration-500 animate-slideInUp"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="w-[170px] h-[170px] rounded-full overflow-hidden border-4 border-[#0177d1] shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition duration-500 hover:scale-110"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#0177d1] text-sm mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {member.desc}
                    </p>

                    <div className="flex justify-center gap-3">
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#2f2f2f] text-white transition duration-300 hover:bg-gradient-to-tr hover:from-[#0177d1] hover:text-black"
                      >
                        <SocialIcon type="linkedin" className="w-[14px] h-[14px]" />
                      </a>

                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#2f2f2f] text-white transition duration-300 hover:bg-gradient-to-tr hover:from-[#0177d1] hover:text-black"
                      >
                        <SocialIcon type="instagram" className="w-[14px] h-[14px]" />
                      </a>

                      <a
                        href={member.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#2f2f2f] text-white transition duration-300 hover:bg-gradient-to-tr hover:from-[#0177d1] hover:text-black"
                      >
                        <SocialIcon type="whatsapp" className="w-[14px] h-[14px]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Solutions */}
        <section className="py-10 bg-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left collage */}
              <div className="order-2 lg:order-2 pt-4 lg:pt-20">
                <div className="relative inline-block animate-slideInRight">
                  <div className="grid grid-cols-2 gap-6 items-start">
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
                        alt="IT Consulting"
                        className="w-full h-[250px] md:h-[350px] object-cover"
                      />
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-3xl overflow-hidden rotate-[12deg] lg:rotate-[30deg]">
                        <img
                          src="https://html.themehour.net/robor/demo/assets/img/feature/4-2.jpg"
                          alt="IT service"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-3xl overflow-hidden">
                        <img
                          src="https://html.themehour.net/robor/demo/assets/img/feature/4-3.jpg"
                          alt="IT service"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="order-1 lg:order-1">
                <div className="mb-10 relative z-10">
                  <span className="inline-block text-base font-medium uppercase text-blue-600 mb-6 animate-slideInUp">
                    IT Solutions
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight animate-slideInUp">
                    <span className="block">Empowering Businesses</span>
                    <span className="block">
                      with Innovative IT Solutions
                    </span>
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {serviceCards.map((item, index) => (
                    <div
                      key={item.title}
                      className="animate-slideInUp"
                      style={{ animationDelay: `${index % 2 === 0 ? 0 : 270}ms` }}
                    >
                      <div className="bg-white p-5 rounded-2xl border border-gray-300 text-center transition-all duration-400 hover:shadow-lg h-full">
                        <div className="inline-block mb-4">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-15 h-10 mx-auto"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-6">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="relative overflow-hidden max-w-[1820px] mx-auto footer-bg">
          <div className="relative z-10 pt-[20px] pb-[20px] px-6">
            <div className="container mx-auto max-w-[1488px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                {/* Brand */}
                <div className="animate-slideInUp">
                  <div className="max-w-[283px]">
                    <div className="flex items-center mb-8">
                      <img
                        src={logo}
                        alt="Hously Logo"
                        className="h-25 w-auto transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8 font-dm-sans">
                      Leading provider of comprehensive IT solutions including
                      web development, AI integration, cloud services, and
                      digital transformation for businesses worldwide.
                    </p>

                    <div className="flex gap-3">
                      {socialLinks.map((item) => (
                        <SocialButton
                          key={item.name}
                          href={item.href}
                          icon={item.icon}
                          title={`Follow us on ${item.name}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Useful Links */}
                <div className="animate-slideInUp" style={{ animationDelay: "270ms" }}>
                  <FooterHeading>Useful Links</FooterHeading>
                  <ul className="space-y-3">
                    {usefulLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-dm-sans"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className="animate-slideInUp" style={{ animationDelay: "540ms" }}>
                  <FooterHeading>Company</FooterHeading>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-dm-sans"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="animate-slideInUp" style={{ animationDelay: "810ms" }}>
                  <FooterHeading>Our Services</FooterHeading>
                  <ul className="space-y-3">
                    {footerServices.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-dm-sans"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="animate-slideInUp" style={{ animationDelay: "1080ms" }}>
                  <FooterHeading>Contact Us</FooterHeading>

                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3 mb-4">
                      <IconLocation className="text-[#fed700] mt-1 flex-shrink-0 w-4 h-4" />
                      <p className="text-gray-300 font-dm-sans">
                        First Floor,Tamara Uprise Rahatni,
                        <br />
                        Pune, 411017
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <IconPhone className="text-[#fed700] flex-shrink-0 w-4 h-4" />
                      <a
                        href="tel:+919371009381"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        +91 9371 00 9381
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <IconEmail className="text-[#fed700] flex-shrink-0 w-4 h-4" />
                      <a
                        href="mailto:info@hously.in"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        info@hously.in
                      </a>
                    </div>
                  </div>

                  <div className="max-w-[250px]">
                    <p className="text-gray-300 mb-4 text-sm font-dm-sans">
                      Subscribe to our newsletter
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-[45px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      />
                      <button
                        type="button"
                        className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0"
                      >
                        <ArrowRightIcon className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="bg-gray-900 py-4">
            <div className="w-full max-w-[1820px] mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3">
              <p className="text-gray-400 text-xs sm:text-sm text-left">
                © 2026 <span>Hously Finntech Realty</span>. All rights reserved.
              </p>

              <div className="flex gap-4 text-xs sm:text-sm">
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
