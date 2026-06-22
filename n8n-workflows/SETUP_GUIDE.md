# 🚀 SoOptimal Contracting Lead Management Setup Guide

## 📋 Complete Setup Instructions

### Step 1: Import Workflow to n8n

1. **Go to your n8n instance:** https://hkdfernand.app.n8n.cloud
2. **Click "Import from file"** in the workflows section
3. **Upload:** `sooptimal-workflow-final.json`
4. **The workflow includes:**
   - Webhook trigger for quote requests
   - Smart pricing calculator with your rates
   - Professional customer email templates
   - Internal lead alert system
   - Google Sheets integration for lead tracking
   - Website response with pricing

### Step 2: Configure Email Settings

**Both email nodes need SMTP configuration:**

#### For Gmail (Recommended):
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to Google Account Settings → Security
   - Select "2-Step Verification" → "App passwords"
   - Generate password for "Mail"
3. **Configure in n8n Email nodes:**
   - **SMTP Host:** smtp.gmail.com
   - **Port:** 587
   - **Username:** fernandconstructions@sooptimal.com
   - **Password:** [Your Gmail App Password]
   - **Secure Connection:** TLS

### Step 3: Set Up Google Sheets

1. **Create new Google Sheet** with these columns:
   ```
   Date | Name | Email | Phone | Address | Project Type | Service Type | 
   Square Footage | Room Count | Low Estimate | High Estimate | Base Price | 
   Rate Applied | Status | Project Details | Lead Source | Priority
   ```

2. **Get Sheet ID from URL:**
   - URL: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
   - Copy the SHEET_ID part

3. **Update workflow:**
   - Replace `REPLACE_WITH_YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
   - Ensure sheet name is "SoOptimal Leads"

4. **Google Sheets Authentication:**
   - In n8n, go to Credentials
   - Add "Google Sheets API" credential
   - Follow OAuth setup process

### Step 4: Get Webhook URL

After importing the workflow:
1. **Click on the "Quote Request Webhook" node**
2. **Copy the webhook URL** - it will be:
   ```
   https://hkdfernand.app.n8n.cloud/webhook/sooptimal-quote
   ```

### Step 5: Update Website

1. **In your website code** (`/src/script.js`), replace:
   ```javascript
   const webhookUrl = 'YOUR_N8N_WEBHOOK_URL_HERE';
   ```
   **With:**
   ```javascript
   const webhookUrl = 'https://hkdfernand.app.n8n.cloud/webhook/sooptimal-quote';
   ```

2. **Redeploy website:**
   ```bash
   npm run build
   npx vercel --prod
   ```

### Step 6: Test the Complete System

1. **Go to your website:** https://sooptimal.com
2. **Test with sample data:**
   - Project Type: Commercial
   - Service: Complete Service
   - Square Footage: 5000
   - Rooms: 20
   - Add contact details

3. **Verify all components work:**
   - Customer receives professional confirmation email
   - You receive internal lead alert
   - Lead is stored in Google Sheets
   - Website shows success message with pricing

## 🎯 What Your System Does

### When Someone Requests a Quote:

1. **⚡ Instant Pricing:** Smart calculator with your exact rates
2. **📧 Customer Email:** Professional branded confirmation
3. **🚨 Lead Alert:** Immediate notification to your email
4. **📊 Lead Tracking:** Automatic storage in Google Sheets
5. **💫 Website Response:** Success message with estimate

### Smart Pricing Features:

- **Residential rates:** $4.75/sq ft complete, $2.50 installation
- **Commercial rates:** $4.25/sq ft complete, $2.25 installation  
- **Bulk discounts:** 8% off 2000+ sq ft, 12% off 5000+ sq ft
- **Minimums:** $350 residential, $1500 commercial
- **High-value alerts:** Projects >$5,000 flagged for priority

### Professional Email Templates:

- **Customer emails:** Branded, detailed, with next steps
- **Internal alerts:** Full project analysis and action items
- **Mobile-optimized:** Perfect display on all devices

## 🔧 Troubleshooting

### Common Issues:

1. **Email not sending:**
   - Verify Gmail app password is correct
   - Check SMTP settings match exactly
   - Test with simple email first

2. **Google Sheets not updating:**
   - Verify Sheet ID is correct
   - Check OAuth credentials are authorized
   - Ensure sheet name matches exactly

3. **Webhook not working:**
   - Check webhook URL in website code
   - Verify CORS headers are set
   - Test webhook URL directly

### Testing Tips:

- **Use real email** for testing (not test@example.com)
- **Check spam folder** for emails
- **Monitor n8n execution logs** for errors
- **Test with different project sizes** to verify pricing

## 🎉 Go Live!

Once everything is working:

1. **Share your website:** sooptimal.com
2. **Monitor lead notifications**
3. **Track performance in Google Sheets**
4. **Follow up on leads within 2 hours**

Your automated lead management system is now capturing and processing leads 24/7, calculating accurate pricing, and ensuring no opportunity is missed!

## 📞 Your New Lead Process:

1. **Lead submits quote** → System calculates pricing
2. **Customer gets confirmation** → You get instant alert
3. **Lead stored in sheets** → Follow up within 2 hours
4. **Close more deals** → Scale your business!

**Ready to start capturing leads automatically!** 🚀