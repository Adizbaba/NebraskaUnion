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
import TransferConfirmationModal from './transfer-confirmation-modal';

const formSchema = z.object({
  fromAccount: z.string().min(1, 'Please select an account to transfer from.'),
  toAccount: z.string().min(1, 'Please select an account to transfer to.'),
  amount: z.coerce.number().positive('Amount must be greater than 0.'),
  memo: z.string().optional(),
});

interface TransferFormProps {
  accounts: Account[];
}

export default function TransferForm({ accounts }: TransferFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transferDetails, setTransferDetails] = useState<z.infer<typeof formSchema> | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fromAccount: '',
      toAccount: '',
      amount: 0,
      memo: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const fromAccount = accounts.find(acc => acc.id === values.fromAccount);
    const toAccount = accounts.find(acc => acc.id === values.toAccount);

    setTransferDetails({ ...values, fromAccountName: fromAccount?.name, toAccountName: toAccount?.name });
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
                <FormLabel>From Account</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account to transfer from" />
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
          <FormField
            control={form.control}
            name="toAccount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>To Account</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account to transfer to" />
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
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
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
                    placeholder="E.g., Monthly savings contribution"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            Review Transfer
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Transfers between your accounts are typically instant. Review all details before confirming.
          </p>
        </form>
      </Form>
      {transferDetails && (
        <TransferConfirmationModal
            isOpen={isModalOpen}
            onOpenChange={handleModalClose}
            details={[
                { label: 'From', value: `${transferDetails.fromAccountName} (...${accounts.find(a => a.id === transferDetails.fromAccount)?.number.slice(-4)})` },
                { label: 'To', value: `${transferDetails.toAccountName} (...${accounts.find(a => a.id === transferDetails.toAccount)?.number.slice(-4)})` },
                { label: 'Amount', value: `$${transferDetails.amount.toFixed(2)}`, isAmount: true },
                { label: 'Memo', value: transferDetails.memo || 'N/A' },
            ]}
        />
      )}
    </>
  );
}
