
'use client';

import { mockAccounts } from '@/lib/mock-data';
import AccountCard from '@/components/dashboard/account-card';

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Accounts</h1>
        <p className="text-muted-foreground">
          An overview of your financial accounts.
        </p>
      </div>

      <div className="space-y-4">
        {mockAccounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
