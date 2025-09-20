import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hash } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Generate TOC from headings
    const headings = document.querySelectorAll('h2, h3, h4');
    const tocItems: TOCItem[] = [];

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `section-${index}`;
      }
      
      const level = parseInt(heading.tagName.charAt(1));
      tocItems.push({
        id: heading.id,
        title: heading.textContent || '',
        level: level
      });
    });

    setToc(tocItems);

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0% -35% 0%',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'toc_click', {
          section_id: id,
          page_location: window.location.href
        });
      }
    }
  };

  if (toc.length === 0) return null;

  return (
    <Card className={`p-6 sticky top-24 ${className}`}>
      <div className="flex items-center mb-4">
        <Hash className="h-5 w-5 mr-2 text-primary" />
        <h3 className="font-semibold">Table of Contents</h3>
      </div>
      <nav className="space-y-2">
        {toc.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className={`w-full justify-start text-left p-2 h-auto ${
              item.level === 2 ? 'pl-2' : 
              item.level === 3 ? 'pl-6' : 'pl-10'
            } ${
              activeSection === item.id 
                ? 'bg-primary/10 text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => handleClick(item.id)}
          >
            <span className="text-sm leading-relaxed">{item.title}</span>
          </Button>
        ))}
      </nav>
    </Card>
  );
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}