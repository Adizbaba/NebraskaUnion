
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'How do I open a new account?',
    answer:
      'You can apply for a new account by navigating to the "Accounts" page and clicking the "Apply for a new product" button. Follow the on-screen instructions to complete your application.',
  },
  {
    question: 'What are the limits for external transfers?',
    answer:
      'External transfer limits vary based on your account type and history. Generally, the daily limit for standard ACH transfers is $10,000. For higher limits, please contact customer support.',
  },
  {
    question: 'How can I change my password?',
    answer:
      'You can change your password by going to the "Settings" page and clicking on the "Security" tab. From there, you will find an option to "Change Password". You will be required to enter your current password and then your new password.',
  },
  {
    question: 'Are my deposits FDIC insured?',
    answer:
      'Yes, all eligible deposits at Horizon Financial are insured by the FDIC up to the standard maximum of $250,000 per depositor, per insured bank, for each account ownership category.',
  },
   {
    question: 'How do I report a lost or stolen card?',
    answer:
      'If your card is lost or stolen, please contact us immediately at 1-800-555-1234. You can also temporarily lock your card from the "Credit Cards" or "Accounts" section of your digital banking dashboard.',
  },
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground">
          Find answers to your questions.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
