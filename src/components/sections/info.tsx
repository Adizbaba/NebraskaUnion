import { ArrowRight, Car, HeartPulse, Share2 } from 'lucide-react';
import Link from 'next/link';

const infoItems = [
  {
    icon: Car,
    title: 'Auto Resource Center',
    description: 'Everything you need to know about buying and owning a car.',
  },
  {
    icon: Share2,
    title: 'Shared Branching',
    description: 'Access your accounts at thousands of locations nationwide.',
  },
  {
    icon: HeartPulse,
    title: 'Financial Wellness',
    description: 'Tools and resources to help you achieve your financial goals.',
  },
];

export default function Info() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-full bg-accent/10 p-5 text-accent">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
                <Link
                  href="#"
                  className="group mt-4 inline-flex items-center font-medium text-primary transition-colors hover:text-accent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
