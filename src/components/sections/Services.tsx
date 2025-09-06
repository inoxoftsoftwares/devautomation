import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bot, Code, TrendingDown, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'ai-automation',
      title: 'AI Automation & Workflow Orchestration',
      description: 'Eliminate repetitive tasks and human error with intelligent automation solutions.',
      icon: Bot,
      features: [
        'Document processing with OCR & AI',
        'Email and communication automation',
        'Data validation and error detection',
        'Workflow orchestration and monitoring',
        'Integration with existing systems'
      ],
      benefits: 'Typically saves 60-80% of manual processing time',
      ctaText: 'Automate My Processes'
    },
    {
      id: 'fullstack-development',
      title: 'Full-Stack Development',
      description: 'Custom web applications built with Angular, NestJS, and modern best practices.',
      icon: Code,
      features: [
        'Angular & React frontends',
        'NestJS & Node.js backends',
        'Database design & optimization',
        'API development & integration',
        'Testing & deployment pipelines'
      ],
      benefits: 'Scalable solutions that grow with your business',
      ctaText: 'Build My Application'
    },
    {
      id: 'cost-optimization',
      title: 'Business Process Optimization',
      description: 'Analyze, redesign, and optimize your operations for maximum efficiency and ROI.',
      icon: TrendingDown,
      features: [
        'Process analysis and mapping',
        'Cost-benefit analysis',
        'ROI measurement and tracking',
        'Performance monitoring dashboards',
        'Continuous improvement strategies'
      ],
      benefits: 'Average ROI of 300-500% within first year',
      ctaText: 'Optimize My Business'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Services That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI automation to full-stack development, I deliver solutions that provide 
            measurable business value and sustainable competitive advantages.
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
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your specific challenges and create a custom solution that delivers measurable ROI. 
            Free consultation and project scoping included.
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