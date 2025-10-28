'use client';

import DashboardHeader from '@/components/dashboard/header';
import AccountList from '@/components/dashboard/account-list';
import { mockAccounts, mockAssetsAndLiabilities } from '@/lib/mock-data';
import AssetsAndLiabilities from '@/components/dashboard/assets-liabilities';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import QuickActions from '@/components/dashboard/quick-actions';
import { useUser } from '@/firebase';

export default function DashboardPage() {
  const { user } = useUser();
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  
  return (
    <div className="space-y-6">
      <DashboardHeader name={user?.displayName || 'there'} />
      {isNoticeVisible && (
        <Alert variant="destructive" className="bg-destructive/10 text-destructive border-destructive/50 [&>svg~*]:pl-7 [&>svg]:text-destructive">
           <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold">Account Notice</AlertTitle>
          <AlertDescription>
            Due to multiple transaction errors, certain features on your account have been temporarily restricted to protect your security. Please visit your nearest Commonwealth Bank branch to resolve this issue.
          </AlertDescription>
           <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6 text-destructive hover:bg-destructive/10" onClick={() => setIsNoticeVisible(false)}>
            <X className="h-4 w-4" />
          </Button>
        </Alert>
      )}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AccountList accounts={mockAccounts} />
        </div>
        <div className="lg:col-span-1">
          <QuickActions />
        </div>
      </div>
      <AssetsAndLiabilities data={mockAssetsAndLiabilities} />
    </div>
  );
}
