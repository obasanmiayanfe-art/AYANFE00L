import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HireModal } from './components/HireModal';

export default function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [contactPlatform, setContactPlatform] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleOpenHireModal = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    setIsHireModalOpen(true);
  };

  const handleNavigateToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceQuote = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setIsHireModalOpen(true);
  };

  const handleEstimateSubmitted = (
    platform: string,
    addons: string[],
    price: number,
    timeframe: string
  ) => {
    setContactPlatform(platform);
    const addonsText = addons.length > 0 ? ` with add-ons: ${addons.join(', ')}` : '';
    setContactMessage(
      `Hi BELOVED, I generated a scope estimate for a ${platform}${addonsText}. Estimated budget is $${price} with a target timeframe of ${timeframe}. Let's discuss starting this project!`
    );

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-[#0B3D91]">
      {/* Navigation Header */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenHireModal={() => handleOpenHireModal()}
          onNavigateToPortfolio={handleNavigateToPortfolio}
        />

        {/* About Me Section */}
        <About onOpenHireModal={() => handleOpenHireModal()} />

        {/* Services Section */}
        <Services onSelectService={handleSelectServiceQuote} />

        {/* Featured Portfolio Case Studies Section */}
        <Portfolio onOpenHireModal={() => handleOpenHireModal()} />

        {/* Why Work With Me Section */}
        <WhyWorkWithMe />

        {/* Skills & Technical Progress Section */}
        <Skills />

        {/* Development Process Section */}
        <Process />

        {/* Client Testimonials Section */}
        <Testimonials />

        {/* Frequently Asked Questions Section */}
        <FAQ onOpenHireModal={() => handleOpenHireModal()} />

        {/* Call To Action Section */}
        <CTA onOpenHireModal={() => handleOpenHireModal()} />

        {/* Contact Form Section */}
        <Contact
          initialPlatform={contactPlatform}
          initialMessage={contactMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Hire / Quick Consultation Modal */}
      <HireModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        prefilledService={prefilledService}
      />
    </div>
  );
}

