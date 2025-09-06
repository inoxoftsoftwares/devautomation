import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';

const ServicesPage = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your current processes, pain points, and business objectives.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Create detailed technical specifications and ROI projections.',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Build, test, and deploy your custom automation solution.',
      duration: '4-12 weeks'
    },
    {
      step: '04',
      title: 'Training & Optimization',
      description: 'Team training, performance monitoring, and continuous improvement.',
      duration: 'Ongoing'
    }
  ];

  const guarantees = [
    {
      icon: DollarSign,
      title: 'ROI Guarantee',
      description: 'Measurable savings within 6 months or money-back guarantee'
    },
    {
      icon: Clock,
      title: 'Delivery Guarantee',
      description: 'On-time delivery with weekly progress updates and milestones'
    },
    {
      icon: TrendingUp,
      title: 'Performance Guarantee',
      description: '90+ day post-launch support and performance optimization included'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Services That Deliver Real Business Value
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              From AI automation to full-stack development, I create solutions that save costs, 
              reduce time, and increase revenue. Every project is designed for measurable ROI.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Main Services */}
        <Services />

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
                How We Work Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven process that ensures your project delivers maximum value with minimal risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="text-4xl font-bold text-accent/20 mb-2">{step.step}</div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Duration: {step.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-accent/50" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
                Your Success is Guaranteed
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I stand behind my work with concrete guarantees that protect your investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon;
                return (
                  <Card key={index} className="text-center border-2 border-success/20 bg-success/5">
                    <CardHeader>
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-success" />
                      </div>
                      <CardTitle className="text-xl text-success">{guarantee.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{guarantee.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your specific needs and create a custom solution that delivers measurable results. 
                Free consultation and project scoping included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/savings-calculator">Calculate Your ROI</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;