import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, DollarSign, Clock, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-success rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2 text-success" />
            Delivering Measurable ROI Through Automation
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              AI-Powered Automation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer specializing in Angular, NestJS, and intelligent automation. 
            I build solutions that <strong>save costs, reduce time, and increase revenue</strong> with proven ROI.
          </p>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-success mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">$850k+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Cost Savings Delivered</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">75%</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Average Time Reduction</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-success mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">320k+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Revenue Increase</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30" asChild>
              <Link to="/savings-calculator">
                Calculate Your ROI
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <p className="text-primary-foreground/60 text-sm mb-4">Trusted by companies to deliver results</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/40">
              <span className="text-lg font-semibold">Manufacturing • SaaS • Finance • Healthcare</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;