'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/dashboard/sidebar';
import { Button } from '@/components/ui/button';
import { Bell, LifeBuoy, LogOut, Settings, User as UserIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/firebase';
import { Logo } from '@/components/layout/logo';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p>Loading...</p>
      </div>
    );
  }

  const handleSignOut = async () => {
    if (auth) {
      await signOut(auth);
      router.push('/login');
    }
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return names[0][0] + names[names.length - 1][0];
    }
    return name.substring(0, 2);
  };
  
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-muted/30">
          <Sidebar>
              <DashboardSidebar />
          </Sidebar>
          <SidebarInset>
              <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
                  <div className="flex items-center gap-2">
                      <SidebarTrigger className="md:hidden" />
                      <div className="hidden md:flex">
                        <Logo />
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon">
                          <Bell className="h-5 w-5 text-muted-foreground" />
                      </Button>
                      <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                  <Avatar className="h-8 w-8">
                                      <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                                      <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                                  </Avatar>
                              </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56" align="end" forceMount>
                              <DropdownMenuLabel className="font-normal">
                                  <div className="flex flex-col space-y-1">
                                      <p className="text-sm font-medium leading-none">{user.displayName}</p>
                                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                                  </div>
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                  <UserIcon className="mr-2 h-4 w-4" />
                                  <span>Profile</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                  <Settings className="mr-2 h-4 w-4" />
                                  <span>Settings</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                  <LifeBuoy className="mr-2 h-4 w-4" />
                                  <span>Support</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={handleSignOut}>
                                  <LogOut className="mr-2 h-4 w-4" />
                                  <span>Log out</span>
                              </DropdownMenuItem>
                          </DropdownMenuContent>
                      </DropdownMenu>
                  </div>
              </header>
              <main className="flex-1 p-4 sm:px-6">{children}</main>
          </SidebarInset>
      </div>
  </SidebarProvider>
  );
}