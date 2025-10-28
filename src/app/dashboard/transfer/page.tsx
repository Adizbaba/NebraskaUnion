'use client';

import { useState } from 'react';
import {
  AlertTriangle,
  X,
  Landmark,
  Repeat,
  Zap,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransferForm from '@/components/dashboard/transfer-form';
import { mockAccounts } from '@/lib/mock-data';

export default function TransferPage() {
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Money Transfer</h1>
        <p className="text-muted-foreground">
          Securely transfer funds between your accounts, to external banks, or
          using Zelle®.
        </p>
      </div>

      {isNoticeVisible && (
        <Alert
          variant="destructive"
          className="relative bg-destructive/10 text-destructive border-destructive/50 [&>svg~*]:pl-7 [&>svg]:text-destructive"
        >
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold">Account Notice</AlertTitle>
          <AlertDescription>
            Due to multiple errors detected during recent money transfer
            attempts, your ability to initiate new transfers has been
            temporarily restricted as a security precaution. Please visit your
            nearest First Nebraska branch to resolve this issue and restore full
            access to your account.
          </AlertDescription>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6 text-destructive hover:bg-destructive/10"
            onClick={() => setIsNoticeVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </Alert>
      )}

      <Tabs defaultValue="internal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="internal">
            <Repeat className="mr-2 h-4 w-4" />
            Internal Transfer
          </TabsTrigger>
          <TabsTrigger value="external">
            <Landmark className="mr-2 h-4 w-4" />
            External (ACH)
          </TabsTrigger>
          <TabsTrigger value="zelle">
            <Zap className="mr-2 h-4 w-4" />
            Zelle®
          </TabsTrigger>
        </TabsList>
        <TabsContent value="internal" className="mt-6">
          <div className="flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Transfer Funds</CardTitle>
                    <CardDescription>Move money securely between your First Nebraska accounts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <TransferForm accounts={mockAccounts} />
                </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="external">
           <div className="flex justify-center">
             <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>External Transfer (ACH)</CardTitle>
                    <CardDescription>This feature is not yet implemented.</CardDescription>
                </CardHeader>
             </Card>
            </div>
        </TabsContent>
        <TabsContent value="zelle">
            <div className="flex justify-center">
             <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Zelle®</CardTitle>
                    <CardDescription>This feature is not yet implemented.</CardDescription>
                </CardHeader>
             </Card>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
