'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Account } from '@/lib/mock-data';

const formSchema = z.object({
  fromAccount: z.string().min(1, 'Please select an account to transfer from.'),
  toAccount: z.string().min(1, 'Please select an account to transfer to.'),
  amount: z.coerce.number().positive('Amount must be greater than 0.'),
});

interface TransferFormProps {
  accounts: Account[];
}

export default function TransferForm({ accounts }: TransferFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        fromAccount: '',
        toAccount: '',
        amount: 0,
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: 'Transfer Successful',
      description: `Successfully transferred $${values.amount} from ${values.fromAccount} to ${values.toAccount}.`,
    });
    form.reset();
  };

  const a = accounts.filter(acc => acc.type === 'transactional');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fromAccount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {accounts.filter(acc => acc.type === 'transactional' || acc.type === 'savings').map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      {account.name} - {account.balance}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="toAccount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {accounts.filter(acc => acc.type === 'transactional' || acc.type === 'savings').map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      {account.name} - {account.balance}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
          Next
        </Button>
      </form>
    </Form>
  );
}
