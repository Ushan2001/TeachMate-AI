"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  BookOpen,
  Search,
  AlertCircle,
  Target,
  Cog,
  Cpu,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Layers,
} from "lucide-react";

const domainItems = [
  {
    id: "literature",
    icon: BookOpen,
    title: "Literature Survey",
    color: "#6c5ce7",
    content: [
      {
        heading: "Automated Assessment & Grading",
        text: "Traditional assessment methods are time-consuming and prone to human error. Recent advances in NLP, particularly transformer-based models like BERT, achieve accuracy comparable to human graders for short written answers (Ramesh & Sanampudi, 2022). Vision-Language Models (VLMs) now enable simultaneous perception of layout and text for complex handwritten documents.",
      },
      {
        heading: "Knowledge Representation & Learning Analytics",
        text: "Knowledge graphs model prerequisite relationships between concepts (Chen et al., 2017). Bayesian Knowledge Tracing (BKT) estimates student mastery over time using four parameters. Graph Neural Networks (GNNs) outperform traditional BKT by capturing complex concept dependencies through message-passing operations (Nakagawa et al., 2019).",
      },
      {
        heading: "Adaptive Learning & Personalization",
        text: "Personalized learning systems tailor content and pacing to individual needs. Mobile learning applications significantly improve student motivation and flexibility (Crompton & Burke, 2018). The ResourceCompletionPredictor pattern using logistic regression represents an emerging approach to adaptive resource sequencing.",
      },
      {
        heading: "Bloom's Taxonomy in Assessment Design",
        text: "Bloom's Taxonomy remains the dominant framework for designing assessments with cognitive complexity. Automated classification using fine-tuned DistilBERT achieves over 90% accuracy (Goel & Singh, 2023). Our work extends this by combining cosine similarity with keyword-boosting heuristics.",
      },
    ],
  },
  {
    id: "gap",
    icon: Search,
    title: "Research Gap",
    color: "#00d2ff",
    content: [
      {
        heading: "Fragmented Systems",
        text: "While individual components — automated grading, knowledge graphs, question generation, and personalized learning — have been studied separately, very few systems integrate all elements into a cohesive platform.",
      },
      {
        heading: "Western-Centric Solutions",
        text: "Most existing research focuses on Western contexts with well-resourced digital infrastructures, underexploring challenges specific to developing countries like Sri Lanka.",
      },
      {
        heading: "Lack of Actionable Feedback",
        text: "Most automated grading systems stop at assigning marks without providing actionable reteaching recommendations or identifying concept-level learning gaps.",
      },
      {
        heading: "No End-to-End Feedback Loop",
        text: "Current LMS platforms lack integration between assessment automation, semantic analysis of student understanding, and personalized learning-path generation — failing to close the teacher-student feedback loop.",
      },
    ],
  },
  {
    id: "problem",
    icon: AlertCircle,
    title: "Research Problem",
    color: "#e17055",
    content: [
      {
        heading: "Core Problem Statement",
        text: "Sri Lanka's evolving O/L ICT education system, with its 2026 curriculum reforms emphasizing competency-based learning and AI integration, demands innovative assessment and personalized learning approaches. Traditional manual grading and generic teaching methods fail to provide timely feedback or adaptive learning paths, creating significant barriers to effective education delivery.",
      },
      {
        heading: "Teacher Overload",
        text: "Teachers face overwhelming workloads — manually grading answer sheets for large classrooms (15.2 min/sheet), struggling to identify individual learning gaps, and lacking tools for timely personalized interventions.",
      },
      {
        heading: "Student Impact",
        text: "Students receive delayed feedback and generic instruction that fails to address their unique conceptual weaknesses, leading to persistent learning gaps and suboptimal academic outcomes.",
      },
    ],
  },
  {
    id: "objectives",
    icon: Target,
    title: "Research Objectives",
    color: "#00b894",
    content: [
      {
        heading: "Objective 1",
        text: "Significantly reduce teacher workload in assessment and grading through automated VLM-based OCR and semantic grading of handwritten O/L ICT answer sheets.",
      },
      {
        heading: "Objective 2",
        text: "Enable precise identification of concept-level learning gaps using dynamic knowledge graphs powered by Bayesian Knowledge Tracing and Graph Neural Networks.",
      },
      {
        heading: "Objective 3",
        text: "Automate generation of pedagogically sound, Bloom's Taxonomy-aligned question papers using DistilBERT classification and Integer Linear Programming optimization.",
      },
      {
        heading: "Objective 4",
        text: "Provide students with personalized, actionable learning guidance through adaptive learning plans with resource tracking, delivered via a mobile application.",
      },
    ],
  },
  {
    id: "methodology",
    icon: FlaskConical,
    title: "Methodology",
    color: "#fdcb6e",
    content: [
      {
        heading: "System Architecture",
        text: "Modular microservice-based architecture with four interdependent AI components: Frontend Layer (React.js + React Native), Backend Layer (Flask + FastAPI), Data Layer (Firebase + Neo4j), and AI/ML Layer with specialized models.",
      },
      {
        heading: "Component 1: VLM-Based Grading",
        text: "Image preprocessing (OpenCV + PIL) → Qwen2-VL-7B-Instruct OCR (4-bit NF4 quantization) → Answer segmentation → Multi-method semantic evaluation (Sentence-BERT + ROUGE + Keyword matching) → Feedback generation.",
      },
      {
        heading: "Component 2: Knowledge Graphs",
        text: "BERT-based NER for concept extraction → Neo4j knowledge graph construction → 4-parameter BKT with EM optimization → 3-layer GAT architecture for latent weakness prediction → Prioritized reteaching recommendations.",
      },
      {
        heading: "Component 3: Question Generation",
        text: "Question bank management → Dual-method Bloom's classification (all-MiniLM-L6-v2 + keyword boosting) → ILP-based constrained paper generation → PDF output with version control.",
      },
      {
        heading: "Component 4: Learning Plans",
        text: "Multi-source data aggregation → ML-based performance analysis → ResourceCompletionPredictor (Logistic Regression) → Prerequisite-aware learning path construction → React Native mobile delivery with parent portal.",
      },
      {
        heading: "Evaluation",
        text: "Deployed in 2 secondary schools (Western Province, Sri Lanka), with 120 Grade 11 students (60 treatment + 60 control) and 6 ICT teachers over one academic term. Independent samples t-test for statistical significance.",
      },
    ],
  },
  {
    id: "technologies",
    icon: Cpu,
    title: "Technologies Used",
    color: "#a78bfa",
    content: [
      {
        heading: "AI / ML Models",
        text: "Qwen2-VL-7B-Instruct (VLM OCR), Sentence-BERT (all-MiniLM-L6-v2), DistilBERT (Bloom's classification), Graph Attention Network (GNN), Bayesian Knowledge Tracing (BKT), Logistic Regression, BERT NER.",
      },
      {
        heading: "Backend & APIs",
        text: "Python, Flask, FastAPI, RESTful APIs, BitsAndBytesConfig (4-bit quantization), PuLP (ILP optimization), OpenCV, PIL, ROUGE scoring, TF-IDF, scikit-learn.",
      },
      {
        heading: "Frontend & Mobile",
        text: "React.js (Teacher Web Interface), React Native (Student Mobile App), Next.js (Research Website).",
      },
      {
        heading: "Data & Infrastructure",
        text: "Firebase Realtime Database, Neo4j Graph Database, Google Colab / GPU servers, Git version control.",
      },
    ],
  },
];

