
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
  Terminal,
  Infinity,
  Zap,
  Bot
} from 'lucide-react';
import { ExperienceItem, SkillGroup, ProjectItem, RoadmapItem } from './types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Kapture CX",
    role: "Android Developer",
    period: "Feb 2023 – Jan 2026",
    achievements: [
      "Leading Android CRM projects, ensuring seamless integration and delivery.",
      "SDK development to enhance Android development efficiency across multiple projects.",
      "REST API integration with efficient data handling using Retrofit and JSON.",
      "Implementation of Firebase features and offline-first support for smooth data transfer."
    ]
  },
  {
    company: "Digifinite Solution Pvt. Ltd",
    role: "Android Developer",
    period: "Dec 2021 – Nov 2022",
    achievements: [
      "UI Design on Figma and custom UI/UX implementations for new requirements.",
      "Project Deployment on Google Play Store.",
      "Collaborated with the Android team to establish common development tools and library usage."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Kotlin", icon: <Smartphone className="w-5 h-5 text-purple-500" /> },
      { name: "Jetpack Compose", icon: <Layout className="w-5 h-5 text-blue-500" /> },
      { name: "KMP", icon: <Infinity className="w-5 h-5 text-indigo-500" /> }
    ]
  },
  {
    category: "Android Core",
    skills: [
      { name: "MVVM", icon: <Layers className="w-5 h-5 text-orange-500" /> },
      { name: "Coroutines", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
      { name: "DI Hilt", icon: <Wrench className="w-5 h-5 text-green-500" /> }
    ]
  },
  {
    category: "Networking & DB",
    skills: [
      { name: "Retrofit", icon: <Code2 className="w-5 h-5 text-red-500" /> },
      { name: "SQLite", icon: <Database className="w-5 h-5 text-blue-400" /> },
      { name: "DataStore", icon: <Database className="w-5 h-5 text-emerald-500" /> }
    ]
  },
  {
    category: "Tools & AI",
    skills: [
      { name: "Android Studio", icon: <Smartphone className="w-5 h-5 text-green-400" /> },
      { name: "Cursor", icon: <Bot className="w-5 h-5 text-slate-400" /> },
      { name: "N8N", icon: <Cpu className="w-5 h-5 text-pink-500" /> },
      { name: "Firebase", icon: <Cloud className="w-5 h-5 text-yellow-600" /> }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Kapture Frontline",
    description: "Field service management application to trace product activities and handle customer requests efficiently.",
    tech: ["Kotlin", "Java", "Firebase Realtime DB"]
  },
  {
    title: "Kapture Lite",
    description: "Green energy field service management platform. A web-based Android application using modern architecture.",
    tech: ["Kotlin", "Jetpack Compose", "WebView"]
  },
  {
    title: "Kapture Unified",
    description: "Cross-platform CRM project (Android & iOS) with offline-first support and performance monitoring.",
    tech: ["Kotlin", "Local DB", "Firebase Tools"]
  },
  {
    title: "Init-Form",
    description: "CRUD Support application to manage input data remotely and locally with Google Sheets API as backend.",
    tech: ["Android", "Google Sheets API", "Offline Sync"]
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    stage: "Stage 1",
    title: "Android Fundamentals",
    description: "Mastering XML layouts, Activity/Fragment lifecycle, and basic Intent handling."
  },
  {
    stage: "Stage 2",
    title: "Modern UI & Jetpack",
    description: "Deep dive into Jetpack Compose, Declarative UI, and the Jetpack suite."
  },
  {
    stage: "Stage 3",
    title: "Cross-Platform Era",
    description: "Leveraging Kotlin Multiplatform (KMP) for shared logic across platforms."
  },
  {
    stage: "Stage 4",
    title: "Clean Architecture",
    description: "Perfecting MVVM/MVI, SOLID principles, and scalable system design."
  }
];

export const STATS = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 7, suffix: "+" },
  { label: "Top Clients", value: 6, suffix: "+" },
  { label: "Hackathon Award", value: 2, suffix: "nd" }
];
