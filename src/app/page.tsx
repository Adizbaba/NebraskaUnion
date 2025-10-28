import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Info from '@/components/sections/info';
import Rates from '@/components/sections/rates';
import Testimonial from '@/components/sections/testimonial';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Rates />
        <Info />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
