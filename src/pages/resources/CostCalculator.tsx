import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calculator, DollarSign, TrendingDown, Users, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const CostCalculator = () => {
  const [localSalary, setLocalSalary] = useState<number>(80000);
  const [remoteSalary, setRemoteSalary] = useState<number>(35000);
  const [teamSize, setTeamSize] = useState<number>(3);
  const [location, setLocation] = useState<string>("us");
  const [benefits, setBenefits] = useState<number>(25);

  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  // Location-based salary adjustments
  const locationMultipliers: { [key: string]: { local: number; name: string } } = {
    "us": { local: 1.0, name: "United States" },
    "ca": { local: 0.85, name: "Canada" },
    "uk": { local: 0.75, name: "United Kingdom" },
    "au": { local: 0.80, name: "Australia" },
    "de": { local: 0.70, name: "Germany" },
    "nl": { local: 0.75, name: "Netherlands" }
  };

  const adjustedLocalSalary = localSalary * locationMultipliers[location].local;
  const localTotalCost = (adjustedLocalSalary + (adjustedLocalSalary * benefits / 100)) * teamSize;
  const remoteTotalCost = remoteSalary * teamSize;
  const annualSavings = localTotalCost - remoteTotalCost;
  const savingsPercentage = Math.round(((annualSavings / localTotalCost) * 100));

  const additionalCosts = {
    local: {
      office: 12000 * teamSize,
      equipment: 3000 * teamSize,
      training: 2000 * teamSize,
      turnover: 15000 * teamSize * 0.2 // 20% annual turnover cost
    },
    remote: {
      management: 6000,
      tools: 1200 * teamSize,
      training: 500 * teamSize
    }
  };

  const totalLocalCost = localTotalCost + Object.values(additionalCosts.local).reduce((a, b) => a + b, 0);
  const totalRemoteCost = remoteTotalCost + Object.values(additionalCosts.remote).reduce((a, b) => a + b, 0);
  const totalSavings = totalLocalCost - totalRemoteCost;
  const totalSavingsPercentage = Math.round(((totalSavings / totalLocalCost) * 100));

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 pt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cost Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <Calculator className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Cost Analysis Tool</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Cost Savings Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Compare the true cost of local hiring vs. remote delivery pods and see your potential savings.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Team Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(locationMultipliers).map(([key, value]) => (
                          <SelectItem key={key} value={key}>{value.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="team-size">Team Size</Label>
                    <Input
                      id="team-size"
                      type="number"
                      value={teamSize}
                      onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
                      min="1"
                      max="20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="local-salary">Average Local Salary (USD)</Label>
                    <Input
                      id="local-salary"
                      type="number"
                      value={localSalary}
                      onChange={(e) => setLocalSalary(parseInt(e.target.value) || 0)}
                      min="0"
                      step="1000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="remote-salary">Remote Pod Member Salary (USD)</Label>
                    <Input
                      id="remote-salary"
                      type="number"
                      value={remoteSalary}
                      onChange={(e) => setRemoteSalary(parseInt(e.target.value) || 0)}
                      min="0"
                      step="1000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="benefits">Benefits & Overhead (%)</Label>
                    <Input
                      id="benefits"
                      type="number"
                      value={benefits}
                      onChange={(e) => setBenefits(parseInt(e.target.value) || 0)}
                      min="0"
                      max="100"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Salary Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-primary" />
                    Annual Salary Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Local Team</span>
                      <span className="text-2xl font-bold">${localTotalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Remote Pods</span>
                      <span className="text-2xl font-bold text-primary">${remoteTotalCost.toLocaleString()}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Salary Savings</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">${annualSavings.toLocaleString()}</div>
                        <div className="text-sm text-green-600">{savingsPercentage}% savings</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Total Cost Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <TrendingDown className="h-5 w-5 mr-2 text-primary" />
                    Total Cost Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Local (with overhead)</span>
                        <span className="font-semibold">${totalLocalCost.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">
                        Includes: Office space, equipment, training, turnover costs
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Remote Pods (all-in)</span>
                        <span className="font-semibold text-primary">${totalRemoteCost.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">
                        Includes: Management, tools, training
                      </div>
                    </div>

                    <hr />
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Annual Savings</span>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-green-600">${totalSavings.toLocaleString()}</div>
                          <div className="text-lg text-green-600">{totalSavingsPercentage}% total savings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Time to ROI */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    ROI Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">30 days</div>
                      <div className="text-sm text-muted-foreground">Setup & onboarding</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">60 days</div>
                      <div className="text-sm text-muted-foreground">Break-even point</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start saving?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a call to discuss your specific needs and get a custom savings analysis.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              Get custom analysis
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default CostCalculator;