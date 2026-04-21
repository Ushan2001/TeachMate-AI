"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ScanEye,
  Network,
  FileQuestion,
  GraduationCap,
  Check,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const components = [
  {
    id: 1,
    icon: ScanEye,
    title: "VLM-Based OCR & AI Grading",
    shortTitle: "AI Grading",
    subtitle: "Component 1",
    color: "#6c5ce7",
    gradient: "from-[#6c5ce7] to-[#a78bfa]",
    image: "/images/grading.png",
    description:
      "Automates evaluation of handwritten O/L ICT answer sheets using Qwen2-VL-7B-Instruct Vision-Language Model with Sentence-BERT semantic similarity scoring.",
    techs: ["Qwen2-VL-7B", "Sentence-BERT", "ROUGE Metrics", "OpenCV"],
    features: [
      "4-bit NF4 quantization — reduces GPU memory from 14GB to <5GB",
      "Multi-method semantic evaluation (BERT + ROUGE + Keywords)",
      "96.8% OCR accuracy with VLM fallback",
      "87.3% agreement with human graders within ±2 marks",
      "Constructive natural language feedback generation",
    ],
    leadBy: "Pathiraja P.U.M.",
  },
  {
    id: 2,
    icon: Network,
    title: "Knowledge Graphs & Reteaching Guidance",
    shortTitle: "Knowledge Graphs",
    subtitle: "Component 2",
    color: "#00d2ff",
    gradient: "from-[#00d2ff] to-[#74b9ff]",
    image: "/images/knowledge-graph.png",
    description:
      "Builds dynamic student knowledge graphs using Bayesian Knowledge Tracing and Graph Neural Networks to generate targeted reteaching recommendations.",
    techs: ["Neo4j", "BKT", "Graph Attention Network", "BERT NER"],
    features: [
      "150+ concept nodes from O/L ICT syllabus ontology",
      "3-layer GAT architecture with attention mechanisms",
      "0.83 F1-score outperforming BKT-only (0.76) baseline",
      "68.3% recommendations accepted without modification",
      "+18.4% score increase in weak topics after reteaching",
    ],
    leadBy: "Wanniarachchi W.A.P.M.",
  },
  {
    id: 3,
    icon: FileQuestion,
    title: "Bloom's Taxonomy Question Generator",
    shortTitle: "Question Gen",
    subtitle: "Component 3",
    color: "#00b894",
    gradient: "from-[#00b894] to-[#55efc4]",
    image: "/images/question-gen.png",
    description:
      "Generates pedagogically sound question papers using DistilBERT classification and Integer Linear Programming for optimal question selection.",
    techs: ["DistilBERT", "all-MiniLM-L6-v2", "ILP Optimization", "TF-IDF"],
    features: [
      "6-level Bloom's Taxonomy classification (86% accuracy)",
      "Dual-method: semantic similarity + keyword boosting",
      "ILP-based constraint satisfaction for paper generation",
      "100% topic coverage compliance across 45 test papers",
      "Version control prevents question repetition",
    ],
    leadBy: "Hettiarachchi R.H.",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Personalized Learning Plan Generator",
    shortTitle: "Learning Plans",
    subtitle: "Component 4",
    color: "#fdcb6e",
    gradient: "from-[#fdcb6e] to-[#ffeaa7]",
    image: "/images/learning-plan.png",
    description:
      "Synthesizes performance data to produce individualized study plans with adaptive resource tracking, delivered through a React Native mobile application.",
    techs: ["Logistic Regression", "Sentence-BERT", "React Native", "TF-IDF"],
    features: [
      "14.4% learning improvement vs 6.4% control group",
      "Adaptive resource completion prediction via LogReg",
      "Spaced repetition scheduling for long-term retention",
      "91.7% progress tracking adoption by students",
      "3-way parent-teacher-student accountability loop",
    ],
    leadBy: "Jayasooriya L.T.",
  },
];

function ComponentCard({
  component,
  isActive,
  onClick,
}: {
  component: (typeof components)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left rounded-xl border p-4 transition-all duration-300 ${isActive
        ? "border-white/20 bg-white/6"
        : "border-transparent bg-white/2 hover:bg-white/4"
        }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${component.gradient} transition-transform duration-300 group-hover:scale-110`}
          style={{ boxShadow: isActive ? `0 6px 20px ${component.color}40` : "none" }}
        >
          <component.icon className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-[#8892b0]">{component.subtitle}</p>
          <p className="truncate text-sm font-semibold text-white">
            {component.shortTitle}
          </p>
        </div>
        <ChevronRight
          className={`h-4 w-4 shrink-0 text-[#8892b0] transition-all duration-300 ${isActive ? "rotate-90 text-white" : ""
            }`}
        />
      </div>
    </button>
  );
}

export function ComponentsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const active = components[activeIndex];

  return (
    <section
      id="components"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#00d2ff] opacity-[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#00b894]/30 bg-[#00b894]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00b894]">
            Four AI Components
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Intelligent <span className="gradient-text">Components</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0] sm:text-lg">
            Four synergistic AI-powered modules that work independently and as a
            unified ecosystem to automate the complete teacher–student feedback loop.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 lg:grid-cols-[300px_1fr]"
        >
          {/* Sidebar Tabs */}
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
            {components.map((comp, i) => (
              <ComponentCard
                key={comp.id}
                component={comp}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Active Component Detail */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-72">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <Badge
                  className="mb-2 rounded-full text-xs font-semibold text-white"
                  style={{
                    backgroundColor: `${active.color}25`,
                    border: `1px solid ${active.color}40`,
                    color: active.color,
                  }}
                >
                  {active.subtitle}
                </Badge>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {active.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <p className="mb-6 text-sm leading-relaxed text-[#8892b0] sm:text-base">
                {active.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#5a6380]">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#a78bfa]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#5a6380]">
                  Key Results
                </p>
                <ul className="flex flex-col gap-2.5">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div
                        className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${active.color}20` }}
                      >
                        <Check
                          className="h-2.5 w-2.5"
                          style={{ color: active.color }}
                        />
                      </div>
                      <span className="text-sm text-[#8892b0]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lead */}
              <div className="flex items-center gap-2 border-t border-white/5 pt-4">
                <span className="text-xs text-[#5a6380]">Lead Researcher:</span>
                <span className="text-sm font-medium text-white">
                  {active.leadBy}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
