import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { Search, ExternalLink, DollarSign, Clock, TrendingUp, Filter } from 'lucide-react';
import { Project } from '@/types';
import { apiService } from '@/services/api';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTech, setFilterTech] = useState('all');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await apiService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Get unique technologies for filter
  const allTechnologies = projects.reduce<string[]>((acc, project) => {
    project.technologies.forEach(tech => {
      if (!acc.includes(tech)) acc.push(tech);
    });
    return acc;
  }, []);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = filterTech === 'all' || project.technologies.includes(filterTech);
    return matchesSearch && matchesTech;
  });

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Projects & Case Studies
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Real projects with measurable impact. See how automation and intelligent development 
              transformed operations and delivered substantial ROI for businesses like yours.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={filterTech} onValueChange={setFilterTech}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by technology" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Technologies</SelectItem>
                    {allTechnologies.map(tech => (
                      <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-pulse text-muted-foreground">Loading projects...</div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-muted-foreground">
                    Showing {filteredProjects.length} of {projects.length} projects
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <Card key={project.id} className="group hover:shadow-card-hover transition-all duration-300 border-2 hover:border-accent/50">
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

                {filteredProjects.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg mb-4">
                      No projects found matching your criteria.
                    </p>
                    <Button variant="outline" onClick={() => {
                      setSearchTerm('');
                      setFilterTech('all');
                    }}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              These case studies represent real transformations. Let's discuss how automation 
              and development can deliver similar measurable impact for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30" asChild>
                <Link to="/savings-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;