# EmailJS Setup Guide

Both forms (`/contact-us` and `/configure-pod`) now use EmailJS to send emails directly from the frontend.

## Setup Steps

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/) and sign up
- Verify your email address

### 2. Connect Email Service
- Go to **Email Services** in the dashboard
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the connection steps

### 3. Create Email Templates
You need to create **2 templates** (or use 1 for both forms):

#### Template for Contact Form:
```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service: {{service}}

Message:
{{message}}
```

#### Template for Configure Pod Form:
```
Subject: New Pod Configuration Request from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Timeline: {{timeline}}
Budget: {{budget}}

Selected Pods:
{{selected_pods}}

Project Description:
{{project_description}}
```

### 4. Get Your Credentials
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section (copy for each template)
- **Public Key**: Go to Account → General → copy your Public Key

### 5. Update the Code
In both files, replace the placeholder values:

**`src/pages/ContactUs.tsx`** (line ~41-43):
```typescript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your public key
```

**`src/pages/ConfigurePod.tsx`** (line ~73-75):
```typescript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your public key
```

### 6. Test Your Forms
- Submit a test form to verify emails are being sent to `kunalsah29@gmail.com`
- Check EmailJS dashboard for successful sends

## Alternative: Brevo (Sendinblue) API

If you prefer using Brevo instead, you can:
1. Sign up at [Brevo.com](https://www.brevo.com/)
2. Get your API key from Settings → SMTP & API
3. Use `fetch()` to call Brevo's API directly

Let me know if you need help with Brevo integration instead!
