import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bot, Code, TrendingDown, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'lead-nurturing',
      title: 'Lead Nurturing Workflows',
      description: 'Turn website visitors into paying customers with automated follow-up sequences that guide prospects through your sales funnel.',
      icon: Bot,
      features: [
        'Automated email sequences for new leads',
        'WhatsApp follow-up campaigns',
        'Abandoned cart recovery workflows',
        'Lead scoring and segmentation',
        'Personalized product recommendations'
      ],
      benefits: 'Increase conversion rates by 35-50% and recover lost sales',
      ctaText: 'Start Converting More Leads'
    },
    {
      id: 'inventory-management',
      title: 'Inventory Management Systems',
      description: 'Never run out of stock again. Automated inventory tracking that prevents stockouts and eliminates manual counting errors.',
      icon: TrendingDown,
      features: [
        'Real-time stock level monitoring',
        'Automatic reorder alerts',
        'Supplier integration and ordering',
        'Sales forecasting and planning',
        'Multi-location inventory tracking'
      ],
      benefits: 'Reduce stockouts by 80% and cut inventory costs by 25%',
      ctaText: 'Optimize My Inventory'
    },
    {
      id: 'customer-service',
      title: 'Customer Service Automation',
      description: 'Respond to customers instantly, even when you\'re busy. Automated support that improves satisfaction and saves your time.',
      icon: Code,
      features: [
        'AI chatbots for instant responses',
        'Automated ticket routing and prioritization',
        'FAQ automation for common questions',
        'Order status and tracking updates',
        'Multi-channel support (WhatsApp, SMS, email)'
      ],
      benefits: 'Improve response times by 90% and customer satisfaction scores',
      ctaText: 'Automate Customer Support'
    },
    {
      id: 'crm-integration',
      title: 'CRM Integration & Management',
      description: 'Centralize all customer data in one place. Streamline your sales process and never lose track of important customer information.',
      icon: Bot,
      features: [
        'Customer data centralization',
        'Sales pipeline automation',
        'Customer communication history',
        'Purchase behavior tracking',
        'Integration with accounting systems'
      ],
      benefits: 'Increase sales efficiency by 40% and improve customer retention',
      ctaText: 'Streamline My Sales'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Automation Solutions for Kenyan Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the challenges of running an e-commerce or retail business in Kenya. 
            Our automation solutions help you focus on growing your business while we handle the repetitive tasks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="relative group hover:shadow-card-hover transition-all duration-300 border-2 hover:border-accent/50">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                    <p className="text-sm font-medium text-success mb-1">Expected Impact:</p>
                    <p className="text-sm text-foreground">{service.benefits}</p>
                  </div>

                  {/* CTA */}
                  <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors" asChild>
                    <Link to={`/contact?service=${service.id}`}>
                      {service.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">
            Ready to Grow Your Business with Automation?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how automation can solve your specific business challenges. 
            Free consultation to understand your needs and show you exactly how much time and money you can save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/savings-calculator">Calculate Potential Savings</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;