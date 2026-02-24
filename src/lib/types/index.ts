export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
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
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
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
