"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Presentation,
  Flag,
  Award,
  MessageSquare,
  CheckCircle2,
  Clock,
  CalendarDays,
} from "lucide-react";

const milestones = [
  {
    id: 1,
    title: "Project Proposal",
    description:
      "Initial project proposal presentation covering problem identification, literature review, proposed methodology, and project plan.",
    date: "March 2024",
    marks: "12%",
    status: "completed" as const,
    icon: FileText,
    deliverables: [
      "Proposal Report",
      "Proposal Presentation",
      "TAF (Topic Assessment Form)",
    ],
  },
  {
    id: 2,
    title: "Progress Presentation 1",
    description:
      "First progress review demonstrating system design, initial implementation of core AI components, and preliminary results.",
    date: "September 2024",
    marks: "15%",
    status: "completed" as const,
    icon: Presentation,
    deliverables: [
      "PP1 Report (Individual)",
      "PP1 Slides",
      "Research Paper Draft",
      "Log Book",
    ],
  },
  {
    id: 3,
    title: "Progress Presentation 2",
    description:
      "Second progress review showcasing integrated system testing, evaluation results, and refinements to all four components.",
    date: "January 2025",
    marks: "18%",
    status: "completed" as const,
    icon: Presentation,
    deliverables: [
      "PP2 Report (Individual)",
      "PP2 Slides",
      "Status Documents",
      "Log Book",
    ],
  },
  {
    id: 4,
    title: "Final Assessment",
    description:
      "Complete project submission including final reports, fully functional system demonstration, and research paper publication.",
    date: "May 2025",
    marks: "40%",
    status: "in-progress" as const,
    icon: Flag,
    deliverables: [
      "Final Report (Group + Individual)",
      "Final System Demo",
      "Research Paper (Published)",
      "Website",
    ],
  },
  {
    id: 5,
    title: "Viva Voce",
    description:
      "Final oral examination and defense of the research project before the evaluation panel.",
    date: "June 2025",
    marks: "15%",
    status: "upcoming" as const,
    icon: MessageSquare,
    deliverables: ["Viva Presentation", "Individual Q&A", "Demo"],
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    color: "#00b894",
    icon: CheckCircle2,
  },
  "in-progress": {
    label: "In Progress",
    color: "#fdcb6e",
    icon: Clock,
  },
  upcoming: {
    label: "Upcoming",
    color: "#8892b0",
    icon: CalendarDays,
  },
};

export function MilestonesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="milestones"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#00b894] opacity-[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#00b894]/30 bg-[#00b894]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00b894]">
            Project Timeline
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Project <span className="gradient-text">Milestones</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0]">
            Key assessments and deliverables throughout our research project
            timeline.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-6 hidden h-full w-px bg-linear-to-b from-[#6c5ce7] via-[#00d2ff] to-[#00b894] md:left-1/2 md:block" />

          <div className="flex flex-col gap-8">
            {milestones.map((milestone, i) => {
              const status = statusConfig[milestone.status];
              const StatusIcon = status.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } items-start gap-6 md:gap-0`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 top-6 z-10 hidden md:left-1/2 md:block md:-translate-x-1/2">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[#0a0e1a]"
                      style={{ borderColor: status.color }}
                    >
                      <milestone.icon
                        className="h-4 w-4"
                        style={{ color: status.color }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${isEven ? "md:pr-4" : "md:pl-4"
                      } ${isEven ? "" : "md:ml-auto"}`}
                  >
                    <div className="glass group rounded-2xl p-5 transition-all duration-300 hover:bg-white/6">
                      {/* Header */}
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
                          style={{ backgroundColor: `${status.color}15` }}
                        >
                          <milestone.icon
                            className="h-4 w-4"
                            style={{ color: status.color }}
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {milestone.title}
                        </h3>
                        <span
                          className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${status.color}15`,
                            color: status.color,
                          }}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {status.label}
                        </span>
                      </div>

                      <p className="mb-4 text-sm leading-relaxed text-[#8892b0]">
                        {milestone.description}
                      </p>

                      {/* Meta */}
                      <div className="mb-4 flex flex-wrap gap-4">
                        <div className="flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5 text-[#5a6380]" />
                          <span className="text-xs font-medium text-[#8892b0]">
                            {milestone.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-[#5a6380]" />
                          <span className="text-xs font-medium text-[#8892b0]">
                            Marks: {milestone.marks}
                          </span>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#5a6380]">
                          Deliverables
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.deliverables.map((d) => (
                            <span
                              key={d}
                              className="rounded-full border border-white/8 bg-white/3 px-2.5 py-1 text-[11px] text-[#8892b0]"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
