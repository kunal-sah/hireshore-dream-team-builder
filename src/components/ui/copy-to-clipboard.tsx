import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CopyToClipboardProps {
  text: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function CopyToClipboard({ 
  text, 
  children, 
  variant = "outline", 
  size = "sm",
  className 
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard!");
      
      // Analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'copy_to_clipboard', {
          content_type: 'text',
          page_location: window.location.href
        });
      }
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="h-4 w-4 mr-2" />
      ) : (
        <Copy className="h-4 w-4 mr-2" />
      )}
      {children || (copied ? "Copied!" : "Copy")}
    </Button>
  );
}