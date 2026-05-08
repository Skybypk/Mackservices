import React from 'react';
import HomeHero from '../components/home/HomeHero';
import AboutPreview from '../components/home/aboutpreview';
import ServicesGrid from '../components/home/ServicesGrid';
import HomeQuoteForm from '../components/home/HomeQuoteForm';
import CTABanner from '../components/shared/CTABanner';
import heroImage from '@/assets/images/hero.jpg';
import workImage from '@/assets/images/home-work-sub-hero.jpeg';
import pipeImage from '@/assets/images/home-pipe.jpeg';

const serviceImages = [
  'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/c98f6c4a8_generated_image.png',
  'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/e449c9a78_generated_image.png',
  pipeImage,
  'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/025491f94_generated_image.png',
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <HomeHero heroImage={heroImage} subHeroImage={pipeImage} />
      <AboutPreview workImage={workImage} />
      <ServicesGrid images={serviceImages} />
      <HomeQuoteForm />
      <CTABanner 
        title="Ready to Start Your Project?" 
        description="Join 500+ satisfied clients who trust MacServices for their construction and maintenance needs."
      />
    </div>
  );
}
