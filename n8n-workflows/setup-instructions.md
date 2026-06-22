# SoOptimal Contracting n8n Lead Management Setup

## 🚀 Quick Setup Guide

### Step 1: Cloud n8n Setup
Since you have cloud MCP and API access, you can use the hosted n8n AI generation:

1. **Register at:** https://dashboard.n8n-mcp.com
2. **Connect your n8n instance**
3. **Use hosted API key in MCP client**

### Step 2: Import Workflow
1. **Open your n8n instance**
2. **Click "Import from file"**
3. **Upload:** `lead-management-workflow.json`
4. **Configure the following nodes:**

#### A. Email Configuration
**Both email nodes need SMTP settings:**
- **SMTP Host:** smtp.gmail.com (for Gmail)
- **Port:** 587
- **Username:** fernandconstructions@sooptimal.com
- **Password:** [Your Gmail App Password]
- **Secure:** TLS

#### B. Google Sheets Configuration
1. **Create a Google Sheet** with these columns:
   ```
   Date | Name | Email | Phone | Address | Project Type | Service Type | 
   Square Footage | Rooms | Low Estimate | High Estimate | Base Price | 
   Status | Details
   ```
2. **Get Sheet ID** from URL: `docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
3. **Replace `YOUR_GOOGLE_SHEET_ID_HERE`** in the workflow

#### C. Webhook URL
After importing, the webhook URL will be:
```
https://[your-n8n-instance].app.n8n.cloud/webhook/sooptimal-quote
```

### Step 3: Update Website
1. **Copy the webhook URL** from n8n
2. **Replace `YOUR_N8N_WEBHOOK_URL_HERE`** in `/src/script.js` (2 places)
3. **Redeploy to Vercel:**
   ```bash
   npm run build
   npx vercel --prod
   ```

### Step 4: Test the System
1. **Fill out quote form** on your website
2. **Check for:**
   - Customer receives confirmation email
   - You receive lead notification email
   - Lead is stored in Google Sheets
   - Website shows success message

## 🔧 Advanced Configuration

### Email Templates
The workflow includes professional HTML email templates for:
- **Customer confirmation** with pricing estimates
- **Internal lead alerts** with full project details

### Pricing Logic
The calculator automatically handles:
- **Residential vs Commercial** pricing
- **Different service types** (installation, repair, finishing, complete)
- **Bulk discounts** for large projects (2000+ sq ft)
- **Complexity multipliers** for multi-room projects
- **Minimum pricing** thresholds

### Lead Scoring
- **High-value leads** (>$5,000) are flagged in notifications
- **Automatic follow-up reminders** built into email
- **Complete customer data** captured for CRM

## 📊 What This System Does

### When Someone Requests a Quote:
1. **Instant Response:** Customer gets professional email confirmation
2. **Smart Pricing:** Automatic calculation based on project details
3. **Lead Alert:** You get immediate notification with all details
4. **Data Storage:** Lead saved to Google Sheets for tracking
5. **Follow-up Prompts:** Built-in reminders for next actions

### Benefits:
- **24/7 Lead Capture:** Never miss a potential customer
- **Professional Image:** Instant, branded responses
- **Accurate Pricing:** Consistent estimates based on your rates
- **Lead Management:** All prospects tracked in one place
- **Time Savings:** Automated administrative tasks

## 🎯 Next Steps After Setup

1. **Test with real data** to verify all components work
2. **Customize email templates** with your specific messaging
3. **Set up Google Sheets** with additional tracking columns
4. **Configure mobile notifications** for instant lead alerts
5. **Add follow-up sequences** for nurturing prospects

## 📞 Support

If you need help with setup:
1. **Check n8n execution logs** for any errors
2. **Test each node individually** to isolate issues
3. **Verify SMTP and Google Sheets credentials**
4. **Ensure webhook URL is correctly set in website**

Your automated lead management system will be running 24/7, capturing and processing every potential customer that visits your website!