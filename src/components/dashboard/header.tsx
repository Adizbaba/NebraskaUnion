'use client';

import { format } from 'date-fns';
import { useEffect, useState } from 'react';

interface DashboardHeaderProps {
  name: string;
}

export default function DashboardHeader({ name }: DashboardHeaderProps) {
  const [lastLogin, setLastLogin] = useState('');
  const [greeting, setGreeting] = useState('Good morning');

  useEffect(() => {
    const now = new Date();
    setLastLogin(format(now, "eeee, MMMM d, yyyy 'at' h:mm a (O)"));

    const hour = now.getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <div className="rounded-lg bg-primary/5 p-6">
      <h1 className="text-2xl font-bold text-foreground">{greeting}, {name}</h1>
      {lastLogin && <p className="text-sm text-muted-foreground">You last logged in {lastLogin}</p>}
    </div>
  );
}
