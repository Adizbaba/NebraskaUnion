'use client';
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
    SidebarSeparator
} from '@/components/ui/sidebar';
import { Logo } from '@/components/layout/logo';
import { Home, Wallet, Repeat, Send, CreditCard, Landmark, History, FileText, FileBarChart2, Settings, HelpCircle, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';


const topMenuItems = [
    { href: '/dashboard', label: 'Overview', icon: Home },
    { href: '#', label: 'Accounts', icon: Wallet },
    { href: '/dashboard/transfer', label: 'Transfers', icon: Repeat },
    { href: '#', label: 'Bill Payments', icon: Send },
    { href: '#', label: 'Credit Cards', icon: CreditCard },
    { href: '#', label: 'Loans', icon: Landmark },
];

const middleMenuItems = [
    { href: '#', label: 'Transaction History', icon: History },
    { href: '#', label: 'Statements', icon: FileText },
    { href: '#', label: 'Reports', icon: FileBarChart2 },
];

const bottomMenuItems = [
    { href: '#', label: 'Settings', icon: Settings },
    { href: '#', label: 'Help', icon: HelpCircle },
];


export default function DashboardSidebar() {
    const pathname = usePathname();
    const auth = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        if (auth) {
          await signOut(auth);
          router.push('/login');
        }
      };

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
            {topMenuItems.map(item => (
                <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                        <Link href={item.href}>
                            <item.icon />
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
        <SidebarSeparator />
         <SidebarMenu>
            {middleMenuItems.map(item => (
                <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                        <Link href={item.href}>
                            <item.icon />
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
      <SidebarMenu>
            {bottomMenuItems.map(item => (
                <SidebarMenuItem key={item.label}>
                     <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                        <Link href={item.href}>
                            <item.icon />
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
                <SidebarMenuButton onClick={handleSignOut} tooltip="Log out">
                    <LogOut />
                    <span>Log out</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
