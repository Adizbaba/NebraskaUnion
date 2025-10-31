'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Account } from '@/lib/mock-data';
import { DollarSign, Library, Hash } from 'lucide-react';
import TransferConfirmationModal from './transfer-confirmation-modal';

const formSchema = z.object({
  fromAccount: z.string().min(1, 'Please select an account to transfer from.'),
  recipientBankName: z.string().min(1, 'Recipient bank name is required.'),
  routingNumber: z.string().length(9, 'Routing number must be 9 digits.'),
  accountNumber: z.string().min(4, 'Account number is required.'),
  recipientAccountType: z
    .string()
    .min(1, 'Please select a recipient account type.'),
  amount: z.coerce.number().positive('Amount must be greater than 0.'),
  memo: z.string().optional(),
});

interface ExternalTransferFormProps {
  accounts: Account[];
}

export default function ExternalTransferForm({
  accounts,
}: ExternalTransferFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transferDetails, setTransferDetails] = useState<z.infer<typeof formSchema> | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fromAccount: '',
      recipientBankName: '',
      routingNumber: '',
      accountNumber: '',
      recipientAccountType: '',
      amount: 0,
      memo: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const fromAccount = accounts.find(acc => acc.id === values.fromAccount);
    setTransferDetails({ ...values, fromAccountName: fromAccount?.name });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTransferDetails(null);
    form.reset();
  }

  const availableAccounts = accounts.filter(
    (acc) => acc.type === 'transactional' || acc.type === 'savings'
  );

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fromAccount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From Your Account</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your Nebraska Safe Union account" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableAccounts.map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      {account.name} ({account.number.slice(-4)}) -{' '}
                      {account.balance}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <h3 className="mb-4 text-sm font-medium text-muted-foreground">
            Recipient's Bank Account Details
          </h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="recipientBankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center">
                    <Library className="mr-2 h-4 w-4 text-muted-foreground" />
                    Recipient Bank Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Bank of America" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="routingNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Library className="mr-2 h-4 w-4 text-muted-foreground" />
                      Routing Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="9 digits" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Hash className="mr-2 h-4 w-4 text-muted-foreground" />
                      Account Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter account number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="recipientAccountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient Account Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="checking">Checking</SelectItem>
                      <SelectItem value="savings">Savings</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                Amount to Transfer
              </FormLabel>
              <FormControl>
                <Input type="number" placeholder="$ 0.00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="memo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Memo (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="E.g., Payment for services"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Initiating...' : 'Review & Initiate ACH Transfer'}
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          By submitting, you authorize Nebraska Safe Union to debit your selected
          account and credit the recipient account according to the details
          provided. Ensure all information is accurate.
        </p>
      </form>
    </Form>
    {transferDetails && (
        <TransferConfirmationModal
            isOpen={isModalOpen}
            onOpenChange={handleModalClose}
            details={[
                { label: 'From', value: `${transferDetails.fromAccountName} (...${accounts.find(a => a.id === transferDetails.fromAccount)?.number.slice(-4)})` },
                { label: 'To Bank', value: transferDetails.recipientBankName },
                { label: 'To Account', value: `...${transferDetails.accountNumber.slice(-4)} (${transferDetails.recipientAccountType})` },
                { label: 'Amount', value: `$${transferDetails.amount.toFixed(2)}`, isAmount: true },
                { label: 'Memo', value: transferDetails.memo || 'N/A' },
            ]}
        />
      )}
    </>
  );
}
