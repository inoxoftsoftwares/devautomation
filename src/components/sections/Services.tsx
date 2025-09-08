import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bot, Code, TrendingDown, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'revenue-optimization',
      title: 'Revenue Optimization Systems',
      description: 'Transform underperforming sales processes into profit-generating machines. I build intelligent systems that identify revenue leaks, automate lead nurturing, and maximize customer lifetime value.',
      icon: TrendingDown,
      features: [
        'Automated sales funnel optimization',
        'Customer behavior analytics & insights',
        'Dynamic pricing & revenue models',
        'Conversion rate optimization systems',
        'Predictive sales forecasting'
      ],
      benefits: 'Increase revenue by 40-60% while reducing customer acquisition costs',
      ctaText: 'Maximize My Revenue'
    },
    {
      id: 'operational-efficiency',
      title: 'Operational Cost Reduction',
      description: 'Eliminate expensive manual processes that drain your budget. I automate repetitive tasks, streamline workflows, and build systems that do the work of entire teams.',
      icon: Bot,
      features: [
        'Process automation & workflow optimization',
        'Data migration & system integration',
        'Resource allocation optimization',
        'Quality assurance automation',
        'Performance monitoring & alerts'
      ],
      benefits: 'Cut operational costs by 50-70% and improve team productivity',
      ctaText: 'Reduce My Costs'
    },
    {
      id: 'scalable-infrastructure',
      title: 'Scalable Business Infrastructure',
      description: 'Build technology foundations that grow with your business. My full-stack solutions handle increased demand, support team growth, and adapt to changing market conditions.',
      icon: Code,
      features: [
        'Cloud-native architecture design',
        'Auto-scaling system implementation',
        'Database optimization & management',
        'API development & integration',
        'Security & compliance frameworks'
      ],
      benefits: 'Scale operations 10x without proportional cost increases',
      ctaText: 'Scale My Business'
    },
    {
      id: 'data-intelligence',
      title: 'Business Intelligence & Analytics',
      description: 'Turn data into profitable decisions. I create comprehensive dashboards and analytics systems that reveal hidden opportunities and guide strategic business decisions.',
      icon: Bot,
      features: [
        'Real-time business metrics dashboards',
        'Predictive analytics & forecasting',
        'Customer behavior analysis',
        'Financial performance tracking',
        'Automated reporting systems'
      ],
      benefits: 'Make data-driven decisions that increase profitability by 30%+',
      ctaText: 'Unlock My Data'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Business Problems I Solve Through Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I bridge the gap between business objectives and technical execution. Every system I build is designed 
            to eliminate inefficiencies, reduce costs, and drive measurable revenue growth.
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
            Ready to Transform Your Business Operations?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I combine technical expertise with business acumen to deliver systems that generate real ROI. 
            Let's discuss how my full-stack development + automation approach can solve your biggest challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Partner with Me</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;