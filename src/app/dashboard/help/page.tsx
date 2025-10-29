
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground">
          Find answers to your questions.
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="w-full max-w-lg">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                     <HelpCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle>Coming Soon</CardTitle>
                        <CardDescription>The help center is currently under construction. Please check back later!</CardDescription>
                    </div>
                </div>
            </CardHeader>
             <CardContent>
                <div className="text-center p-8 text-muted-foreground">
                    <p>We are working hard to build a comprehensive help center.</p>
                </div>
            </CardContent>
         </Card>
        </div>

    </div>
  );
}
