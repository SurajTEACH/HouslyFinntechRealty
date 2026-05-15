import React, { useEffect, useMemo, useState } from "react";
import {
  X,
  Menu,
  ArrowRight,
  ThumbsUp,
  ShieldCheck,
  Code2,
  Cloud,
  Laptop,
  Palette,
  CircleUserRound,
  Shield,
  TrendingUp,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaCalendarAlt,
  FaUserAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import { getAllBlogsApi } from "../api/blogApi";
import { Link } from "react-router-dom";

const Home = () => {

  const [heroIndex, setHeroIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [homeBlogPosts, setHomeBlogPosts] = useState([]);
  const [homeBlogsLoading, setHomeBlogsLoading] = useState(true);

  // Fetch latest 3 blogs from backend
  useEffect(() => {
    getAllBlogsApi()
      .then((res) => setHomeBlogPosts((res.data || []).slice(0, 3)))
      .catch(() => {})
      .finally(() => setHomeBlogsLoading(false));
  }, []);


  const heroSlides = useMemo(
    () => [
      {
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
        overlay: "from-[#0b3a66]/95 via-[#0b3a66]/70 to-[#00c6ff]/20",
      },
      {
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
        overlay: "from-[#091f3a]/95 via-[#0076d8]/65 to-[#00c6ff]/25",
      },
      {
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
        overlay: "from-[#0b3a66]/90 via-[#1a2a4a]/60 to-[#00c6ff]/30",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr",
      icon: FaFacebookF,
      title: "Facebook",
    },
    {
      href: "https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==",
      icon: FaInstagram,
      title: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/houlsy-finntech-realty/",
      icon: FaLinkedinIn,
      title: "LinkedIn",
    },
    {
      href: "#",
      icon: FaTwitter,
      title: "Twitter",
    },
    {
      href: "#",
      icon: FaYoutube,
      title: "YouTube",
    },
  ];

  const marqueeServices = [
    "Web Development",
    "Cloud Solutions",
    "Digital Transformation",
    "Software Development",
    "UI/UX Design",
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and applications built with modern technologies.",
      icon: Code2,
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and migration services.",
      icon: Cloud,
    },
    {
      title: "Software Dev",
      desc: "Custom software solutions for business needs.",
      icon: Laptop,
    },
    {
      title: "UI/UX Design",
      desc: "User-centered design for better engagement.",
      icon: Palette,
    },
    {
      title: "IT Consulting",
      desc: "Expert technology advisory services.",
      icon: CircleUserRound,
    },
    {
      title: "Cybersecurity",
      desc: "Security solutions and threat protection.",
      icon: Shield,
    },
    {
      title: "Data Analytics",
      desc: "Actionable insights from business data.",
      icon: TrendingUp,
    },
    {
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications.",
      icon: Smartphone,
    },
  ];

  const whyChoose = [
    {
      no: "01.",
      title: "Expert Team & Experience",
      desc: "Our team of certified AI specialists, data scientists, and industry experts bring 24+ years of collective experience to deliver cutting-edge solutions.",
    },
    {
      no: "02.",
      title: "End-to-End Solutions",
      desc: "From web development and AI integration to cloud solutions and digital transformation, we provide comprehensive technology services under one roof.",
    },
    {
      no: "03.",
      title: "Innovation Focus",
      desc: "We constantly push technological boundaries with AI research, machine learning advancements, and innovative automation solutions.",
    },
    {
      no: "04.",
      title: "Client-Centric Approach",
      desc: "We prioritize your business goals, ensuring our technology solutions drive tangible results and competitive advantage.",
    },
  ];

  const caseStudies = [
    {
      tag: "Cloud Computing",
      title: "Enterprise Cloud Migration Platform",
      desc: "Large-scale cloud migration solution enabling secure, scalable, and cost-optimized infrastructure for enterprises.",
      result:
        "Reduced infrastructure costs by 42%, improved scalability and uptime",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
      href: "/CaseStudy",
    },
    {
      tag: "Artificial Intelligence",
      title: "AI-Powered Business Analytics System",
      desc: "Advanced analytics platform using AI and machine learning for real-time insights and decision-making.",
      result: "Improved decision accuracy by 55%, reduced manual reporting effort",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
      href: "/CaseStudy",
    },
    {
      tag: "Software Development",
      title: "Custom Enterprise Software Solution",
      desc: "Tailor-made enterprise software for workflow automation, data integration, and operational efficiency.",
      result: "Boosted operational efficiency by 45%, improved system reliability",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      href: "/CaseStudy",
    },
    {
      tag: "IT Services",
      title: "IT Service Management Automation",
      desc: "Automated ITSM platform for incident management, service requests, and performance monitoring.",
      result:
        "Reduced incident resolution time by 60%, improved service availability",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      href: "/CaseStudy",
    },
    {
      tag: "Cybersecurity",
      title: "Enterprise Cybersecurity Framework",
      desc: "Multi-layered security architecture protecting enterprise systems from advanced cyber threats.",
      result: "Prevented 99.9% of threats, reduced security incidents by 85%",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      href: "/CaseStudy",
    },
    {
      tag: "DevOps & Automation",
      title: "DevOps & CI/CD Transformation",
      desc: "End-to-end DevOps pipeline implementation with automated testing, deployment, and monitoring.",
      result: "Accelerated release cycles by 70%, improved deployment stability",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop",
      href: "/CaseStudy",
    },
  ];

  const testimonials = [
    {
      name: "Kamlesh",
      role: "Co-founder",
      image:
        "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-2.jpg",
      text: "Cloud migration executed flawlessly with zero downtime across 15TB of data. Healthcare compliance expertise and security protocols reduced our infrastructure costs by 40% overall.",
    },
    {
      name: "Satish",
      role: "Co-founder",
      image:
        "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-3.jpg",
      text: "Our e-commerce platform's performance increased by 300% after their optimization. The AI chatbot reduced customer service costs by 45% while improving satisfaction scores significantly.",
    },
    {
      name: "Sanchi",
      role: "Co-founder",
      image:
        "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-4.jpg",
      text: "Enterprise security solution prevented 12 potential breaches in one year. Compliance audits passed perfectly and system uptime maintained 99.99% reliability through advanced monitoring.",
    },
    {
      name: "Laxman",
      role: "Co-founder",
      image:
        "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-1.jpg",
      text: "Their AI-powered analytics platform transformed our decision-making process, increasing efficiency by 65% in the first quarter with seamless integration and exceptional 24/7 support.",
    },
  ];

  // blogs array removed — now fetched from API

  const usefulLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Career", href: "/career" },
  ];

  const companyLinks = [
    "About Company",
    "Our Team",
    "Careers",
    "Partners",
    "Press & Media",
    "Investor Relations",
  ];

  const footerServices = [
    "Web Development",
    "AI & Chatbot Development",
    "Cloud & DevOps",
    "Software Development",
    "IT Consulting",
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-white font-[Inter] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;700&family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 22s linear infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }

        .fade-up {
          animation: fadeUp .7s ease forwards;
        }

        .space-title {
          font-family: "Space Grotesk", sans-serif;
        }

        .dm-text {
          font-family: "DM Sans", sans-serif;
        }

        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #0076d8;
        }

        .line-clamp-2-custom {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile testimonial bullets */
        .mobile-testimonial-bullet {
          display: inline-block;
          width: 30px;
          height: 4px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 2px;
          opacity: 1;
        }
        .mobile-testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #0076d8;
          width: 40px;
        }

        /* Tablet testimonial bullets */
        .tablet-testimonial-bullet {
          display: inline-block;
          width: 35px;
          height: 5px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 3px;
          opacity: 1;
        }
        .tablet-testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #6D30FB;
          width: 50px;
        }

        /* Desktop testimonial bullets */
        .testimonial-bullet {
          display: inline-block;
          width: 40px;
          height: 6px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 4px;
          opacity: 1;
        }
        .testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #6D30FB;
          width: 60px;
        }
      `}</style>


      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ${heroIndex === i
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
                }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                style={{ backgroundImage: `url("${slide.image}")` }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`}
              />
            </div>
          ))}

          <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="fade-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Build Digital Excellence with
                  <span className="block mt-2 bg-gradient-to-r from-[#ffd801] via-[#ffd801] to-[#0076d8] bg-clip-text text-transparent animate-gradient">
                    Cloud Computing &amp; Software Services
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed dm-text">
                  Secure, high-performance cloud platforms and custom software
                  solutions designed for growth and reliability.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <button className="bg-[#0076d8] hover:bg-[#0066c0] text-white px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full font-semibold transition transform hover:scale-110 shadow-xl shadow-[#0076d8]/30 flex items-center space-x-2 hover:shadow-2xl hover:shadow-[#0076d8]/50 group backdrop-blur-sm">
                    <span>Discover More</span>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition"
                      size={20}
                    />
                  </button>

                  <button className="border-2 border-[#ffd801] hover:border-white text-white px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full font-semibold hover:bg-[#ffd801]/20 backdrop-blur-sm transition transform hover:scale-110 flex items-center space-x-2 group">
                    <span>Contact Us</span>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition"
                      size={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 sm:bottom-2 left-0 right-0 z-20 flex justify-center items-center space-x-3">
            <button
              onClick={() =>
                setHeroIndex((prev) =>
                  prev === 0 ? heroSlides.length - 1 : prev - 1
                )
              }
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition transform hover:scale-110 hover:-translate-x-1"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex space-x-1.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`transition-all duration-500 rounded-full backdrop-blur-sm ${heroIndex === i
                      ? "w-8 h-2 bg-[#ffd801] shadow-lg shadow-[#ffd801]/50"
                      : "w-2 h-2 bg-white/50 hover:bg-white/80 hover:scale-125"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setHeroIndex((prev) => (prev + 1) % heroSlides.length)
              }
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition transform hover:scale-110 hover:translate-x-1"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* About */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03] pointer-events-none">
            <h1 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-blue-900 select-none whitespace-nowrap">
              HOUSLY
            </h1>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10 w-full">
            <div className="mb-2 sm:mb-6 lg:mb-8">
              <div className="flex items-center justify-center space-x-3 mb-3 sm:mb-4">
                <div className="w-10 sm:w-14 lg:w-20 h-0.5 bg-[#0076d8]" />
                <h3 className="text-[#0076d8] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  WHO WE ARE?
                </h3>
                <div className="w-10 sm:w-14 lg:w-20 h-0.5 bg-[#0076d8]" />
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight text-center max-w-4xl mx-auto space-title">
                Transforming Businesses with Innovative IT Solutions
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="grid grid-cols-2 gap-4 sm:gap-4">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                    alt="IT Services"
                    className="w-full h-[280px] sm:h-[350px] lg:h-[500px] object-cover"
                  />
                </div>

                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 mt-6 sm:mt-8 lg:mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
                    alt="Cloud Computing"
                    className="w-full h-[250px] sm:h-[370px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <div className="bg-gradient-to-br from-[#0076d8]/5 to-[#ffd801]/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-xl transition duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0076d8] to-[#0066c0] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <ThumbsUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 space-title">
                        100% Customers Satisfaction
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed dm-text">
                        Our expert team delivers reliable IT solutions with a
                        strong focus on quality, performance, and complete
                        customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#ffd801]/5 to-[#0076d8]/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-xl transition duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0076d8] to-[#0066c0] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 space-title">
                        Quality Assurance Guarantee
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed dm-text">
                        Our expert team ensures rigorous quality checks to
                        deliver reliable, high-performance solutions you can
                        trust.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-black space-title">
                      100+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1 dm-text">
                      Projects Done
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-black space-title">
                      95%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1 dm-text">
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-black space-title">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1 dm-text">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-20 right-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-[#0076d8]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-[#ffd801]/5 rounded-full blur-3xl" />
        </section>

        {/* Marquee */}
        <section
          className="relative py-6 sm:py-8 overflow-hidden"
          style={{ backgroundColor: "rgb(244, 241, 252)" }}
        >
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex items-center">
              {[...marqueeServices, ...marqueeServices, ...marqueeServices].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center mx-6 sm:mx-8"
                  >
                    <div className="flex items-center pb-2">
                      <span
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
                        style={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          lineHeight: "0.75em",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="service-sec"
          className="relative z-10 bg-[#F5F5F5] pt-6 sm:pt-8 pb-16 overflow-hidden"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] pointer-events-none">
            <img
              src="https://html.themehour.net/robor/demo/assets/img/shape/bg-shape1.png"
              alt="Background shape"
              className="max-w-full h-auto origin-bottom hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="container mx-auto max-w-[1488px] px-3">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-8/12 xl:w-6/12">
                <div className="text-center relative z-10 mb-10 mt-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-max opacity-50 select-none">
                    <h2
                      className="text-[180px] md:text-[300px] font-bold text-white leading-none m-0"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      Services
                    </h2>
                  </div>

                  <div className="flex items-center justify-center space-x-2 mb-5">
                    <div className="w-8 h-0.5 bg-[#0174d7]" />
                    <span
                      className="inline-block text-[#0174d7] text-base font-medium uppercase tracking-wide relative pb-1"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      OUR SERVICES
                    </span>
                    <div className="w-8 h-0.5 bg-[#0174d7]" />
                  </div>

                  <h2
                    className="text-3xl md:text-5xl font-bold text-[#051600] mb-4 mt-[-0.4em] leading-tight"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Innovative IT Solutions for Business
                  </h2>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center -mx-3 -mt-3">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={idx}
                      className="w-full lg:w-1/2 xl:w-1/4 px-3 mt-3 group/card"
                    >
                      <div className="bg-white rounded-2xl p-6 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-gray-50/30 to-transparent" />
                        </div>

                        <div className="mb-4 relative z-10">
                          <div className="relative inline-block transition-all duration-300 ease-out">
                            <div className="relative text-[#0174d7] transition-all duration-300 group-hover/card:scale-105 group-hover/card:-translate-y-[2px]">
                              <Icon size={48} strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>

                        <h3
                          className="text-xl font-semibold text-[#051600] mb-2 relative z-10"
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          <a
                            href="#"
                            className="text-[#051600] no-underline relative inline-block"
                          >
                            {service.title}
                          </a>
                        </h3>

                        <p
                          className="text-sm text-[#6F756D] leading-relaxed mt-2 mb-4 flex-grow"
                          style={{ fontFamily: '"DM Sans", sans-serif' }}
                        >
                          {service.desc}
                        </p>

                        <button
                          className="inline-flex items-center font-medium text-xs text-[#051600] hover:text-[#0174d7] transition-all duration-500 no-underline pb-0.5 relative group/button mt-auto z-10 bg-transparent border-none cursor-pointer overflow-hidden"
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0174d7]/10 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000" />
                          <span className="relative z-10 flex items-center gap-2">
                            Read More
                            <FaArrowRight className="text-xs transition-all duration-500 group-hover/button:translate-x-2 group-hover/button:text-[#0174d7]" />
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0174d7] transition-all duration-500 group-hover/card:w-full group-hover/card:delay-150" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section
          id="why-choose-us"
          className="relative overflow-hidden bg-black pt-[60px] pb-[60px]"
        >
          <div className="container mx-auto px-6 max-w-[1488px]">
            <div className="flex flex-wrap -mx-10 -mt-10">
              <div className="w-full xl:w-7/12 px-10 mt-10">
                <div className="mb-[60px] xl:mb-[60px] relative z-10 xl:-mt-4">
                  <span
                    className="inline-block text-[12px] sm:text-[13px] font-medium uppercase tracking-wider text-[#0076d8] mb-5 xl:mb-7 relative pb-1"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    WHY CHOOSE US
                  </span>

                  <h2
                    className="text-[24px] sm:text-[32px] md:text-[40px] xl:text-[48px] font-bold leading-tight text-white mb-5 xl:-mt-6"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Our goal is to build a world where technology serves
                    humanity.
                  </h2>
                </div>

                <div className="inline-block w-full max-w-full xl:max-w-[645px] rounded-[20px] xl:rounded-[30px] overflow-hidden mb-10 xl:mb-0">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                    alt="Why Choose Us"
                    className="w-full h-[200px] md:h-[520px] object-cover"
                  />
                </div>
              </div>

              <div className="w-full xl:w-5/12 px-10 mt-2">
                <div className="text-center xl:text-right mb-6 xl:mb-16">
                  <div className="flex justify-center xl:justify-end items-end leading-none">
                    <span
                      className="text-white font-bold text-[100px] sm:text-[140px] md:text-[200px] xl:text-[240px] leading-[0.74]"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      12
                    </span>
                    <span
                      className="font-bold text-[50px] sm:text-[70px] md:text-[100px] xl:text-[140px] leading-[0.8] ml-2"
                      style={{
                        WebkitTextStroke: "1px rgb(255, 255, 255)",
                        color: "transparent",
                        fontFamily: '"Space Grotesk", sans-serif',
                      }}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className="text-white font-bold text-center xl:text-right mx-auto xl:ml-auto mt-4"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    <div className="text-[24px] sm:text-[30px] md:text-[36px] xl:text-[40px] leading-[1.1]">
                      Years Of
                    </div>
                    <div className="text-[24px] sm:text-[30px] md:text-[36px] xl:text-[40px] leading-[1.1]">
                      Experience
                    </div>
                  </div>
                </div>

                <div className="relative xl:ml-[-198px] ml-0">
                  <div className="hidden xl:block absolute bottom-0 left-0 -translate-y-1">
                    <div className="relative w-[244px] h-[244px]">
                      <div className="absolute inset-0 animate-spin-slow">
                        <svg viewBox="0 0 244 244" className="w-full h-full">
                          <defs>
                            <path
                              id="circlePath"
                              d="M 122,122 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
                            />
                          </defs>
                          <text
                            fill="white"
                            fontSize="13"
                            fontWeight="600"
                            letterSpacing="8"
                          >
                            <textPath href="#circlePath" startOffset="0%">
                              HOUSLY • IT AND AUTOMATION • INTEGRATION •
                            </textPath>
                          </text>
                        </svg>
                      </div>

                      <div className="absolute inset-[10px] rounded-full border-[32px] border-white/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a
                          href="#"
                          className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                          <FaArrowRight className="text-white text-[32px]" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-[30px] xl:space-y-[50px]">
                    {whyChoose.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex gap-4 xl:gap-6 max-w-full xl:max-w-[379px] ${idx >= 2 ? "xl:ml-[320px]" : ""
                          }`}
                      >
                        <div
                          className="text-[22px] xl:text-[28px] font-bold text-gray-300 shrink-0"
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          {item.no}
                        </div>

                        <div>
                          <h4
                            className="text-white font-bold text-[16px] xl:text-[20px] leading-[1.417] xl:-mt-2 mb-2"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {item.title}
                          </h4>
                          <p
                            className="text-gray-400 text-[14px] xl:text-[15px] leading-[1.75] max-w-full xl:max-w-[298px]"
                            style={{ fontFamily: '"DM Sans", sans-serif' }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
      <section
        id="case-studies"
        className="relative overflow-hidden pt-[110px] pb-[40px] bg-white"
      >
        <div className="container mx-auto px-6 max-w-[1488px]">
          <div className="flex flex-wrap justify-center -mx-3">
            <div className="w-full xl:w-1/2 lg:w-2/3 px-3">
              <div className="text-center mb-[42px] relative z-10 -mt-4">
                <div
                  className="text-[220px] md:text-[400px] font-bold leading-none text-gray-100 opacity-70 relative left-1/2 -translate-x-1/2 translate-y-10 w-max -my-[0.6em] z-[-2]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Case
                </div>

                <div className="flex items-center justify-center space-x-3 mb-7">
                  <div className="w-14 h-[1px] bg-[#0076d8]" />
                  <span
                    className="inline-block text-[16px] font-medium uppercase tracking-wider text-[#0076d8] relative pb-1"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Case Study
                  </span>
                  <div className="w-14 h-[1px] bg-[#0076d8]" />
                </div>

                <h2
                  className="text-[40px] md:text-[64px] font-bold leading-tight text-gray-900 mb-5 -mt-7"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  IT Projects Case Study
                </h2>

                <p
                  className="text-gray-600 leading-[1.75] text-[18px] mb-6 max-w-2xl mx-auto"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  Explore our portfolio of successful technology implementations
                  across various industries, showcasing our expertise in delivering
                  innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-[1500px]">
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={"auto"}
              spaceBetween={20}
              centeredSlides={false}
              loop={true}
              speed={900}
              watchSlidesProgress={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={{
                nextEl: ".case-next",
                prevEl: ".case-prev",
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="project-slider !overflow-visible pb-10"
            >
              {caseStudies.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!w-[78%] lg:!w-[58%] xl:!w-[57%]"
                >
                  <div className="group relative overflow-hidden rounded-2xl md:rounded-[30px] cursor-pointer">
                    <div className="overflow-hidden rounded-2xl md:rounded-[30px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 md:p-12 flex flex-col justify-end">
                      <div className="inline-block mb-4 md:mb-6">
                        <span className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-full md:rounded-[20px] px-3 py-1 text-white text-sm font-medium">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-white font-bold text-xl md:text-[36px] leading-tight mb-3 md:mb-4 max-w-full md:max-w-[441px]">
                        {item.title}
                      </h3>

                      <p className="text-white/90 text-base md:text-lg mb-3 md:mb-4 max-w-full md:max-w-[441px]">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-4 mt-3 md:mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-white text-sm font-medium">
                            {item.result}
                          </span>
                        </div>
                      </div>

                      <a
                        href={item.href}
                        className="mt-6 md:mt-8 inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors"
                      >
                        View Case Study
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-8 md:mt-[60px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 max-w-[1404px] mx-auto px-4">
              <div className="flex items-center gap-2 order-2 md:order-1">
                <span className="text-2xl md:text-[32px] font-bold text-gray-900 leading-none">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-400 text-xl md:text-[24px] leading-none">
                  /
                </span>
                <span className="text-gray-400 text-xl md:text-[24px] leading-none">
                  {String(caseStudies.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex-1 relative h-[2px] bg-gray-200 overflow-hidden max-w-full md:max-w-[1000px] order-1 md:order-2 w-full md:w-auto">
                <div
                  className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-500"
                  style={{
                    width: `${((activeIndex + 1) / caseStudies.length) * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center gap-3 order-3">
                <button className="case-prev w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                  <ChevronLeft size={16} />
                </button>
                <button className="case-next w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .project-slider .swiper-wrapper {
            align-items: center;
          }

          .project-slider .swiper-slide {
            opacity: 0.45;
            filter: blur(4px);
            transform: scale(0.92);
            transition: all 0.7s ease;
          }

          .project-slider .swiper-slide-active {
            opacity: 1;
            filter: blur(0);
            transform: scale(1);
          }

          .project-slider .swiper-slide-next {
            opacity: 0.75;
            filter: blur(2px);
            transform: scale(0.96);
          }

          .project-slider .swiper-slide-prev {
            opacity: 0.2;
            filter: blur(5px);
            transform: scale(0.9);
          }

          @media (max-width: 767px) {
            .project-slider .swiper-slide,
            .project-slider .swiper-slide-active,
            .project-slider .swiper-slide-next,
            .project-slider .swiper-slide-prev {
              opacity: 1;
              filter: blur(0);
              transform: scale(1);
            }
          }
        `}</style>
      </section>


        {/* Testimonials — Mobile */}
        <div className="block md:hidden">
          <section className="relative overflow-hidden py-5 bg-gray-100 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-blue-600 font-medium uppercase tracking-wider text-sm mb-4">
                  Testimonials
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  What Our Clients Say About Us
                </h2>
                <p className="text-gray-600 text-base max-w-md mx-auto mb-8">
                  Hear from businesses that have transformed with our IT solutions
                </p>
              </div>

              <div className="mb-2">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".mobile-testimonial-next",
                    prevEl: ".mobile-testimonial-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".mobile-testimonial-pagination",
                    bulletClass: "swiper-pagination-bullet mobile-testimonial-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  className="pb-10"
                >
                  {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg mx-2">
                        <div className="flex gap-1 text-blue-600 mb-4 text-lg">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">"{item.text}"</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <img alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow" src={item.image} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-base">{item.name}</h3>
                            <p className="text-gray-600 text-sm">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex items-center justify-center gap-4 mt-5">
                <button className="mobile-testimonial-prev flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="mobile-testimonial-pagination flex items-center justify-center gap-1" />
                <button className="mobile-testimonial-next flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Testimonials — Tablet */}
        <div className="hidden md:block lg:hidden">
          <section className="relative overflow-hidden py-5 bg-gray-100 px-2">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <span className="inline-block text-blue-600 font-medium uppercase tracking-wider text-base mb-6">
                  Testimonials
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  What Our Clients Say About Us
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
                  Hear from businesses that have transformed with our IT solutions
                </p>
              </div>

              <div className="relative min-h-[510px]">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={32}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".tablet-testimonial-next",
                    prevEl: ".tablet-testimonial-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".tablet-testimonial-pagination",
                    bulletClass: "swiper-pagination-bullet tablet-testimonial-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  className="pb-16"
                >
                  {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl h-full min-h-[400px]">
                        <div className="flex gap-2 text-blue-600 mb-6 text-xl">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">"{item.text}"</p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="flex-shrink-0">
                            <img alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg" src={item.image} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-xl">{item.name}</h3>
                            <p className="text-gray-600 text-base">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex items-center justify-center gap-8 mt-5">
                <button className="tablet-testimonial-prev flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="tablet-testimonial-pagination flex items-center justify-center gap-1" />
                <button className="tablet-testimonial-next flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Testimonials — Desktop */}
       <div className="hidden lg:block">
        <section className="relative overflow-hidden bg-gray-100 pt-4 pb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1488px]">
            <div className="relative min-h-[760px] xl:min-h-[820px]">
              {/* Right Side Image */}
              <div className="absolute top-0 right-0 w-[58%] xl:w-[60%] h-[720px] xl:h-[780px] rounded-[20px] overflow-hidden">
                <img
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                />
              </div>

              {/* Left Heading */}
              <div className="relative z-20 w-[44%] xl:w-[42%] pt-2">
                <div className="mb-8 max-w-[430px]">
                  <span
                    className="inline-block text-[16px] font-medium uppercase tracking-wider text-blue-600 mb-4"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Testimonials
                  </span>

                  <h2
                    className="text-[58px] xl:text-[64px] font-bold leading-[1.05] text-gray-900"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    What Our Clients Say About us
                  </h2>
                </div>
              </div>

              {/* Slider Over Image */}
              <div className="relative z-30 mt-6 xl:mt-10 w-[980px] xl:w-[1080px]">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={2}
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".testimonial-next",
                    prevEl: ".testimonial-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".testimonial-pagination",
                    bulletClass: "swiper-pagination-bullet testimonial-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  breakpoints={{
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1280: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                  }}
                  className="pb-6"
                >
                  {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="bg-white rounded-[30px] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)] min-h-[275px] flex flex-col justify-between">
                        <div>
                          <div className="flex gap-2 text-blue-600 mb-5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>

                          <p
                            className="text-[16px] xl:text-[17px] text-gray-600 leading-[1.8] mb-8"
                            style={{ fontFamily: '"DM Sans", sans-serif' }}
                          >
                            "{item.text}"
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 rounded-full overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 xl:w-14 xl:h-14 object-cover"
                            />
                          </div>

                          <div>
                            <h3
                              className="text-[18px] font-medium text-gray-900 mb-1"
                              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                            >
                              {item.name}
                            </h3>
                            <p
                              className="text-[14px] text-gray-600"
                              style={{ fontFamily: '"DM Sans", sans-serif' }}
                            >
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Bottom Controls */}
                <div className="mt-6 flex items-center border border-gray-300 rounded-[40px] p-[6px] max-w-[760px] bg-white">
                  <button className="testimonial-prev flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="testimonial-pagination flex-1 flex items-center justify-center gap-2" />

                  <button className="testimonial-next flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
       </div>


        {/* Blog */}
        <section id="blog" className="py-[30px] relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-[1488px]">
            <div className="flex flex-wrap justify-between items-end -mx-3">
              <div className="w-full lg:w-6/12 px-3">
                <div className="mb-[42px] relative z-10 -mt-4">
                  <span
                    className="inline-block text-[16px] font-medium uppercase tracking-wider text-blue-600 mb-7 relative pb-1"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    News
                  </span>

                  <h2
                    className="text-[36px] sm:text-[64px] font-bold leading-tight text-gray-900 mb-5 -mt-7"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Our Latest News &amp; Blog
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3">
              {homeBlogsLoading ? (
                // Skeleton loading cards
                [1, 2, 3].map((n) => (
                  <div key={n} className="w-full lg:w-1/2 xl:w-1/3 px-3 mt-10">
                    <div className="animate-pulse">
                      <div className="rounded-[30px] bg-gray-200 h-[280px] mb-6" />
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-3" />
                      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-4/5" />
                    </div>
                  </div>
                ))
              ) : homeBlogPosts.length === 0 ? (
                <div className="w-full px-3 mt-10 text-center text-gray-400 py-12">
                  No blog posts available yet.
                </div>
              ) : (
                homeBlogPosts.map((blog) => (
                  <div key={blog.id} className="w-full lg:w-1/2 xl:w-1/3 px-3 mt-10">
                    <div className="group h-full flex flex-col">
                      <div className="rounded-[30px] overflow-hidden mb-6 flex-shrink-0">
                        <Link to={`/blogs/${blog.id}`} className="block w-full">
                          <img
                            src={blog.image_url || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"}
                            alt={blog.title}
                            className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </Link>
                      </div>

                      <div className="flex-1 flex flex-col">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="inline-flex items-center text-gray-600 text-sm">
                            <FaCalendarAlt className="mr-2 text-blue-600" />
                            {blog.created_at
                              ? new Date(blog.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
                              : ""}
                          </span>

                          <span className="inline-flex items-center text-gray-600 text-sm">
                            <FaUserAlt className="mr-2 text-blue-600" />
                            {blog.author}
                          </span>

                          <span className="inline-flex items-center text-gray-600 text-sm">
                            <FaClock className="mr-2 text-blue-600" />
                            {blog.read_time}
                          </span>
                        </div>

                        <div className="mb-3">
                          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>

                        <h3 className="mb-3 flex-1">
                          <Link
                            to={`/blogs/${blog.id}`}
                            className="text-[24px] font-bold text-gray-900 leading-[1.42] relative inline-block hover:text-blue-600 transition-colors duration-300 text-left w-full no-underline"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {blog.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2-custom dm-text">
                          {blog.description}
                        </p>

                        <Link
                          to={`/blogs/${blog.id}`}
                          className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 mt-auto w-fit no-underline"
                        >
                          Read More
                          <FaArrowRight className="ml-2 text-sm relative transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />

        <div className="relative z-10 pt-[20px] pb-[20px] px-6">
          <div className="container mx-auto max-w-[1488px]">
            <div className="flex flex-wrap justify-between -mx-3 gap-y-10">
              <div className="w-full md:w-auto px-3">
                <div className="max-w-[283px]">
                  <div className="flex items-center mb-8">
                    <img
                      src={new URL("../assets/houslylogo.png", import.meta.url).href}
                      alt="Hously Logo"
                      className="h-[100px] w-auto transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-8 dm-text">
                    Leading provider of comprehensive IT solutions including web
                    development, AI integration, cloud services, and digital
                    transformation for businesses worldwide.
                  </p>

                  <div className="flex gap-3">
                    {socialLinks.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          title={item.title}
                          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                        >
                          <Icon className="text-base" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto px-3">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] space-title">
                  Useful Links
                </h3>
                <ul className="space-y-3">
                  {usefulLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block dm-text"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full sm:w-auto px-3">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] space-title">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block dm-text"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-auto px-3">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] space-title">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {footerServices.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block dm-text"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-auto px-3">
                <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-[#fed700] space-title">
                  Contact Us
                </h3>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start gap-3 mb-4">
                    <FaMapMarkerAlt className="text-[#fed700] mt-1 flex-shrink-0" />
                    <p className="text-gray-300 dm-text">
                      First Floor,Tamara Uprise Rahatni,
                      <br />
                      Pune, 411017
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <FaPhoneAlt className="text-[#fed700] flex-shrink-0" />
                    <a
                      href="tel:+919371009381"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +91 9371 00 9381
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#fed700] flex-shrink-0" />
                    <a
                      href="mailto:info@hously.in"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      info@hously.in
                    </a>
                  </div>
                </div>

                <div className="max-w-[250px]">
                  <p className="text-gray-300 mb-4 text-sm dm-text">
                    Subscribe to our newsletter
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      placeholder="Enter your email"
                      className="w-full h-[45px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      type="email"
                    />
                    <button className="w-[45px] h-[45px] bg-[#0076d8] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                      <FaArrowRight className="text-sm text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-900 py-4 relative z-10">
          <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between px-4">
            <p className="text-gray-400 text-xs sm:text-sm text-left">
              © 2026 <span>Hously Finntech Realty</span>. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs sm:text-sm mt-2 sm:mt-0">
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
    </div>
  );
};

export default Home;
