
'use client';

import TransactionHistoryTable from '@/components/dashboard/transaction-history-table';
import { mockAccounts } from '@/lib/mock-data';
import type { Transaction, Account } from '@/lib/mock-data';

interface TransactionWithAccount extends Transaction {
  accountName: string;
  accountNumber: string;
}

export default function TransactionHistoryPage() {
  const allTransactions: TransactionWithAccount[] = mockAccounts.flatMap(account => 
    account.transactions.map(transaction => ({
      ...transaction,
      accountName: account.name,
      accountNumber: account.number,
    }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Transaction History</h1>
        <p className="text-muted-foreground">
          Review your past transactions across all accounts.
        </p>
      </div>

      <TransactionHistoryTable transactions={allTransactions} />

    </div>
  );
}
