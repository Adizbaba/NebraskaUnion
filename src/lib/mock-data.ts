import { CreditCard, Landmark, PiggyBank, Briefcase, Target, Home, LucideIcon } from "lucide-react";
import { subDays, format } from 'date-fns';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

export interface Account {
    id: string;
    name: string;
    number: string;
    balance: string;
    available?: string;
    details?: string;
    icon: LucideIcon;
    type: 'transactional' | 'savings' | 'credit' | 'loan';
    status: 'Active' | 'Inactive';
    dateOpened: string;
    overdraftProtection: 'Enabled' | 'Disabled';
    linkedDebitCard: string;
    monthlyFee: string;
    eStatements: 'Enabled' | 'Disabled';
    transactions: Transaction[];
}

const generateTransactions = (count: number): Transaction[] => {
  const transactions: Transaction[] = [];
  const today = new Date();
  const descriptions = ['Paycheck Deposit', 'Rent Payment', 'Grocery Store', 'Online Shopping', 'Gas Station', 'Restaurant', 'Utility Bill', 'ATM Withdrawal', 'Subscription', 'Coffee Shop'];
  for (let i = 0; i < count; i++) {
    const date = subDays(today, Math.floor(Math.random() * 30)); // transactions in the last 30 days
    const isDeposit = Math.random() > 0.7;
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const amount = isDeposit 
      ? Math.random() * 2000 + 500 
      : -(Math.random() * 500 + 10);
    transactions.push({
      id: `txn-${i}-${Date.now()}`,
      date: format(date, 'MM/dd/yyyy'),
      description: description,
      amount: parseFloat(amount.toFixed(2)),
    });
  }
  return transactions.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};


export const mockAccounts: Account[] = [
    {
        id: 'regular-checking',
        name: 'Regular Checking',
        number: '**** **** **** 365',
        balance: '$1,550,838.22',
        available: '$1,545,327.01',
        icon: Briefcase,
        type: 'transactional',
        status: 'Active',
        dateOpened: 'October 29, 2024',
        overdraftProtection: 'Enabled',
        linkedDebitCard: '**** 7890',
        monthlyFee: 'None',
        eStatements: 'Enabled',
        transactions: generateTransactions(20),
    },
    {
        id: 'savings-account',
        name: 'Savings',
        number: '**** **** **** 808',
        balance: '$1,012,082.93',
        available: '$1,012,082.93',
        icon: PiggyBank,
        type: 'savings',
        status: 'Active',
        dateOpened: 'January 15, 2022',
        overdraftProtection: 'Disabled',
        linkedDebitCard: 'N/A',
        monthlyFee: 'None',
        eStatements: 'Enabled',
        transactions: generateTransactions(20),
    },
    {
        id: 'secondary-checking',
        name: 'Secondary Checking',
        number: '**** **** **** 285',
        balance: '$515,229.83',
        available: '$515,229.83',
        icon: Landmark,
        type: 'transactional',
        status: 'Active',
        dateOpened: 'March 05, 2023',
        overdraftProtection: 'Enabled',
        linkedDebitCard: '**** 1234',
        monthlyFee: 'None',
        eStatements: 'Enabled',
        transactions: generateTransactions(20),
    },
    {
        id: 'high-yield-savings',
        name: 'High-Yield Savings',
        number: '**** **** **** 296',
        balance: '$121,345.95',
        available: '$121,345.95',
        icon: Target,
        type: 'savings',
        status: 'Active',
        dateOpened: 'June 20, 2024',
        overdraftProtection: 'Disabled',
        linkedDebitCard: 'N/A',
        monthlyFee: 'None',
        eStatements: 'Enabled',
        transactions: generateTransactions(20),
    },
    {
        id: 'platinum-mastercard',
        name: 'Platinum Mastercard',
        number: '**** **** **** 056',
        balance: '$24,099.95',
        available: '$18,938.41',
        details: 'View details',
        icon: CreditCard,
        type: 'credit',
        status: 'Active',
        dateOpened: 'December 01, 2021',
        overdraftProtection: 'N/A',
        linkedDebitCard: 'N/A',
        monthlyFee: '$25',
        eStatements: 'Enabled',
        transactions: generateTransactions(20),
    },
    {
        id: 'home-loan',
        name: 'Mortgage Loan',
        number: '**** **** ***',
        balance: '-$423,280.00',
        available: '$0.00',
        details: 'View property performance',
        icon: Home,
        type: 'loan',
        status: 'Active',
        dateOpened: 'July 11, 2020',
        overdraftProtection: 'N/A',
        linkedDebitCard: 'N/A',
        monthlyFee: 'N/A',
        eStatements: 'Enabled',
        transactions: generateTransactions(20),
    },
];

export const mockAssetsAndLiabilities = {
    totalAssets: '$3,199,496.93',
    totalDebts: '$447,379.95',
    netPosition: '$2,752,116.98'
};
