'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-family');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({
        title: 'Login Successful',
        description: "You've been successfully logged in.",
      });
      router.push('/loading');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'Could not log in.',
      });
    }
  }

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
                <CardHeader className="text-center">
                  <CardTitle>
                    Log in to our banking and investment services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="space-y-2">
                        <Select defaultValue="digital-banking">
                          <SelectTrigger className="bg-background/70">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="digital-banking">
                              Digital Banking
                            </SelectItem>
                            <SelectItem value="mortgage">Mortgage</SelectItem>
                            <SelectItem value="emoney">eMoney</SelectItem>
                            <SelectItem value="paycard-employee-login">
                              Paycard Employee Login
                            </SelectItem>
                            <SelectItem value="trust-service">
                              Trust Service
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your-email@example.com"
                                className="bg-background/70"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="relative">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="********"
                                className="bg-background/70 pr-10"
                                {...field}
                              />
                            </FormControl>
                             <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-1 top-6 h-7 w-7 text-muted-foreground hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                              <span className="sr-only">
                                {showPassword ? 'Hide password' : 'Show password'}
                              </span>
                            </Button>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        <Lock className="mr-2 h-4 w-4" />
                        {form.formState.isSubmitting ? 'Logging In...' : 'LOG IN'}
                      </Button>
                    </form>
                  </Form>
                  <div className="mt-4 flex justify-between text-sm">
                    <Link
                      href="/register"
                      className="font-medium text-primary hover:underline"
                    >
                      Enroll for Digital Banking
                    </Link>
                    <Link
                      href="#"
                      className="font-medium text-primary hover:underline"
                    >
                      Forgot ID or password
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
