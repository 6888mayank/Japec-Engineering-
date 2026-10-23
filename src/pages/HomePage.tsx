import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { ProductGallerySection } from '../components/home/ProductGallerySection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { WorkflowSection } from '../components/home/WorkflowSection';
import { QualitySection } from '../components/home/QualitySection';
import { QuoteCtaBanner } from '../components/common/QuoteCtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Company Introduction */}
      <IntroSection />

      {/* 3. Manufacturing Capabilities (7 Cards) */}
      <CapabilitiesSection />

      {/* 4. Products & Applications Gallery */}
      <ProductGallerySection />

      {/* 5. Industries Served */}
      <IndustriesSection />

      {/* 6. Why Choose JAPEC ENGINEERING? */}
      <WhyChooseSection />

      {/* 7. Manufacturing Workflow */}
      <WorkflowSection />

      {/* 8. Quality & Engineering Section */}
      <QualitySection />

      {/* 9. Conversion Banner */}
      <QuoteCtaBanner
        title="Ready to Discuss Your Precision Component Requirements?"
        description="Connect with our technical team in Rabale MIDC, Navi Mumbai. Send us your drawings, technical specifications, or physical samples for feasibility evaluation."
      />
    </div>
  );
};
