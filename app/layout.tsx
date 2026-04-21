import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TeachMate AI — AI-Powered Grading & Learning System for O/L ICT",
  description:
    "An Integrated AI-Powered Grading System and Teacher Guidance Automation for O/L ICT Education in Sri Lanka. Research by SLIIT Faculty of Computing.",
  keywords: [
    "TeachMate AI",
    "AI Grading",
    "Learning Management System",
    "SLIIT",
    "Sri Lanka Education",
    "O/L ICT",
    "Automated Assessment",
    "Knowledge Graph",
    "Personalized Learning",
    "Bloom's Taxonomy",
  ],
  authors: [
    { name: "Pathiraja P.U.M." },
    { name: "Wanniarachchi W.A.P.M." },
    { name: "Hettiarachchi R.H." },
    { name: "Jayasooriya L.T." },
  ],
  openGraph: {
    title: "TeachMate AI — AI-Powered Grading & Learning System",
    description:
      "Integrated AI-driven LMS with automated grading, knowledge graphs, question generation, and personalized learning for O/L ICT Education in Sri Lanka.",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", inter.variable)}>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
