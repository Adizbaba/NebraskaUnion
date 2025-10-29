'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Detail = {
  label: string;
  value: string;
  isAmount?: boolean;
};

interface TransferConfirmationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  details: Detail[];
  transferType?: 'send' | 'request';
}

type ModalState = 'confirm' | 'loading' | 'error';

export default function TransferConfirmationModal({
  isOpen,
  onOpenChange,
  details,
  transferType = 'send',
}: TransferConfirmationModalProps) {
  const [modalState, setModalState] = useState<ModalState>('confirm');

  const handleConfirm = () => {
    setModalState('loading');
    // Simulate API call
    setTimeout(() => {
      setModalState('error');
    }, 2000);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset modal state after a short delay to allow closing animation
    setTimeout(() => {
      setModalState('confirm');
    }, 300);
  };

  const titleAction = transferType === 'request' ? 'Request' : 'Transfer';

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent onInteractOutside={(e) => e.preventDefault()} className="max-w-md">
        {modalState === 'confirm' && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm {titleAction}</DialogTitle>
              <DialogDescription>
                Please review the details below before confirming.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex justify-between items-center"
                >
                  <p className="text-sm text-muted-foreground">
                    {detail.label}
                  </p>
                  <p
                    className={cn(
                      'text-sm font-medium text-right',
                      detail.isAmount && 'text-lg font-bold text-primary'
                    )}
                  >
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleConfirm}>Confirm & {transferType === 'send' ? 'Send' : 'Request'}</Button>
            </DialogFooter>
          </>
        )}

        {modalState === 'loading' && (
          <div className="flex flex-col items-center justify-center space-y-4 py-12">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Processing your {titleAction.toLowerCase()}...</p>
          </div>
        )}

        {modalState === 'error' && (
          <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-10 w-10 text-destructive" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-destructive">
                {titleAction} Unsuccessful
              </DialogTitle>
              <DialogDescription>
                Your {titleAction.toLowerCase()} could not be completed at the moment. Please try again later.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={handleClose} variant="destructive">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
