"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Presentation,
  Download,
  CalendarDays,
  CheckCircle2,
  Clock,
  Play,
} from "lucide-react";

const presentations = [
  {
    id: 1,
    title: "Proposal Presentation",
    description:
      "Initial project proposal covering problem identification, literature review, proposed solution architecture, and project timeline.",
    date: "March 2024",
    status: "available" as const,
    link: "#",
    slideCount: 28,
  },
  {
    id: 2,
    title: "Progress Presentation 1",
    description:
      "First progress review demonstrating system design, initial implementation of VLM-based grading, knowledge graph prototype, and early evaluation metrics.",
    date: "September 2024",
    status: "available" as const,
    link: "#",
    slideCount: 35,
  },
  {
    id: 3,
    title: "Progress Presentation 2",
    description:
      "Second progress review showcasing integrated system testing, Bloom's classification results, mobile app prototype, and comprehensive evaluation data.",
    date: "January 2025",
    status: "available" as const,
    link: "#",
    slideCount: 42,
  },
  {
    id: 4,
    title: "Final Presentation",
    description:
      "Complete project presentation including final system demo, research results, statistical analysis, and future work recommendations.",
    date: "May 2025",
    status: "available" as const,
    link: "#",
    slideCount: 50,
  },
];

const statusConfig = {
  available: { label: "Available", color: "#00b894", icon: CheckCircle2 },
  pending: { label: "Coming Soon", color: "#8892b0", icon: Clock },
};

export function PresentationsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="presentations"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-[#a78bfa] opacity-[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            Slide Decks
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Presentations</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0]">
            Slides used in past and upcoming presentations throughout the
            research project.
          </p>
        </motion.div>

        {/* Presentation Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {presentations.map((pres, i) => {
            const st = statusConfig[pres.status];
            const StIcon = st.icon;

            return (
              <motion.div
                key={pres.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="glass group rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/6"
              >
                {/* Slide Preview Header */}
                <div className="relative flex h-36 items-center justify-center bg-linear-to-br from-[#6c5ce7]/10 via-[#00d2ff]/5 to-transparent">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-[#a78bfa] transition-transform duration-300 group-hover:scale-110">
                    <Presentation className="h-8 w-8" />
                  </div>
                  {/* Slide count badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                    <Play className="h-2.5 w-2.5" />
                    {pres.slideCount} slides
                  </div>
                  {/* Status badge */}
                  <div
                    className="absolute top-4 left-4 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                    style={{
                      backgroundColor: `${st.color}20`,
                      color: st.color,
                    }}
                  >
                    <StIcon className="h-2.5 w-2.5" />
                    {st.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-1 text-base font-bold text-white">
                    {pres.title}
                  </h3>
                  <div className="mb-3 flex items-center gap-1.5 text-xs text-[#5a6380]">
                    <CalendarDays className="h-3 w-3" />
                    {pres.date}
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-[#8892b0]">
                    {pres.description}
                  </p>

                  {pres.status === "available" && (
                    <a
                      href={pres.link}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#6c5ce7]/10 px-4 py-2 text-xs font-semibold text-[#a78bfa] transition-colors hover:bg-[#6c5ce7]/20"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download Slides
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
