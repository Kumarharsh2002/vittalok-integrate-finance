import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Code,
  BarChart3,
} from "lucide-react";

/* ================== CLIENT LOGOS ================== */
import tatalogo from "./assests/tatacaptial-logo.png";
import idfclogo from "./assests/idfc-logo.png";
import incredlogo from "./assests/incred-logo.png";
import axisbanklogo from "./assests/axisbank-logo.png";

/* ================== PARTNER LOGOS ================== */
import hpLogo from "./assests/HP-Logo.webp";
import dellLogo from "./assests/dell-logo.webp";
import ciscoLogo from "./assests/cisco-logo.webp";
import tenableLogo from "./assests/tenable-logo.webp";
import paloaltoLogo from "./assests/Palo-Alto-logo.webp";
import nivettiLogo from "./assests/nivetti-logo.webp";

/* ================== DATA ================== */
const companies = [
  { name: "Tata Capital", logo: tatalogo },
  { name: "Axis Bank", logo: axisbanklogo },
  { name: "IDFC Bank", logo: idfclogo },
  { name: "Saraswat Bank", logo: "https://www.saraswatbank.com/images/logo.png" },
  { name: "InCred", logo: incredlogo },
];

const partners = [
  { name: "HP", logo: hpLogo },
  { name: "Dell Technologies", logo: dellLogo },
  { name: "Cisco", logo: ciscoLogo },
  { name: "Palo Alto Networks", logo: paloaltoLogo },
  { name: "Tenable", logo: tenableLogo },
  { name: "Nivetti", logo: nivettiLogo },
];

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[95vh] flex items-center pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-teal-400 text-xs font-bold rounded-full uppercase">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></span>
              Global Enterprise Integration & Finance Partner
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9]">
              Scale With <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-slate-900">
                Absolute
              </span>{" "}
              <br />
              Precision.
            </h1>

            <p className="text-xl text-slate-600 max-w-lg">
              VittaLok delivers the dual-pillar framework of technical agility and
              financial foresight required to lead in the modern economy.
            </p>

            <div className="flex gap-6">
              <Link
                to="/services"
                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-teal-600 transition"
              >
                View Our Solutions <ChevronRight />
              </Link>

              <Link
                to="/case-studies"
                className="px-10 py-5 glass border rounded-2xl font-bold"
              >
                Our Impact
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-8 rounded-[40px] hover:scale-105 transition">
              <Zap size={40} className="text-teal-600 mb-6" />
              <h3 className="text-2xl font-bold">Systems</h3>
              <p className="text-sm text-slate-500">
                Zero-latency integration for complex ecosystems.
              </p>
            </div>

            <div className="bg-teal-600 p-8 rounded-[40px] text-white hover:scale-105 transition">
              <BarChart3 size={40} className="mb-6" />
              <h3 className="text-2xl font-bold">Strategy</h3>
              <p className="text-sm text-teal-100">
                Financial modeling for scalable growth.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-[40px] text-white hover:scale-105 transition">
              <ShieldCheck size={40} className="text-teal-400 mb-6" />
              <h3 className="text-2xl font-bold">Security</h3>
              <p className="text-sm text-slate-400">
                Enterprise-grade cyber defense.
              </p>
            </div>

            <div className="glass p-8 rounded-[40px] hover:scale-105 transition">
              <Users size={40} className="mb-6" />
              <h3 className="text-2xl font-bold">300+ Happy Clients</h3>
              <p className="text-sm text-slate-500">
                Trusted partnerships with measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGO SCROLLER ================= */}
      <section className="bg-gray-50 py-12 overflow-hidden">
        <h2 className="text-center text-2xl font-bold mb-8">
          Trusted By Leading Institutions
        </h2>

        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((c, i) => (
            <img
              key={i}
              src={c.logo}
              alt={c.name}
              className="h-16 object-contain"
            />
          ))}
        </motion.div>
      </section>

      {/* ================= PARTNER SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Our <span className="text-teal-600">Technology Partners</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We collaborate with global technology leaders to deliver secure,
              scalable, and future-ready enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-6 bg-slate-50 rounded-3xl hover:shadow-xl hover:scale-105 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          <div className="p-12 bg-slate-50 rounded-[50px]">
            <Code size={40} className="text-teal-600 mb-6" />
            <h3 className="text-3xl font-bold mb-6">System Integration</h3>
            <ul className="space-y-4">
              {["Cloud Migration", "Cybersecurity", "IT Audit"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 bg-slate-900 text-white rounded-[50px]">
            <BarChart3 size={40} className="text-teal-400 mb-6" />
            <h3 className="text-3xl font-bold mb-6">Financial Advisory</h3>
            <p className="text-slate-300">
              Strategic capital management and growth advisory for high-growth
              enterprises.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
