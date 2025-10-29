
'use client';

import ReportsHeader from '@/components/dashboard/reports/reports-header';
import SummaryCards from '@/components/dashboard/reports/summary-cards';
import SpendingChart from '@/components/dashboard/reports/spending-chart';
import IncomeExpenseChart from '@/components/dashboard/reports/income-expense-chart';
import RecentTransactions from '@/components/dashboard/reports/recent-transactions';
import { mockAccounts } from '@/lib/mock-data';
import { useMemo } from 'react';

export default function ReportsPage() {
    const reportData = useMemo(() => {
        const allTransactions = mockAccounts.flatMap(acc => acc.transactions);
        const totalIncome = allTransactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
        const totalSpending = allTransactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0);
        
        const spendingCategories = [
            { name: 'Groceries', value: 400.21, fill: 'var(--color-chart-1)' },
            { name: 'Shopping', value: 300.50, fill: 'var(--color-chart-2)' },
            { name: 'Utilities', value: 200.00, fill: 'var(--color-chart-3)' },
            { name: 'Transport', value: 150.75, fill: 'var(--color-chart-4)' },
            { name: 'Entertainment', value: 250.00, fill: 'var(--color-chart-5)' },
        ];

        const incomeExpenseData = [
            { month: 'Jan', income: 4000, expenses: 2400 },
            { month: 'Feb', income: 3000, expenses: 1398 },
            { month: 'Mar', income: 5000, expenses: 3800 },
            { month: 'Apr', income: 4780, expenses: 2908 },
            { month: 'May', income: 6000, expenses: 4800 },
            { month: 'Jun', income: 5500, expenses: 3800 },
        ];

        return {
            summary: {
                totalIncome,
                totalSpending: Math.abs(totalSpending),
                netCashFlow: totalIncome + totalSpending,
            },
            spendingCategories,
            incomeExpenseData,
            recentTransactions: allTransactions.slice(0, 5)
        };
    }, []);

  return (
    <div className="space-y-6">
      <ReportsHeader />
      <SummaryCards summary={reportData.summary} />
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
            <SpendingChart data={reportData.spendingCategories} />
        </div>
        <div className="lg:col-span-3">
            <IncomeExpenseChart data={reportData.incomeExpenseData} />
        </div>
      </div>
      
      <RecentTransactions transactions={reportData.recentTransactions} />

    </div>
  );
}
