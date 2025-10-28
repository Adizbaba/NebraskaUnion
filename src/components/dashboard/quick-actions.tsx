'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Repeat,
  Send,
  FileText,
  Settings,
} from 'lucide-react';

const quickActions = [
  {
    label: 'Transfer Funds',
    icon: Repeat,
  },
  {
    label: 'Pay Bills',
    icon: Send,
  },
  {
    label: 'View Statements',
    icon: FileText,
  },
  {
    label: 'Manage Alerts',
    icon: Settings,
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Access common tasks quickly.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.label}
                variant="outline"
                className="w-full justify-start gap-3"
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span>{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
