// app/page.js
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Clients from '@/components/Clients';
<<<<<<< HEAD
import CTA from '@/components/about/AboutCTA';
=======
import CTA from '@/components/CTA';
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299

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