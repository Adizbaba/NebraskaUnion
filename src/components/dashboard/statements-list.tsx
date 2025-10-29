
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import type { Statement } from '@/lib/mock-data';
import { Download, FileText } from 'lucide-react';
import { format, parse } from 'date-fns';

interface StatementsListProps {
  statements: Statement[];
}

export default function StatementsList({ statements }: StatementsListProps) {
  const groupedStatements = statements.reduce((acc, statement) => {
    const year = parse(statement.date, 'MMMM yyyy', new Date()).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(statement);
    return acc;
  }, {} as Record<string, Statement[]>);

  const sortedYears = Object.keys(groupedStatements).sort((a, b) => Number(b) - Number(a));

  if (statements.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center rounded-md border-2 border-dashed p-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No Statements Available</h3>
            <p className="mt-2 text-sm text-muted-foreground">There are no statements available for this account yet.</p>
        </div>
    )
  }

  return (
    <Accordion type="single" collapsible defaultValue={`year-${sortedYears[0]}`}>
      {sortedYears.map((year) => (
        <AccordionItem value={`year-${year}`} key={year}>
          <AccordionTrigger className="text-lg font-medium">{year}</AccordionTrigger>
          <AccordionContent>
            <div className="divide-y">
                {groupedStatements[year].map((statement) => (
                    <div key={statement.id} className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">{statement.date} Statement</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                            <a href={statement.downloadUrl} download>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </a>
                        </Button>
                    </div>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
