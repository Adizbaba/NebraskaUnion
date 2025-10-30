
'use client';

import SettingsNotificationsForm from '@/components/dashboard/settings/settings-notifications-form';

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Manage Alerts</h1>
        <p className="text-muted-foreground">
          Customize your account alerts and notifications.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
         <SettingsNotificationsForm />
        </div>
      </div>

    </div>
  );
}
