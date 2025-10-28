import { CreditCard, Landmark, PiggyBank, Briefcase, Target, Home, LucideIcon } from "lucide-react";

export interface Account {
    id: string;
    name: string;
    number: string;
    balance: string;
    available?: string;
    details?: string;
    icon: LucideIcon;
    type: 'transactional' | 'savings' | 'credit' | 'loan';
}

export const mockAccounts: Account[] = [
    {
        id: 'regular-checking',
        name: 'Regular Checking',
        number: 'XXX XXX 365',
        balance: '$1,550,838.22',
        available: '$1,545,327.01',
        icon: Briefcase,
        type: 'transactional',
    },
    {
        id: 'savings-account',
        name: 'Savings',
        number: 'XXX XXX 808',
        balance: '$1,012,082.93',
        available: '$1,012,082.93',
        icon: PiggyBank,
        type: 'savings',
    },
    {
        id: 'secondary-checking',
        name: 'Secondary Checking',
        number: 'XXX XXX 285',
        balance: '$515,229.83',
        available: '$515,229.83',
        icon: Landmark,
        type: 'transactional',
    },
    {
        id: 'high-yield-savings',
        name: 'High-Yield Savings',
        number: 'XXX XXX 296',
        balance: '$121,345.95',
        available: '$121,345.95',
        icon: Target,
        type: 'savings',
    },
    {
        id: 'platinum-mastercard',
        name: 'Platinum Mastercard',
        number: 'XXX XXX XXXX XXXX 056',
        balance: '$24,099.95',
        available: '$18,938.41',
        details: 'View details',
        icon: CreditCard,
        type: 'credit',
    },
    {
        id: 'home-loan',
        name: 'Mortgage Loan',
        number: 'XXX XXX XXXXXXX',
        balance: '-$423,280.00',
        available: '$0.00',
        details: 'View property performance',
        icon: Home,
        type: 'loan',
    },
];

export const mockAssetsAndLiabilities = {
    totalAssets: '$3,199,496.93',
    totalDebts: '$447,379.95',
    netPosition: '$2,752,116.98'
};
