import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  suffix?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets?: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  placeholderText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CareerPosition {
  title: string;
  description: string;
  type: string;
  location?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  type: 'certification' | 'pledge';
  description: string;
}