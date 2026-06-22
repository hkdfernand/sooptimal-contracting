# 🤖 SoOptimal AI Automation Setup - Your $28+ Lead Machine

## 🎯 **What This System Does**

**Email Lead Qualification**: Claude monitors your email 24/7, scores every lead, and texts you only the high-value ones ($28+ leads)

**Facebook Auto-Posting**: Posts to your Facebook page 3x daily using your Google Drive photos with smart captions

**Lead Tracking**: Everything logged to Google Sheets for tracking your money pipeline

---

## 📧 **Step 1: Email Integration Setup (15 minutes)**

### **Gmail API Setup**:
1. Go to: https://console.cloud.google.com/
2. Create new project: "SoOptimal Automation"
3. Enable Gmail API
4. Create OAuth2 credentials
5. Download credentials.json

### **In n8n Cloud**:
1. Import `lead-qualification-workflow.json`
2. Set up Gmail trigger with your credentials
3. Test with a sample email

---

## 📱 **Step 2: SMS Alert Setup (5 minutes)**

### **TextBelt Account** (Free 1 text to test):
1. Go to: https://textbelt.com/
2. Get API key (free tier available)
3. Update workflow with your phone: `4378304202`

### **Alternative: Twilio** (More reliable):
1. Sign up at twilio.com
2. Get phone number + API credentials
3. Replace TextBelt with Twilio node

---

## 📘 **Step 3: Facebook Auto-Posting (10 minutes)**

### **Facebook Developer Setup**:
1. Go to: https://developers.facebook.com/
2. Create app: "SoOptimal Social Automation"
3. Add Facebook Login product
4. Generate Page Access Token
5. Get your Page ID

### **Google Drive Setup**:
1. Create folder: "SoOptimal Content Assets"
2. Upload 10-20 photos of your drywall work
3. Name files descriptively: "basement-renovation-after.jpg"
4. Get folder ID from URL
5. Share folder with n8n service account

### **In n8n Cloud**:
1. Import `facebook-automation-workflow.json`
2. Update Page ID and Access Token
3. Update Google Drive folder ID
4. Test posting

---

## 📊 **Step 4: Lead Tracking Database (5 minutes)**

### **Google Sheets Setup**:
1. Create sheet: "SoOptimal Lead Tracker"
2. Add sheets: "Leads", "Social Posts"
3. Headers for Leads: `timestamp, from, subject, leadScore, priority, keywords, phone, estimatedValue, urgencyLevel, status`
4. Share with n8n service account
5. Update workflow with Sheet ID

---

## 🔧 **Step 5: n8n Cloud Configuration**

### **Import Workflows**:
1. Login to your n8n cloud instance
2. Go to Workflows → Import
3. Upload both JSON files
4. Configure credentials for each service

### **Required Credentials**:
- Gmail OAuth2
- Google Sheets Service Account
- Google Drive Service Account  
- Facebook Graph API
- TextBelt/Twilio API

---

## 🎯 **Lead Scoring Algorithm**

Your AI assistant scores leads automatically:

**High Value Keywords** (Auto SMS Alert):
- `commercial` = 25 points
- `apartment/multi-unit` = 30 points
- `urgent/asap` = 30 points
- `basement renovation` = 20 points
- `building` = 20 points

**Medium Value Keywords**:
- `drywall` = 15 points
- `installation` = 15 points
- `renovation` = 18 points

**Auto Actions**:
- `40+ points` = Immediate SMS ("URGENT LEAD")
- `25+ points` = SMS Alert ("HIGH VALUE LEAD")  
- `10+ points` = Email notification
- `<10 points` = Log only

---

## 📱 **SMS Alert Examples**

**High Value Lead**:
```
🚨 HIGH LEAD ALERT ($1500+)

📧 From: property.manager@apartments.com
📋 Subject: Drywall for 50-unit building
💰 Score: 45/100
🏷️ Keywords: commercial, building, urgent
⏰ HIGH PRIORITY

📞 RESPOND NOW - Every minute = money!
```

**Medium Lead**:
```
💰 LEAD ALERT ($800+)

From: homeowner@email.com
Subject: Basement drywall repair
Score: 28/100
Keywords: basement, repair, renovation

Worth following up today!
```

---

## 📘 **Facebook Posting Schedule**

**Morning Posts (7-11 AM)**:
- Professional/team content
- "Starting the day" messaging
- Tool/equipment photos

**Afternoon Posts (12-5 PM)**:
- Work in progress
- Action shots
- Process videos

**Evening Posts (6-11 PM)**:
- Completed projects
- Before/after reveals
- Satisfied customers

**Auto-Generated Captions Include**:
- Time-appropriate messaging
- Call-to-action with your phone number
- Location targeting (KW region)
- Relevant hashtags
- Professional tone

---

## 💰 **ROI Tracking**

**What Gets Measured**:
- Lead source (email, HomeStars, Facebook)
- Lead score and qualification time
- Response time to high-value leads
- Conversion rate by lead type
- Social media engagement

**Weekly Reports**:
- Total leads received
- High-value leads (SMS alerts sent)
- Estimated lead value pipeline
- Social media post performance
- Response time averages

---

## 🔄 **Maintenance (5 min/week)**

**Weekly Tasks**:
- Upload 3-5 new photos to Google Drive
- Review lead qualification accuracy
- Check Facebook posting performance
- Update captions if needed

**Monthly Tasks**:
- Review and optimize lead scoring
- Add new keywords for better qualification
- Analyze ROI and adjust posting schedule

---

## 🚨 **Emergency Protocols**

**If High-Value Lead Missed**:
1. Check phone notifications
2. Review email spam folder
3. Verify n8n workflow status
4. Manual lead scoring backup

**If Facebook Not Posting**:
1. Check Page Access Token validity
2. Verify Google Drive permissions
3. Review content folder for new assets

---

## 📞 **Support & Testing**

**Test Your Setup**:
1. Send test email to yourself with keywords "urgent commercial drywall"
2. Should receive SMS within 2 minutes
3. Check Google Sheets for lead logging
4. Verify Facebook posts appear as scheduled

**When You Get Real Leads**:
- High-value leads = Respond within 15 minutes
- Every quick response builds your HomeStars rating
- Use the lead response protocol for phone calls

---

## 🎯 **Success Metrics**

**Week 1 Goals**:
- 5+ qualified leads logged
- 2+ SMS alerts for high-value leads
- Daily Facebook posts running
- <30 minute response time average

**Month 1 Goals**:
- 20+ qualified leads
- 3+ jobs booked from automation
- Growing Facebook engagement
- $2000+ in new business

**Your AI assistant works 24/7 so you can focus on the actual drywall work. Every lead is money - let's catch them all! 💰**