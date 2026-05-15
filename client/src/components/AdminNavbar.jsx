import React, { useState, useEffect, useRef } from "react";
import { LogOut, ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../api/authApi";

const AdminNavbar = ({ user, onMenuClick, sidebarOpen }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    try { await logoutApi(); } finally {
      sessionStorage.removeItem("hously_user");
      navigate("/");
    }
  };

  const initial = user?.name?.charAt(0)?.toUpperCase() || "A";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4 sm:px-6">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <a href="/" className="flex items-center gap-3">
          <img
            src={new URL("../assets/houslylogo.png", import.meta.url).href}
            alt="Hously"
            className="h-9 w-auto"
            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
          />
          <span style={{ display: "none" }} className="text-[#0c1e4a] text-lg font-extrabold">hously</span>
          <span className="hidden sm:block text-xs font-semibold text-gray-400 uppercase tracking-widest border-l border-gray-200 pl-3">
            Admin Panel
          </span>
        </a>
      </div>

      {/* Right: Profile */}
      <div className="relative" ref={dropRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2 transition"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0076d8] to-[#0c1e4a] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {initial}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-gray-800 leading-none">{user?.name || "Admin"}</p>
          </div>
          <ChevronDown size={15} className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[200]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0c1e4a] to-[#0076d8] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {initial}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate">{user?.name}</p>
                  <p className="text-xs text-white/70 truncate">{user?.email}</p>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="p-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition text-sm font-semibold"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
