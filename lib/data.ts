export interface SkillGroup {
  title: string;
  tags: string[];
}

export interface Project {
  title: string;
  meta: string;
  description: string;
}

export interface Publication {
  title: string;
  meta: string;
  description: string;
  status?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science - Major in Software Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    period: "Complete",
    details: [
      "Graduate coursework focused on software architecture, system design, database systems, web technologies, and software development methodologies",
      "Developed software engineering projects involving full-stack web development, API integration, database management, and scalable application design",
      "Applied software engineering practices including object-oriented programming, version control, testing, debugging, and performance optimization",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Varendra University",
    period: "Graduated 2024",
    details: [
      "VU CSE 23rd Batch",
      "Core coursework: data structures & algorithms, database systems, software engineering, OOP",
      "Built foundational full-stack and mobile development skills",
    ],
  },
];

export const certifications: string[] = [
  "English Communication & IELTS Preparation [Mentor’s]",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Stack",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)"],
  },
  {
    title: "UI & Integration",
    tags: ["Reusable Components", "REST API Integration", "Responsive Design", "Pixel-Accurate UI"],
  },
  {
    title: "Tools & Workflow",
    tags: ["Git", "Debugging", "Performance Optimization", "Figma"],
  },
  {
    title: "Certifications",
    tags: certifications,
  },
];

export interface Project {
  title: string;
  meta: string;
  description: string;
  aiAssisted?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    meta: "Next.js · TypeScript · Tailwind CSS",
    description:
      "A responsive, animated Next.js site built with reusable TypeScript components and Tailwind CSS.",
    aiAssisted: true,
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "6C Mess Manager",
    meta: "HTML · CSS · JavaScript",
    description:
      "Web app for meal tracking, fund and expense management with localStorage persistence.",
    aiAssisted: false,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://c-mess-management.web.app/",
  },
  {
    title: "Mess Expense Tracker",
    meta: "Flutter · Hive",
    description:
      "Cross-platform mobile app for shared expense tracking, built with Hive local storage and Provider state management.",
    aiAssisted: true,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio-domain.com",
  },

];

export const publications: Publication[] = [
  {
    title: "Student Performance Prediction Using Learning Behavior Features: An Uncertainty-Aware Statistical and Machine Learning Framework",
    meta: "ICCA 2026 · Machine Learning · Educational Data Mining · Conformal Prediction",
    description:
        "Developed an uncertainty-aware student performance prediction framework using learning behavior features, ensemble learning, conformal prediction, robustness analysis, and interpretable machine learning.",
    status: "Accepted",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];
