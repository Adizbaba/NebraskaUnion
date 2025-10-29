'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Banknote } from "lucide-react";

interface SummaryCardsProps {
    summary: {
        totalIncome: number;
        totalSpending: number;
        netCashFlow: number;
    }
}

export default function SummaryCards({ summary }: SummaryCardsProps) {
    const summaryItems = [
        { title: "Total Income", amount: summary.totalIncome, icon: ArrowUp, color: "text-green-500" },
        { title: "Total Spending", amount: summary.totalSpending, icon: ArrowDown, color: "text-red-500" },
        { title: "Net Cash Flow", amount: summary.netCashFlow, icon: Banknote, color: "text-blue-500" },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {summaryItems.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Icon className={`h-4 w-4 text-muted-foreground ${item.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {item.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
      </div>
    )
}