function DomainAccordion({
  item,
  isOpen,
  toggleOpen,
  index,
  isInView,
}: {
  item: (typeof domainItems)[0];
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        borderLeft: `3px solid ${item.color}`,
      }}
    >
      <button
        onClick={toggleOpen}
        className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-white/3"
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${item.color}15` }}
        >
          <item.icon className="h-5 w-5" style={{ color: item.color }} />
        </div>
        <span className="flex-1 text-base font-semibold text-white sm:text-lg">
          {item.title}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#8892b0]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#8892b0]" />
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="border-t border-white/5 px-5 pb-5"
        >
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {item.content.map((block) => (
              <div
                key={block.heading}
                className="rounded-xl bg-white/3 p-4 transition-colors hover:bg-white/5"
              >
                <h4
                  className="mb-2 text-sm font-semibold"
                  style={{ color: item.color }}
                >
                  {block.heading}
                </h4>
                <p className="text-xs leading-relaxed text-[#8892b0] sm:text-sm">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function DomainSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(["literature"])
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id="domain"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-[#6c5ce7] opacity-[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#6c5ce7]/30 bg-[#6c5ce7]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            Research Domain
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Research <span className="gradient-text">Domain</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0]">
            Explore our literature foundations, identified research gaps,
            objectives, methodology, and technology stack.
          </p>
        </motion.div>

        {/* Accordion Items */}
        <div className="flex flex-col gap-4">
          {domainItems.map((item, i) => (
            <DomainAccordion
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              toggleOpen={() => toggleItem(item.id)}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
