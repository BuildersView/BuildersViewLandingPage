import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  siteUrl: string;
  image: string;
}

export interface Project {
  id: number;
  name: string;
  logo: string;
  title: string;
  description: string;
  category: string;
  process: string[];
  href: string;
}

export interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  idea: string;
}

export type ActionResult =
  | { success: true }
  | { success: false; error: string };
