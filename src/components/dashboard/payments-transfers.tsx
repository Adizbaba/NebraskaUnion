'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import TransferForm from './transfer-form';
import type { Account } from '@/lib/mock-data';

interface PaymentsAndTransfersProps {
  accounts: Account[];
}

export default function PaymentsAndTransfers({ accounts }: PaymentsAndTransfersProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 text-center">
          <p className="font-semibold">No payments due in the next 7 days</p>
          <Button variant="link" className="px-0 text-primary">
            Bills & upcoming payments
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 text-center">
          <p className="font-semibold">Borrow from $2,000 to $50,000 with a Personal Loan</p>
          <Button variant="link" className="px-0 text-primary">
            Tell me more
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <Button variant="ghost" className="bg-gray-200 text-primary">Transfer</Button>
              <Button variant="ghost">BPAY</Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TransferForm accounts={accounts} />
        </CardContent>
      </Card>
    </div>
  );
}
