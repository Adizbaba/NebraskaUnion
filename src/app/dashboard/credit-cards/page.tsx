
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function CreditCardsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Credit Cards</h1>
        <p className="text-muted-foreground">
          Manage your credit cards and view statements.
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="w-full max-w-lg">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                     <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle>Coming Soon</CardTitle>
                        <CardDescription>The credit card management feature is currently under construction. Please check back later!</CardDescription>
                    </div>
                </div>
            </CardHeader>
             <CardContent>
                <div className="text-center p-8 text-muted-foreground">
                    <p>We are working hard to bring you detailed credit card management.</p>
                </div>
            </CardContent>
         </Card>
        </div>

    </div>
  );
}
