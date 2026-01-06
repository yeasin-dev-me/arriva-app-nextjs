import { Metadata } from 'next';
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: 'About Arriva Soft | Software Builder Firm & AI Agency',
  description:
    'Learn how Arriva Soft became a trusted software builder firm delivering enterprise web, mobile, and AI agent products for clients worldwide.',
  keywords: [
    'about Arriva Soft',
    'software builder firm',
    'AI agent company',
    'web and app development agency',
    'enterprise software team',
  ],
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About Arriva Soft | Software Builder Firm & AI Agency',
    description:
      'Discover Arriva Soft\'s 23+ year journey delivering custom software, web applications, and AI solutions for leading brands.',
    url: '/about',
  },
  twitter: {
    title: 'About Arriva Soft | Software Builder Firm & AI Agency',
    description: 'Meet the team building award-winning software, mobile apps, and AI experiences.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
