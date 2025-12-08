// app/services/page.js
import ServicesOverview from '@/components/service/ServicesOverview';
import ServicesForBusiness from '@/components/service/ServicesForBusiness';
import ServicesForIndividuals from '@/components/service/ServicesForIndividuals';
import CustomizationOptions from '@/components/service/CustomizationOptions';
import FabricSelection from '@/components/service/FabricSelection';

import CTA from '@/components/CTA';

export default function ServicesPage() {
  return (
    <div className="pt-4">
      <ServicesOverview />
      <ServicesForBusiness />
      <ServicesForIndividuals />
      <CustomizationOptions />
      <FabricSelection />
      
      <CTA />
    </div>
  );
}