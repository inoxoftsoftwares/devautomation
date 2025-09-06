import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Code, 
  Bot, 
  TrendingUp, 
  Users, 
  Award, 
  GraduationCap,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const About = () => {
  const skills = {
    frontend: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'RxJS'],
    backend: ['NestJS', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    automation: ['Python', 'Zapier', 'AI/ML APIs', 'OCR', 'Workflow Orchestration'],
    tools: ['Docker', 'AWS', 'Git', 'CI/CD', 'Testing Frameworks']
  };

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2021 - Present',
      achievements: [
        'Led automation initiatives saving $500k+ annually',
        'Built scalable Angular/NestJS applications serving 10k+ users',
        'Reduced manual processing time by 75% across multiple departments'
      ]
    },
    {
      title: 'Automation Specialist',
      company: 'ProcessPro Inc',
      period: '2019 - 2021',
      achievements: [
        'Designed AI-powered document processing systems',
        'Implemented workflow automation for 50+ business processes',
        'Achieved 95% accuracy improvement in data validation'
      ]
    }
  ];

  const philosophy = [
    {
      icon: TrendingUp,
      title: 'ROI-Driven Development',
      description: 'Every line of code should contribute to measurable business value - whether that\'s cost savings, time reduction, or revenue growth.'
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Leverage AI and automation not just for efficiency, but to eliminate human error and enable 24/7 operations.'
    },
    {
      icon: Users,
      title: 'Human-Centered Design',
      description: 'Technology should empower people, not replace them. Create solutions that make work more meaningful and strategic.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                  Building Solutions That Drive Real Business Value
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  I'm a full-stack developer and automation specialist with a unique focus on delivering 
                  measurable ROI through intelligent technology solutions. My background in business 
                  operations helps me understand not just how to build software, but why it matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30" asChild>
                    <Link to="/contact">Work Together</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-background/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-accent/20 rounded-lg flex items-center justify-center">
                      <Code className="w-12 h-12 text-accent" />
                    </div>
                    <div className="bg-success/20 rounded-lg flex items-center justify-center">
                      <Bot className="w-12 h-12 text-success" />
                    </div>
                    <div className="bg-success/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-success" />
                    </div>
                    <div className="bg-accent/20 rounded-lg flex items-center justify-center">
                      <Users className="w-12 h-12 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
                My Development Philosophy
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Technology is only valuable when it solves real business problems and delivers measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophy.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills & Experience */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Technical Expertise
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-accent" />
                      Frontend Development
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-accent" />
                      Backend Development
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <Bot className="w-5 h-5 mr-2 text-success" />
                      AI & Automation
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.automation.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-success/50 text-success">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-accent" />
                      Tools & Platforms
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                        <div className="flex justify-between items-center">
                          <span className="text-accent font-medium">{exp.company}</span>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let's discuss how automation and intelligent development can deliver measurable 
              results for your organization. From process optimization to full-scale applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30" asChild>
                <Link to="/savings-calculator">Calculate ROI</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;