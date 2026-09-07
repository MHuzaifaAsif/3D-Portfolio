// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/MHuzaifaAsif/3D-Portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Specialist",
    icon: mobile,
  },
  {
    title: "Backend & API Engineer",
    icon: backend,
  },
  {
    title: "QA & Automation Engineer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "QA Intern",
    company_name: "Paklogics",
    icon: starbucks,
    iconBg: "#1f2937",
    date: "June 2026 - Present",
    points: [
      "Executed manual UI, functional, and cross-browser testing on Oritto (O/A Level learning platform), covering Dashboard, Study Hub, and Exam Simulator modules.",
      "Conducted cross-browser (Chrome, Edge, Safari) and cross-device testing using Chrome DevTools, validating navigation, form interactions, session persistence, and error handling.",
      "Ensured pixel-perfect UI rendering, responsive ergonomics, and accurate app behavior across modern device viewports.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Developers Hub",
    icon: tesla,
    iconBg: "#111827",
    date: "Nov 2025 - Jan 2026",
    points: [
      "Developed and deployed full-stack features for web applications using React, Node.js, and MongoDB, contributing to production-ready code.",
      "Built REST APIs with Express.js, created modular React components for responsive user interfaces, and designed MongoDB database schemas for efficient data storage.",
      "Collaborated with senior engineers to implement authentication systems (JWT), form validation, and robust error handling across multiple client projects.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "UWORX",
    icon: shopify,
    iconBg: "#1f2937",
    date: "June 2025 - Aug 2025",
    points: [
      "Developed and maintained backend APIs using Express.js and Node.js for high-performance web applications.",
      "Created reusable middleware functions for authentication, data validation, and error handling to streamline backend workflows.",
      "Designed efficient database schemas with MongoDB, optimized query performance, and validated backend endpoints and status codes.",
    ],
  },
  {
    title: "Software Engineering Student & Researcher",
    company_name: "FAST NUCES",
    icon: meta,
    iconBg: "#111827",
    date: "2022 - 2026",
    points: [
      "Pursuing Bachelor of Software Engineering (BSSE), mastering distributed systems, algorithms, SDLC/STLC, and full-stack software architecture.",
      "Published research paper in IEEE Xplore: 'Quran ILM: An Empirical Study of LLM and RAG Architectures for Quranic Question Answering'.",
      "Actively building production-grade projects and automation test suites integrating modern DevOps and CI/CD pipelines.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Huzaifa demonstrated exceptional full-stack skills, delivering reliable APIs and clean, responsive frontend interfaces ahead of schedule.",
    name: "Engineering Lead",
    designation: "Tech Lead",
    company: "Developers Hub",
    image: user1,
  },
  {
    testimonial:
      "Working with Huzaifa was fantastic. His attention to code quality, testing rigor, and seamless user experiences made an immediate impact.",
    name: "Senior Developer",
    designation: "Backend Lead",
    company: "UWORX",
    image: user2,
  },
  {
    testimonial:
      "Huzaifa possesses both strong full-stack software craftsmanship and deep research acumen. A dedicated, proactive software engineer.",
    name: "Project Advisor",
    designation: "Faculty Mentor",
    company: "FAST NUCES",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "SkillSwap",
    description:
      "A real-time freelance marketplace featuring Socket.io bidding and live chatting, engineered with secure JWT authentication, role-based dashboards, and admin credential verification.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "blue-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with secure JWT authentication and OTP email verification, featuring interactive carts, wishlists, product reviews, and custom admin management dashboards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "EduConnect E-Learning",
    description:
      "Role-based tutoring platform enabling search, scheduling, and session booking between students and verified tutors, featuring Recharts analytics and containerized deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "Quran ILM RAG Assistant",
    description:
      "Scholar RAG chatbot and automated LLM-as-a-Judge semantic evaluation suite to validate grounding, relevance, guardrails, and tone with zero-cost fallback mocking. Published on IEEE Xplore.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "gemini-api",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://ieeexplore.ieee.org/document/11577717",
    live_site_link: "https://ieeexplore.ieee.org/document/11577717",
  },
  {
    name: "Course Registration System",
    description:
      "Backend engine with JWT authentication managing student enrollments, administrative actions, real-time seat tracking, scheduling conflict detection, and academic prerequisite verification.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "Mobile Test Automation",
    description:
      "Java-based Android UI test automation framework using Appium and Selenium Page Object Model (POM), integrated with GitHub Actions CI/CD for automated headless testing on PRs.",
    tags: [
      {
        name: "appium",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "github-actions",
        color: "blue-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/MHuzaifaAsif",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com",
  },
  {
    name: "YouTube",
    icon: youtube,
    link: "https://youtube.com",
  },
] as const;
