import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Arriva Soft | Software Development & AI Agency',
  description:
    'Talk to Arriva Soft about web development, mobile apps, and AI agent projects. Get direct access to our software builder firm in Dhaka, Bangladesh.',
  keywords: [
    'contact Arriva Soft',
    'software development consultation',
    'web app development contact',
    'AI agent project inquiry',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Arriva Soft | Software Development & AI Agency',
    description: 'Book a call with Arriva Soft to discuss custom software, product development, or AI initiatives.',
    url: '/contact',
  },
  twitter: {
    title: 'Contact Arriva Soft | Software Development & AI Agency',
    description: 'Schedule time with our product strategists and AI engineers.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
