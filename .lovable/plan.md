## Add Sendr / Dave Cannell as new client

### 1. Upload assets
- Copy `user-uploads://image-34.png` → `public/lovable-uploads/sendr-logo.png` (Sendr wordmark logo)
- Copy `user-uploads://image-35.png` → `public/lovable-uploads/dave-cannell.png` (Dave's headshot)

### 2. `src/components/TrustedStartups.tsx`
Add new entry to the `clients` array:
```ts
{ name: "Sendr", url: "https://sendr.ai/", logo: "/lovable-uploads/sendr-logo.png" }
```

### 3. `src/components/TestimonialsSection.tsx`
Add Dave Cannell as a new testimonial in the `testimonials` array (inserted near the top so he appears early in the carousel):
```ts
{
  name: "Dave Cannell",
  title: "Cofounder & CEO, Sendr",
  text: "Hireshore helped us hire reliable remote talent for key support and GTM roles at Sendr, including an EA/VA to the CEO and a GTM Engineer Consultant / Account Manager. Their team understood our needs quickly, shared relevant profiles, and made the hiring process smooth and efficient.",
  photo: "/lovable-uploads/dave-cannell.png",
}
```

No other files change. The existing carousel and logo-grid layouts will pick up the new entries automatically.