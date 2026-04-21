"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  ExternalLink,
  Heart,
} from "lucide-react";
import Image from "next/image";

const researchKeywords = [
  "Learning Management System",
  "Automated Grading",
  "VLM",
  "Bayesian Knowledge Tracing",
  "Graph Neural Networks",
  "Bloom's Taxonomy",
  "Personalized Learning",
  "O/L ICT",
  "Sri Lanka Education",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Domain", href: "#domain" },
  { label: "Milestones", href: "#milestones" },
  { label: "Documents", href: "#documents" },
  { label: "Slides", href: "#presentations" },
  { label: "About Us", href: "#team" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer
      className="relative overflow-hidden border-t border-white/5"
      ref={footerRef}
    >
      {/* Footer Grid */}
      <div className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#home" className="mb-4 flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="TeachMate AI Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold text-white">
                  TeachMate <span className="gradient-text">AI</span>
                </span>
              </a>
              <p className="mt-3 text-sm leading-relaxed text-[#8892b0]">
                An Integrated AI-Powered Grading System and Teacher Guidance
                Automation for O/L ICT Education in Sri Lanka.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#5a6380]">
                <MapPin className="h-3.5 w-3.5" />
                <span>SLIIT, Malabe, Sri Lanka</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[#8892b0] transition-colors hover:text-[#a78bfa]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Keywords */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Research Keywords
              </h4>
              <div className="flex flex-wrap gap-2">
                {researchKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-[#8892b0] transition-colors hover:border-[#6c5ce7]/30 hover:text-[#a78bfa]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-[#5a6380]">
            © 2024/2025 TeachMate AI Research Project — SLIIT, Faculty of Computing
          </p>
          <p className="flex items-center gap-1 text-xs text-[#5a6380]">
            Built with by the TeachMate
            AI Team
          </p>
        </div>
      </div>
    </footer>
  );
}
