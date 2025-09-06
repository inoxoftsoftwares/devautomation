import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { SavingsCalculation } from '@/types';

const SavingsCalculator = () => {
  const [inputs, setInputs] = useState({
    currentMonthlyCost: 8000,
    hoursPerWeek: 20,
    hourlyRate: 50,
    automationPercentage: 70,
  });

  const [results, setResults] = useState<SavingsCalculation['projectedSavings']>({
    monthly: 0,
    annual: 0,
    timeHours: 0,
  });

  // Calculate savings whenever inputs change
  useEffect(() => {
    const weeklyTimeReduction = (inputs.hoursPerWeek * inputs.automationPercentage) / 100;
    const monthlyTimeReduction = weeklyTimeReduction * 4.33; // Average weeks per month
    const monthlySavings = monthlyTimeReduction * inputs.hourlyRate;
    
    setResults({
      monthly: monthlySavings,
      annual: monthlySavings * 12,
      timeHours: monthlyTimeReduction,
    });
  }, [inputs]);

  const handleInputChange = (field: keyof typeof inputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatHours = (hours: number) => {
    return `${hours.toFixed(1)} hours`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
          <Calculator className="w-4 h-4 mr-2" />
          ROI Calculator
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
          Calculate Your Automation Savings
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how much time and money you could save by automating your business processes. 
          Get instant estimates based on your current operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Your Current Situation</CardTitle>
            <CardDescription>
              Enter your current costs and time spent on manual processes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Monthly Cost */}
            <div>
              <Label htmlFor="monthlyCost">Current Monthly Operations Cost</Label>
              <div className="relative mt-2">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="monthlyCost"
                  type="number"
                  value={inputs.currentMonthlyCost}
                  onChange={(e) => handleInputChange('currentMonthlyCost', Number(e.target.value))}
                  className="pl-10"
                  min="0"
                  step="100"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Include staff costs, software subscriptions, and overhead
              </p>
            </div>

            {/* Hours per Week */}
            <div>
              <Label htmlFor="hoursPerWeek">Hours Spent on Manual Tasks (per week)</Label>
              <div className="relative mt-2">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="hoursPerWeek"
                  type="number"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => handleInputChange('hoursPerWeek', Number(e.target.value))}
                  className="pl-10"
                  min="0"
                  max="168"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Data entry, document processing, repetitive tasks
              </p>
            </div>

            {/* Hourly Rate */}
            <div>
              <Label htmlFor="hourlyRate">Average Hourly Rate</Label>
              <div className="relative mt-2">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="hourlyRate"
                  type="number"
                  value={inputs.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', Number(e.target.value))}
                  className="pl-10"
                  min="0"
                  step="5"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Blended rate for staff performing manual tasks
              </p>
            </div>

            {/* Automation Percentage */}
            <div>
              <Label>Automation Potential: {inputs.automationPercentage}%</Label>
              <div className="mt-3">
                <Slider
                  value={[inputs.automationPercentage]}
                  onValueChange={([value]) => handleInputChange('automationPercentage', value)}
                  max={95}
                  min={30}
                  step={5}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>30% (Conservative)</span>
                <span>95% (Aggressive)</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Percentage of manual work that can be automated
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card className="bg-gradient-to-br from-success/5 to-accent/5 border-success/20">
          <CardHeader>
            <CardTitle className="text-success">Projected Savings</CardTitle>
            <CardDescription>
              Estimated savings from implementing automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Monthly Savings */}
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Monthly Savings</span>
                <DollarSign className="w-4 h-4 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">
                {formatCurrency(results.monthly)}
              </div>
            </div>

            {/* Annual Savings */}
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Annual Savings</span>
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">
                {formatCurrency(results.annual)}
              </div>
            </div>

            {/* Time Saved */}
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Time Saved (Monthly)</span>
                <Clock className="w-4 h-4 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">
                {formatHours(results.timeHours)}
              </div>
            </div>

            {/* ROI Timeline */}
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Implementation ROI</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">3 months:</span>
                  <span className="font-semibold text-success">
                    {formatCurrency(results.monthly * 3)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">6 months:</span>
                  <span className="font-semibold text-success">
                    {formatCurrency(results.monthly * 6)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">1 year:</span>
                  <span className="font-semibold text-success">
                    {formatCurrency(results.annual)}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Ready to turn these projections into reality?
              </p>
              <Button variant="success" size="lg" className="w-full" asChild>
                <Link to={`/contact?type=client&budget=${results.annual > 100000 ? '100k+' : results.annual > 50000 ? '50k-100k' : '30k-50k'}`}>
                  Start Your Automation Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Context */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary mb-3">
              These are conservative estimates
            </h3>
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
              Actual savings often exceed projections due to improved accuracy, faster processing, 
              24/7 availability, and indirect benefits like better customer satisfaction and employee morale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/projects">View Real Case Studies</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services">Explore Automation Services</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SavingsCalculator;