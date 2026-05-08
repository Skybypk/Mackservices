import React from 'react';
import HvacHero from '../components/hvac/HvacHero';
import PainPointsSection from '../components/hvac/PointsSection';
import SolutionSection from '../components/hvac/SolutionSection';
import ServiceFitSection from '../components/hvac/ServiceFitSection';
import ProcessSteps from '../components/hvac/ProcessSteps';
import TestimonialsSection from '../components/hvac/TestimonialsSection';
import WhyTrustSection from '../components/hvac/WhyTrustSection';
import AuditForm from '../components/hvac/AuditForm';
import CTABanner from '../components/shared/CTABanner';
import ImageMarquee from '../components/shared/ImageMarquee';
import hvacHero from '@/assets/images/hvac-hero.jpeg';
import hvacChiller from '@/assets/images/hvac-chiller-sub-hero.jpeg';
import hvacSubHero2 from '@/assets/images/hvac-sub-hero2.jpeg';
import hvacFunctions from '@/assets/images/hvac-functions.jpg';
import hvacTechnicians from '@/assets/images/hvac-technicians.jpg';

const buildingImage = 'https://media.base44.com/images/public/69f4aeab66d01b9a65c3246b/e449c9a78_generated_image.png';

const galleryImages = [
  { url: hvacHero, title: 'HVAC Hero', alt: 'hvac-hero' },
  { url: hvacChiller, title: 'Chiller', alt: 'hvac-chiller' },
  { url: hvacSubHero2, title: 'HVAC Sub Hero 2', alt: 'hvac-sub-hero-2' },
  { url: hvacFunctions, title: 'HVAC Functions', alt: 'hvac-functions' },
  { url: hvacTechnicians, title: 'HVAC Technicians', alt: 'hvac-technicians' },
];

export default function HvacMaintenance() {
  return (
    <div className="bg-white">
      <HvacHero 
        heroImage1={hvacHero} 
        heroImage2={hvacChiller} 
        heroImage3={hvacSubHero2} 
      />
      <PainPointsSection buildingImage={buildingImage} />
      <SolutionSection />
      
      <div className="py-10 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[1px] w-12 bg-[#00E5FF]" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#0A0A0B]">Project Showcase</h2>
        </div>
        <ImageMarquee images={galleryImages} speed={30} />
      </div>

      <ServiceFitSection />
      <ProcessSteps />
      <TestimonialsSection />
      <WhyTrustSection />
      <AuditForm />
      <CTABanner 
        title="Ready to Eliminate HVAC Headaches?" 
        description="Join 100+ commercial properties in KL that trust us with their HVAC systems. Book your free site audit today."
      />
    </div>
  );
}
