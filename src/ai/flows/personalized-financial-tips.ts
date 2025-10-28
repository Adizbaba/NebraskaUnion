'use server';

/**
 * @fileOverview Personalized financial tips flow that analyzes user banking activity and recommends tailored advice.
 *
 * - getPersonalizedFinancialTips - A function that generates personalized financial tips based on user banking activity.
 * - PersonalizedFinancialTipsInput - The input type for the getPersonalizedFinancialTips function.
 * - PersonalizedFinancialTipsOutput - The return type for the getPersonalizedFinancialTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFinancialTipsInputSchema = z.object({
  bankingActivity: z
    .string()
    .describe('A description of the user historical banking activity.'),
});
export type PersonalizedFinancialTipsInput = z.infer<
  typeof PersonalizedFinancialTipsInputSchema
>;

const PersonalizedFinancialTipsOutputSchema = z.object({
  tips: z
    .string()
    .describe(
      'Personalized financial tips tailored to the user banking activity.'
    ),
});
export type PersonalizedFinancialTipsOutput = z.infer<
  typeof PersonalizedFinancialTipsOutputSchema
>;

export async function getPersonalizedFinancialTips(
  input: PersonalizedFinancialTipsInput
): Promise<PersonalizedFinancialTipsOutput> {
  return personalizedFinancialTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedFinancialTipsPrompt',
  input: {schema: PersonalizedFinancialTipsInputSchema},
  output: {schema: PersonalizedFinancialTipsOutputSchema},
  prompt: `You are a financial advisor. Analyze the user's banking activity and provide personalized financial tips to help them optimize savings and reduce debt.

Banking Activity: {{{bankingActivity}}}`,
});

const personalizedFinancialTipsFlow = ai.defineFlow(
  {
    name: 'personalizedFinancialTipsFlow',
    inputSchema: PersonalizedFinancialTipsInputSchema,
    outputSchema: PersonalizedFinancialTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
