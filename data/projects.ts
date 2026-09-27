import type { TechItem } from "@/data/tech";
import { projectTech } from "@/data/tech";

export interface Project {
  name: string;
  imgSrc: string;
  description: string;
  techStack: TechItem[];
  liveLink: string;
  githubLink: string;
  about: string;
  features: string[];
}

export const projects: Project[] = [
  {
    name: "Testsphere",
    imgSrc: "/images/projects/testsphere.png",
    description:
      "A full-stack online assessment platform for conducting and managing coding and evaluation workflows with a modern React interface and REST API backend.",
    about:
      "A full-stack assessment platform built with React and Vite on the frontend and Node.js, Express, and MongoDB on the backend. The application provides structured assessment workflows with authentication, form validation, API integration, and a responsive component-based interface.",
    features: [
      "Modern React frontend built with Vite",
      "RESTful backend powered by Express.js",
      "MongoDB database integration using Mongoose",
      "JWT-based authentication and protected application flows",
      "Password hashing with bcrypt",
      "Form handling and validation with React Hook Form and Zod",
      "Responsive UI using Tailwind CSS and shadcn/ui components",
      "PDF generation support through PDFKit",
    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.vite,
      projectTech.tailwindcss,
      projectTech.shadcnui,
      projectTech.nodejs,
      projectTech.mongodb,
      projectTech.jwt,
    ],
    liveLink: "",
    githubLink:
      "https://github.com/Sanket2004/online-assessment-platform-frontend",
  },
  {
    name: "Textly",
    imgSrc: "/images/projects/textly.png",
    description:
      "A full-stack real-time messaging application with private rooms, persistent conversations, and Socket.IO-powered communication.",
    about:
      "Textly is a real-time messaging platform built with React and Vite on the client and Node.js, Express, MongoDB, and Socket.IO on the server. Users can create and join rooms, choose usernames, exchange messages in real time, and persist room and message data through MongoDB.",
    features: [
      "Real-time messaging using Socket.IO",
      "Create and join chat rooms",
      "Room-based conversation management",
      "Username-based chat participation",
      "Persistent rooms and messages with MongoDB",
      "REST APIs for room and message operations",
      "Protected room access and application routing",
      "Zustand state management",
      "Responsive interface built with Tailwind CSS",
      "Toast notifications for user feedback",
    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.vite,
      projectTech.tailwindcss,
      projectTech.zustand,
      projectTech.nodejs,
      projectTech.jwt,
      projectTech.express,
      projectTech.mongodb,
      projectTech.socketio,
      projectTech.axios,
    ],
    liveLink: "https://textlyy.vercel.app/",
    githubLink: "https://github.com/Sanket2004/Textly",
  },
  {
    name: "Go2",
    imgSrc: "/images/projects/go2.png",
    description:
      "A full-stack URL shortening platform with authentication, analytics, QR-code generation, and a React-based dashboard.",
    about:
      "A full-stack URL shortening application built with React and Vite, featuring authenticated users, protected routes, URL management, redirection through short codes, and dashboard-based analytics. The frontend communicates with a backend API using Axios and provides a responsive Tailwind CSS interface.",
    features: [
      "User registration and authentication",
      "Protected dashboard and application routes",
      "Generate shortened URLs from long links",
      "Short-code based URL redirection",
      "URL management through a user dashboard",
      "Analytics and chart-based data visualization",
      "QR-code generation for shortened URLs",
      "Axios-based REST API integration",
      "Responsive interface using Tailwind CSS",
      "Toast notifications and loading states",
    ],
    techStack: [
      projectTech.react,
      projectTech.nodejs,
      projectTech.jwt,
      projectTech.mysql,
      projectTech.javascript,
      projectTech.vite,
      projectTech.tailwindcss,
    ],
    liveLink: "https://goes2.vercel.app/",
    githubLink:
      "https://github.com/Sanket2004/mysql-node-url-shortener-frontend",
  },
  {
    name: "Snippets Directory",
    imgSrc: "/images/projects/snippets_directory.png",
    description:
      "A developer-focused snippets directory for organizing, discovering, and quickly accessing reusable code snippets across different technologies.",
    about:
      "Snippets Directory is a developer utility designed to make reusable code easier to organize and discover. It provides a centralized interface for browsing programming snippets, helping developers quickly find and reuse commonly needed pieces of code.",
    features: [
      "Browse reusable code snippets from a centralized directory",
      "Organized snippets for easier discovery and reuse",
      "Developer-focused interface for quickly accessing code",
      "Technology-based snippet organization",
      "Clean and responsive user interface",
      "Designed for fast reference during development",
    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.vite,
      projectTech.tailwindcss,
      projectTech.nodejs,
      projectTech.mongodb,
      projectTech.jwt,
    ],
    liveLink: "",
    githubLink: "https://github.com/Sanket2004/snippets-directory",
  },

  {
    name: "Prakriti",
    imgSrc: "/images/projects/prakriti.png",
    description:
      "A Flutter-based agriculture application combining farming resources, community interaction, market schemes, weather information, and an AI assistant.",
    about:
      "Prakriti is a comprehensive agriculture-focused mobile application developed for Smart India Hackathon 2024. It combines Firebase-powered authentication and community features with agricultural information, weather services, media sharing, and a Gemini-powered AI assistant.",
    features: [
      "Firebase authentication with email verification",
      "Agricultural community for creating and interacting with posts",
      "Information about agricultural loans and government schemes",
      "Market and agriculture-related information",
      "Weather information using location-based services",
      "AI assistant powered by Gemini",
      "Voice interaction using speech-to-text",
      "Image and file sharing capabilities",
      "User profiles, reviews, and ratings",
      "Animated and responsive Flutter interface",
    ],
    techStack: [
      projectTech.flutter,
      projectTech.dart,
      projectTech.firebase,
      projectTech.gemini,
    ],
    liveLink: "",
    githubLink: "https://github.com/Sanket2004/prakriti",
  },
];
