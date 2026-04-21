"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  TrendingUp,
  Timer,
  BarChart3,
  Target,
  Users,
  BookCheck,
  Smartphone,
  ThumbsUp,
} from "lucide-react";

const mainStats = [
  {
    icon: Timer,
    value: 84.9,
    suffix: "%",
    label: "Grading Time Reduction",
    detail: "15.2 min → 2.3 min per sheet",
    color: "#6c5ce7",
  },
  {
    icon: Target,
    value: 0.83,
    suffix: "",
    label: "F1-Score (GNN+BKT)",
    detail: "Outperforming all baselines",
    color: "#00d2ff",
    decimals: 2,
  },
  {
    icon: BarChart3,
    value: 86,
    suffix: "%",
    label: "Bloom's Classification",
    detail: "90%+ with fine-tuned DistilBERT",
    color: "#00b894",
  },
  {
    icon: TrendingUp,
    value: 14.4,
    suffix: "%",
    label: "Learning Improvement",
    detail: "vs 6.4% control group (p<0.001)",
    color: "#fdcb6e",
    decimals: 1,
  },
];

const detailedMetrics = [
  { icon: Users, value: "120", label: "Students Evaluated", color: "#a78bfa" },
  { icon: BookCheck, value: "87.3%", label: "Grading Agreement (±2 marks)", color: "#74b9ff" },
  { icon: ThumbsUp, value: "68.3%", label: "Recommendations Accepted", color: "#55efc4" },
  { icon: Smartphone, value: "91.7%", label: "Mobile App Adoption", color: "#ffeaa7" },
  { icon: Timer, value: "12.5h", label: "Weekly Time Saved per Teacher", color: "#fd79a8" },
  { icon: TrendingUp, value: "18.4%", label: "Score Increase in Weak Topics", color: "#e17055" },
];

function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  isInView,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function ResultsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="results"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-[#6c5ce7]/3 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#fdcb6e]/30 bg-[#fdcb6e]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#fdcb6e]">
            Experimental Evaluation
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Research <span className="gradient-text-warm">Results</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0] sm:text-lg">
            Evaluated across 2 schools, 120 Grade 11 students, and 6 ICT
            teachers over one academic term in Sri Lanka&apos;s Western Province.
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mainStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="stat-card glass rounded-2xl p-6 text-center"
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="h-7 w-7" style={{ color: stat.color }} />
              </div>
              <p
                className="text-3xl font-extrabold sm:text-4xl"
                style={{ color: stat.color }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  isInView={isInView}
                />
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-[#5a6380]">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-light rounded-3xl p-6 sm:p-8"
        >
          <h3 className="mb-6 text-center text-lg font-semibold text-white">
            Additional Metrics
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detailedMetrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-4 rounded-xl bg-white/3 p-4 transition-colors hover:bg-white/6"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${m.color}15` }}
                >
                  <m.icon className="h-5 w-5" style={{ color: m.color }} />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{m.value}</p>
                  <p className="text-xs text-[#8892b0]">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass rounded-3xl p-6 sm:p-8"
        >
          <h3 className="mb-6 text-center text-lg font-semibold text-white">
            Learning Outcome Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-4 text-left font-semibold text-[#8892b0]">
                    Group
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#8892b0]">
                    Pre-Test
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-[#8892b0]">
                    Post-Test
                  </th>
                  <th className="py-3 pl-4 text-center font-semibold text-[#8892b0]">
                    Improvement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 pr-4 text-white">
                    Control Group (n=60)
                  </td>
                  <td className="px-4 py-4 text-center text-[#8892b0]">52.3%</td>
                  <td className="px-4 py-4 text-center text-[#8892b0]">58.7%</td>
                  <td className="py-4 pl-4 text-center font-semibold text-[#e17055]">
                    +6.4%
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-semibold text-white">
                    AI LMS Group (n=60)
                  </td>
                  <td className="px-4 py-4 text-center text-[#8892b0]">51.8%</td>
                  <td className="px-4 py-4 text-center text-[#8892b0]">66.2%</td>
                  <td className="py-4 pl-4 text-center font-bold text-[#00b894]">
                    +14.4% ✓
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-[#5a6380]">
            Independent samples t-test: t(118) = 3.42, p &lt; 0.001 — statistically
            significant
          </p>
        </motion.div>
      </div>
    </section>
  );
}
