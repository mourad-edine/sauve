// app/about/page.js
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutTeam from '@/components/about/AboutTeam';
import AboutValues from '@/components/about/AboutValues';
import AboutWorkshop from '@/components/about/AboutWorkshop';
import AboutQuality from '@/components/about/AboutQuality';
import AboutCTA from '@/components/about/AboutCTA';
import CTAabout from '@/components/contact/CTAabout';

export default function AboutPage() {
  return (
    <div className="pt-4">
      <AboutHero />
      {/* <AboutStory /> */}
      <AboutTeam />
      <AboutValues />

      <CTAabout />
    </div>
  );
}