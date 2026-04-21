"use client";

import { motion } from "framer-motion";
import { ArrowDown, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6c5ce7] opacity-[0.07] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#00d2ff] opacity-[0.07] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] opacity-[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6c5ce7]/30 bg-[#6c5ce7]/10 px-4 py-2 text-sm text-[#a78bfa]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                SLIIT Research Project 2024/2025
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-white">TeachMate</span>
              <br />
              <span className="gradient-text">AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-4 text-lg leading-relaxed text-[#8892b0] sm:text-xl"
            >
              An Integrated AI-Powered Grading System &amp; Teacher Guidance
              Automation for O/L ICT Education in Sri Lanka
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-8 text-sm leading-relaxed text-[#5a6380]"
            >
              Faculty of Computing, Sri Lanka Institute of Information Technology
              (SLIIT)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-linear-to-r from-[#6c5ce7] to-[#00d2ff] px-8 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:brightness-110"
              >
                <a href="#components">
                  <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Explore Research
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/10 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#6c5ce7]/40 hover:bg-white/10"
              >
                <a href="#team">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Meet the Team
                </a>
              </Button>
            </motion.div>

            {/* Key Stats Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:justify-start"
            >
              {[
                { value: "84.9%", label: "Grading Time Saved" },
                { value: "0.83", label: "F1-Score" },
                { value: "14.4%", label: "Learning Improvement" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[#5a6380]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="animate-float-slow relative">
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-[#6c5ce7]/20 to-[#00d2ff]/20 blur-2xl" />
              <div className="glass relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/images/hero.png"
                  alt="TeachMate AI Platform"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#5a6380] transition-colors hover:text-[#a78bfa]"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
