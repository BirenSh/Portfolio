import React from 'react';
import {
  Smartphone,
  Code2,
  Layers,
  Database,
  Cpu,
  Cloud,
  Wrench,
  Layout,
  Zap,
  Bot,
  Infinity,
  Search,
  Sparkles,
  Network
} from 'lucide-react';
import { ExperienceItem, SkillGroup, ProjectItem, RoadmapItem } from './types.ts';

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Mobile Programming",
    role: "SDE 2",
    period: "Mar 2026 – Present",
    clients: [
      {
        client: "Porter",
        period: "Mar 2026 – Sep 2026 · Porter Customer App",
        achievements: [
          {
            text: "Built AI-driven workflow automation to accelerate the app's architecture migration fully from RIB to MVVM.",
            icon: <Sparkles className="w-4 h-4 text-fuchsia-500" />
          },
          "Contributed to the design system migration, converting legacy XML layouts to Jetpack Compose for a modern, consistent UI.",
          "Leveraged Amplitude for product analytics, BrowserStack for cross-device testing, Jenkins for CI/CD, and Statsig for feature flagging and experimentation."
        ]
      }
    ]
  },
  {
    company: "Kapture CX",
    role: "Android Developer",
    period: "Feb 2023 to Jan 2026",
    achievements: [
      "Leading Android development for CRM projects, ensuring seamless integration and delivery.",
      "Collaborating with API developers to provide efficient data handling through RESTful APIs and JSON.",
      "Designed and developed a reusable SDK to enhance Android development efficiency across multiple projects.",
      "Actively participating in sprint planning, demos, and retrospectives.",
      "Successfully launched CRM projects for clients including Philips, Bajaj Electricals, Hindware, Faber, and Frootle."
    ]
  },
  {
    company: "Digifinite Solution Pvt. Ltd",
    role: "Android Developer",
    period: "Dec 2021 – Nov 2022",
    achievements: [
      "Contributed to service-based project deliveries, handling everything from UI/UX design to Play Store publishing.",
      "Developed custom UI/UX implementations for new requirements using Android Studio and Jetpack Compose.",
      "Collaborated with the Android team to establish common development tools and library usage across projects.",
      "Estimated development time and communicated progress with Digital Managers and Project Managers."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Kotlin", icon: <Smartphone className="w-5 h-5 text-indigo-500" /> },
      { name: "Jetpack Compose", icon: <Layout className="w-5 h-5 text-cyan-500" /> },
      { name: "KMP & Java", icon: <Infinity className="w-5 h-5 text-violet-500" /> }
    ]
  },
  {
    category: "Core & Arch",
    skills: [
      { name: "MVVM Architecture", icon: <Layers className="w-5 h-5 text-fuchsia-500" /> },
      { name: "RIB Architecture", icon: <Network className="w-5 h-5 text-emerald-500" /> },
      { name: "Coroutines & Threads", icon: <Zap className="w-5 h-5 text-cyan-400" /> },
      { name: "Koin & DI", icon: <Wrench className="w-5 h-5 text-blue-500" /> }
    ]
  },
  {
    category: "Networking & DB",
    skills: [
      { name: "Retrofit & OKHttp", icon: <Code2 className="w-5 h-5 text-rose-500" /> },
      { name: "Room & SQLite", icon: <Database className="w-5 h-5 text-sky-400" /> },
      { name: "Firebase Firestore", icon: <Cloud className="w-5 h-5 text-amber-500" /> }
    ]
  },
  {
    category: "Tools & AI",
    skills: [
      { name: "Cursor & N8N", icon: <Bot className="w-5 h-5 text-slate-400" /> },
      { name: "Clevertap & Sentry", icon: <Search className="w-5 h-5 text-emerald-500" /> },
      { name: "Git & Bitbucket", icon: <Code2 className="w-5 h-5 text-orange-500" /> },
      { name: "Figma (UI/UX)", icon: <Layout className="w-5 h-5 text-purple-500" /> }
    ]
  },
  {
    category: "Analytics & DevOps",
    skills: [
      { name: "Amplitude", icon: <Zap className="w-5 h-5 text-blue-500" /> },
      { name: "BrowserStack", icon: <Smartphone className="w-5 h-5 text-orange-400" /> },
      { name: "Jenkins", icon: <Infinity className="w-5 h-5 text-red-500" /> },
      { name: "Statsig", icon: <Cpu className="w-5 h-5 text-teal-500" /> }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Porter Customer App",
    description: "Migrated the Porter Customer App's design system from legacy XML to Jetpack Compose and built AI-driven workflow automation to accelerate architecture migration.",
    tech: ["Kotlin", "Jetpack Compose", "AI Automation", "Statsig"]
  },
  {
    title: "Kapture Frontline",
    description: "Field service management application to trace product activities. Integrated APIs and third-party libraries for data management using Kotlin and Java.",
    tech: ["Kotlin", "Java", "Firebase Realtime DB"]
  },
  {
    title: "Kapture Lite",
    description: "Green Energy Field service management. A web-based Android application built using Kotlin and Jetpack Compose.",
    tech: ["Kotlin", "Jetpack Compose", "Web-based"]
  },
  {
    title: "Kapture Unified",
    description: "Cross-platform CRM project (Android & iOS) with offline-first support for smooth data transfer and local database integration.",
    tech: ["KMP", "Offline-first", "Firebase Tools"]
  },
  {
    title: "Init-Form",
    description: "CRUD Support application to manage input data remotely/locally. Uses Google Sheets API as a remote database with offline sync.",
    tech: ["Android", "Google Sheets API", "CRUD"]
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    stage: "Stage 1",
    title: "Android Fundamentals",
    description: "XML layouts, Activity lifecycles, and early Java/Kotlin integration."
  },
  {
    stage: "Stage 2",
    title: "Modern Compose UI",
    description: "Mastering Declarative UI with Jetpack Compose and custom UI/UX design in Figma."
  },
  {
    stage: "Stage 3",
    title: "KMP & Cross-Platform",
    description: "Building Unified CRM solutions using Kotlin Multiplatform for Android and iOS."
  },
  {
    stage: "Stage 4",
    title: "Architecture & Scale",
    description: "SDK development, MVVM, and optimizing performance with Firebase tools."
  },
  {
    stage: "Stage 5",
    title: "AI Workflow Automation",
    description: "Building AI-driven workflows to accelerate architecture migration (RIB to MVVM) and boost development productivity."
  }
];

// Derive total years of experience from the earliest start date in EXPERIENCE.
const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
};

const parseStartDate = (period: string): Date | null => {
  const m = period.match(/([A-Za-z]{3})[A-Za-z]*\s+(\d{4})/);
  if (!m) return null;
  const month = MONTHS[m[1].toLowerCase()];
  if (month === undefined) return null;
  return new Date(Number(m[2]), month, 1);
};

export const YEARS_EXPERIENCE = (() => {
  const starts = EXPERIENCE
    .map(e => parseStartDate(e.period))
    .filter((d): d is Date => d !== null);
  if (starts.length === 0) return 0;
  const earliest = Math.min(...starts.map(d => d.getTime()));
  const years = (Date.now() - earliest) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
})();

export const STATS = [
  { label: "Years Experience", value: YEARS_EXPERIENCE, suffix: "+" },
  { label: "Projects Delivered", value: 9, suffix: "+" },
  { label: "Top Clients", value: 7, suffix: "+" },
  { label: "Hackathon Rank", value: 2, suffix: "nd" }
];