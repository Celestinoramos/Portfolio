import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Languages from '@/components/Languages';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { getProjects } from '@/lib/api';

export default async function Home() {
  const { data: projects, live } = await getProjects();

  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <About />
      <Timeline />
      <Certifications />
      <Projects projects={projects} live={live} />
      <Stack />
      <Languages />
      <ContactSection />
      <Footer />
    </main>
  );
}
