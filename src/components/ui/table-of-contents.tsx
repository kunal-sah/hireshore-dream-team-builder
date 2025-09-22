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
    <Card className={`p-4 sticky top-24 w-full max-w-xs ${className}`}>
      <div className="flex items-center mb-4">
        <Hash className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
        <h3 className="font-semibold text-sm truncate">Table of Contents</h3>
      </div>
      <nav className="space-y-1">
        {toc.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className={`w-full justify-start text-left p-2 h-auto min-h-0 whitespace-normal break-words ${
              item.level === 2 ? 'pl-2' : 
              item.level === 3 ? 'pl-4' : 'pl-6'
            } ${
              activeSection === item.id 
                ? 'bg-primary/10 text-primary font-medium' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
            onClick={() => handleClick(item.id)}
          >
            <span className="text-xs leading-snug block w-full break-words hyphens-auto">
              {item.title}
            </span>
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