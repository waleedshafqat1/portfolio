import { Hero } from '@/components/sections/hero';
import { ImpactMetrics } from '@/components/sections/impact-metrics';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Skills } from '@/components/sections/skills';
import { Work } from '@/components/sections/work';
import { Clients } from '@/components/sections/clients';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Testimonials } from '@/components/sections/testimonials';
import { DiscoveryAuditCTA } from '@/components/sections/discovery-audit-cta';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <Services />
      <Skills />
      <Work />
      <Clients />
      <Experience />
      <Testimonials />
      <DiscoveryAuditCTA />
      <About />
      <Education />
      <FAQ />
      <Contact />
    </>
  );
}
