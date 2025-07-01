
export interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "AI Portfolio Assistant",
    description: "An intelligent portfolio website that adapts content based on visitor interests using natural language processing and machine learning algorithms.",
    stack: ["React", "TypeScript", "OpenAI", "Node.js", "Tailwind CSS"],
    image: "/images/ai-portfolio.png",
    link: "https://github.com/example/ai-portfolio"
  },
  {
    id: 2,
    name: "Smart Task Manager",
    description: "A productivity app that learns from user behavior to automatically categorize and prioritize tasks, featuring collaborative workspaces and AI-powered insights.",
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    image: "/images/task-manager.png",
    link: "https://github.com/example/smart-tasks"
  },
  {
    id: 3,
    name: "Voice-Controlled Analytics",
    description: "A data visualization platform where users can query complex datasets using natural language voice commands, powered by speech recognition and AI.",
    stack: ["Vue.js", "D3.js", "Speech API", "TensorFlow", "MongoDB"],
    image: "/images/voice-analytics.png",
    link: "https://github.com/example/voice-analytics"
  },
  {
    id: 4,
    name: "Personalized Learning Hub",
    description: "An adaptive e-learning platform that customizes content delivery based on individual learning patterns and preferences using AI algorithms.",
    stack: ["React Native", "Node.js", "GraphQL", "AWS", "Docker"],
    image: "/images/learning-hub.png",
    link: "https://github.com/example/learning-hub"
  }
];
