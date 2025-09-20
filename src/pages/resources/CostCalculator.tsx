import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Calculator, DollarSign, TrendingDown, Users, Clock, Code, Palette } from "lucide-react";
import { useState } from "react";

const CostCalculator = () => {
  // Agency Pod Calculator State
  const [serviceType, setServiceType] = useState<string>("monthly-pod");
  const [monthlyHours, setMonthlyHours] = useState<string>("160");
  const [teamMembers, setTeamMembers] = useState<string>("2");
  const [localAgencyRate, setLocalAgencyRate] = useState<string>("100");
  
  // Tech Staffing Calculator State
  const [techRole, setTechRole] = useState<string>("frontend");
  const [seniority, setSeniority] = useState<string>("senior");
  const [engagementModel, setEngagementModel] = useState<string>("staff-aug");
  const [location, setLocation] = useState<string>("us");
  const [teamSize, setTeamSize] = useState<string>("2");

  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  // Agency Pod Pricing Models
  const agencyPricing = {
    "postpaid": { rate: 10, name: "Postpaid (Pay-as-you-go)", min: 0 },
    "flex-hours": { rate: 9, name: "Prepaid Flex Hours", min: 160 },
    "monthly-pod": { rate: 7.5, name: "Monthly Pod", min: 160 }
  };

  // Tech Staffing Salary Bands (monthly USD, Nepal-based remote)
  const techSalaryBands = {
    "frontend": { 
      junior: [800, 1200], mid: [1200, 2000], senior: [2000, 3200], lead: [3200, 4500],
      name: "Frontend Developer"
    },
    "backend": { 
      junior: [800, 1200], mid: [1200, 2000], senior: [2000, 3200], lead: [3200, 4500],
      name: "Backend Developer"
    },
    "fullstack": { 
      junior: [800, 1200], mid: [1200, 2000], senior: [2000, 3200], lead: [3200, 4500],
      name: "Full-stack Developer"
    },
    "mobile": { 
      junior: [900, 1300], mid: [1300, 2200], senior: [2200, 3500], lead: [3500, 4800],
      name: "Mobile Developer"
    },
    "qa": { 
      junior: [700, 1000], mid: [1000, 1800], senior: [1800, 2800], lead: [2800, 3800],
      name: "QA/SDET"
    },
    "devops": { 
      junior: [1400, 2200], mid: [2200, 3200], senior: [3200, 4800], lead: [4800, 6000],
      name: "DevOps/SRE"
    },
    "data": { 
      junior: [1500, 2400], mid: [2400, 3500], senior: [3500, 5200], lead: [5200, 6500],
      name: "Data/ML/AI"
    },
    "pm": { 
      junior: [1200, 1800], mid: [1800, 2800], senior: [2800, 4200], lead: [4200, 5200],
      name: "Product Manager"
    },
    "uiux": { 
      junior: [1000, 1500], mid: [1500, 2400], senior: [2400, 3600], lead: [3600, 4800],
      name: "UI/UX Designer"
    }
  };

  // Staff Aug Bill Rates (hourly USD)
  const staffAugRates = {
    junior: [12, 18], mid: [18, 28], senior: [28, 45], lead: [45, 60]
  };

  // Local Hiring Costs by Location
  const localCosts = {
    "us": { 
      name: "United States",
      salaries: { junior: 65000, mid: 85000, senior: 120000, lead: 160000 },
      benefits: 0.25, // 25% benefits
      overhead: 0.10, // 10% overhead
      recruiterFee: 0.15 // 15% one-time
    },
    "uk": { 
      name: "United Kingdom",
      salaries: { junior: 45000, mid: 65000, senior: 95000, lead: 130000 },
      benefits: 0.20,
      overhead: 0.08,
      recruiterFee: 0.12
    },
    "au": { 
      name: "Australia",
      salaries: { junior: 55000, mid: 75000, senior: 105000, lead: 140000 },
      benefits: 0.22,
      overhead: 0.09,
      recruiterFee: 0.15
    },
    "ca": { 
      name: "Canada",
      salaries: { junior: 50000, mid: 70000, senior: 100000, lead: 135000 },
      benefits: 0.20,
      overhead: 0.08,
      recruiterFee: 0.12
    },
    "de": { 
      name: "Germany",
      salaries: { junior: 45000, mid: 60000, senior: 85000, lead: 115000 },
      benefits: 0.25,
      overhead: 0.10,
      recruiterFee: 0.10
    }
  };

  // Agency Pod Calculations
  const selectedPricing = agencyPricing[serviceType as keyof typeof agencyPricing];
  const monthlyAgencyHours = parseInt(monthlyHours);
  const agencyTeamSize = parseInt(teamMembers);
  const localRate = parseInt(localAgencyRate);
  
  const hireshoreAgencyCost = monthlyAgencyHours * selectedPricing.rate * agencyTeamSize;
  const localAgencyCost = monthlyAgencyHours * localRate * agencyTeamSize;
  const agencyAnnualSavings = (localAgencyCost - hireshoreAgencyCost) * 12;
  const agencySavingsPercentage = Math.round(((localAgencyCost - hireshoreAgencyCost) / localAgencyCost) * 100);

  // Tech Staffing Calculations
  const selectedRole = techSalaryBands[techRole as keyof typeof techSalaryBands];
  const selectedLocation = localCosts[location as keyof typeof localCosts];
  const techTeamSize = parseInt(teamSize);
  
  // HireShore costs (using mid-point of salary range)
  const hirershoreSalaryRange = selectedRole[seniority as keyof typeof selectedRole] as [number, number];
  const hireshoreMonthlyPerPerson = (hirershoreSalaryRange[0] + hirershoreSalaryRange[1]) / 2;
  const hireshoreTechCost = hireshoreMonthlyPerPerson * techTeamSize * 12;
  
  // Local costs
  const localBaseSalary = selectedLocation.salaries[seniority as keyof typeof selectedLocation.salaries];
  const localWithBenefits = localBaseSalary * (1 + selectedLocation.benefits);
  const localWithOverhead = localWithBenefits * (1 + selectedLocation.overhead);
  const recruiterFee = localBaseSalary * selectedLocation.recruiterFee;
  const localTechYear1Cost = (localWithOverhead + recruiterFee) * techTeamSize;
  const localTechAnnualCost = localWithOverhead * techTeamSize; // Ongoing cost after year 1
  
  const techAnnualSavings = localTechYear1Cost - hireshoreTechCost;
  const techSavingsPercentage = Math.round((techAnnualSavings / localTechYear1Cost) * 100);

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
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="agency" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="agency" className="flex items-center">
                <Palette className="h-4 w-4 mr-2" />
                Agency Pod Services
              </TabsTrigger>
              <TabsTrigger value="tech" className="flex items-center">
                <Code className="h-4 w-4 mr-2" />
                Tech Staffing
              </TabsTrigger>
            </TabsList>

            {/* Agency Pod Calculator */}
            <TabsContent value="agency">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Agency Input Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Palette className="h-6 w-6 mr-2 text-primary" />
                        Agency Pod Configuration
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label>Service Type</Label>
                        <Select value={serviceType} onValueChange={setServiceType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="postpaid">Postpaid ($10/hour)</SelectItem>
                            <SelectItem value="flex-hours">Prepaid Flex Hours ($9/hour)</SelectItem>
                            <SelectItem value="monthly-pod">Monthly Pod ($7.5/hour)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Monthly Hours</Label>
                        <Select value={monthlyHours} onValueChange={setMonthlyHours}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="80">80 hours</SelectItem>
                            <SelectItem value="120">120 hours</SelectItem>
                            <SelectItem value="160">160 hours</SelectItem>
                            <SelectItem value="200">200 hours</SelectItem>
                            <SelectItem value="240">240 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Team Size</Label>
                        <Select value={teamMembers} onValueChange={setTeamMembers}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 person</SelectItem>
                            <SelectItem value="2">2 people</SelectItem>
                            <SelectItem value="3">3 people</SelectItem>
                            <SelectItem value="4">4 people</SelectItem>
                            <SelectItem value="5">5 people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Local Agency Rate (per hour)</Label>
                        <Select value={localAgencyRate} onValueChange={setLocalAgencyRate}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="75">$75/hour - Junior Agency</SelectItem>
                            <SelectItem value="100">$100/hour - Mid-tier Agency</SelectItem>
                            <SelectItem value="125">$125/hour - Senior Agency</SelectItem>
                            <SelectItem value="150">$150/hour - Premium Agency</SelectItem>
                            <SelectItem value="200">$200/hour - Enterprise Agency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Agency Results */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-primary" />
                        Monthly Cost Comparison
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Local Agency</span>
                          <span className="text-2xl font-bold">${localAgencyCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">HireShore Pod</span>
                          <span className="text-2xl font-bold text-primary">${hireshoreAgencyCost.toLocaleString()}</span>
                        </div>
                        <hr />
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Monthly Savings</span>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">${(localAgencyCost - hireshoreAgencyCost).toLocaleString()}</div>
                              <div className="text-sm text-green-600">{agencySavingsPercentage}% savings</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center pt-4">
                          <div className="text-sm text-muted-foreground">Annual Savings</div>
                          <div className="text-3xl font-bold text-green-600">${agencyAnnualSavings.toLocaleString()}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">What You Get</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm space-y-2 text-muted-foreground">
                        <p>✓ Project Manager + QA included</p>
                        <p>✓ White-label deliverables</p>
                        <p>✓ Web, design, automation, video, content</p>
                        <p>✓ Slack + ClickUp integration</p>
                        <p>✓ Weekly strategy calls</p>
                        <p>✓ 5-7 day replacement guarantee</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Tech Staffing Calculator */}
            <TabsContent value="tech">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Tech Input Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Code className="h-6 w-6 mr-2 text-primary" />
                        Tech Team Configuration
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label>Role</Label>
                        <Select value={techRole} onValueChange={setTechRole}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(techSalaryBands).map(([key, value]) => (
                              <SelectItem key={key} value={key}>{value.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Seniority Level</Label>
                        <Select value={seniority} onValueChange={setSeniority}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="junior">Junior</SelectItem>
                            <SelectItem value="mid">Mid-level</SelectItem>
                            <SelectItem value="senior">Senior</SelectItem>
                            <SelectItem value="lead">Lead/Architect</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Engagement Model</Label>
                        <Select value={engagementModel} onValueChange={setEngagementModel}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="direct-hire">Direct Hire (Recruitment)</SelectItem>
                            <SelectItem value="staff-aug">Staff Aug (Contract-to-Hire)</SelectItem>
                            <SelectItem value="managed-pod">Managed Tech Pod</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Your Location</Label>
                        <Select value={location} onValueChange={setLocation}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(localCosts).map(([key, value]) => (
                              <SelectItem key={key} value={key}>{value.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Team Size</Label>
                        <Select value={teamSize} onValueChange={setTeamSize}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 developer</SelectItem>
                            <SelectItem value="2">2 developers</SelectItem>
                            <SelectItem value="3">3 developers</SelectItem>
                            <SelectItem value="5">5 developers</SelectItem>
                            <SelectItem value="7">7 developers</SelectItem>
                            <SelectItem value="10">10 developers</SelectItem>
                          </SelectContent>
                        </Select>
                        {parseInt(teamSize) >= 5 && (
                          <p className="text-xs text-green-600 mt-1">
                            ✓ Free dedicated PM + QA included with 5+ developers
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Tech Results */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <TrendingDown className="h-5 w-5 mr-2 text-primary" />
                        Year 1 Cost Comparison
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Local Hiring (Year 1)</span>
                            <span className="font-semibold">${localTechYear1Cost.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Includes: Salary, benefits, overhead, recruiter fees
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-muted-foreground">HireShore Remote Team</span>
                            <span className="font-semibold text-primary">${hireshoreTechCost.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            All-inclusive: No taxes, benefits, or recruiter fees
                          </div>
                        </div>

                        <hr />
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Year 1 Savings</span>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-green-600">${techAnnualSavings.toLocaleString()}</div>
                              <div className="text-lg text-green-600">{techSavingsPercentage}% savings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">HireShore Cost Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monthly per person</span>
                          <span className="font-semibold">${hireshoreMonthlyPerPerson.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Team of {techTeamSize}</span>
                          <span className="font-semibold">${(hireshoreMonthlyPerPerson * techTeamSize).toLocaleString()}/month</span>
                        </div>
                        <hr />
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p>✓ Vetting & reference checks</p>
                          <p>✓ Security & NDA documentation</p>
                          <p>✓ Onboarding & device setup</p>
                          <p>✓ Weekly performance reviews</p>
                          <p>✓ 60-day replacement guarantee</p>
                          <p>✓ No employer taxes or recruitment fees</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-primary" />
                        Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-center text-sm">
                        <div>
                          <div className="text-xl font-bold text-primary">5-7 days</div>
                          <div className="text-muted-foreground">Hire & onboard</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-green-600">30 days</div>
                          <div className="text-muted-foreground">Full productivity</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
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