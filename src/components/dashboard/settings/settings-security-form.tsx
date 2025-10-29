
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SettingsSecurityForm() {
  const { toast } = useToast();

  const handleChangePassword = () => {
    toast({
        title: 'Feature Coming Soon',
        description: 'The ability to change your password will be available in a future update.',
      });
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your password and security preferences.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
                <Label htmlFor="change-password">Change Password</Label>
                <p className="text-sm text-muted-foreground">For your security, we recommend periodically changing your password.</p>
            </div>
            <Button id="change-password" variant="outline" onClick={handleChangePassword}>
                Change Password
            </Button>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
                <Label htmlFor="two-factor-auth">Two-Factor Authentication (2FA)</Label>
                <p className="text-sm text-muted-foreground">Enhance your account security by requiring a second verification step.</p>
            </div>
          <Switch id="two-factor-auth" />
        </div>
      </CardContent>
    </Card>
  );
}
