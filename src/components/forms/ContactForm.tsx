import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/types';
import { apiService } from '@/services/api';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  defaultType?: 'hire' | 'client' | 'investor';
  defaultService?: string;
}

const ContactForm = ({ defaultType, defaultService }: ContactFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: defaultService ? `I'm interested in ${defaultService} services. ` : '',
    budget: '',
    type: defaultType || 'client'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await apiService.submitContact(formData);
      if (result.success) {
        setSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              Your message has been sent successfully. I'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Get Started Today</CardTitle>
        <CardDescription className="text-base">
          Ready to transform your business with automation and development? 
          Let's discuss your project and calculate potential ROI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <Label htmlFor="type">Project Type *</Label>
            <Select value={formData.type} onValueChange={(value: 'hire' | 'client' | 'investor') => handleInputChange('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client">Hire Me (Client Project)</SelectItem>
                <SelectItem value="hire">Work With Me (Partnership/Employment)</SelectItem>
                <SelectItem value="investor">Investor Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Budget Range */}
          <div>
            <Label htmlFor="budget">
              {formData.type === 'investor' ? 'Investment Range' : 'Project Budget'}
            </Label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {formData.type === 'investor' ? (
                  <>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                    <SelectItem value="250k-500k">$250k - $500k</SelectItem>
                    <SelectItem value="500k+">$500k+</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="5k-15k">$5k - $15k</SelectItem>
                    <SelectItem value="15k-30k">$15k - $30k</SelectItem>
                    <SelectItem value="30k-50k">$30k - $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="100k+">$100k+</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">
              {formData.type === 'investor' 
                ? 'Investment Details & Vision' 
                : 'Project Description'}
              *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              placeholder={
                formData.type === 'investor'
                  ? "Tell me about your investment thesis, timeline, and how you see automation fitting into your portfolio..."
                  : "Describe your project, current challenges, goals, and timeline. Include any specific automation needs or pain points..."
              }
              rows={6}
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? 'Sending...' : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {formData.type === 'investor' ? 'Send Investment Inquiry' : 'Send Project Inquiry'}
              </>
            )}
          </Button>

          {/* Additional Info */}
          <div className="text-sm text-muted-foreground text-center space-y-2">
            <p>
              <strong>Response time:</strong> Within 24 hours
            </p>
            <p>
              <strong>Free consultation:</strong> Project scoping and ROI estimation included
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;