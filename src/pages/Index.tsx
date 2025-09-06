import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProjectShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
