
import { CreditCard, Landmark, PiggyBank, Briefcase, Target, Home, LucideIcon } from "lucide-react";
import { subDays, format, addDays, subMonths } from 'date-fns';

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

export interface Payee {
    id: string;
    name: string;
    accountNumber: string;
}

export interface UpcomingPayment {
    id: string;
    payeeName: string;
    payeeLogo: string;
    date: string;
    amount: string;
}

export interface PaymentHistoryItem {
    id: string;
    payee: string;
    date: string;
    account: string;
    amount: string;
    status: 'Completed' | 'Pending' | 'Failed';
}

export interface Statement {
    id: string;
    accountId: string;
    date: string;
    downloadUrl: string;
}

const generateTransactions = (count: number): Transaction[] => {
  const transactions: Transaction[] = [];
  const today = new Date();
  
  const depositDescriptions = ['Paycheck Deposit', 'Client Payment', 'Investment Dividend', 'Stock Sale Proceeds', 'Wire Transfer Received', 'Check Deposit', 'Capital Gain Distribution'];
  const withdrawalDescriptions = ['Rent Payment', 'Grocery Store', 'Online Shopping', 'Gas Station', 'Restaurant', 'Utility Bill', 'ATM Withdrawal', 'Subscription Service', 'Mortgage Payment', 'Car Loan Payment', 'Luxury Purchase', 'Investment Purchase', 'Property Tax'];

  for (let i = 0; i < count; i++) {
    const date = subDays(today, Math.floor(Math.random() * 90)); // transactions in the last 90 days
    const isDeposit = Math.random() > 0.65;
    let description = '';
    let amount = 0;

    if (isDeposit) {
      const depositType = Math.random();
      if (depositType > 0.8) { // Large deposit
        description = `Check Deposit #${Math.floor(Math.random() * 1000) + 500}`;
        amount = Math.random() * 45000 + 5000;
      } else if (depositType > 0.5) { // Mid-size deposit
        description = depositDescriptions[Math.floor(Math.random() * depositDescriptions.length)];
        amount = Math.random() * 4500 + 500;
      } else { // Standard deposit
        description = 'Paycheck Deposit';
        amount = Math.random() * 2000 + 1500;
      }
    } else {
      description = withdrawalDescriptions[Math.floor(Math.random() * withdrawalDescriptions.length)];
      amount = -(Math.random() * 2500 + 20);
    }

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

export const mockPayees: Payee[] = [
    { id: '1', name: 'City Electric', accountNumber: '**** 5432' },
    { id: '2', name: 'Capital One Credit Card', accountNumber: '**** 1122' },
    { id: '3', name: 'AT&T Mobile', accountNumber: '**** 8877' },
    { id: '4', name: 'MidAmerican Energy', accountNumber: '**** 3344' },
    { id: '5', name: 'Greenfield Mortgage', accountNumber: '**** 9900' },
];

export const mockUpcomingPayments: UpcomingPayment[] = [
    { id: '1', payeeName: 'Capital One', payeeLogo: '/path/to/capitalone.png', date: format(addDays(new Date(), 5), 'MMM d'), amount: '$150.00' },
    { id: '2', payeeName: 'AT&T', payeeLogo: '/path/to/att.png', date: format(addDays(new Date(), 10), 'MMM d'), amount: '$85.50' },
    { id: '3', payeeName: 'Greenfield Mortgage', payeeLogo: '/path/to/mortgage.png', date: format(addDays(new Date(), 15), 'MMM d'), amount: '$2,100.00' },
];

export const mockPaymentHistory: PaymentHistoryItem[] = [
    { id: '1', payee: 'City Electric', date: format(subDays(new Date(), 5), 'MMM d, yyyy'), account: 'Checking (...365)', amount: '$75.21', status: 'Completed' },
    { id: '2', payee: 'Capital One', date: format(subDays(new Date(), 15), 'MMM d, yyyy'), account: 'Checking (...365)', amount: '$150.00', status: 'Completed' },
    { id: '3', payee: 'AT&T Mobile', date: format(subDays(new Date(), 20), 'MMM d, yyyy'), account: 'Checking (...285)', amount: '$85.50', status: 'Completed' },
    { id: '4', payee: 'MidAmerican Energy', date: format(subDays(new Date(), 32), 'MMM d, yyyy'), account: 'Checking (...365)', amount: '$120.10', status: 'Completed' },
    { id: '5', payee: 'Netflix', date: format(subDays(new Date(), 2), 'MMM d, yyyy'), account: 'Checking (...365)', amount: '$15.99', status: 'Failed' },
];

const generateStatements = (accounts: Account[]): Statement[] => {
    const statements: Statement[] = [];
    const today = new Date();
    
    accounts.forEach(account => {
        // Generate for last 24 months
        for(let i = 0; i < 24; i++) {
            const statementDate = subMonths(today, i);
            statements.push({
                id: `stmt-${account.id}-${i}`,
                accountId: account.id,
                date: format(statementDate, 'MMMM yyyy'),
                downloadUrl: '#',
            });
        }
    });

    return statements;
};

export const mockStatements: Statement[] = generateStatements(mockAccounts);
