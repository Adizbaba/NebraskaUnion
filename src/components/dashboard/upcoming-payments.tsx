
'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import type { UpcomingPayment } from '@/lib/mock-data';

interface UpcomingPaymentsProps {
  payments: UpcomingPayment[];
}

export default function UpcomingPayments({ payments }: UpcomingPaymentsProps) {
  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div key={payment.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={payment.payeeLogo} alt={payment.payeeName} />
            <AvatarFallback>{payment.payeeName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex-grow">
            <p className="text-sm font-medium">{payment.payeeName}</p>
            <p className="text-xs text-muted-foreground">{payment.date}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{payment.amount}</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-2 h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
