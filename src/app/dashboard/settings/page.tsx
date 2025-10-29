
'use client';

import SettingsProfileForm from '@/components/dashboard/settings/settings-profile-form';
import SettingsSecurityForm from '@/components/dashboard/settings/settings-security-form';
import SettingsNotificationsForm from '@/components/dashboard/settings/settings-notifications-form';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings, profile, and preferences.
        </p>
      </div>

      <div className="space-y-8">
        <SettingsProfileForm />
        <SettingsSecurityForm />
        <SettingsNotificationsForm />
      </div>
    </div>
  );
}
