import Image from 'next/image';
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
      <Image 
        src="https://i.imghippo.com/files/JSJ2722hIk.png"
        alt="Nebraska Safe Union Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="font-headline">Nebraska Safe Union</span>
    </Link>
  );
}
