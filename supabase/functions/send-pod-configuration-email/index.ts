import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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
    const BREVO_API_KEY = Deno.env.get("VITE_BREVO_API_KEY");
    
    if (!BREVO_API_KEY) {
      console.error("VITE_BREVO_API_KEY is not set");
      throw new Error("Email service is not configured");
    }

    const { name, email, company, timeline, budget, selectedPods, projectDescription }: PodConfigurationRequest = await req.json();

    console.log("Sending pod configuration email via Brevo API...");
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Hireshore Pod Configuration',
          email: 'noreply@hireshore.co',
        },
        to: [
          {
            email: 'kunalsah29@gmail.com',
            name: 'Kunal Sah',
          },
        ],
        subject: `New Pod Configuration Request from ${name}`,
        htmlContent: `
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
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Brevo API error:', errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);

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
