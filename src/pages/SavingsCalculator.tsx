import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SavingsCalculator from '@/components/tools/SavingsCalculator';

const SavingsCalculatorPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SavingsCalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SavingsCalculatorPage;