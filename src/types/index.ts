import { LucideIcon } from "lucide-react";

export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  description: string;
  level: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: "Finalizado" | "Em desenvolvimento";
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}
