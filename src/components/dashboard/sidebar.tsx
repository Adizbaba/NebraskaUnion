'use client';
import {
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { Logo } from '@/components/layout/logo';
import { Home, Landmark, Wallet, CreditCard, Repeat, Settings, HelpCircle, Activity } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
    { href: '/dashboard', label: 'Home', icon: Home },
    { href: '#', label: 'Accounts', icon: Wallet },
    { href: '#', label: 'Pay & transfer', icon: Repeat },
    { href: '#', label: 'Cards', icon: CreditCard },
    { href: '#', label: 'Loans', icon: Landmark },
    { href: '#', label: 'Activity', icon: Activity },
];

const bottomMenuItems = [
    { href: '#', label: 'Settings', icon: Settings },
    { href: '#', label: 'Help', icon: HelpCircle },
];


export default function DashboardSidebar() {
    const pathname = usePathname();
  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
            <Logo />
            <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
            {menuItems.map(item => (
                <SidebarMenuItem key={item.label}>
                    <Link href={item.href} passHref>
                        <SidebarMenuButton as="a" isActive={pathname === item.href} tooltip={item.label}>
                            <item.icon />
                            <span>{item.label}</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
      <SidebarMenu>
            {bottomMenuItems.map(item => (
                <SidebarMenuItem key={item.label}>
                    <Link href={item.href} passHref>
                        <SidebarMenuButton as="a" isActive={pathname === item.href} tooltip={item.label}>
                            <item.icon />
                            <span>{item.label}</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
