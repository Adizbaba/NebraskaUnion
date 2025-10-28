'use client';

import AccountCard from './account-card';
import type { Account } from '@/lib/mock-data';
import { Button } from '../ui/button';

interface AccountListProps {
  accounts: Account[];
}

export default function AccountList({ accounts }: AccountListProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
      <Button variant="link" className="px-0 text-primary">Apply for a new product</Button>
    </div>
  );
}
