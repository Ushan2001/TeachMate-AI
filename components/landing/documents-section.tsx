"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Download,
  Eye,
  ExternalLink,
  FolderOpen,
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  BookOpen,
} from "lucide-react";

const documentCategories = [
  {
    title: "Project Charter",
    icon: FileText,
    color: "#6c5ce7",
    documents: [
      {
        name: "Project Charter",
        type: "PDF",
        status: "available" as const,
        description: "Initial project charter defining scope, stakeholders, and objectives.",
        link: "#",
      },
    ],
  },
  {
    title: "Proposal Documents",
    icon: BookOpen,
    color: "#00d2ff",
    documents: [
      {
        name: "Research Proposal Document",
        type: "PDF",
        status: "available" as const,
        description: "Comprehensive proposal covering problem, literature review, and methodology.",
        link: "#",
      },
      {
        name: "Topic Assessment Form (TAF)",
        type: "PDF",
        status: "available" as const,
        description: "Topic assessment form approved by the department.",
        link: "#",
      },
    ],
  },
  {
    title: "Status Documents",
    icon: FileSpreadsheet,
    color: "#00b894",
    documents: [
      {
        name: "Status Document - 1",
        type: "PDF",
        status: "available" as const,
        description: "First status checklist covering initial progress milestones.",
        link: "#",
      },
      {
        name: "Status Document - 2",
        type: "PDF",
        status: "available" as const,
        description: "Second status checklist covering mid-project evaluation.",
        link: "#",
      },
    ],
  },
  {
    title: "Individual Reports",
    icon: FolderOpen,
    color: "#fdcb6e",
    documents: [
      {
        name: "IT21168222 - VLM-Based OCR & AI Grading",
        type: "PDF",
        status: "available" as const,
        description: "Individual report by Pathiraja P.U.M. — Component 1.",
        link: "#",
      },
      {
        name: "IT21164330 - Knowledge Graphs & BKT/GNN",
        type: "PDF",
        status: "available" as const,
        description: "Individual report by Wanniarachchi W.A.P.M. — Component 2.",
        link: "#",
      },
      {
        name: "IT21175466 - Bloom's Taxonomy Question Gen",
        type: "PDF",
        status: "available" as const,
        description: "Individual report by Hettiarachchi R.H. — Component 3.",
        link: "#",
      },
      {
        name: "IT21219320 - Personalized Learning Plans",
        type: "PDF",
        status: "available" as const,
        description: "Individual report by Jayasooriya L.T. — Component 4.",
        link: "#",
      },
    ],
  },
  {
    title: "Final Documents",
    icon: FileText,
    color: "#e17055",
    documents: [
      {
        name: "Final Group Report",
        type: "PDF",
        status: "available" as const,
        description: "Complete group research report covering all four components.",
        link: "#",
      },
      {
        name: "Research Paper",
        type: "PDF",
        status: "available" as const,
        description: "Published research paper — TeachMate AI Journal Paper.",
        link: "#",
      },
    ],
  },
];

const statusConfig = {
  available: { label: "Available", color: "#00b894", icon: CheckCircle2 },
  pending: { label: "Pending", color: "#fdcb6e", icon: Clock },
};

export function DocumentsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="documents"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#fdcb6e] opacity-[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#fdcb6e]/30 bg-[#fdcb6e]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#fdcb6e]">
            Project Outputs
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Documents</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0]">
            All project documents, reports, and deliverables produced throughout
            the research lifecycle.
          </p>
        </motion.div>

        {/* Document Categories */}
        <div className="flex flex-col gap-6">
          {documentCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + catIdx * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/5 p-5">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon
                    className="h-5 w-5"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {category.title}
                </h3>
                <span className="ml-auto rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-[#8892b0]">
                  {category.documents.length}{" "}
                  {category.documents.length === 1 ? "file" : "files"}
                </span>
              </div>

              {/* Documents List */}
              <div className="divide-y divide-white/5">
                {category.documents.map((doc) => {
                  const st = statusConfig[doc.status];
                  return (
                    <div
                      key={doc.name}
                      className="group flex flex-col gap-3 p-4 transition-colors hover:bg-white/3 sm:flex-row sm:items-center sm:gap-4"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium text-white">
                            {doc.name}
                          </p>
                          <span
                            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                            style={{
                              backgroundColor: `${st.color}15`,
                              color: st.color,
                            }}
                          >
                            <st.icon className="h-2.5 w-2.5" />
                            {st.label}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-[#5a6380]">
                          {doc.description}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#8892b0]">
                          {doc.type}
                        </span>
                        {doc.status === "available" && (
                          <a
                            href={doc.link}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[#8892b0] transition-colors hover:bg-[#6c5ce7]/20 hover:text-[#a78bfa]"
                            title="Download"
                          >
                            <Download className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
