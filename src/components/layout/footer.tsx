import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';

const footerLinks = {
  'Quick Links': [
    { name: 'Rates', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Calculators', href: '#' },
    { name: 'Find an ATM', href: '#' },
  ],
  'Contact': [
    { name: '123 Main St, Anytown, USA', href: '#' },
    { name: '(555) 123-4567', href: 'tel:5551234567' },
    { name: 'contact@firsthorizon.com', href: 'mailto:contact@firsthorizon.com' },
    { name: 'Routing #: 123456789', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo className="text-primary-foreground" />
            <p className="max-w-xs text-sm text-primary-foreground/70">
              Your trusted financial partner, committed to our members and
              community.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks['Quick Links'].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Contact
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks['Contact'].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-xs text-primary-foreground/70">
            © 2025 First Horizon Credit Union. Federally insured by NCUA.
          </p>
        </div>
      </div>
    </footer>
  );
}
