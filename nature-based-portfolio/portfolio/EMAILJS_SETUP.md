# EmailJS Setup — Contact Form

The contact form uses **EmailJS** (free, no backend needed) to send messages directly to `sabareesanravi22@gmail.com`.

## Steps to Activate (takes ~5 minutes)

### 1. Create a free EmailJS account
Go to https://www.emailjs.com and sign up (free tier = 200 emails/month).

### 2. Add an Email Service
- Dashboard → **Email Services** → Add New Service
- Choose **Gmail** → connect your `sabareesanravi22@gmail.com` account
- Note the **Service ID** (e.g. `service_abc123`)

### 3. Create an Email Template
- Dashboard → **Email Templates** → Create New Template
- Set **To Email**: `sabareesanravi22@gmail.com`
- Set **Subject**: `{{subject}}`
- Set **Body**:
  ```
  New message from your portfolio!

  Name: {{from_name}}
  Email: {{from_email}}
  Subject: {{subject}}

  Message:
  {{message}}
  ```
- Note the **Template ID** (e.g. `template_xyz789`)

### 4. Get your Public Key
- Dashboard → **Account** → **Public Key** (e.g. `user_XXXXXXXXXXXXXXX`)

### 5. Update index.html
Open `index.html` and replace these 3 placeholders:

| Placeholder | Replace with |
|---|---|
| `YOUR_EMAILJS_PUBLIC_KEY` | Your public key from Account settings |
| `YOUR_EMAILJS_SERVICE_ID` | Your service ID (e.g. `service_abc123`) |
| `YOUR_EMAILJS_TEMPLATE_ID` | Your template ID (e.g. `template_xyz789`) |

Search for these strings in `index.html` (lines ~10–11 and ~822).

### Done!
The form will now send emails directly to your Gmail inbox whenever someone submits a message.
