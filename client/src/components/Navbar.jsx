import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginApi, getMeApi } from "../api/authApi";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs"},
  { name: "Contact", href: "/contact" },
  { name: "Career", href: "/career" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr",
    label: "f",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg==",
    label: "in",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/houlsy-finntech-realty/",
    label: "li",
  },
  { name: "Twitter", href: "#", label: "tw" },
  { name: "YouTube", href: "#", label: "yt" },
];

const GridIcon = () => (
  <div className="grid grid-cols-3 gap-1">
    {Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
    ))}
  </div>
);

/* ══════════════ LOGIN MODAL ══════════════ */
const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setError("");
      setFormData({ email: "", password: "" });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginApi(formData.email, formData.password);
      onLoginSuccess(data.user);
      onClose();
    } catch (err) {
      const msg =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden animate-[fadeIn_.3s_ease]">
          {/* Top Section */}
          <div className="relative bg-gradient-to-r from-[#0c1e4a] to-[#0076d8] px-6 py-8 text-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/25 transition"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src={new URL("../assets/houslylogo.png", import.meta.url).href}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "inline";
                }}
                alt="Hously Logo"
                className="h-12 w-auto mb-3 brightness-125"
              />
              <span
                style={{ display: "none" }}
                className="text-white text-2xl font-extrabold mb-3"
              >
                hously
              </span>

              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="text-white/80 text-sm mt-1">
                Login to your account
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="px-6 py-6">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Error message */}
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  <X size={16} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#0c1e4a] mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0076d8] focus:ring-4 focus:ring-[#0076d8]/10 transition"
                  required
                  disabled={loading}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-[#0c1e4a] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-[#0076d8] focus:ring-4 focus:ring-[#0076d8]/10 transition"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-[#0076d8] transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0076d8] hover:bg-[#0066c0] disabled:bg-[#0076d8]/60 text-white py-3.5 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen || mobileMenuOpen || loginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen, mobileMenuOpen, loginOpen]);

  // Auto-redirect to dashboard if already logged in — only from the landing page
  useEffect(() => {
    // Only redirect from home/landing routes, not from public pages like /blogs, /about etc.
    const homePaths = ["/", "/home"];
    if (!homePaths.includes(location.pathname)) return;
    getMeApi()
      .then(() => navigate("/dashboard", { replace: true }))
      .catch(() => {}); // Not logged in — stay on current page
  }, [location.pathname]);

  // Login success → replace current page in history so Back doesn't return here
  const handleLoginSuccess = (userData) => {
    sessionStorage.setItem("hously_user", JSON.stringify(userData));
    navigate("/dashboard", { replace: true });
  };

  /* ─── scroll styles ─── */
  const navBg = scrolled
    ? "bg-white shadow-md border-b-2 border-[#0076d8]"
    : "bg-[#6f8fb3]/80 backdrop-blur-md border-b border-white/20";

  const linkColor = scrolled
    ? "text-[#0c1e4a] hover:text-[#0076d8]"
    : "text-white hover:text-[#ffd801]";
  const underlineColor = scrolled ? "bg-[#0076d8]" : "bg-[#ffd801]";
  const logoFilter = scrolled
    ? ""
    : "brightness(1.2) contrast(1.1) drop-shadow(0px 4px 8px rgba(0,0,0,0.4))";
  const iconColor = scrolled ? "text-[#0c1e4a]" : "text-white";
  const mobileIconBg = scrolled
    ? "hover:bg-[#0076d8]/10"
    : "hover:bg-white/20";

  return (
    <>
      {/* ══════════════ NAVBAR ══════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${navBg}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={new URL("../assets/houslylogo.png", import.meta.url).href}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
                alt="Hously Logo"
                className="h-11 sm:h-12 md:h-14 w-auto transition-all duration-300"
                style={{ filter: logoFilter }}
              />
              <span
                style={{ display: "none" }}
                className={`text-2xl font-extrabold tracking-tight ${
                  scrolled ? "text-[#0c1e4a]" : "text-white"
                }`}
              >
                hously
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition font-medium relative group ${linkColor}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${underlineColor}`}
                  />
                </a>
              ))}
            </div>

            {/* Desktop Right Buttons — hamesha same */}
            <div className="hidden lg:flex items-center space-x-3">
              <button 
               onClick={() => {
             
               navigate("/contact");
              }}
              className="bg-[#0076d8] hover:bg-[#0066c0] text-white px-6 py-2.5 rounded-full transition font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 cursor-pointer">
                Get A Quote
              </button>

              <button
                onClick={() => setSidebarOpen(true)}
                className={`p-2.5 rounded-lg transition duration-300 hover:rotate-90 ${iconColor} ${mobileIconBg} backdrop-blur-sm`}
              >
                <GridIcon />
              </button>
            </div>

            {/* Mobile: Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded transition ${iconColor}`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════ DESKTOP SIDEBAR (grid button) ══════════════ */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`hidden lg:block fixed inset-0 z-[60] bg-black/40 transition-all duration-300 ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      <div
        className={`hidden lg:block fixed top-0 right-0 h-full w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SidebarContent
          onClose={() => setSidebarOpen(false)}
          onLogoClick={() => {
            setSidebarOpen(false);
            setLoginOpen(true);
          }}
        />
      </div>

      {/* ══════════════ MOBILE BOTTOM DRAWER ══════════════ */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[60] bg-black/50 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      <div
        className={`lg:hidden fixed top-0 left-0 right-0 z-[70] bg-[#0c1e4a] rounded-b-3xl shadow-2xl transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ maxHeight: "85vh", overflowY: "auto" }}
      >
        <div className="flex justify-center pb-3 pt-1 order-last">
          <div className="w-10 h-1 rounded-full bg-white/30" />
        </div>

        <div className="px-6 pb-8 pt-2">
          {/* Header row: Logo + Close */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setLoginOpen(true);
              }}
              className="flex items-center cursor-pointer"
            >
              <img
                src={new URL("../assets/houslylogo.png", import.meta.url).href}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "inline";
                }}
                alt="Hously Logo"
                className="h-10 w-auto brightness-125"
              />
              <span
                style={{ display: "none" }}
                className="text-white text-xl font-extrabold"
              >
                hously
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-1 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-lg font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA — hamesha same */}
          <button 
           onClick={() => {
             
             navigate("/contact");
           }}
          className="w-full bg-[#0076d8] hover:bg-[#0066c0] text-white py-4 rounded-full text-lg font-bold transition shadow-lg shadow-[#0076d8]/40 hover:scale-[1.02] transform duration-200">
            Get A Quote
          </button>
        </div>
      </div>

      {/* Login Popup */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

/* ══ Shared Sidebar Content ══ */
const SidebarContent = ({ onClose, onLogoClick }) => (
  <div className="p-6 relative">
    {/* Close */}
    <button
      onClick={onClose}
      className="absolute top-6 right-6 bg-[#0c1e4a] text-white p-3 rounded-full hover:bg-[#0076d8] transition"
    >
      <X size={22} />
    </button>

    {/* Logo */}
    <div className="mb-6">
      <button
        type="button"
        onClick={onLogoClick}
        className="flex items-center cursor-pointer"
      >
        <img
          src={new URL("../assets/houslylogo.png", import.meta.url).href}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "inline";
          }}
          alt="Hously Logo"
          className="h-12 w-auto"
        />
        <span
          style={{ display: "none" }}
          className="text-[#0c1e4a] text-2xl font-extrabold"
        >
          hously
        </span>
      </button>
    </div>

    {/* About */}
    <p className="text-gray-600 mb-8 leading-relaxed text-sm">
      Hously is a modern and innovative IT solutions company delivering
      reliable, scalable, and secure digital services tailored to meet the
      evolving needs of businesses across industries.
    </p>

    {/* Quick Links */}
    <div className="mb-8">
      <h3 className="text-[#0c1e4a] text-lg font-bold mb-4">Quick Links</h3>
      <div className="flex flex-col gap-3">
        {[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "About", href: "/about" },
          { name: "Contact", href: "/contact" },
          { name: "Career", href: "/career" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="text-[#0c1e4a] font-semibold hover:text-[#0076d8] transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>

    {/* Contact */}
    <div className="mb-8">
      <h3 className="text-[#0c1e4a] text-lg font-bold mb-4">Contact Details</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-50 p-2.5 rounded-full shrink-0">
            <MapPin className="w-5 h-5 text-[#0076d8]" />
          </div>
          <p className="text-gray-700 text-sm">
            First Floor, Tamara Uprise Rahatni, Pune, 411017
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2.5 rounded-full shrink-0">
            <Phone className="w-5 h-5 text-[#0076d8]" />
          </div>
          <p className="text-gray-700 text-sm">+91 9371 00 9381</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-50 p-2.5 rounded-full shrink-0">
            <Mail className="w-5 h-5 text-[#0076d8]" />
          </div>
          <p className="text-gray-700 text-sm">info@hously.in</p>
        </div>
      </div>
    </div>

    {/* Social */}
    <div>
      <h3 className="text-[#0c1e4a] text-lg font-bold mb-4">Follow Us</h3>
      <div className="flex gap-3 flex-wrap">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0c1e4a] text-xs font-bold
              hover:bg-[#0076d8] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Navbar;
