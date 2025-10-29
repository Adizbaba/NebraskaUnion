
'use client';

import { mockAccounts } from '@/lib/mock-data';
import AccountCard from '@/components/dashboard/account-card';

export default function LoansPage() {
  const loanAccounts = mockAccounts.filter((account) => account.type === 'loan');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Loans</h1>
        <p className="text-muted-foreground">
          View your loan details and payment history.
        </p>
      </div>

       <div className="space-y-4">
        {loanAccounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>

    </div>
  );
}
