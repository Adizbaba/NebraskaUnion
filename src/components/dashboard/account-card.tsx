
'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';
import type { Account } from '@/lib/mock-data';
import { Button } from '../ui/button';
import AccountDetailsModal from './account-details-modal';

interface AccountCardProps {
  account: Account;
}

export default function AccountCard({ account }: AccountCardProps) {
  const Icon = account.icon;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="transition-all hover:shadow-md">
        <CardContent className="flex items-center p-4">
          <div className="mr-4 rounded-full bg-primary/10 p-3 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-foreground">{account.name}</p>
            <p className="text-sm text-muted-foreground">{account.number}</p>
            {account.details && <p className="text-sm text-muted-foreground">{account.details}</p>}
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Balance</p>
            <p className="font-semibold text-foreground">{account.balance}</p>
            {account.available && <p className="text-xs text-muted-foreground">Available: {account.available}</p>}
          </div>
          <div className="ml-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={() => setIsModalOpen(true)}>
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <AccountDetailsModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} account={account} />
    </>
  );
}
