
'use client';

import { mockAccounts } from '@/lib/mock-data';
import AccountCard from '@/components/dashboard/account-card';

export default function CreditCardsPage() {
  const creditCardAccounts = mockAccounts.filter((account) => account.type === 'credit');
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Credit Cards</h1>
        <p className="text-muted-foreground">
          Manage your credit cards and view statements.
        </p>
      </div>

      <div className="space-y-4">
        {creditCardAccounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
