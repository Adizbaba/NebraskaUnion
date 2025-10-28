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
        id: 'complete-access',
        name: 'Complete access',
        number: 'XXX XXX 365',
        balance: '$341,838.22',
        available: '$339,327.01',
        icon: Briefcase,
        type: 'transactional',
    },
    {
        id: 'netbank-saver',
        name: 'NetBank saver',
        number: 'XXX XXX 808',
        balance: '$112,082.93',
        available: '$112,082.93',
        icon: PiggyBank,
        type: 'savings',
    },
    {
        id: 'smart-access',
        name: 'Smart access',
        number: 'XXX XXX 285',
        balance: '$15,229.83',
        available: '$15,229.83',
        icon: Landmark,
        type: 'transactional',
    },
    {
        id: 'goal-saver',
        name: 'Goal saver',
        number: 'XXX XXX 296',
        balance: '$31,345.95',
        available: '$31,345.95',
        icon: Target,
        type: 'savings',
    },
    {
        id: 'mastercard-diamond',
        name: 'Mastercard diamond',
        number: 'XXX XXX XXXX XXXX 056',
        balance: '$14,099.95',
        available: '$8,938.41',
        details: 'View details',
        icon: CreditCard,
        type: 'credit',
    },
    {
        id: 'home-loan',
        name: 'Home loan',
        number: 'XXX XXX XXXXXXX',
        balance: '-$23,280.00',
        available: '$0.00',
        details: 'View property performance',
        icon: Home,
        type: 'loan',
    },
];

export const mockAssetsAndLiabilities = {
    totalAssets: '$490,496.93',
    totalDebts: '$37,379.95',
    netPosition: '$453,116.98'
};
