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
import {
  DollarSign,
  Send,
  UserPlus,
  Search,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import TransferConfirmationModal from './transfer-confirmation-modal';

const formSchema = z.object({
  recipient: z.string().min(1, 'Please enter an email or U.S. mobile number.'),
  fromAccount: z.string().min(1, 'Please select an account.'),
  amount: z.coerce.number().positive('Amount must be greater than 0.'),
  memo: z.string().optional(),
});

interface ZelleTransferFormProps {
  accounts: Account[];
}

export default function ZelleTransferForm({
  accounts,
}: ZelleTransferFormProps) {
  const [transferType, setTransferType] = useState<'send' | 'request'>('send');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transferDetails, setTransferDetails] = useState<z.infer<typeof formSchema> | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipient: '',
      fromAccount: '',
      amount: 0,
      memo: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const fromAccount = accounts.find(acc => acc.id === values.fromAccount);
    setTransferDetails({ ...values, fromAccountName: fromAccount?.name, transferType });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTransferDetails(null);
    form.reset();
  }

  const availableAccounts = accounts.filter(
    (acc) => acc.type === 'transactional'
  );

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="rounded-lg border bg-muted/20 p-4">
          <FormLabel className="flex items-center text-sm font-medium text-muted-foreground">
            <Users className="mr-2 h-4 w-4" />
            Find Recipient
          </FormLabel>
          <div className="relative mt-2 flex items-center">
            <FormField
              control={form.control}
              name="recipient"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input
                      placeholder="Email or U.S. mobile number"
                      className="pr-10"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-1 h-8 w-8 text-muted-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-lg bg-muted p-1">
          <Button
            type="button"
            onClick={() => setTransferType('send')}
            className={cn(
              'flex items-center gap-2',
              transferType === 'send'
                ? 'bg-background text-foreground shadow-sm'
                : 'bg-transparent text-muted-foreground hover:bg-background/50'
            )}
          >
            <Send className="h-4 w-4" />
            Send Money
          </Button>
          <Button
            type="button"
            onClick={() => setTransferType('request')}
            className={cn(
              'flex items-center gap-2',
              transferType === 'request'
                ? 'bg-background text-foreground shadow-sm'
                : 'bg-transparent text-muted-foreground hover:bg-background/50'
            )}
          >
            <UserPlus className="h-4 w-4" />
            Request Money
          </Button>
        </div>

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
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                Amount to {transferType === 'send' ? 'Send' : 'Request'}
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="$ 0.00"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
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
                  placeholder="E.g., For dinner last night"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? 'Processing...'
            : `Review & ${transferType === 'send' ? 'Send' : 'Request'}`}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Zelle® and the Zelle® related marks are wholly owned by Early Warning
          Services, LLC and are used herein under license.
        </p>
      </form>
    </Form>
    {transferDetails && (
        <TransferConfirmationModal
            isOpen={isModalOpen}
            onOpenChange={handleModalClose}
            details={[
                { label: 'From', value: `${transferDetails.fromAccountName} (...${accounts.find(a => a.id === transferDetails.fromAccount)?.number.slice(-4)})` },
                { label: transferType === 'send' ? 'To' : 'From', value: transferDetails.recipient },
                { label: 'Amount', value: `$${transferDetails.amount.toFixed(2)}`, isAmount: true },
                { label: 'Memo', value: transferDetails.memo || 'N/A' },
            ]}
            transferType={transferType}
        />
      )}
    </>
  );
}
