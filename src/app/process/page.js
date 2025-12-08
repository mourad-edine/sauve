// app/portfolio/page.js
import PortfolioHero from '@/components/realisation/PortfolioHero';
import PortfolioFilter from '@/components/realisation/PortfolioFilter';
import PortfolioGallery from '@/components/realisation/PortfolioGallery';
import PortfolioStats from '@/components/realisation/PortfolioStats';
import PortfolioTestimonials from '@/components/realisation/PortfolioTestimonials';
import PortfolioCTA from '@/components/realisation/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <div className="pt-4">
      <PortfolioHero />
      <PortfolioFilter />
      <PortfolioGallery />
      <PortfolioStats />
      <PortfolioTestimonials />
      <PortfolioCTA />
    </div>
  );
}