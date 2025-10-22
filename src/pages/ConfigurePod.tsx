import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { CheckCircle, ArrowRight, Users, Clock, Zap } from 'lucide-react';
import { toast } from 'sonner';

const ConfigurePod = () => {
  const [selectedPods, setSelectedPods] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    timeline: '',
    budget: ''
  });

  const podTypes = [
    {
      id: 'web-dev',
      name: 'Web Development Pod',
      description: 'Webflow, WordPress, Shopify development',
      price: 'From $3,000/mo'
    },
    {
      id: 'design',
      name: 'Design Pod',
      description: 'Branding, social media, ad creative',
      price: 'From $2,500/mo'
    },
    {
      id: 'video',
      name: 'Video Pod',
      description: 'Video editing, reels, UGC content',
      price: 'From $2,000/mo'
    },
    {
      id: 'seo-content',
      name: 'SEO & Content Pod',
      description: 'Content strategy, SEO optimization',
      price: 'From $2,800/mo'
    },
    {
      id: 'marketing-ops',
      name: 'Marketing Ops Pod',
      description: 'CRM setup, automation, workflows',
      price: 'From $3,500/mo'
    },
    {
      id: 'data-ai',
      name: 'Data & AI Pod',
      description: 'Dashboards, reporting, AI integration',
      price: 'From $4,000/mo'
    }
  ];

  const handlePodToggle = (podId: string) => {
    setSelectedPods(prev => 
      prev.includes(podId) 
        ? prev.filter(id => id !== podId)
        : [...prev, podId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      
      // Get pod names from selected pod IDs
      const selectedPodNames = podTypes
        .filter(pod => selectedPods.includes(pod.id))
        .map(pod => pod.name);

      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectDescription: formData.projectDescription,
          timeline: formData.timeline,
          budget: formData.budget,
          selectedPods: selectedPodNames,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      toast.success('Request sent successfully! We\'ll send you a proposal within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectDescription: '',
        timeline: '',
        budget: ''
      });
      setSelectedPods([]);
    } catch (error) {
      console.error('Error sending request:', error);
      toast.error('Failed to send request. Please try again or email us directly at kunalsah29@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <NavBar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Configure Your
              <span className="text-primary"> Delivery Pod</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build a custom solution tailored to your specific needs. Select the pods you need and we'll create a personalized proposal.
            </p>
          </div>
        </section>

        {/* Configuration Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Pod Selection */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Select Your Delivery Pods</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {podTypes.map((pod) => (
                    <div
                      key={pod.id}
                      onClick={() => handlePodToggle(pod.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedPods.includes(pod.id)
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{pod.name}</h3>
                        {selectedPods.includes(pod.id) && (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{pod.description}</p>
                      <p className="text-primary font-medium">{pod.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData(prev => ({...prev, timeline: e.target.value}))}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">ASAP (1-2 weeks)</option>
                      <option value="short">1 month</option>
                      <option value="medium">2-3 months</option>
                      <option value="long">3+ months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <textarea
                  value={formData.projectDescription}
                  onChange={(e) => setFormData(prev => ({...prev, projectDescription: e.target.value}))}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your project, goals, and specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={selectedPods.length === 0 || isSubmitting}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Custom Proposal'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <p className="text-muted-foreground text-sm mt-2">
                  We'll send you a custom proposal within 24 hours
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Team Assignment</h3>
                <p className="text-muted-foreground text-sm">We'll match you with the perfect team based on your requirements</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quick Onboarding</h3>
                <p className="text-muted-foreground text-sm">Complete onboarding process within 5-7 days</p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Rapid Delivery</h3>
                <p className="text-muted-foreground text-sm">Start seeing results within the first week</p>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default ConfigurePod;