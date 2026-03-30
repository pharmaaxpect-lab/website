import { 
  ShieldCheck, 
  Stethoscope, 
  Award, 
  Users, 
  MapPin, 
  Pill, 
  HeartPulse, 
  UserCheck,
  ClipboardList,
  Megaphone
} from 'lucide-react';
import { NavItem, Stat, Feature, Product, FAQItem, CareerPosition, Certification } from './types';

export const COMPANY_DETAILS = {
  name: "Axpect Pharma Private Limited",
  tagline: "Delivering quality healthcare solutions through ethical promotion",
  phone: "+91 73037 55022",
  email: "info@axpectpharma.com",
  address: "Plot No. 123, Industrial Area, Phase 1, Chandigarh, India",
  footerLine: "Axpect Pharma is dedicated to delivering high-quality medicines through ethical practices, ensuring better healthcare outcomes and long-term trust with medical professionals.",
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const KEY_NUMBERS: Stat[] = [
  { label: 'Medical Representatives', value: '150', suffix: '+', icon: UserCheck },
  { label: 'Doctors Engaged', value: '5000', suffix: '+', icon: Stethoscope },
  { label: 'Regions Covered', value: '100', suffix: '+', icon: MapPin },
  { label: 'Product Range', value: '500', suffix: '+', icon: Pill },
];

export const FEATURES: Feature[] = [
  {
    title: "Ethical Pharma Marketing",
    description: "We promote our products through direct engagement with doctors and healthcare professionals, ensuring proper understanding and usage of medicines.",
    icon: ShieldCheck,
    bullets: [
      "Direct engagement with healthcare professionals",
      "Scientific and evidence-based promotion",
      "Transparent product information sharing",
    ],
  },
  {
    title: "Doctor Engagement",
    description: "Regular doctor visits, scientific product detailing, and prescription generation support to build long-term trust with healthcare providers.",
    icon: Stethoscope,
    bullets: [
      "Regular doctor visits",
      "Scientific product detailing",
      "Prescription generation support",
    ],
  },
  {
    title: "Field Force Management",
    description: "Dedicated Medical Representatives with area-wise coverage and reporting, backed by continuous training and development programs.",
    icon: ClipboardList,
    bullets: [
      "Dedicated Medical Representatives (MRs)",
      "Area-wise coverage and reporting",
      "Continuous training and development",
    ],
  },
  {
    title: "Brand Promotion",
    description: "Doctor meetings, CME programs, product awareness campaigns, and ethical promotional activities to enhance brand visibility.",
    icon: Megaphone,
    bullets: [
      "Doctor meetings and CME programs",
      "Product awareness campaigns",
      "Ethical promotional activities",
    ],
  },
];

export const PRODUCTS: Product[] = [
  { id: '1', name: 'General Medicine', category: 'Therapeutic', description: 'Comprehensive range of general medicine formulations for everyday healthcare needs.', placeholderText: 'General Medicine' },
  { id: '2', name: 'Antibiotics', category: 'Anti-Infective', description: 'High-quality antibiotic formulations trusted by doctors for effective infection management.', placeholderText: 'Antibiotics' },
  { id: '3', name: 'Pediatric Range', category: 'Pediatric', description: 'Safe and effective pharmaceutical products specially formulated for children and infants.', placeholderText: 'Pediatric Range' },
  { id: '4', name: 'Cardiac & Diabetic Care', category: 'Chronic Care', description: 'Reliable medications for cardiovascular health and diabetes management.', placeholderText: 'Cardiac & Diabetic' },
  { id: '5', name: 'Nutraceuticals', category: 'Nutrition', description: 'Premium nutritional supplements and health products for overall well-being.', placeholderText: 'Nutraceuticals' },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is Ethical Pharma?",
    answer: "Ethical Pharma is a system where medicines are promoted through Medical Representatives directly to doctors, who prescribe them to patients. This ensures that medicines reach patients through proper medical consultation and prescription.",
    category: "General",
  },
  {
    question: "How can I join Axpect Pharma?",
    answer: "You can apply for positions like Medical Representative (MR), Area Sales Manager, or Zonal Sales Manager through our Careers section. We are always looking for passionate and dedicated professionals to grow with us.",
    category: "Careers",
  },
  {
    question: "Do you provide doctor support?",
    answer: "Yes, we actively engage with doctors through regular visits, product detailing, and medical awareness programs. Our team ensures healthcare professionals have complete information about our products.",
    category: "Services",
  },
  {
    question: "Which areas do you cover?",
    answer: "We operate across multiple regions in India with a strong field force network. Our dedicated Medical Representatives ensure comprehensive coverage and effective product promotion in their respective areas.",
    category: "General",
  },
  {
    question: "What types of products does Axpect Pharma offer?",
    answer: "We offer a wide range of high-quality pharmaceutical products across multiple therapeutic segments including General Medicine, Antibiotics, Pediatric Range, Cardiac & Diabetic Care, and Nutraceuticals. All products are manufactured in certified facilities.",
    category: "Products",
  },
  {
    question: "Are your products certified?",
    answer: "Yes, all our products are manufactured in ISO 9001:2015 certified facilities and meet strict quality standards. Axpect Pharma is also recognized as a DPIIT registered startup.",
    category: "Products",
  },
];

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    title: "Medical Representative (MR)",
    description: "Join our field force to promote pharmaceutical products through ethical practices and build strong relationships with healthcare professionals.",
    type: "Field Sales",
    location: "Pan India",
  },
  {
    title: "Area Sales Manager",
    description: "Lead a team of Medical Representatives, drive sales growth, and oversee operations in your designated area.",
    type: "Management",
    location: "Pan India",
  },
  {
    title: "Zonal Sales Manager",
    description: "Manage multiple areas, develop strategic sales plans, and ensure targets are met across your zone.",
    type: "Senior Management",
    location: "Pan India",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    issuer: 'Global Certification Services',
    date: '11/09/2025',
    image: '/asset-library/certifications/iso-9001-2015.png',
    type: 'certification',
    description: 'Quality Management System certification ensuring highest manufacturing and operational standards.',
  },
  {
    id: 'startup-recognition',
    title: 'DPIIT Startup Recognition',
    issuer: 'Department for Promotion of Industry and Internal Trade, Government of India',
    date: '11/09/2025',
    image: '/asset-library/certifications/startup-recognition.jpeg',
    type: 'certification',
    description: 'Recognized as a startup by the Government of India under the Biotechnology industry sector.',
  },
  {
    id: 'integrity-pledge',
    title: 'Integrity Pledge',
    issuer: 'Government of India',
    date: '10/09/2025',
    image: '/asset-library/certifications/integrity-pledge.png',
    type: 'pledge',
    description: 'Commitment to ethical business practices, transparency, and anti-corruption governance.',
  },
  {
    id: 'bharat-vikas',
    title: 'Bharat Vikas Pledge',
    issuer: 'Government of Gujarat & MyGov',
    date: '10/09/2025',
    image: '/asset-library/certifications/bharat-vikas-pledge.png',
    type: 'pledge',
    description: 'Commitment to the unity and integrity of India, working towards "Ek Bharat, Shreshth Bharat".',
  },
  {
    id: 'digital-india',
    title: 'Digital India Pledge for Progress',
    issuer: 'Digital India Corporation',
    date: '10/09/2025',
    image: '/asset-library/certifications/digital-india-pledge.png',
    type: 'pledge',
    description: 'Commitment to support digital empowerment, innovation, and responsible use of technology.',
  },
  {
    id: 'data-privacy',
    title: 'Data Privacy Pledge',
    issuer: 'DSCI & MyGov',
    date: '10/09/2025',
    image: '/asset-library/certifications/data-privacy-pledge.jpeg',
    type: 'pledge',
    description: 'Commitment to data privacy and protection practices under the Data Privacy Day initiative.',
  },
  {
    id: 'women-rights',
    title: 'Pledge for Women Rights',
    issuer: 'National Commission for Women & MyGov',
    date: '10/09/2025',
    image: '/asset-library/certifications/women-rights-pledge.jpeg',
    type: 'pledge',
    description: 'Pledge to protect and promote the rights of all women at all times.',
  },
  {
    id: 'world-liver-day',
    title: 'World Liver Day Pledge',
    issuer: 'Ministry of Health & Family Welfare, FSSAI',
    date: '10/09/2025',
    image: '/asset-library/certifications/world-liver-day-pledge.png',
    type: 'pledge',
    description: 'Pledge for healthier living, reducing edible oil intake and promoting awareness about fighting obesity.',
  },
];

export const CATALOGUE_PAGES = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return `/asset-library/catalogue/pages/page-${num}.jpg`;
}).filter(page => !page.includes('page-02.jpg'));

// Exclude gallery page-2 (contains old irrelevant content)
export const GALLERY_IMAGES = [
  '/asset-library/gallery/page-1.jpg',
  '/asset-library/gallery/page-3.jpg',
  '/asset-library/gallery/page-4.jpg',
];