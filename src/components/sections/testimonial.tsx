import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-primary/5 shadow-lg">
          <CardContent className="relative p-8 text-center sm:p-12">
            <Quote className="absolute left-6 top-6 h-10 w-10 text-primary/20" />
            <blockquote className="relative z-10">
              <p className="text-xl font-medium text-foreground">
                “Great experience! Both loan officers were incredible. Made it
                easy for the loan and communication to get this done quickly.
                Thanks!”
              </p>
              <footer className="mt-6">
                <p className="text-base italic text-muted-foreground">
                  — Happy Member
                </p>
              </footer>
            </blockquote>
            <Quote className="absolute right-6 bottom-6 h-10 w-10 rotate-180 text-primary/20" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
