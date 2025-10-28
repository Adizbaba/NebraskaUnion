'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';

interface AssetsAndLiabilitiesProps {
    data: {
        totalAssets: string;
        totalDebts: string;
        netPosition: string;
    }
}

export default function AssetsAndLiabilities({ data }: AssetsAndLiabilitiesProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Your assets and liabilities</CardTitle>
        <Button variant="link" className="text-primary">View portfolio</Button>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-border md:grid md:grid-cols-3 md:divide-y-0 md:divide-x">
          <div className="py-4 text-center md:py-0">
            <p className="text-sm text-muted-foreground">Total assets</p>
            <p className="text-2xl font-bold text-green-600">{data.totalAssets}</p>
          </div>
          <div className="py-4 text-center md:py-0">
            <p className="text-sm text-muted-foreground">Total debts</p>
            <p className="text-2xl font-bold text-red-600">{data.totalDebts}</p>
          </div>
          <div className="pt-4 text-center md:pt-0">
            <p className="text-sm text-muted-foreground">Net position</p>
            <p className="text-2xl font-bold text-gray-800">{data.netPosition}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
