import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-family');

  return (
    <section className="relative h-auto w-full text-primary-foreground md:h-[600px]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      <div className="relative z-10 flex h-full items-center py-16 md:py-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Pop Into Perks With a Checking Account!
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                Get a $50 Gift Card + $25 Cash when you open a checking account.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground shadow-md transition-transform hover:scale-105 hover:bg-accent/90"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Card className="w-full max-w-md bg-card/80 text-card-foreground backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Member Login</CardTitle>
                  <CardDescription>
                    Access your account securely.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        placeholder="Enter your username"
                        className="bg-background/70"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="bg-background/70"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
