import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "../pages/assests/company-logo.png";

/* ---------------- NAV LINK ---------------- */
const NavLink: React.FC<{ to: string; label: string; active?: boolean }> = ({
  to,
  label,
  active
}) => (
  <Link
    to={to}
    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
      active ? "text-teal-600" : "text-slate-600 hover:text-teal-600"
    }`}
  >
    {label}
    <span
      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500 transform origin-left transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    ></span>
  </Link>
);

/* ---------------- SOCIAL LINKS ---------------- */
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/vittalok/?viewAsMember=true",
    icon: <Linkedin size={18} />
  },
  {
    name: "Twitter",
    url: "#",
    icon: <Twitter size={18} />
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vittalok.in/",
    icon: <Instagram size={18} />
  }
];

/* ---------------- HEADER ---------------- */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-slate-200/50 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="VittaLok Logo"
              className="
                h-8 md:h-9 lg:h-10
                w-auto
                object-contain
                bg-transparent
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                label={item.label}
                active={location.pathname === item.to}
              />
            ))}
            <Link
              to="/contact"
              className="ml-6 px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition-all active:scale-95"
            >
              Get Started
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark text-white border-t border-slate-700/50 absolute w-full left-0 py-8 px-6 shadow-2xl animate-fade-in-down">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-xl font-bold flex items-center justify-between ${
                  location.pathname === item.to
                    ? "text-teal-400"
                    : "text-slate-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <ChevronRight size={20} className="text-slate-500" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 py-4 bg-teal-500 text-slate-900 text-center font-bold rounded-xl shadow-lg shadow-teal-500/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

/* ---------------- FOOTER ---------------- */
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-slate-400 text-sm leading-relaxed">
              The premier partner for enterprise-scale technology integration and
              high-stakes financial advisory.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-teal-400">IT Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-teal-400">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-teal-400">Financial Advisory</Link></li>
              <li><Link to="/services" className="hover:text-teal-400">Risk Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-teal-400" />
                <span>+91 7838600498</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-teal-400" />
                <span>contact@vittalok.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} VittaLok Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

/* ---------------- LAYOUT ---------------- */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mesh-gradient">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
