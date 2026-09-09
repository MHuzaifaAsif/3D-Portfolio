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
  devhub,
  docker,
  fast,
  paklogics,
  threejs,
  uworx,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  linkedin,
  github,
  fastLogo,
  gmgcLogo,
  scLogo,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "experience",
    title: "Experience",
    link: null,
  },
  {
    id: "education",
    title: "Education",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
    skills: [
      {
        category: "Frontend",
        items: "React.js, Redux Toolkit, Tailwind CSS, Socket.io, Responsive Design",
      },
      {
        category: "Backend",
        items: "Node.js, Express.js, REST APIs, FastAPI, LangChain, JWT, OAuth",
      },
      {
        category: "Database",
        items: "MongoDB, SQL, Supabase",
      },
    ],
  },
  {
    title: "Manual QA",
    icon: mobile,
    skills: [
      {
        category: "Manual Testing",
        items: "Functional, UI/Regression, Cross-Browser, Test Planning, Defect Tracking",
      },
      {
        category: "QA Tools",
        items: "Jira, Postman, Chrome DevTools",
      },
      {
        category: "Methodologies",
        items: "SDLC/STLC, Agile/Scrum, Test Case Design, RBAC",
      },
    ],
  },
  {
    title: "Automation QA",
    icon: creator,
    skills: [
      {
        category: "Test Automation",
        items: "Selenium, Playwright, Appium, REST Assured, Cypress, Pytest",
      },
      {
        category: "AI & LLM Testing",
        items: "LLM Testing, LLM-as-a-Judge Evaluation",
      },
      {
        category: "CI/CD & Languages",
        items: "GitHub Actions, CI/CD, Docker, Python, Java",
      },
    ],
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
    icon: paklogics,
    iconBg: "#16202c",
    date: "June 2026 - Present",
    summary:
      "Developed and executed comprehensive quality assurance strategies for Oritto, a critical O/A Level learning platform. Successfully validated user interfaces and platform features across a multi-million-user ecosystem.",
    points: [
      "CROSS-BROWSER & DEVICE EXCELLENCE: Led manual and automated testing, ensuring a seamless user experience across multiple device viewports and browsers (Chrome, Edge, Safari).",
      "PLATFORM INTEGRITY: Rigorously validated key application modules, including the Dashboard, Study Hub, and Exam Simulator, to ensure robust error handling and pixel-perfect rendering.",
      "PERFORMANCE VALIDATION: Validated navigation, complex form interactions, session persistence, and API integrations using Chrome DevTools.",
      "UI ERGONOMICS: Verified responsive design and user-centric ergonomics for a consistently high-quality experience on all screens.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Developers Hub",
    icon: devhub,
    iconBg: "#050816",
    date: "Nov 2025 - Jan 2026",
    summary:
      "Developed and deployed full-stack features using React, Node.js, and MongoDB, contributing to production-ready code. Built REST APIs with Express.js and designed database schemas.",
    points: [
      "FULL-STACK INTEGRATION: Implemented comprehensive features across the whole stack using the MERN ecosystem.",
      "REST API & DATA: Created robust REST APIs with Express.js and designed efficient MongoDB database schemas.",
      "CLIENT INTERFACES: Created modular React components for responsive user interfaces and robust front-ends.",
      "AUTHENTICATION & SECURITY: Collaborated with senior engineers to implement authentication systems (JWT) and security protocols.",
    ],
  },
  {
    title: "QA Intern",
    company_name: "UWORX",
    icon: uworx,
    iconBg: "#ffffff",
    date: "June 2025 - Aug 2025",
    summary:
      "Designed and executed comprehensive manual and automated test cases (Selenium). Effectively managed bugs using Jira and collaborated with developers for quality improvement.",
    points: [
      "TEST STRATEGY & EXECUTION: Led manual test case design and execution (functional, UI, regression), ensuring a high-quality product.",
      "BUG MANAGEMENT: Utilized Jira to track, document, and manage bugs, collaborating with developers to verify fixes and improve product stability.",
      "AUTOMATION & PLANNING: Built automated test scripts with Selenium and provided QA insights during sprint planning to optimize testing processes.",
    ],
  },
  {
    title: "Researcher & President FCAP",
    company_name: "FAST NUCES",
    icon: fast,
    iconBg: "#ffffff",
    date: "2022 - 2026",
    roles: [
      {
        role: "Researcher",
        points: [
          "Contributed as co-author to IEEE-published research on advanced LLM and RAG architectures for Quranic Question Answering.",
        ],
        paperLink: {
          text: "View Publication",
          url: "https://ieeexplore.ieee.org/document/11577717",
        },
      },
      {
        role: "President FCAP",
        subtitle: "FAST Club of App Development & Programming",
        points: [
          "Led the execution of high-impact technical events, ensuring seamless coordination across departments.",
          "Managed team positions and logistics to enhance operational efficiency and event delivery.",
          "Developed innovative event proposals and project timelines to boost society outreach.",
        ],
        skills: ["Leadership and Public Speaking"],
      },
    ],
    points: [
      "Contributed as co-author to IEEE-published research on advanced LLM and RAG architectures for Quranic Question Answering.",
      "President FCAP (FAST Club of App Development & Programming): Led execution of high-impact technical events and managed operational efficiency.",
    ],
  },
] as const;

