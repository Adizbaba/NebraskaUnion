'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Loader } from 'lucide-react';

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 30); // 30ms * 100 = 3000ms = 3s

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    }
  }, [isComplete, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-blue-100">
      <div className="w-full max-w-md space-y-6 text-center">
        {isComplete ? (
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 animate-in fade-in zoom-in-50" />
        ) : (
          <Loader className="mx-auto h-16 w-16 animate-spin text-primary" />
        )}
        <h1 className="text-2xl font-semibold text-foreground">
          {isComplete ? 'Login Successful!' : 'Logging you in...'}
        </h1>
        <p className="text-muted-foreground">
          {isComplete ? 'Redirecting to your dashboard.' : 'Please wait while we prepare your dashboard.'}
        </p>
        <Progress value={progress} className="w-full" />
      </div>
    </div>
  );
}
