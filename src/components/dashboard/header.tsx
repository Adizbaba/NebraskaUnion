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
    const lastLoginDate = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000); // 2 days ago
    setLastLogin(format(lastLoginDate, "eeee, MMMM d, yyyy 'at' h:mm a (O)"));
  }, []);

  return (
    <div className="rounded-lg bg-yellow-400/20 p-6">
      <h1 className="text-2xl font-bold text-gray-800">Good morning, {name}</h1>
      {lastLogin && <p className="text-sm text-gray-600">You last logged in {lastLogin}</p>}
    </div>
  );
}
