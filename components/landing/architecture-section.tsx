"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Server,
  Database,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const layers = [
  {
    icon: Monitor,
    title: "Frontend Layer",
    desc: "React.js web interface for teachers · React Native mobile app for students",
    color: "#6c5ce7",
    gradient: "from-[#6c5ce7] to-[#a78bfa]",
  },
  {
    icon: Server,
    title: "Backend Layer",
    desc: "RESTful APIs via Flask & FastAPI · Dedicated microservices per component",
    color: "#00d2ff",
    gradient: "from-[#00d2ff] to-[#74b9ff]",
  },
  {
    icon: Database,
    title: "Data Layer",
    desc: "Firebase Realtime Database · Neo4j Knowledge Graph · Real-time sync",
    color: "#00b894",
    gradient: "from-[#00b894] to-[#55efc4]",
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Layer",
    desc: "VLM OCR · Sentence-BERT · BKT + GNN · DistilBERT · Logistic Regression",
    color: "#fdcb6e",
    gradient: "from-[#fdcb6e] to-[#ffeaa7]",
  },
];

export function ArchitectureSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="architecture"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#6c5ce7] opacity-[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00d2ff]">
            System Design
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            System <span className="gradient-text">Architecture</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0] sm:text-lg">
            A modular, microservice-based architecture with four interdependent
            AI components working as a unified ecosystem.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Architecture Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-[#6c5ce7]/10 to-[#00d2ff]/10 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/architecture.png"
                alt="TeachMate AI System Architecture"
                width={600}
                height={450}
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Layers */}
          <div className="flex flex-col gap-4">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="glass-light group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:bg-white/6"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${layer.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  style={{
                    boxShadow: `0 8px 30px ${layer.color}30`,
                  }}
                >
                  <layer.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-white">
                    {layer.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#8892b0]">
                    {layer.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Connection Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-2 flex items-center gap-3 rounded-xl border border-[#6c5ce7]/20 bg-[#6c5ce7]/5 px-5 py-3"
            >
              <ArrowRight className="h-4 w-4 shrink-0 text-[#a78bfa]" />
              <p className="text-sm text-[#a78bfa]">
                All components communicate through a centralized API gateway with
                continuous feedback loop
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
