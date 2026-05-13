import React from 'react';
import HomeHero from '../components/home/HomeHero';
import AboutPreview from '../components/home/aboutpreview';
import ServicesGrid from '../components/home/ServicesGrid';
import HomeQuoteForm from '../components/home/HomeQuoteForm';
import HomeNotForSection from '../components/home/HomeNotForSection';
import HomeNeglectRisks from '../components/home/HomeNeglectRisks';
import WhyTrustSection from '../components/hvac/WhyTrustSection';
import CTABanner from '../components/shared/CTABanner';
import heroImage from '@/assets/images/hero.jpg';
import workImage from '@/assets/images/home-work-sub-hero.jpeg';
import pipeImage from '@/assets/images/home-pipe.jpeg';
import constructionBanner from '@/assets/images/construction-&-repairs-banner.jpg';
import steelworksBanner from '@/assets/images/Structural- Steelworks-banner.jpg';

const serviceImages = [
  constructionBanner,
  steelworksBanner,
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <HomeHero heroImage={heroImage} subHeroImage={pipeImage} />
      <AboutPreview workImage={workImage} />
      <ServicesGrid images={serviceImages} />
      <HomeQuoteForm />
      <HomeNotForSection />
      <HomeNeglectRisks />
      <WhyTrustSection />
      <CTABanner 
        title="Ready to Start Your Project?" 
        description="Join 500+ satisfied clients who trust MackServices for their construction and maintenance needs."
      />
    </div>
  );
}
