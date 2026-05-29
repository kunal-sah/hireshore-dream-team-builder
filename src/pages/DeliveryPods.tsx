import React, { Suspense, lazy } from 'react';
import { SEOHead } from '@/components/SEOHead';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PodAtAGlance = lazy(() => import('@/components/PodAtAGlance'));
const HowItWorksSection = lazy(() => import('@/components/HowItWorksSection'));
const WhyPodsSection = lazy(() => import('@/components/WhyPodsSection'));
const CalendlySection = lazy(() => import('@/components/CalendlySection'));

const Loader = () => (
  <div className="py-12 flex justify-center">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
  </div>
);

const DeliveryPods = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-neutral-900 overflow-x-hidden">
      <SEOHead
        title="Delivery Pods — Cross-functional Teams That Ship in 5 Days | Hireshore"
        description="A Delivery Pod is a managed, multi-skill team (PM + specialists) that plugs into your tools and ships by Day 5. Full-time output, none of the overhead."
        keywords="delivery pod, cross-functional team, pod team, managed pod, outsourced team, agency pod"
        canonicalUrl="https://hireshore.co/delivery-pods"
      />
      <NavBar />

      {/* Page hero */}
      <header className="bg-secondary border-b border-border pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/70 mb-3"
          >
            Delivery Pods
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-[1.05] tracking-tight mb-5"
          >
            Cross-functional teams that ship by Day 5.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            A Delivery Pod is a small, managed team — PM plus the specialists you need — that plugs into your tools and delivers full-time output without full-time overhead.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button asChild size="lg" className="h-12 sm:h-14 px-8">
              <a href="#book">Book a Pod <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 px-8">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="space-y-16 md:space-y-20 py-8">
        <Suspense fallback={<Loader />}><PodAtAGlance /></Suspense>
        <section id="how-it-works"><Suspense fallback={<Loader />}><HowItWorksSection /></Suspense></section>
        <section id="why-pods"><Suspense fallback={<Loader />}><WhyPodsSection /></Suspense></section>
        <Suspense fallback={<Loader />}><CalendlySection /></Suspense>
      </main>

      <SiteFooter />
    </div>
  );
};

export default DeliveryPods;
