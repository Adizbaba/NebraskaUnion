import { Facebook, Instagram, Linkedin, Twitter, Youtube, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';
import { Button } from '../ui/button';

const footerLinks = {
  'ABOUT NEBRASKA SAFE UNION': [
    { name: 'About Us', href: '#' },
    { name: 'Investor Relations', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  'PRODUCTS & SERVICES': [
    { name: 'Banking', href: '#' },
    { name: 'Borrowing', href: '#' },
    { name: 'Digital & Mobile Banking', href: '#' },
    { name: 'Private Banking', href: '#' },
    { name: 'Trust & Estate Planning', href: '#' },
    { name: 'Wealth Management', href: '#' },
  ],
  'SUPPORT': [
    { name: 'Contact Us', href: '#' },
    { name: 'Customer Service Requests', href: '#' },
    { name: 'Digital Banking Help', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Routing Number', href: '#' },
    { name: 'Tools & Calculators', href: '#' },
    { name: 'Learning Center', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-8">
            <Logo className="text-primary-foreground" />
             <Button variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Smartphone className="mr-2 h-5 w-5" />
                Download our Mobile Apps
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-base text-primary-foreground/70 hover:text-primary-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
                 <h3 className="text-sm font-semibold uppercase tracking-wider text-center md:text-left">
                  Social
                </h3>
                <div className="mt-4 flex space-x-6">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                    <Link
                        key={social.name}
                        href={social.href}
                        className="text-primary-foreground/70 hover:text-primary-foreground"
                    >
                        <span className="sr-only">{social.name}</span>
                        <Icon className="h-6 w-6" />
                    </Link>
                    );
                })}
                </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <span>Member FDIC. Equal Housing Lender.</span>
               <div className="flex items-center gap-2">
                <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="4" fill="white"/>
                  <path d="M22.5 25V31.25H28.75V25H22.5ZM32.5 25V31.25H38.75V25H32.5ZM42.5 25V31.25H48.75V25H42.5ZM52.5 25V31.25H58.75V25H52.5ZM62.5 25V31.25H68.75V25H62.5ZM72.5 25V31.25H78.75V25H72.5ZM22.5 35V41.25H28.75V35H22.5ZM32.5 35V41.25H38.75V35H32.5ZM42.5 35V41.25H48.75V35H42.5ZM52.5 35V41.25H58.75V35H52.5ZM62.5 35V41.25H68.75V35H62.5ZM72.5 35V41.25H78.75V35H72.5ZM22.5 45V51.25H28.75V45H22.5ZM32.5 45V51.25H38.75V45H32.5ZM42.5 45V51.25H48.75V45H42.5ZM52.5 45V51.25H58.75V45H52.5ZM62.5 45V51.25H68.75V45H62.5ZM72.5 45V51.25H78.75V45H72.5ZM22.5 55V61.25H28.75V55H22.5ZM32.5 55V61.25H38.75V55H32.5ZM42.5 55V61.25H48.75V55H42.5ZM52.5 55V61.25H58.75V55H52.5ZM62.5 55V61.25H68.75V55H62.5ZM72.5 55V61.25H78.75V55H72.5ZM22.5 65V71.25H28.75V65H22.5ZM32.5 65V71.25H38.75V65H32.5ZM42.5 65V71.25H48.75V65H42.5ZM52.5 65V71.25H58.75V65H52.5ZM62.5 65V71.25H68.75V65H62.5ZM72.5 65V71.25H78.75V65H72.5Z" fill="#0A2F5C"/>
                </svg>
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
