import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, DollarSign, Clock, TrendingUp } from 'lucide-react';
import { Project } from '@/types';
import { apiService } from '@/services/api';

const ProjectShowcase = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        console.log('Loading projects...');
        const data = await apiService.getProjects();
        console.log('Projects data received:', data, 'Type:', typeof data, 'Is Array:', Array.isArray(data));
        if (Array.isArray(data)) {
          setProjects(data.slice(0, 3)); // Show first 3 projects
        } else {
          console.error('Projects data is not an array:', data);
          setProjects([]);
        }
      } catch (error) {
        console.error('Failed to load projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const getMetricIcon = (key: string) => {
    switch (key) {
      case 'costSaved':
        return DollarSign;
      case 'timeReduced':
        return Clock;
      case 'revenueIncreased':
        return TrendingUp;
      default:
        return TrendingUp;
    }
  };

  const getMetricLabel = (key: string) => {
    switch (key) {
      case 'costSaved':
        return 'Cost Saved';
      case 'timeReduced':
        return 'Time Reduced';
      case 'revenueIncreased':
        return 'Revenue Increased';
      case 'efficiency':
        return 'Efficiency Gain';
      default:
        return 'Impact';
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Proven Results & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects with measurable impact. See how automation and intelligent development 
            transformed operations and delivered substantial ROI.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-card-hover transition-all duration-300 border-2 hover:border-accent/50 bg-background">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-success/10 rounded-lg mb-4 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <div className="text-6xl opacity-20">📊</div>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-destructive mb-1">Problem:</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-success mb-1">Solution:</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                  <h4 className="font-semibold text-sm text-success mb-3">Measurable Impact:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(project.metrics).map(([key, value]) => {
                      const IconComponent = getMetricIcon(key);
                      return (
                        <div key={key} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <IconComponent className="w-4 h-4 text-success mr-2" />
                            <span className="text-sm text-foreground">{getMetricLabel(key)}:</span>
                          </div>
                          <span className="text-sm font-semibold text-success">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.caseStudyUrl && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <Link to={project.caseStudyUrl}>
                        Case Study
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/projects">
              View All Projects & Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;