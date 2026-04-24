"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Mail,
  ScanEye,
  Network,
  FileQuestion,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Pathiraja P.U.M.",
    role: "VLM-Based OCR & AI Grading",
    icon: ScanEye,
    email: "ushanmihiranga2017@gmail.com",
    description:
      "Led development of VLM-based grading system using computer vision, OCR, and AI-powered educational technology.",
    color: "#6c5ce7",
    gradient: "from-[#6c5ce7] to-[#a78bfa]",
    initials: "UP",
    image: "/images/ushan.jpeg",
  },
  {
    name: "Wanniarachchi W.A.P.M.",
    role: "Knowledge Graphs & BKT/GNN",
    icon: Network,
    email: "malshanwanniarachchi001@gmail.com",
    description:
      "Led development of knowledge graph and BKT/GNN reteaching guidance module with expertise in graph neural networks.",
    color: "#00d2ff",
    gradient: "from-[#00d2ff] to-[#74b9ff]",
    initials: "MW",
    image: "/images/malshan.jpg",
  },
  {
    name: "Hettiarachchi R.H.",
    role: "Bloom's Taxonomy Question Gen",
    icon: FileQuestion,
    email: "ridmihansini97@gmail.com",
    description:
      "Led development of Bloom's Taxonomy-aligned question paper generation, specializing in NLP and automated assessment.",
    color: "#00b894",
    gradient: "from-[#00b894] to-[#55efc4]",
    initials: "RH",
    image: "/images/ridmi.jpeg",
  },
  {
    name: "Jayasooriya L.T.",
    role: "Personalized Learning Plans",
    icon: Smartphone,
    email: "lashinijayasooriya3@gmail.com",
    description:
      "Led development of personalized learning plan generator and mobile application with focus on recommendation engines.",
    color: "#fdcb6e",
    gradient: "from-[#fdcb6e] to-[#ffeaa7]",
    initials: "LJ",
    image: "/images/lashini.jpg",
  },
];

const supervisors = [
  {
    name: "Samantha Rajapaksha",
    role: "Supervisor",
    email: "samantha.r@sliit.lk",
    initials: "SR",
    image: "/images/samantha.jpg",
  },
  {
    name: "Bhagyanie Chathurika",
    role: "Co-Supervisor",
    email: "bhagyanie.c@sliit.lk",
    initials: "BC",
    image: "/images/bhagyani.jpg",
  },
];

export function TeamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6c5ce7] opacity-[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            Research Team
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0] sm:text-lg">
            Undergraduate researchers from the Faculty of Computing, Sri Lanka
            Institute of Information Technology (SLIIT), Malabe.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="team-card glass group rounded-2xl p-6 text-center"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-5">
                <div
                  className={`relative mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110`}
                  style={{
                    boxShadow: `0 8px 30px ${member.color}30`,
                    background: !member.image ? `var(--linear-to-br, linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to)))` : undefined
                  }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className={`flex h-full w-full items-center justify-center bg-linear-to-br ${member.gradient} text-2xl font-bold text-white`}>
                      {member.initials}
                    </div>
                  )}
                </div>
                <div
                  className="absolute -right-1 -bottom-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0e1a]"
                  style={{ border: `2px solid ${member.color}` }}
                >
                  <member.icon className="h-3.5 w-3.5" style={{ color: member.color }} />
                </div>
              </div>

              {/* Info */}
              <h3 className="mb-1 text-base font-bold text-white">{member.name}</h3>
              <p
                className="mb-3 text-sm font-medium"
                style={{ color: member.color }}
              >
                {member.role}
              </p>
              <p className="mb-4 text-xs leading-relaxed text-[#8892b0]">
                {member.description}
              </p>

              {/* Email */}
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#5a6380] transition-colors hover:text-[#a78bfa]"
              >
                <Mail className="h-3 w-3" />
                <span className="truncate">{member.email}</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Supervisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-white/20" />
            <GraduationCap className="h-5 w-5 text-[#a78bfa]" />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#a78bfa]">
              Supervisors
            </span>
            <GraduationCap className="h-5 w-5 text-[#a78bfa]" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-white/20" />
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {supervisors.map((sup) => (
              <div
                key={sup.name}
                className="glass-light flex items-center gap-4 rounded-2xl px-6 py-4 transition-colors hover:bg-white/6"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-linear-to-br from-[#a78bfa]/20 to-[#6c5ce7]/20">
                  {sup.image ? (
                    <Image
                      src={sup.image}
                      alt={sup.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-[#a78bfa]">
                      {sup.initials}
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{sup.name}</p>
                  <p className="text-xs text-[#8892b0]">{sup.role}</p>
                  <a
                    href={`mailto:${sup.email}`}
                    className="text-xs text-[#5a6380] transition-colors hover:text-[#a78bfa]"
                  >
                    {sup.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
