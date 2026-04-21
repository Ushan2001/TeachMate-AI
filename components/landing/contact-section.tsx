"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  AtSign,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ushanmihiranga2017@gmail.com",
    href: "mailto:ushanmihiranga2017@gmail.com",
    color: "#6c5ce7",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Faculty of Computing, SLIIT, Malabe, Sri Lanka",
    href: "https://maps.google.com/?q=SLIIT+Malabe",
    color: "#00d2ff",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 11 754 4801",
    href: "tel:+94117544801",
    color: "#00b894",
  },
];

export function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formcarry.com/s/jP1mwegvMDo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const data = await response.json();

      if (data.code === 200) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#6c5ce7] opacity-[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00d2ff]">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#8892b0]">
            We welcome collaboration opportunities, feedback, and inquiries
            about TeachMate AI and its applications in education.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:bg-white/6"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon
                    className="h-5 w-5"
                    style={{ color: info.color }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5a6380]">
                    {info.label}
                  </p>
                  <p className="mt-1 text-sm text-white">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Team Emails quick list */}
            <div className="glass rounded-2xl p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#5a6380]">
                Team Members
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Pathiraja P.U.M.", email: "ushanmihiranga2017@gmail.com" },
                  { name: "Wanniarachchi W.A.P.M.", email: "malshanwanniarachchi001@gmail.com" },
                  { name: "Hettiarachchi R.H.", email: "ridmihansini97@gmail.com" },
                  { name: "Jayasooriya L.T.", email: "lashinijayasooriya3@gmail.com" },
                ].map((member) => (
                  <a
                    key={member.email}
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-[#8892b0] transition-colors hover:bg-white/5 hover:text-[#a78bfa]"
                  >
                    <AtSign className="h-3 w-3 shrink-0" />
                    <span className="font-medium text-white">{member.name}</span>
                    <span className="hidden truncate sm:inline">— {member.email}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-white">
              Send us a Message
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00b894]/15">
                  <CheckCircle2 className="h-8 w-8 text-[#00b894]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">Submission Successful!</p>
                  <p className="mt-2 text-sm text-[#8892b0]">
                    Thank you for your interest. We have received your message and will get back to you soon.
                  </p>
                </div>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="mt-4 border-white/10 text-white hover:bg-white/5"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {status === "error" && (
                  <div className="rounded-xl bg-red-500/10 p-4 text-xs font-medium text-red-400 border border-red-500/20">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium text-[#8892b0]"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#5a6380]" />
                    <input
                      id="contact-name"
                      type="text"
                      required
                      disabled={status === "loading"}
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, name: e.target.value }))
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-10 text-sm text-white placeholder-[#5a6380] outline-none transition-colors focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/25 disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium text-[#8892b0]"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#5a6380]" />
                    <input
                      id="contact-email"
                      type="email"
                      required
                      disabled={status === "loading"}
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, email: e.target.value }))
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-10 text-sm text-white placeholder-[#5a6380] outline-none transition-colors focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/25 disabled:opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-xs font-medium text-[#8892b0]"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#5a6380]" />
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      disabled={status === "loading"}
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState((p) => ({
                          ...p,
                          subject: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-10 text-sm text-white placeholder-[#5a6380] outline-none transition-colors focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/25 disabled:opacity-50"
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-medium text-[#8892b0]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    disabled={status === "loading"}
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#5a6380] outline-none transition-colors focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/25 disabled:opacity-50"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-2 w-full rounded-xl bg-linear-to-r from-[#6c5ce7] to-[#00d2ff] py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
