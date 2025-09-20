import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { 
  CheckCircle,
  Clock,
  Calendar,
  Zap,
  Phone,
  MessageSquare,
  Users,
  DollarSign
} from "lucide-react";

const Pricing = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const plans = [
    {
      name: "Postpaid",
      subtitle: "Pay‑as‑you‑go",
      price: "$10",
      period: "/hour",
      billing: "Bi‑weekly or per project",
      bestFor: "One‑offs, uncertain scopes, quick wins.",
      icon: Clock,
      features: [
        "Access to the Hireshore bench across web, design, video, SEO, automation, content",
        "Slack comms + ClickUp tracking",
        "Time reports and QA"
      ],
      note: "Availability depends on scheduling. For priority access, choose a prepaid option.",
      popular: false
    },
    {
      name: "Prepaid Flex Hours",
      subtitle: "Most popular",
      price: "$1,450",
      period: "/ 160 hours",
      effectiveRate: "$9/hour",
      usageWindow: "Up to 3 months",
      bestFor: "Agencies with recurring needs across mixed tasks.",
      icon: Zap,
      features: [
        "One pool of hours for any task or role",
        "Priority allocation and faster turnarounds",
        "Add blocks in 40‑hour increments at $8/hour",
        "No subscription, no long‑term lock‑in"
      ],
      popular: true
    },
    {
      name: "Monthly Pod",
      subtitle: "Highest efficiency",
      price: "$1,200",
      period: "/ 160 hours per month",
      effectiveRate: "$7.5/hour",
      usageWindow: "30 days (does not roll over)",
      bestFor: "Sprints, new launches, and steady production.",
      icon: Calendar,
      features: [
        "Dedicated resources held for you",
        "Deepest discount with consistent delivery",
        "Scale mid‑month with 40‑hour add‑ons at the same effective rate"
      ],
      popular: false
    }
  ];

  const salaryBands = [
    { role: "Frontend / Backend / Full‑stack", junior: "$800–$1,200", mid: "$1,200–$2,000", senior: "$2,000–$3,200", lead: "$3,200–$4,500" },
    { role: "Mobile (iOS/Android/Flutter/React Native)", junior: "$900–$1,300", mid: "$1,300–$2,200", senior: "$2,200–$3,500", lead: "$3,500–$4,800" },
    { role: "QA / SDET (Manual + Automation)", junior: "$700–$1,000", mid: "$1,000–$1,800", senior: "$1,800–$2,800", lead: "$2,800–$3,800" },
    { role: "DevOps / SRE (AWS/GCP/Azure, IaC, CI/CD)", junior: "$1,400–$2,200", mid: "$2,200–$3,200", senior: "$3,200–$4,800", lead: "$4,800–$6,000" },
    { role: "Data / ML / AI (Python, ETL, LLMOps, MLOps)", junior: "$1,500–$2,400", mid: "$2,400–$3,500", senior: "$3,500–$5,200", lead: "$5,200–$6,500" },
    { role: "Product (PM/PO/TPM)", junior: "$1,200–$1,800", mid: "$1,800–$2,800", senior: "$2,800–$4,200", lead: "$4,200–$5,200" },
    { role: "UI/UX (Product Design, Systems)", junior: "$1,000–$1,500", mid: "$1,500–$2,400", senior: "$2,400–$3,600", lead: "$3,600–$4,800" },
    { role: "Solution / Cloud Architect", junior: "—", mid: "—", senior: "$4,000–$5,500", lead: "$5,500–$7,000" },
    { role: "SecOps / AppSec", junior: "—", mid: "$2,200–$3,200", senior: "$3,200–$4,800", lead: "$4,800–$6,000" }
  ];

  const billRates = [
    { level: "Junior", rate: "$12–$18 / hour" },
    { level: "Mid", rate: "$18–$28 / hour" },
    { level: "Senior", rate: "$28–$45 / hour" },
    { level: "Lead / Architect", rate: "$45–$60 / hour" }
  ];

  const costComparison = [
    { region: "UK (London)", localCost: "$140k–$170k", hireshoreCost: "~$67k", savings: "52–60%" },
    { region: "EU (Western Tier)", localCost: "$120k–$150k", hireshoreCost: "~$67k", savings: "44–55%" },
    { region: "AU (Sydney/Melbourne)", localCost: "$130k–$160k", hireshoreCost: "~$67k", savings: "48–58%" }
  ];

  const directHireComparison = [
    { item: "Base Salary (Senior FE/BE)", local: "$110k–$140k", hireshore: "$24k–$42k" },
    { item: "Employer Taxes/Benefits (20–30%)", local: "$22k–$42k", hireshore: "$4k–$9k" },
    { item: "Recruiter Fee", local: "$13k–$21k", hireshore: "$0" },
    { item: "Year‑1 Total", local: "$145k–$203k", hireshore: "$28k–$51k" },
    { item: "Savings", local: "", hireshore: "65–85%" }
  ];

  const includedFeatures = [
    "Project Manager + QA + reporting",
    "Slack + ClickUp (or your tools)",
    "White‑label docs and deliverables",
    "Web (Webflow/WordPress/Shopify), automation (Zapier/Make/n8n, GHL), SEO, ads creatives, video, copywriting",
    "Timezone‑friendly overlap and weekly strategy call"
  ];

  const exampleOutputs = [
    "Web: 1 standard Webflow site (5–7 pages) or 4–6 landing pages with variants",
    "Creative: 100–140 social graphics + 10–15 ad concepts",
    "Video: 25–35 short‑form edits or 3–5 long‑form",
    "Automation: 5–8 workflows (lead capture, CRM sync, notifications, scrapers)",
    "SEO/Content: Technical pass + 6–8 on‑page optimizations + 4–6 blogs",
    "Mixed Sprint: A bit of everything aligned to your campaign plan"
  ];

  const comparisonFeatures = [
    { feature: "Upfront cost", postpaid: "Zero upfront", flex: "Prepaid savings", monthly: "Best rate" },
    { feature: "Queue priority", postpaid: "Standard queue", flex: "Priority queue", monthly: "Dedicated team" },
    { feature: "Best for", postpaid: "Ad‑hoc tasks", flex: "Hours last 3 months", monthly: "Use inside 30 days" }
  ];

  const faqs = [
    { q: "Are tasks unlimited?", a: "Yes—mix any task types inside your hours." },
    { q: "Do unused Monthly hours roll over?", a: "No; that's why it's our best rate. Use them to sprint." },
    { q: "Can we pause?", a: "Flex Hours can pause within the 3‑month window. Monthly is continuous." },
    { q: "How do you report time?", a: "Daily summaries + weekly roll‑ups with links to work." },
    { q: "What if someone isn't a fit?", a: "We replace within 5–7 days—no extra cost." },
    { q: "Is this truly white‑label?", a: "100%. We never face your client." },
    { q: "Do we pay employer taxes or a recruitment fee to Hireshore?", a: "No. Our invoices are all‑inclusive service fees—no employer taxes/benefits payable to us and recruitment fee is $0 (waived)." },
    { q: "Any volume benefits?", a: "Yes—when you hire 5+ developers, we include a dedicated PM + QA at no additional cost." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pricing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Simple plans. Serious output.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            Choose flexible hours or a monthly pod—always white‑label, always managed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={bookCall} className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Start with a pilot
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={bookCall}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to a strategist
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Plans & Pricing
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <plan.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                    </div>
                    <div className="pt-4">
                      <div className="text-4xl font-bold">{plan.price}</div>
                      <div className="text-muted-foreground">{plan.period}</div>
                      {plan.effectiveRate && (
                        <div className="text-sm text-primary mt-2">Effective rate: {plan.effectiveRate}</div>
                      )}
                      {plan.billing && (
                        <div className="text-sm text-muted-foreground mt-1">Billing: {plan.billing}</div>
                      )}
                      {plan.usageWindow && (
                        <div className="text-sm text-muted-foreground mt-1">Usage window: {plan.usageWindow}</div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-sm mb-2">Best for:</p>
                        <p className="text-sm text-muted-foreground">{plan.bestFor}</p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-sm mb-3">What you get:</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {plan.note && (
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground italic">
                            <strong>Note:</strong> {plan.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Time Tech Staffing */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Full‑Time Tech Staffing (Monthly Rates)</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Build long‑term product teams with <strong>full‑time hires</strong> or <strong>staff‑augmentation</strong> under your brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Role families:</h3>
                  <p className="text-sm text-muted-foreground">Frontend • Backend • Full‑stack • Mobile • QA/SDET • DevOps/SRE • Data/AI/ML • PM/TPM • UI/UX • Solution/Cloud Architect • SecOps</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Engagement models:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Direct Hire (Recruitment)</li>
                    <li>• Staff Aug (Contract‑to‑Hire)</li>
                    <li>• Managed Tech Pod</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What's included:</h3>
                  <p className="text-sm text-muted-foreground">Vetting, reference checks, security & NDA docs, onboarding checklist, device/access setup guidance, weekly performance cadence.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Salary Bands Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-primary mr-3" />
              Sample Monthly Salary Bands (USD, Nepal‑based remote)
            </h3>
            <p className="text-center text-muted-foreground mb-6 italic">
              Indicative ranges. Final offers vary by stack, seniority, complexity, and overlap requirements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-4 font-semibold">Role</th>
                    <th className="text-left p-4 font-semibold">Junior</th>
                    <th className="text-left p-4 font-semibold">Mid</th>
                    <th className="text-left p-4 font-semibold">Senior</th>
                    <th className="text-left p-4 font-semibold">Lead/Architect</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryBands.map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-medium">{row.role}</td>
                      <td className="p-4 text-muted-foreground">{row.junior}</td>
                      <td className="p-4 text-muted-foreground">{row.mid}</td>
                      <td className="p-4 text-muted-foreground">{row.senior}</td>
                      <td className="p-4 text-muted-foreground">{row.lead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Bill Rates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Staff Aug / Contract‑to‑Hire Bill Rates (USD)</h3>
            <p className="text-center text-muted-foreground mb-6 italic">
              Applies when talent is on Hireshore payroll. Effective rates align with salary bands, benefits, and management overhead.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {billRates.map((rate, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <h4 className="font-semibold text-lg mb-2">{rate.level}</h4>
                      <p className="text-primary font-bold">{rate.rate}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Premiums & Adjusters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6 mb-12"
          >
            <h4 className="font-semibold mb-4">Premiums & Adjusters:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Guaranteed <strong>US/UK/EU prime‑time overlap:</strong> +$2–$5/hour</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Niche stacks (Rust, Elixir, low‑latency, advanced LLM/RAG, CUDA): custom quote</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Security clearance / enterprise compliance: custom quote</span>
              </li>
            </ul>
            <p className="mt-4 text-sm font-medium">
              <strong>No extra taxes or recruiter fees:</strong> Our invoice is all‑inclusive—<strong>you do not pay employer taxes/benefits to us</strong>, and <strong>there's no recruitment fee</strong> for staff‑aug placements.
            </p>
          </motion.div>

          {/* Direct-Hire Recruitment Fees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Direct‑Hire Recruitment Fees</h3>
            <div className="max-w-2xl mx-auto bg-background rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Junior/Mid:</span>
                  <span className="text-primary font-bold">$0 (waived)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Senior/Lead/Architect:</span>
                  <span className="text-primary font-bold">$0 (waived)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Guarantee:</span>
                  <span>60‑day replacement</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong>Volume Bonus:</strong> Hire <strong>5+ developers</strong> and receive a <strong>dedicated PM + QA at no additional cost</strong> to coordinate delivery and quality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Savings Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Cost Savings: Local Hiring vs Hireshore
          </motion.h2>
          
          <p className="text-center text-muted-foreground mb-8 italic">
            Illustrative comparison. Adjust for city, stack, and level. Assumes US/EU/AU hiring with typical overheads.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* US Example */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Total Cost of a Local Full‑Time Engineer (US example)</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Base salary (Senior Full‑stack):</span>
                      <span>$120,000/year</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Employer taxes & benefits (~25%):</span>
                      <span>$30,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Overheads (equipment, office/SaaS, misc. ~10%):</span>
                      <span>$12,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Recruiter fee (15% one‑time):</span>
                      <span className="font-bold">$18,000</span>
                    </li>
                    <li className="flex justify-between border-t pt-2 font-bold">
                      <span>Total Year‑1 Cost:</span>
                      <span className="text-red-600">$180,000</span>
                    </li>
                    <li className="flex justify-between text-muted-foreground">
                      <span>Average monthly:</span>
                      <span>$15,000/month</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hireshore Staff Aug */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="ring-2 ring-primary">
                <CardHeader>
                  <h3 className="text-xl font-bold">Hireshore Staff Aug (Senior Full‑stack)</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Bill rate:</span>
                      <span>$35/hour (illustrative within senior band)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Monthly (160 hrs):</span>
                      <span className="font-bold text-primary">$5,600</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Yearly:</span>
                      <span className="font-bold text-primary">$67,200</span>
                    </li>
                    <li className="flex justify-between border-t pt-2 font-bold">
                      <span>Savings vs local Year‑1:</span>
                      <span className="text-green-600">~62%</span>
                    </li>
                    <li className="text-xs text-muted-foreground">
                      Notes: No recruiter fee, no employment taxes; easy scale up/down.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Regional Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">UK / EU / AU Snapshots (Senior Level)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-4 font-semibold">Region</th>
                    <th className="text-left p-4 font-semibold">Typical Local Year‑1 (all‑in)</th>
                    <th className="text-left p-4 font-semibold">Hireshore Yearly</th>
                    <th className="text-left p-4 font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-medium">{row.region}</td>
                      <td className="p-4">{row.localCost}</td>
                      <td className="p-4 text-primary font-medium">{row.hireshoreCost}</td>
                      <td className="p-4 text-green-600 font-bold">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Direct-Hire Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Direct‑Hire Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-4 font-semibold">Item</th>
                    <th className="text-left p-4 font-semibold">Local Hire</th>
                    <th className="text-left p-4 font-semibold">Hireshore Direct‑Hire (Nepal‑based)</th>
                  </tr>
                </thead>
                <tbody>
                  {directHireComparison.map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-medium">{row.item}</td>
                      <td className="p-4">{row.local}</td>
                      <td className={`p-4 ${row.item === 'Savings' ? 'text-green-600 font-bold text-xl' : 'text-primary font-medium'}`}>
                        {row.hireshore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6"
          >
            <p className="text-center text-muted-foreground">
              <strong>Why it's lower:</strong> Nepal‑based salaries, centralized ops, and efficient pods. You still get structured delivery, timezone overlap, and replacements in <strong>5–7 days</strong>. <strong>Plus:</strong> Hire <strong>5+ devs</strong>, get <strong>PM + QA free</strong>.
            </p>
            <p className="text-center text-muted-foreground mt-4">
              <strong>Customize this on your call:</strong> We'll map cost bands to your exact stack, level, and overlap needs and provide a role‑by‑role savings sheet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            All Plans Include
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 mb-8"
          >
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6"
          >
            <p className="text-sm text-muted-foreground">
              <strong>Not Included:</strong> Ad spend, third‑party app fees, new software licenses outside scope.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Can Do With 160 Hours */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What We Can Do With 160 Hours (Examples)
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {exampleOutputs.map((output, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-sm leading-relaxed">{output}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground italic text-sm"
          >
            *(Estimates; actuals depend on complexity and inputs.)*
          </motion.p>
        </div>
      </section>

      {/* Add-Ons & Scaling */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Add‑Ons & Scaling
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-left max-w-2xl mx-auto"
          >
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Add <strong>40‑hour</strong> blocks anytime (Flex: <strong>$8/h</strong>; Monthly: <strong>$7.5/h</strong>)</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Spin up specialist roles (e.g., motion/automation) inside your hours</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Add telecalling or recruitment support as needed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Comparison At‑a‑Glance
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-left p-4 font-semibold">Postpaid</th>
                  <th className="text-left p-4 font-semibold">Flex Hours</th>
                  <th className="text-left p-4 font-semibold">Monthly Pod</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.postpaid}</td>
                    <td className="p-4 text-muted-foreground">{row.flex}</td>
                    <td className="p-4 text-muted-foreground">{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to stop juggling freelancers?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 opacity-90"
          >
            Start with a pilot sprint or lock a monthly pod.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={bookCall}
              className="text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a 30‑min intro
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={bookCall}
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Get a sample sprint plan
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm mt-4 opacity-80"
          >
            (24–48 hrs)
          </motion.p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Pricing;