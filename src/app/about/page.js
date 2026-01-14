// app/about/page.js
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutTeam from '@/components/about/AboutTeam';
import AboutValues from '@/components/about/AboutValues';
import AboutWorkshop from '@/components/about/AboutWorkshop';
import AboutQuality from '@/components/about/AboutQuality';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="pt-4">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutValues />
<<<<<<< HEAD

=======
      <AboutWorkshop />
      <AboutQuality />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
      <AboutCTA />
    </div>
  );
}