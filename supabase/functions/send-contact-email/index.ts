import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message: string;
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

    const { firstName, lastName, email, company, service, message }: ContactEmailRequest = await req.json();

    // Input validation
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
      throw new Error("Missing required fields");
    }

    if (firstName.length > 50 || lastName.length > 50) {
      throw new Error("Name fields must be less than 50 characters");
    }

    if (email.length > 255) {
      throw new Error("Email must be less than 255 characters");
    }

    if (message.length > 2000) {
      throw new Error("Message must be less than 2000 characters");
    }

    console.log("Sending email to Brevo API...");
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Hireshore Contact Form',
          email: 'noreply@hireshore.co',
        },
        to: [
          {
            email: 'kunalsah29@gmail.com',
            name: 'Kunal Sah',
          },
        ],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
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
