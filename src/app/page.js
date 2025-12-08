// app/page.js
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Process />
      <Clients />
      <CTA />
    </div>
  );
}