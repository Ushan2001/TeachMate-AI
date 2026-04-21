"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Domain", href: "#domain" },
  { label: "Milestones", href: "#milestones" },
  { label: "Documents", href: "#documents" },
  { label: "Slides", href: "#presentations" },
  { label: "About Us", href: "#team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled ? "nav-blur shadow-lg shadow-black/20" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image 
              src="/images/logo.png" 
              alt="TeachMate AI Logo" 
              width={44} 
              height={44} 
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-white">TeachMate</span>
            <span className="gradient-text"> AI</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-[#8892b0] transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="ml-4 rounded-full bg-linear-to-r from-[#6c5ce7] to-[#00d2ff] px-6 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:brightness-110"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 md:hidden nav-blur"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-[#8892b0] transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 rounded-full bg-linear-to-r from-[#6c5ce7] to-[#00d2ff] text-sm font-semibold text-white"
              >
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Contact Us
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
