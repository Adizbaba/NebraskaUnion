'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function PromoCard() {
  const promoImage = PlaceHolderImages.find((img) => img.id === 'promo-house');

  return (
    <Card className="overflow-hidden">
      {promoImage && (
        <div className="relative h-40 w-full">
          <Image
            src={promoImage.imageUrl}
            alt={promoImage.description}
            fill
            className="object-cover"
            data-ai-hint={promoImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <CardContent className="relative p-4">
        <h3 className="text-lg font-semibold text-foreground">
          Unlock Your Dream Home
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Get pre-approved for a home loan with competitive rates today.
        </p>
        <Button variant="link" className="group mt-4 px-0 text-primary">
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
