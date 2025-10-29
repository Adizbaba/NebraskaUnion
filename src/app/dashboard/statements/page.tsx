
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StatementsList from '@/components/dashboard/statements-list';
import { mockAccounts, mockStatements } from '@/lib/mock-data';
import type { Account, Statement } from '@/lib/mock-data';

export default function StatementsPage() {
    const [selectedAccountId, setSelectedAccountId] = useState<string>(mockAccounts[0].id);

    const handleAccountChange = (accountId: string) => {
        setSelectedAccountId(accountId);
    };

    const filteredStatements = mockStatements.filter(statement => statement.accountId === selectedAccountId);

    const transactionalAccounts = mockAccounts.filter(acc => acc.type === 'transactional' || acc.type === 'savings');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Statements</h1>
        <p className="text-muted-foreground">
          View and download your account statements.
        </p>
      </div>
      
      <Card>
        <CardHeader className="flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <CardTitle>Your Statements</CardTitle>
                <CardDescription>Select an account to view available statements.</CardDescription>
            </div>
            <div className="w-full md:w-auto md:min-w-[250px]">
                <Select onValueChange={handleAccountChange} defaultValue={selectedAccountId}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select an account" />
                    </SelectTrigger>
                    <SelectContent>
                        {transactionalAccounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                                {account.name} (...{account.number.slice(-4)})
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </CardHeader>
        <CardContent>
            <StatementsList statements={filteredStatements} />
        </CardContent>
      </Card>
    </div>
  );
}
