import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin, MessageCircle, Users, DollarSign, TrendingUp } from 'lucide-react';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formType, setFormType] = useState<'hire' | 'client' | 'investor'>('client');
  const [service, setService] = useState<string>('');

  useEffect(() => {
    const type = searchParams.get('type') as 'hire' | 'client' | 'investor';
    const serviceParam = searchParams.get('service');
    
    if (type) setFormType(type);
    if (serviceParam) setService(serviceParam);
  }, [searchParams]);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@devautomation.com',
      description: 'Best for detailed project discussions'
    },
    {
      icon: MessageCircle,
      title: 'LinkedIn',
      value: 'linkedin.com/in/devautomation',
      description: 'Professional networking and quick questions'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'Weekdays typically within 4 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote Worldwide',
      description: 'EST timezone, flexible hours'
    }
  ];

  const projectTypes = [
    {
      icon: Users,
      title: 'Client Projects',
      description: 'Custom automation and development solutions',
      examples: ['Process automation', 'Web applications', 'AI integration', 'Workflow optimization']
    },
    {
      icon: DollarSign,
      title: 'Employment Opportunities',
      description: 'Full-time, contract, or consulting roles',
      examples: ['Senior developer positions', 'Automation consulting', 'Technical leadership', 'Project management']
    },
    {
      icon: TrendingUp,
      title: 'Investment Opportunities',
      description: 'Partnerships and investment discussions',
      examples: ['Automation startups', 'SaaS products', 'AI solutions', 'Technology partnerships']
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
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Ready to transform your business with automation and intelligent development? 
              I'm here to help you achieve measurable results and sustainable growth.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">{method.title}</h3>
                      <p className="text-accent font-medium mb-1">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                How Can I Help You?
              </h2>
              <p className="text-xl text-muted-foreground">
                Whether you're looking to hire, partner, or invest - I'm interested in meaningful collaborations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {projectTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="hover:shadow-card-hover transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{type.title}</h3>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {example}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm defaultType={formType} defaultService={service} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;