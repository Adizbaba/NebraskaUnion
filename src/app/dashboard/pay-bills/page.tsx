
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BillPayForm from "@/components/dashboard/bill-pay-form";
import UpcomingPayments from "@/components/dashboard/upcoming-payments";
import PaymentHistory from "@/components/dashboard/payment-history";
import { mockAccounts, mockPayees, mockUpcomingPayments, mockPaymentHistory } from "@/lib/mock-data";
import { UserPlus } from "lucide-react";

export default function PayBillsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Bill Payments</h1>
        <p className="text-muted-foreground">
          Manage and pay your bills securely.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Pay a Bill</CardTitle>
                    <CardDescription>Select a payee, enter the amount and date, and schedule your payment.</CardDescription>
                </CardHeader>
                <CardContent>
                    <BillPayForm accounts={mockAccounts} payees={mockPayees} />
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Upcoming Payments</CardTitle>
                    <Button variant="ghost" size="sm">View All</Button>
                </CardHeader>
                <CardContent>
                    <UpcomingPayments payments={mockUpcomingPayments} />
                </CardContent>
            </Card>
            <Button variant="outline" className="w-full">
                <UserPlus className="mr-2 h-4 w-4" />
                Manage Payees
            </Button>
        </div>
      </div>
      
      <div>
        <PaymentHistory history={mockPaymentHistory} />
      </div>

    </div>
  );
}
