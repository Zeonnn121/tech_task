export interface NavItem {
  label: string;
  href: string;
}

export interface EventDetail {
  icon: string;
  title: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  experience: string;
  medicalConditions: string;
  emergencyContact: string;
  emergencyPhone: string;
}