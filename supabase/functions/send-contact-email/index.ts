import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import nodemailer from "npm:nodemailer@6.9.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  // Contact Us form fields
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  service?: string;
  message?: string;
  
  // Configure Pod form fields
  name?: string;
  projectDescription?: string;
  timeline?: string;
  budget?: string;
  selectedPods?: string[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Create transporter using SMTP credentials
    const transporter = nodemailer.createTransport({
      host: Deno.env.get("SMTP_HOST"),
      port: parseInt(Deno.env.get("SMTP_PORT") || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: Deno.env.get("SMTP_USER"),
        pass: Deno.env.get("SMTP_PASSWORD"),
      },
    });

    // Determine which form this is from and format email accordingly
    let emailSubject = "";
    let emailBody = "";

    if (formData.firstName && formData.lastName) {
      // Contact Us form
      emailSubject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message || 'No message provided'}</p>
      `;
    } else {
      // Configure Pod form
      emailSubject = `New Pod Configuration Request from ${formData.name}`;
      emailBody = `
        <h2>New Pod Configuration Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Timeline:</strong> ${formData.timeline || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${formData.budget || 'Not provided'}</p>
        <p><strong>Selected Pods:</strong></p>
        <ul>
          ${formData.selectedPods?.map(pod => `<li>${pod}</li>`).join('') || '<li>None selected</li>'}
        </ul>
        <p><strong>Project Description:</strong></p>
        <p>${formData.projectDescription || 'No description provided'}</p>
      `;
    }

    // Send email
    const info = await transporter.sendMail({
      from: Deno.env.get("SMTP_USER"),
      to: "kunalsah29@gmail.com",
      subject: emailSubject,
      html: emailBody,
    });

    console.log("Email sent successfully:", info.messageId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: info.messageId 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
