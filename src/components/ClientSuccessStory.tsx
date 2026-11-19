import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import YouTubeFacade from "@/components/ui/youtube-facade";

type StoryKey = "digital-six" | "swimply" | "sendr" | "affective-care" | "rto-acceleration";

const stories: Record<StoryKey, {
  client: string; tagline: string; headline: string; summary: string; points: string[];
  quote: string; author: string; role: string; videoId?: string; link?: string;
}> = {
  "digital-six": {
    client: "Digital Six", tagline: "Agency scaling with Nepal-based teams",
    headline: "From 22 to 47 People Across Australia and Nepal",
    summary: "Digital Six grew its delivery capacity with dedicated WordPress, SEO and marketing specialists from Nepal, managed by Hireshore.",
    points: ["Team grew from 22–23 to 47 people", "Dedicated WordPress and SEO specialists", "Better quality than past freelancer experience"],
    quote: "We were maybe 22–23 when we started... now there are 47 people across Australia and Nepal. The WordPress guys are killing it. The SEO side is strong. This is way better than our past freelancer experience.",
    author: "Aaron Erwich", role: "Founder, Digital Six", videoId: "yW90cSyX_iI", link: "/case-studies/digital-six",
  },
  swimply: {
    client: "Swimply", tagline: "Customer support staffed for profitability",
    headline: "Scaling Customer Support While Staying Profitable",
    summary: "Swimply needed to staff up customer support covering US time zones without hurting profitability. Hireshore built and manages a dedicated support team.",
    points: ["Dedicated support team on US time zones", "Fast to scale up as demand grows", "Well priced compared to local hiring"],
    quote: "Easy to work with and well priced. We needed to staff up customer support while staying focused on profitability — Hireshore let us achieve both. If cost, ease to scale, and speed matter, I'd definitely recommend them.",
    author: "Yona Meissner", role: "Head of Operations, Swimply", videoId: "LjnthdX87Ao", link: "/case-studies/swimply",
  },
  sendr: {
    client: "Sendr", tagline: "Remote hiring for support and GTM roles",
    headline: "Reliable Remote Talent for Key Support & GTM Roles",
    summary: "Sendr partnered with Hireshore to hire reliable remote talent for customer support and go-to-market roles.",
    points: ["Relevant, pre-vetted profiles shared quickly", "Smooth and efficient hiring process", "Support and GTM roles filled"],
    quote: "Hireshore helped us hire reliable remote talent for key support and GTM roles at Sendr. Their team understood our needs quickly, shared relevant profiles, and made the hiring process smooth and efficient.",
    author: "Dave Cannell", role: "Cofounder & CEO, Sendr", link: "/case-studies/sendr",
  },
  "affective-care": {
    client: "Affective Care", tagline: "Managed remote marketing & web team",
    headline: "The Right Support Structure for Marketing & Web",
    summary: "Affective Care works with a managed remote team from Hireshore — a Senior SEO Content Writer and Strategist, a Marketing Assistant and a Web Developer.",
    points: ["Senior SEO Content Writer & Strategist", "Marketing Assistant", "Web Developer Technical Specialist"],
    quote: "Hireshore has been supporting us with a managed remote team, including a Senior SEO Content Writer and Strategist, Marketing Assistant, and Web Developer Technical Specialist. Their team has been reliable, responsive, and easy to work with. They understood our needs clearly and helped us build the right support structure for our marketing and web operations.",
    author: "Rita Dagher", role: "Managing Director, Affective Care & Affective Health Services", link: "/case-studies/affective-care",
  },
  "rto-acceleration": {
    client: "RTO Acceleration", tagline: "Direct hire for a student acquisition team",
    headline: "A Media Buyer Hired Through Direct Hire",
    summary: "RTO Acceleration used Hireshore's direct hire service to recruit a Media Buyer straight into their student acquisition team.",
    points: ["Role understood clearly from day one", "Relevant candidates shared quickly", "Saved time finding the right talent"],
    quote: "Hireshore helped us hire a Media Buyer through their direct hire service for our student acquisition team. They understood the role clearly, shared relevant candidates, and made the hiring process smooth and efficient. Their support saved us time and helped us find the right talent for our marketing needs.",
    author: "Richard Lang", role: "Founder, RTO Acceleration",
  },
};

export default function ClientSuccessStory({ story }: { story: StoryKey }) {
  const s = stories[story];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Success Story: {s.client}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">{s.tagline}</div>
            <h3 className="text-2xl font-bold mb-4">{s.headline}</h3>
            <p className="text-muted-foreground mb-6">{s.summary}</p>
            <div className="space-y-3 mb-6">
              {s.points.map((p) => (
                <div key={p} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>{p}</span>
                </div>
              ))}
            </div>
            {s.link && (
              <Link to={s.link} className="inline-flex items-center text-primary font-semibold hover:underline">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
          <div className="min-w-0 bg-card p-8 rounded-xl border border-border shadow-sm">
            {s.videoId && (
              <YouTubeFacade videoId={s.videoId} title={`${s.client} Testimonial - ${s.author}`} className="aspect-video bg-muted rounded-lg overflow-hidden mb-6" />
            )}
            <blockquote className="text-lg italic mb-4">"{s.quote}"</blockquote>
            <div className="font-semibold">{s.author}</div>
            <div className="text-sm text-muted-foreground">{s.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
