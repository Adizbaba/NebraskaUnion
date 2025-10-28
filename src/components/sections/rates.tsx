import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Car, Landmark, User } from 'lucide-react';

const rates = [
  {
    icon: Landmark,
    title: '6-Month Term Share',
    rate: '3.60% APY',
    description: 'Certificates',
  },
  {
    icon: User,
    title: 'Personal Loan',
    rate: '11.16% APR',
    description: 'As low as',
  },
  {
    icon: Car,
    title: 'Auto Loans',
    rate: 'Rates Too Hot to Ignore',
    description: 'Drive away with a great deal',
  },
];

export default function Rates() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {rates.map((rate) => {
            const Icon = rate.icon;
            return (
              <Card
                key={rate.title}
                className="flex transform flex-col text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-4 self-center rounded-full bg-primary/10 p-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold">{rate.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {rate.description}
                  </p>
                  <div className="my-6 flex-grow">
                    <p
                      className={`font-bold ${
                        rate.title === 'Auto Loans'
                          ? 'text-2xl text-accent'
                          : 'text-4xl text-primary'
                      }`}
                    >
                      {rate.rate}
                    </p>
                  </div>
                  <Button
                    variant="link"
                    className="group mt-auto text-accent hover:text-accent/90"
                  >
                    Learn More{' '}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
