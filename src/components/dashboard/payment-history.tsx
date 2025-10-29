
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { PaymentHistoryItem } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface PaymentHistoryProps {
  history: PaymentHistoryItem[];
}

export default function PaymentHistory({ history }: PaymentHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                View your past bill payments.
                </CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative flex-grow">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search history..." className="pl-8" />
                </div>
                <Button variant="outline">
                    <FileDown className="mr-2 h-4 w-4" />
                    Export
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payee</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Account</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.payee}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.account}
                </TableCell>
                <TableCell className="text-right">{item.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.status === 'Completed' ? 'default' : 'secondary'}
                    className={cn({
                        'bg-green-100 text-green-800': item.status === 'Completed',
                        'bg-yellow-100 text-yellow-800': item.status === 'Pending',
                        'bg-red-100 text-red-800': item.status === 'Failed',
                    })}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
