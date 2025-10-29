
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Settings, User, Shield, Bell } from "lucide-react";

const settingsSections = [
    {
        icon: User,
        title: "Profile Settings",
        description: "Manage your personal information, such as your name, email, and phone number.",
        status: "Coming Soon"
    },
    {
        icon: Shield,
        title: "Security Settings",
        description: "Change your password, set up two-factor authentication, and manage your security preferences.",
        status: "Coming Soon"
    },
    {
        icon: Bell,
        title: "Notification Settings",
        description: "Customize how you receive alerts for account activity, promotions, and news.",
        status: "Coming Soon"
    }
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {settingsSections.map((section, index) => {
            const Icon = section.icon;
            return (
                 <Card key={index}>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                             <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle>{section.title}</CardTitle>
                                <CardDescription>{section.description}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                     <CardContent>
                        <div className="text-center p-8 text-muted-foreground">
                            <p>This feature is under construction. Please check back later!</p>
                        </div>
                    </CardContent>
                 </Card>
            )
        })}
      </div>
    </div>
  );
}
