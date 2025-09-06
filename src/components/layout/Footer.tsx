import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Zap, Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-8 w-8 text-accent" />
                <Zap className="h-4 w-4 text-success absolute -top-1 -right-1" />
              </div>
              <span className="font-heading font-bold text-xl">
                DevAutomation
              </span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Full-stack development and AI automation solutions that deliver measurable ROI. 
              Transforming business operations through intelligent technology.
            </p>
            
            {/* Resume Download */}
            <Button variant="secondary" size="sm" className="mb-4">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/savings-calculator" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact?type=client" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Hire Me
                </Link>
              </li>
              <li>
                <Link to="/contact?type=hire" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Work With Me
                </Link>
              </li>
              <li>
                <Link to="/contact?type=investor" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Investor Inquiry
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} DevAutomation. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;