// Education
export const EDUCATION = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "FAST NUCES",
    date: "2022 – 2026",
    logo: fastLogo,
    logoAlt: "FAST NUCES Logo",
  },
  {
    degree: "Intermediate – Pre-Engineering",
    institution: "Govt Municipal Graduate College",
    date: "2020 – 2022",
    logo: gmgcLogo,
    logoAlt: "Govt Municipal Graduate College Logo",
  },
  {
    degree: "Matriculation – Science",
    institution: "Hira Public High School",
    date: "2018 – 2020",
    logo: scLogo,
    logoAlt: "Hira Public High School Logo",
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "SkillSwap",
    description:
      "A real-time freelance marketplace connecting clients with verified specialists to streamline dynamic project bidding, identity verification queues, and secure contract hiring. It powers instant WebSocket feeds, enables live bidirectional messaging, automates tailored proposal generation through artificial intelligence, and computes algorithmic skill alignment scores to optimize client engagements and workflow analytics.",
    tags: [
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "Mobile Test Automation",
    description:
      "Android test automation framework built with Java, Appium, and TestNG to validate native and hybrid mobile applications using the Page Object Model (POM) architecture. It automates end-to-end user checkout flows, executes granular functional testing across app navigation and state resets, and executes OWASP MASVS security audits covering SQLi/XSS fuzzing, input masking, and Logcat leakage checks.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Appium",
        color: "green-text-gradient",
      },
      {
        name: "TestNG",
        color: "pink-text-gradient",
      },
      {
        name: "POM",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "pink-text-gradient",
      },
      {
        name: "Maven",
        color: "blue-text-gradient",
      },
      {
        name: "OWASP",
        color: "green-text-gradient",
      },
      {
        name: "Logcat",
        color: "blue-text-gradient",
      }
    ],
    image: project6,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "EduConnect E-Learning",
    description:
      "A full-featured academic tutoring platform connecting university students with verified educators to streamline dynamic course discovery, onboarding wizards, and interactive lesson scheduling. It tracks complete session lifecycles across roles, enables transparent feedback ratings, visualizes earnings, and manages credential verification to optimize educational engagement and administrative supervision.",
    tags: [
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Recharts",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
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
      "An AI-powered Islamic chatbot built on a Retrieval-Augmented Generation (RAG) pipeline to deliver authentic, context-aware answers grounded in the Quran, Tafsir. It semantically searches scripture via vector embeddings, provides transparent reference citations, and retains conversational context. The platform also manage document ingestion, fine-tune LLM retrieval parameters, and monitor token usage.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB Atlas",
        color: "blue-text-gradient",
      },
      {
        name: "Vector Embeddings",
        color: "green-text-gradient",
      },
      {
        name: "GridFS",
        color: "pink-text-gradient",
      }
    ],
    image: project4,
    source_code_link: "https://ieeexplore.ieee.org/document/11577717",
    live_site_link: "https://ieeexplore.ieee.org/document/11577717",
  },
  {
    name: "REST API Automation",
    description:
      "Built REST API automation framework engineered in JavaScript and Cypress to validate OpenWeatherMap services across weather, forecast, air pollution, and geocoding endpoints. Leveraging the Page Object Model (POM) and data-driven fixtures, it automates schema validation. It actively hardens API reliability through negative boundary suites and security fuzzing—testing against SQLi, XSS vulnerabilities.",
    tags: [
      {
        name: "Cypress",
        color: "blue-text-gradient",
      },
      {
        name: "JS (ES6+)",
        color: "green-text-gradient",
      },
      {
        name: "REST API Automation",
        color: "pink-text-gradient",
      },
      {
        name: "POM",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub Actions",
        color: "pink-text-gradient",
      },
      {
        name: "Mochawesome",
        color: "blue-text-gradient",
      }
    ],
    image: project5,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "NYC Congestion Audit",
    description:
      "An interactive analytics command center auditing NYC TLC taxi rides to evaluate the real-world impact of NYC's Central Business District Tolling Program. It tracks toll compliance across boroughs, detects fraudulent \"ghost trips,\" models traffic flow from major transit hubs, and simulates policy pricing shifts to forecast city revenue and emission offsets.Provide  downloadable executive memo for TLC commissioners.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Dask",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "PyDeck",
        color: "blue-text-gradient",
      },
      {
        name: "Plotly",
        color: "green-text-gradient",
      },
      {
        name: "Parquet",
        color: "pink-text-gradient",
      },
      {
        name: "Anomaly Detection",
        color: "blue-text-gradient",
      }
    ],
    image: project2,
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
    link: "https://www.linkedin.com/in/muhammad-huzaifa-asif-120818274",
  },
] as const;
