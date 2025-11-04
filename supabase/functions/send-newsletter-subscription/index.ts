import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get("VITE_BREVO_API_KEY");
    
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY is not set");
      throw new Error("Email service is not configured");
    }

    const { email }: NewsletterRequest = await req.json();

    // Input validation
    if (!email?.trim()) {
      throw new Error("Email is required");
    }

    if (email.length > 255) {
      throw new Error("Email must be less than 255 characters");
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    console.log("Sending newsletter subscription to Brevo API...");
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Hireshore Ship Notes',
          email: 'noreply@hireshore.co',
        },
        to: [
          {
            email: 'kunalsah29@gmail.com',
            name: 'Kunal Sah',
          },
        ],
        subject: `New Newsletter Subscription: ${email}`,
        htmlContent: `
          <h2>New Ship Notes Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>This person wants to receive monthly insights on ops, creative cadence, and automation.</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Brevo API error:', errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const result = await response.json();
    console.log("Newsletter subscription sent successfully:", result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending newsletter subscription:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
