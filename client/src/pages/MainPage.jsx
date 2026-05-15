import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  Check,
  CheckCircle2,
  ChevronUp,
  Cpu,
  Globe,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';

// Apna logo path yahan sahi kar lena
import logo from '../assets/houslylogo.png';

const divisions = [
  {
    title: 'Real Estate',
    shortTitle: 'Real Estate Division',
    subtitle: 'Premium residential and commercial property solutions.',
    desc: 'Premium residential and commercial properties. Building dreams, creating landmarks.',
    image: '/real-esate.avif',
    icon: Building2,
    gradient: 'from-indigo-600 to-purple-600',
    hoverBg: 'linear-gradient(135deg, rgb(79, 70, 229) 0%, rgb(147, 51, 234) 100%)',
    features: [
      'Property Development',
      'Commercial Buildings',
      'Residential Apartments',
      'Real Estate Investment',
    ],
    route: '/real-estate',
    underDevelopment: true,
  },
  {
    title: 'Finance',
    shortTitle: 'Finance Division',
    subtitle: 'Smart financial solutions and investment services.',
    desc: 'Comprehensive financial solutions and investment services. Empowering financial freedom.',
    image: '/finetech.avif',
    icon: TrendingUp,
    gradient: 'from-emerald-600 to-teal-600',
    hoverBg: 'linear-gradient(135deg, rgb(5, 150, 105) 0%, rgb(13, 148, 136) 100%)',
    features: [
      'Investment Advisory',
      'Wealth Management',
      'Financial Planning',
      'Portfolio Management',
    ],
    route: '/finance',
    underDevelopment: true,
  },
  {
    title: 'IT & Technology',
    shortTitle: 'Technology Division',
    subtitle: 'Innovative digital solutions and transformation services.',
    desc: 'Cutting-edge technology solutions and digital transformation. Innovating tomorrow.',
    image: '/technology.avif',
    icon: Cpu,
    gradient: 'from-blue-600 to-cyan-500',
    hoverBg: 'linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(6, 182, 212) 100%)',
    features: [
      'Software Development',
      'IT Consulting',
      'Digital Transformation',
      'Cloud & Automation',
    ],
    route: '/technology',
    underDevelopment: false,
  },
];

const stats = [
  { number: '12+', label: 'Years Combined Experience', icon: Award },
  { number: '100+', label: 'Projects Completed', icon: Target },
  { number: '500+', label: 'Happy Clients', icon: Users },
  { number: '3', label: 'Industry Sectors', icon: Globe },
];

const whyChooseUs = [
  {
    title: 'Innovative Solutions',
    desc: 'Cutting-edge approaches to modern challenges',
    icon: Zap,
  },
  {
    title: 'Award-Winning Service',
    desc: 'Recognized excellence across industries',
    icon: Award,
  },
  {
    title: 'Proven Track Record',
    desc: 'Decades of successful project delivery',
    icon: CheckCircle2,
  },
  {
    title: 'Global Presence',
    desc: 'Serving clients across multiple regions',
    icon: Globe,
  },
];

const timeline = [
  {
    year: '2012-2018',
    title: 'AAKAR INFRA SERVICES - The Beginning',
    desc: 'Started with a vision in infrastructure development, focusing on quality construction and civil engineering projects. Built a strong foundation with residential and commercial construction, establishing partnerships with leading developers across the region.',
    badge: 'Founded with commitment to excellence',
    services: [
      'Civil Engineering',
      'Infrastructure Development',
      'Construction Management',
      'Site Planning',
      'Residential Projects',
      'Commercial Construction',
    ],
  },
  {
    year: '2019-2021',
    title: 'Digital Transformation & Growth',
    desc: 'Embraced technology and innovation, introducing digital solutions for project management and client engagement. Diversified operations and expanded service offerings to meet evolving market demands with smart construction techniques and IoT integration.',
    badge: 'Launched technology division',
    services: [
      'Smart Construction',
      'Digital Project Management',
      'Client Portals',
      'IoT Integration',
      'Project Consulting',
      'Quality Assurance',
    ],
  },
  {
    year: '2025 & Beyond',
    title: 'HOUSLY FINNTECH REALTY - The Future',
    desc: 'Rebranded to HOUSLY FINNTECH REALTY, unifying three powerful divisions under one visionary brand. A comprehensive multi-sector conglomerate leading innovation in real estate, finance, and technology. Building tomorrow, today with AI-powered solutions and global expansion.',
    badge: 'Shaping the future of integrated services',
    services: [
      'Real Estate Development',
      'Financial Technology',
      'IT Solutions',
      'AI-Powered Solutions',
      'Blockchain Integration',
      'Smart City Projects',
    ],
  },
];

function DivisionModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/35 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-2xl bg-white p-4 shadow-2xl sm:p-5">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-left">
          <h3 className="text-xl font-bold text-slate-800">{item.shortTitle}</h3>
        </div>

        <p className="mt-2 text-center text-sm text-slate-500">{item.subtitle}</p>

        <div className="mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-5 text-center text-white shadow-lg">
          <div className="text-sm font-semibold sm:text-base">
            Website Under Development
          </div>
          <div className="mt-1 text-xs text-blue-50 sm:text-sm">Launching Soon 🚀</div>
        </div>

        <div className="mt-5">
          <h4 className="mb-3 text-sm font-semibold text-slate-700">Our Services</h4>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {item.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-600" />
                <span className="text-xs text-slate-600 sm:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-md transition hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function DivisionCard({ item, index, onClick }) {
  const Icon = item.icon;

  return (
    <div
      onClick={() => onClick(item)}
      className="group cursor-pointer"
      style={{
        animation: `cardReveal 0.8s ease-out ${index * 200}ms forwards`,
        opacity: 0,
      }}
    >
      <div className="relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:rounded-2xl md:hover:-translate-y-2 md:hover:shadow-2xl">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className="absolute inset-0"
            style={{
              background: item.hoverBg,
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </div>

        <div className="relative h-40 overflow-hidden sm:h-44 md:h-48 xl:h-56">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent" />
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute right-3 top-3 z-20 md:right-4 md:top-4">
            <div className="rounded-xl bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 md:p-3">
              <Icon className="h-5 w-5 text-slate-800 md:h-6 md:w-6" />
            </div>
          </div>

          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20">
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
          </div>
        </div>

        <div className="relative p-4 md:p-6 lg:p-8">
          <div
            className={`absolute left-4 top-0 -translate-y-1/2 rounded-xl bg-gradient-to-br ${item.gradient} p-3 shadow-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 md:left-8 md:p-4`}
          >
            <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
          </div>

          <div className="pt-6 md:pt-8">
            <h3 className="mb-3 text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-white md:text-2xl">
              {item.title}
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-200 md:mb-6">
              {item.desc}
            </p>

            <div className="mb-4 translate-y-4 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:mb-6">
              <div className="grid grid-cols-2 gap-2">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/80" />
                    <span className="text-[11px] text-slate-600 transition-colors duration-300 group-hover:text-slate-300 sm:text-xs">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center font-semibold text-blue-600 transition-all duration-300 group-hover:text-white">
              <span className="text-sm md:text-base">
                {item.underDevelopment ? 'Preview Division' : 'Explore Division'}
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 md:h-5 md:w-5" />
            </div>
          </div>
        </div>

        <div
          className={`h-1 origin-left scale-x-0 transform bg-gradient-to-r ${item.gradient} transition-transform duration-700 group-hover:scale-x-100`}
        />

        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition-all duration-500 group-hover:ring-white/30 md:rounded-2xl" />
      </div>
    </div>
  );
}

function StatCard({ item, index }) {
  const Icon = item.icon;

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-slate-200/50 bg-white/90 p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl md:rounded-2xl md:p-6 md:hover:shadow-2xl"
      style={{
        animation: `scaleIn 0.5s ease-out ${index * 150}ms forwards`,
      }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent" />
        <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-700 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-right scale-x-0 transform bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-700 group-hover:scale-x-100" />
      </div>

      <div className="relative mb-4 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70" />
          <div className="relative rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 shadow-lg">
            <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="text-2xl font-bold text-slate-800 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent md:text-3xl">
          {item.number}
        </div>
      </div>

      <div className="relative mt-2 flex justify-center">
        <div className="px-2 text-center text-xs leading-tight text-slate-600 transition-colors duration-500 group-hover:text-slate-700 sm:text-sm">
          {item.label}
        </div>
      </div>

      <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-blue-400/30 transition-colors duration-500 group-hover:border-blue-500/70" />
      <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-cyan-400/30 transition-colors duration-500 group-hover:border-cyan-500/70" />
      <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-blue-400/30 transition-colors duration-500 group-hover:border-blue-500/70" />
      <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-cyan-400/30 transition-colors duration-500 group-hover:border-cyan-500/70" />
    </div>
  );
}

function WhyChooseCard({ item, index }) {
  const Icon = item.icon;

  return (
    <div
      className="group rounded-xl border border-slate-200 bg-white/60 p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl active:scale-95 md:rounded-2xl md:p-6 sm:hover:-translate-y-2"
      style={{
        animation: `fadeIn 0.8s ease-out ${3500 + index * 150}ms forwards`,
      }}
    >
      <div className="mb-4 flex justify-center sm:justify-start">
        <div className="inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
          <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
        </div>
      </div>

      <h3 className="mb-2 text-center text-base font-bold text-slate-800 sm:text-left md:text-lg">
        {item.title}
      </h3>
      <p className="text-center text-sm leading-relaxed text-slate-600 sm:text-left">
        {item.desc}
      </p>
    </div>
  );
}

function DesktopTimeline({ progress }) {
  const thresholds = [0.08, 0.5, 0.92];
  const animatedProgress = Math.max(0, Math.min(progress, 1));

  return (
    <div className="relative hidden overflow-hidden sm:block">
      <div className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1200 1200"
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* base dashed line */}
          <path
            d="M 800 100 C 780 200, 350 500, 400 650 C 450 800, 750 950, 800 1100"
            stroke="#d1d5db"
            strokeWidth="3"
            strokeDasharray="4 8"
            fill="none"
          />

          {/* animated yellow progress line */}
          <path
            d="M 800 100 C 780 200, 350 500, 400 650 C 450 800, 750 950, 800 1100"
            stroke="#facc15"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={100 - animatedProgress * 100}
            className="transition-all duration-150 ease-out"
          />

          {/* milestones */}
          {[
            { x: 800, y: 100, active: animatedProgress >= thresholds[0] },
            { x: 400, y: 650, active: animatedProgress >= thresholds[1] },
            { x: 800, y: 1100, active: animatedProgress >= thresholds[2] },
          ].map((dot, i) => (
            <g key={i}>
              <circle
                cx={dot.x}
                cy={dot.y}
                r="11"
                fill={dot.active ? 'rgba(250, 204, 21, 0.18)' : 'rgba(0,0,0,0)'}
              />
              <circle
                cx={dot.x}
                cy={dot.y}
                r="6"
                fill={dot.active ? '#facc15' : '#cbd5e1'}
                stroke={dot.active ? '#eab308' : '#94a3b8'}
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </g>
          ))}
        </svg>
      </div>

      {timeline.map((item, index) => (
        <div key={item.title} className="relative mb-12 last:mb-0">
          <div
            className={`w-full sm:w-5/12 md:w-2/5 lg:w-[30%] ${
              index % 2 === 0 ? 'sm:ml-auto' : 'sm:ml-8 md:ml-12 lg:ml-16'
            }`}
          >
            <div className="min-h-[200px] rounded-xl border border-slate-200 bg-white/90 p-6 text-left shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl md:rounded-2xl">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
                {item.year}
              </div>

              <h3 className="mb-4 text-xl font-bold text-slate-800 md:text-2xl">
                {item.title}
              </h3>

              <p className="mb-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>

              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2">
                <Award className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">{item.badge}</span>
              </div>

              <div className="border-t border-slate-200 pt-3">
                <div className="mb-3 text-sm font-semibold text-slate-700">Key Services:</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {item.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      <span className="text-sm text-slate-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileTimeline({ progress }) {
  const clamped = Math.max(0, Math.min(progress, 1));
  const thresholds = [0.18, 0.52, 0.88];

  return (
    <div className="sm:hidden">
      <div className="relative py-6">
        {/* base line */}
        <div className="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 transform bg-slate-300" />

        {/* animated yellow line */}
        <div
          className="absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full bg-yellow-400 transition-all duration-150"
          style={{ height: `${clamped * 100}%` }}
        />

        {timeline.map((item, index) => {
          const active = clamped >= thresholds[index];

          return (
            <div key={item.title} className="relative mb-16 last:mb-0">
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 transform">
                <div
                  className={`h-4 w-4 rounded-full border-2 border-white shadow transition-all duration-300 ${
                    active ? 'bg-yellow-400' : 'bg-blue-500'
                  }`}
                />
              </div>

              <div className="mx-4 mt-8 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                  {item.year}
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-800">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MainPage() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const timelineSectionRef = useRef(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowTopButton(window.scrollY > 300);

      if (timelineSectionRef.current) {
        const rect = timelineSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.85;
        const end = rect.height + windowHeight * 0.15;
        const traveled = start - rect.top;
        const raw = traveled / end;
        const clamped = Math.max(0, Math.min(raw, 1));

        setTimelineProgress(clamped);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const particles = useMemo(
    () => [
      { cls: 'top-10 left-5', delay: '0s', color: 'bg-blue-400' },
      { cls: 'top-20 right-10', delay: '1s', color: 'bg-cyan-400' },
      { cls: 'top-40 left-20', delay: '2s', color: 'bg-emerald-400' },
      { cls: 'top-60 right-40', delay: '1.5s', color: 'bg-blue-400' },
      { cls: 'top-80 left-60', delay: '0.5s', color: 'bg-cyan-400' },
      { cls: 'bottom-40 right-20', delay: '2.5s', color: 'bg-emerald-400' },
      { cls: 'bottom-60 left-40', delay: '1.8s', color: 'bg-blue-400' },
    ],
    []
  );

  const scrollToDivisions = () => {
    const el = document.getElementById('divisions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleDivisionClick = (item) => {
    if (item.underDevelopment) {
      setActiveModal(item);
      return;
    }

    if (item.route) navigate(item.route);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <style>{`
        @keyframes scroll-down {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(8px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes cardReveal {
          0% { opacity: 0; transform: translateY(40px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-scroll-down { animation: scroll-down 1.5s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
        .animate-spin-slow { animation: spinSlow 3s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
      `}</style>

      {/* progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-slate-200">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* fixed logo */}
      <div className="animate-fade-in fixed left-2 top-2 z-40 sm:left-4 sm:top-4 md:left-6 md:top-6">
        <img
          src={logo}
          alt="Hously Logo"
          className="h-12 w-auto object-contain drop-shadow-2xl sm:h-16 md:h-20"
        />
      </div>

      {/* bg grid */}
      <div
        className="absolute inset-0 opacity-10 sm:opacity-20 md:opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")`,
        }}
      />

      {/* particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.cls} h-1 w-1 rounded-full sm:h-2 sm:w-2 ${p.color} animate-float`}
            style={{ animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* blur glows */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="animate-pulse-slow absolute left-5 top-10 h-32 w-32 rounded-full bg-blue-400 blur-3xl sm:h-48 sm:w-48 md:h-72 md:w-72" />
        <div
          className="animate-pulse-slow absolute bottom-10 right-5 h-40 w-40 rounded-full bg-cyan-400 blur-3xl sm:h-64 sm:w-64 md:h-96 md:w-96"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="animate-pulse-slow absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-emerald-400 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          {/* hero */}
          <section className="min-h-screen px-4 pb-0 pt-0">
            <div className="mx-auto max-w-6xl w-full">
              <div className="text-center">
                <div className="sm:-mt-10 md:-mt-16">
                  <div className="relative inline-block">
                    <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/5 via-purple-500/10 to-pink-500/5 blur-3xl sm:-inset-10" />

                    <div className="relative px-4 pt-24 sm:pt-20 md:pt-30">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 shadow-sm">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-600 sm:text-sm">
                          Reimagined 2025
                        </span>
                      </div>

                      <div className="space-y-4">
                        <h1 className="text-6xl font-bold uppercase leading-none tracking-tight md:text-8xl lg:text-9xl">
                          <span className="bg-[#0076d8] bg-clip-text text-transparent">
                            housLY
                          </span>
                        </h1>
                      </div>

                      <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-slate-400 to-transparent sm:w-12" />
                        <p className="text-xl font-light tracking-[0.15em] text-slate-700 sm:text-2xl md:text-3xl lg:text-4xl">
                          FINNTECH REALTY
                        </p>
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-slate-400 to-transparent sm:w-12" />
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto max-w-2xl space-y-4 px-4 py-6">
                    <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base md:text-lg">
                      From building infrastructure to building futures. Our 12-year legacy
                      continues with an expanded vision—unifying real estate, finance, and
                      technology under one innovative brand.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap justify-center gap-3 px-4 sm:gap-4 md:gap-6">
                    {[
                      { label: 'Real Estate', icon: Building2, color: 'indigo' },
                      { label: 'Finance', icon: TrendingUp, color: 'emerald' },
                      { label: 'Technology', icon: Cpu, color: 'blue' },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      const styles = {
                        indigo: {
                          glow: 'bg-indigo-500/10',
                          border: 'border-indigo-300',
                          iconBg: 'bg-indigo-100',
                          iconColor: 'text-indigo-600',
                        },
                        emerald: {
                          glow: 'bg-emerald-500/10',
                          border: 'border-emerald-300',
                          iconBg: 'bg-emerald-100',
                          iconColor: 'text-emerald-600',
                        },
                        blue: {
                          glow: 'bg-blue-500/10',
                          border: 'border-blue-300',
                          iconBg: 'bg-blue-100',
                          iconColor: 'text-blue-600',
                        },
                      }[item.color];

                      return (
                        <div
                          key={item.label}
                          className="group relative opacity-0 animate-fade-in-up"
                          style={{ animationDelay: `${900 + index * 120}ms` }}
                        >
                          <div
                            className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
                          />
                          <div
                            className={`relative rounded-2xl border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:shadow-lg ${styles.border}`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`relative overflow-hidden rounded-lg p-2 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] ${styles.iconBg}`}
                              >
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <Icon
                                  className={`relative h-4 w-4 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5 ${styles.iconColor}`}
                                />
                              </div>
                              <span className="text-xs font-medium text-slate-700 transition-colors duration-300 group-hover:text-slate-900 sm:text-sm">
                                {item.label}
                              </span>
                            </div>
                          </div>
                          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div
                              className={`absolute inset-0 rounded-2xl border-2 animate-pulse ${styles.border}`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mx-auto mt-4 max-w-3xl space-y-4 px-4 pb-4">
                    <p className="text-base font-light text-slate-600 sm:text-lg md:text-xl">
                      Building integrated solutions across real estate, finance, and
                      technology.
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-center gap-4">
                        {['One Vision', 'Three Verticals', 'Limitless Possibilities'].map(
                          (txt, i, arr) => (
                            <React.Fragment key={txt}>
                              <div className="flex items-center gap-4">
                                <div className="group relative cursor-default">
                                  <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-slate-900 sm:text-sm">
                                    {txt}
                                  </span>
                                  <div className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
                                </div>
                              </div>
                              {i !== arr.length - 1 && (
                                <div className="relative h-1.5 w-1.5">
                                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                                  <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75" />
                                </div>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 mt-10">
                    <div className="group relative inline-block">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
                      <button
                        onClick={scrollToDivisions}
                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-[#0076d8] px-6 py-3 text-white transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-indigo-500/30 sm:px-10 sm:py-5"
                      >
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                        <span className="relative text-sm font-semibold tracking-wide sm:text-base">
                          Explore Our Divisions
                        </span>
                        <ArrowDown className="relative h-4 w-4 text-white transition-transform duration-300 group-hover:translate-y-1 sm:h-5 sm:w-5" />
                        <div className="absolute inset-0 rounded-full border-2 border-white/0 transition-all duration-300 group-hover:border-white/30" />
                      </button>
                    </div>

                    <div
                      onClick={scrollToDivisions}
                      className="mt-8 flex cursor-pointer flex-col items-center gap-3 opacity-60 transition-opacity hover:opacity-100"
                    >
                      <span className="text-xs font-medium text-slate-500 sm:text-sm">
                        Scroll down
                      </span>
                      <div className="relative flex h-8 w-5 items-start justify-center rounded-full border-2 border-slate-400 pt-1.5 sm:h-10 sm:w-6 sm:pt-2">
                        <div className="animate-scroll-down h-1.5 w-0.5 rounded-full bg-slate-400 sm:h-2 sm:w-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* divisions */}
          <div id="divisions" className="mx-auto max-w-7xl px-2 pt-0 sm:px-3 md:px-4">
            <h2 className="mb-2 text-center text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">
              Explore Our Divisions
            </h2>
            <p className="mb-6 text-center text-xs text-slate-600 sm:text-sm md:mb-8 md:text-base">
              Click on any division to access specialized services and solutions
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {divisions.map((item, index) => (
                <DivisionCard
                  key={item.title}
                  item={item}
                  index={index}
                  onClick={handleDivisionClick}
                />
              ))}
            </div>
          </div>

          {/* stats */}
          <div className="mb-20 mt-20">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-2xl font-bold text-slate-800 md:text-4xl">
                Our Impact in Numbers
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                Excellence measured through achievements
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
              {stats.map((item, index) => (
                <StatCard key={item.label} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* why choose us */}
          <div className="mb-20 mt-20">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-2xl font-bold text-slate-800 md:text-4xl">
                Why Choose Us
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                What sets us apart from the rest
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => (
                <WhyChooseCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* timeline */}
          <div ref={timelineSectionRef} className="mb-0 mt-16">
            <div className="mb-10 text-center">
              <h2 className="mb-1 text-2xl font-bold text-slate-800 md:text-4xl">
                Our Transformation Journey
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                From vision to Realty
              </p>
            </div>

            <div className="mx-auto max-w-8xl px-2 md:px-4">
              <MobileTimeline progress={timelineProgress} />
              <DesktopTimeline progress={timelineProgress} />
            </div>
          </div>

          {/* journey forward section */}
          <div className="mt-20 w-full">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-3 py-10 sm:px-4 sm:py-12 md:px-6 md:py-16">
              <div className="absolute inset-0 opacity-10">
                <div className="animate-pulse-slow absolute left-1/4 top-0 h-32 w-32 rounded-full bg-blue-500 blur-3xl md:h-96 md:w-96" />
                <div
                  className="animate-pulse-slow absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-cyan-500 blur-3xl md:h-96 md:w-96"
                  style={{ animationDelay: '1.5s' }}
                />
              </div>

              <div className="relative z-10 container mx-auto max-w-6xl">
                <div className="mb-8 text-center md:mb-10">
                  <h2 className="mb-2 text-2xl font-bold text-white md:text-4xl">
                    Our Journey Forward
                  </h2>
                  <p className="text-sm text-blue-100 md:text-base">
                    A transformation story of vision and innovation
                  </p>
                </div>

                <div className="mb-8 flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 md:gap-6">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-lg transition-all duration-500 hover:bg-white/15 md:rounded-2xl md:p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-xl bg-slate-700/50 p-3">
                        <Building2 className="h-6 w-6 text-slate-300" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-300 md:text-lg">
                          AAKAR INFRA SERVICES
                        </h3>
                        <p className="text-xs text-blue-200">Where it began</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">
                      Built on excellence and trust, establishing a legacy of quality
                      infrastructure.
                    </p>
                  </div>

                  <div className="my-1 flex justify-center sm:my-0">
                    <div className="relative">
                      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 blur-xl" />
                      <div className="relative rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3 md:p-4">
                        <ArrowRight className="h-6 w-6 text-white md:h-8 md:w-8" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 shadow-xl backdrop-blur-lg transition-all duration-500 md:rounded-2xl md:p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 shadow-lg">
                        <Sparkles className="animate-spin-slow h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white md:text-lg">
                          HOUSLY FINNTECH REALTY
                        </h3>
                        <p className="text-xs text-cyan-200">The future is now</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-white">
                      Expanding horizons across real estate, finance, and technology.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 bg-gradient-to-r from-white/10 to-white/5 p-4 text-center backdrop-blur-lg md:rounded-2xl md:p-8">
                  <blockquote className="mb-3 text-sm font-bold italic leading-relaxed text-white sm:text-base md:text-xl">
                    "Building on our strong foundation, we're creating a future where
                    real estate, finance, and technology converge to deliver unparalleled
                    value."
                  </blockquote>
                  <p className="text-xs text-blue-200 sm:text-sm">
                    Transforming industries and shaping the future together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <footer className="border-t border-slate-800 bg-slate-900">
            <div className="container mx-auto px-3 py-4 sm:px-4 md:px-6 md:py-6">
              <div className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row sm:text-sm">
                <p className="text-center text-slate-400 sm:text-left">
                  © 2026 Hously Finntech Realty. All rights reserved.
                </p>
                <div className="flex gap-3 sm:gap-4 lg:gap-6">
                  <a
                    href="/privacy-policy"
                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-of-service"
                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/cookie-policy"
                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* scroll top */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-2 right-2 z-50 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-3 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 active:scale-95 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 ${
            showTopButton
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-5 opacity-0'
          }`}
        >
          <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* modal */}
      <DivisionModal item={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
