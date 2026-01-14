// app/services/page.js
import ServicesOverview from '@/components/service/ServicesOverview';
import ServicesForBusiness from '@/components/service/ServicesForBusiness';
import ServicesForIndividuals from '@/components/service/ServicesForIndividuals';
import CustomizationOptions from '@/components/service/CustomizationOptions';
import FabricSelection from '@/components/service/FabricSelection';

import CTA from '@/components/CTA';
<<<<<<< HEAD
import ServicesHero from '@/components/service/ServiceHero';
=======
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299

export default function ServicesPage() {
  return (
    <div className="pt-4">
<<<<<<< HEAD
      <ServicesHero />
      <ServicesOverview />
      <ServicesForBusiness />
      {/* <ServicesForIndividuals /> */}
      {/* <CustomizationOptions /> */}
      {/* <FabricSelection /> */}
      
    
=======
      <ServicesOverview />
      <ServicesForBusiness />
      <ServicesForIndividuals />
      <CustomizationOptions />
      <FabricSelection />
      
      <CTA />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </div>
  );
}