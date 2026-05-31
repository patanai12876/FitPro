

import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import TrainerCarousel from '@/components/TrainerCarousel';
import MembershipPlans from '@/components/MembershipPlans';
import GymStats from '@/components/GymStats';

import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="animate-pageEnter">
      <Hero />
      <GymStats />
      <FeaturedServices />
      <TrainerCarousel />
      <MembershipPlans />
      
      <CTA />
    </div>
  );
}
