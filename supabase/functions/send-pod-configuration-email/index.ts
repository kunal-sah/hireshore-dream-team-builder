import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PodConfigurationRequest {
  name: string;
  email: string;
  company?: string;
  timeline: string;
  budget?: string;
  selectedPods: string;
  projectDescription: string;
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

    const { name, email, company, timeline, budget, selectedPods, projectDescription }: PodConfigurationRequest = await req.json();

    console.log("Sending pod configuration email via Resend...");
    
    const emailResponse = await resend.emails.send({
      from: "Hireshore Pod Configuration <onboarding@resend.dev>",
      to: ["kunalsah29@gmail.com"],
      subject: `New Pod Configuration Request from ${name}`,
      html: `
        <h2>New Pod Configuration Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
        <p><strong>Selected Pods:</strong> ${selectedPods || 'None selected'}</p>
        <p><strong>Project Description:</strong></p>
        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
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
