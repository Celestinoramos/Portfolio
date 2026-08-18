import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Bg42 from '@/components/Bg42';
import { getProjects } from '@/lib/api';

export default async function Home() {
  const { data: projects, live } = await getProjects();

  return (
    <>
      <Bg42 />
      <main className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Projects projects={projects} live={live} />
        <Stack />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}