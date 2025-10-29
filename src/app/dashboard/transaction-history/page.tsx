
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

export default function TransactionHistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Transaction History</h1>
        <p className="text-muted-foreground">
          Review your past transactions.
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="w-full max-w-lg">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                     <History className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle>Coming Soon</CardTitle>
                        <CardDescription>The transaction history feature is currently under construction. Please check back later!</CardDescription>
                    </div>
                </div>
            </CardHeader>
             <CardContent>
                <div className="text-center p-8 text-muted-foreground">
                    <p>We are working hard to bring you a detailed transaction history.</p>
                </div>
            </CardContent>
         </Card>
        </div>

    </div>
  );
}
