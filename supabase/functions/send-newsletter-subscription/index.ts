import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

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
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);

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

    console.log("Sending newsletter subscription via Resend...");
    
    const emailResponse = await resend.emails.send({
      from: "Hireshore Ship Notes <onboarding@resend.dev>",
      to: ["kunalsah29@gmail.com"],
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <h2>New Ship Notes Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This person wants to receive monthly insights on ops, creative cadence, and automation.</p>
      `,
    });

    console.log("Newsletter subscription sent successfully:", emailResponse);

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
