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
  Search
} from 'lucide-react';
import { ExperienceItem, SkillGroup, ProjectItem, RoadmapItem } from './types.ts';

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Kapture CX",
    role: "Android Developer",
    period: "Feb 2023 – Present",
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
  }
];

export const PROJECTS: ProjectItem[] = [
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
  }
];

export const STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 8, suffix: "+" },
  { label: "Top Clients", value: 6, suffix: "+" },
  { label: "Hackathon Rank", value: 2, suffix: "nd" }
];