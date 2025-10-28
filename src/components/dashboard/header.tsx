'use client';

import { format } from 'date-fns';
import { useEffect, useState } from 'react';

interface DashboardHeaderProps {
  name: string;
}

export default function DashboardHeader({ name }: DashboardHeaderProps) {
  const [lastLogin, setLastLogin] = useState('');

  useEffect(() => {
    const now = new Date();
    setLastLogin(format(now, "eeee, MMMM d, yyyy 'at' h:mm a (O)"));
  }, []);

  return (
    <div className="rounded-lg bg-primary/5 p-6">
      <h1 className="text-2xl font-bold text-foreground">Good morning, {name}</h1>
      {lastLogin && <p className="text-sm text-muted-foreground">You last logged in {lastLogin}</p>}
    </div>
  );
}
