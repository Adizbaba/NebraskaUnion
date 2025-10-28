import { Compass } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-lg font-bold text-primary',
        className
      )}
    >
      <div className="rounded-md bg-primary p-1.5 text-primary-foreground">
        <Compass className="h-5 w-5" />
      </div>
      <span className="font-headline">First Nebraska</span>
    </Link>
  );
}
