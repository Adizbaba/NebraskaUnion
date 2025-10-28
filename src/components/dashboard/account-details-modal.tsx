'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Account, Transaction } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar, ShieldCheck, CreditCard, Banknote, FileText, Hash, DollarSign, Info } from 'lucide-react';

interface AccountDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  account: Account;
}

const detailIcons = {
  'Account Name': Briefcase,
  'Account Number': Hash,
  'Current Balance': DollarSign,
  'Available Balance': DollarSign,
  'Status': Info,
  'Date Opened': Calendar,
  'Overdraft Protection': ShieldCheck,
  'Linked Debit Card': CreditCard,
  'Monthly Fee': Banknote,
  'eStatements': FileText,
};

export default function AccountDetailsModal({ isOpen, onOpenChange, account }: AccountDetailsModalProps) {
  const accountDetails = [
    { label: 'Account Name', value: account.name, icon: detailIcons['Account Name'] },
    { label: 'Account Number', value: account.number.slice(-4), icon: detailIcons['Account Number'] },
    { label: 'Current Balance', value: `${account.balance} USD`, icon: detailIcons['Current Balance'] },
    { label: 'Available Balance', value: `${account.available} USD`, icon: detailIcons['Available Balance'] },
    { label: 'Status', value: <Badge variant={account.status === 'Active' ? 'default' : 'secondary'} className="bg-blue-600 hover:bg-blue-700 text-white">{account.status}</Badge>, icon: detailIcons['Status'] },
    { label: 'Date Opened', value: account.dateOpened, icon: detailIcons['Date Opened'] },
    { label: 'Overdraft Protection', value: account.overdraftProtection, icon: detailIcons['Overdraft Protection'] },
    { label: 'Linked Debit Card', value: account.linkedDebitCard, icon: detailIcons['Linked Debit Card'] },
    { label: 'Monthly Fee', value: account.monthlyFee, icon: detailIcons['Monthly Fee'] },
    { label: 'eStatements', value: account.eStatements, icon: detailIcons['eStatements'] },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-bold text-primary">
             <Banknote className="mr-3 h-8 w-8" /> {account.name} - Details
          </DialogTitle>
          <DialogDescription>
            Detailed information for account ending in •••• {account.number.slice(-4)}.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-4">
            {accountDetails.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start">
                  <Icon className="mr-3 mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <div className="font-medium text-foreground">{value}</div>
                  </div>
                </div>
              ))}
        </div>

        <div>
            <h3 className="mb-2 text-lg font-semibold flex items-center"><FileText className="mr-2 h-5 w-5" />Recent Transactions</h3>
            <ScrollArea className="h-64 rounded-md border">
                <Table>
                <TableHeader className="sticky top-0 bg-muted/90">
                    <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {account.transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                        <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell
                        className={cn(
                            'text-right font-medium',
                            transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        )}
                        >
                        {transaction.amount > 0 ? '+' : ''}${transaction.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </ScrollArea>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
