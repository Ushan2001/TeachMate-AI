"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  AlertTriangle,
  Clock,
  Users,
  Target,
  Lightbulb,
  Zap,
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Time-Consuming Grading",
    desc: "Teachers spend 15+ minutes per answer sheet manually grading, leaving little time for teaching.",
    color: "#e17055",
  },
  {
    icon: AlertTriangle,
    title: "Delayed Feedback",
    desc: "Students receive feedback weeks after exams, missing the critical window for effective learning.",
    color: "#fdcb6e",
  },
  {
    icon: Users,
    title: "Generic Instruction",
    desc: "One-size-fits-all teaching fails to identify and address individual student learning gaps.",
    color: "#ff7675",
  },
];

const solutions = [
  {
    icon: Zap,
    title: "84.9% Faster Grading",
    desc: "VLM-based OCR and semantic grading automate answer sheet evaluation in just 2.3 minutes.",
    color: "#6c5ce7",
  },
  {
    icon: Target,
    title: "Precision Gap Detection",
    desc: "BKT + GNN knowledge graphs identify concept-level weaknesses with 0.83 F1-score accuracy.",
    color: "#00d2ff",
  },
  {
    icon: Lightbulb,
    title: "Personalized Learning",
    desc: "AI-generated study plans deliver 14.4% improvement in learning outcomes, statistically verified.",
    color: "#00b894",
  },
];

function AnimatedCard({
  item,
  index,
  variant,
}: {
  item: (typeof problems)[0];
  index: number;
  variant: "problem" | "solution";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-light group relative rounded-2xl p-6 transition-all duration-300 hover:bg-white/6"
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${item.color}15`,
        }}
      >
        <item.icon className="h-6 w-6" style={{ color: item.color }} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
      <p className="text-sm leading-relaxed text-[#8892b0]">{item.desc}</p>
      {variant === "solution" && (
        <div
          className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl opacity-60"
          style={{
            background: `linear-gradient(90deg, ${item.color}, transparent)`,
          }}
        />
      )}
    </motion.div>
  );
}

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={sectionRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#6c5ce7]/30 bg-[#6c5ce7]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            The Challenge
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why <span className="gradient-text">TeachMate AI</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0] sm:text-lg">
            Sri Lanka&apos;s O/L ICT education faces critical challenges with the 2026
            curriculum reforms. Traditional methods can&apos;t keep up.
          </p>
        </motion.div>

        {/* Problems & Solutions Grid */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Problems */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-linear-to-r from-[#e17055]/40 to-transparent" />
              <span className="text-sm font-semibold uppercase tracking-wider text-[#e17055]">
                Problems
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-[#e17055]/40 to-transparent" />
            </motion.div>
            <div className="flex flex-col gap-4">
              {problems.map((item, i) => (
                <AnimatedCard
                  key={item.title}
                  item={item}
                  index={i}
                  variant="problem"
                />
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-linear-to-r from-[#00b894]/40 to-transparent" />
              <span className="text-sm font-semibold uppercase tracking-wider text-[#00b894]">
                Our Solutions
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-[#00b894]/40 to-transparent" />
            </motion.div>
            <div className="flex flex-col gap-4">
              {solutions.map((item, i) => (
                <AnimatedCard
                  key={item.title}
                  item={item}
                  index={i}
                  variant="solution"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
