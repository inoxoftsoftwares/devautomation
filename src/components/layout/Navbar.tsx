import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Code className="h-8 w-8 text-accent transition-transform group-hover:rotate-12" />
              <Zap className="h-4 w-4 text-success absolute -top-1 -right-1 transition-transform group-hover:scale-110" />
            </div>
            <span className="font-heading font-bold text-xl text-primary">
              DevAutomation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href)
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link to="/savings-calculator">ROI Calculator</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent ${
                    isActive(item.href)
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/savings-calculator">ROI Calculator</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;