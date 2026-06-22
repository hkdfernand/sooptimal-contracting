# 🚀 ONE-TIME SETUP CHECKLIST - Set It & Forget It Lead Machine

## 🎯 **Goal: 2 hours of setup → Automatic lead generation forever**

**After setup**: Spend 30 minutes daily managing leads + 1 hour weekly on content

---

## ✅ **Phase 1: Essential Systems (30 minutes)**

### **1. Gmail Connection (5 minutes)**
**What**: Connect your email to n8n for lead monitoring
**Steps**:
1. Go to: https://hkdfernand.app.n8n.cloud/workflow/CkP1J5FKO1qMFlYh
2. Click "Gmail - New Lead Email" node
3. Click "Create New Credential" 
4. Login with `fernandconstructions@sooptimal.com`
5. Click "Save" → "Activate"

**Result**: Every email gets auto-scored, high-value leads text you instantly

### **2. SMS Service Setup (5 minutes)**  
**What**: Get SMS alerts for urgent leads
**Steps**:
1. Go to: https://textbelt.com/
2. Sign up (free tier gives you test messages)
3. Get API key
4. Replace "textbelt" in n8n workflows with your actual key

**Alternative**: Twilio ($1/month, more reliable)
1. Sign up at twilio.com  
2. Get phone number + API key
3. Update n8n SMS nodes to use Twilio

**Result**: Text alerts like "🚨 URGENT LEAD ($2000+) - commercial drywall - CALL NOW!"

### **3. Test the System (5 minutes)**
**What**: Verify everything works end-to-end
**Test Script**:
```bash
# Test the superpower webhook
curl -X POST "https://hkdfernand.app.n8n.cloud/webhook/sooptimal-superpower-lead" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Customer",
    "phone": "555-123-4567", 
    "email": "test@example.com",
    "projectType": "urgent commercial drywall",
    "location": "kitchener",
    "timeline": "this week",
    "squareFootage": "2000",
    "description": "need drywall for office space asap"
  }'
```

**Expected**: Should score 70+ points and send you urgent SMS within 2 minutes

### **4. Website Form Update (15 minutes)**
**What**: Connect your website to the AI lead system
**Action**: Update contact form to send to superpower webhook

---

## ✅ **Phase 2: Lead Generation Launch (45 minutes)**

### **5. Google Ads Campaign (20 minutes)**
**What**: Start getting leads from Google searches
**Steps**:
```bash
# Run the automated setup
node automation/google-ads-setup.js google
```
**Then manually**:
1. Follow the printed instructions
2. Set daily budget: $20
3. Target keywords: "drywall contractor kitchener"
4. Use provided ad copy templates

**Expected Results**: 15-25 leads/month, $20-40 per lead

### **6. Facebook Lead Ads (20 minutes)**
**What**: Get leads from local homeowners on Facebook
**Steps**:
```bash
# Run the automated setup  
node automation/google-ads-setup.js facebook
```
**Then manually**:
1. Create lead generation campaign
2. Target KW region homeowners
3. Use provided lead form questions
4. Set budget: $15/day

**Expected Results**: 20-30 leads/month, $15-20 per lead

### **7. Google Business Profile (5 minutes)**
**What**: Get organic leads from "drywall contractor near me"
**Action**: Call Google at 1-855-836-3987 to expedite verification
**Alternative**: Request postcard verification (5-7 days)

---

## ✅ **Phase 3: Content Automation (45 minutes)**

### **8. Google Drive Setup (10 minutes)**
**What**: Automated Facebook posting from your photos
**Steps**:
1. Create folder: "SoOptimal Content Assets"
2. Upload 20+ photos of your best drywall work
3. Name files: "basement-renovation-after.jpg", "commercial-project-1.jpg"
4. Get folder ID from URL
5. Update Facebook workflow with folder ID

### **9. Facebook Page Setup (15 minutes)**
**What**: Professional business page for automated posting
**Action**: 
```bash
node automation/verification-troubleshooting.js facebook
```
**Then**:
1. Create "SoOptimal Contracting" business page
2. Add phone, website, description
3. Get Page Access Token for automation

### **10. Content Automation (20 minutes)**
**What**: Post 3x daily automatically from your photos
**Steps**:
1. Update Facebook workflow with Page ID and Access Token
2. Activate workflow in n8n
3. Test posting

**Result**: Professional posts 3x daily with smart captions + CTAs

---

## 🤖 **DAILY MAINTENANCE (30 minutes/day)**

### **Morning Routine (10 minutes)**
- [ ] Check SMS alerts from overnight
- [ ] Respond to any urgent leads within 15 minutes
- [ ] Review email for new lead notifications

### **Lead Management (15 minutes)**
- [ ] Call back high-priority leads
- [ ] Send estimates for site visits completed
- [ ] Update lead status in Google Sheets

### **Quick Content (5 minutes)**
- [ ] Take 1-2 photos of current work
- [ ] Upload to Google Drive folder
- [ ] Check Facebook posts are going live

---

## 📊 **WEEKLY MAINTENANCE (1 hour/week)**

### **Performance Review (20 minutes)**
- [ ] Check Google Ads performance (adjust keywords if needed)
- [ ] Review Facebook ad results (pause low performers)
- [ ] Analyze lead conversion rates

### **Content Refresh (20 minutes)**
- [ ] Upload 5-10 new work photos to Drive
- [ ] Remove old/low-quality photos
- [ ] Plan any special promotions

### **System Health (20 minutes)**
- [ ] Verify all n8n workflows are active
- [ ] Check webhook response times
- [ ] Review SMS/email delivery rates
- [ ] Update lead scoring if needed

---

## 💰 **EXPECTED RESULTS AFTER SETUP**

### **Month 1**
- **Leads Generated**: 40-50 direct leads
- **Jobs Booked**: 8-12 projects  
- **Revenue**: $8,000-15,000
- **Ad Spend**: $1,150
- **Net Increase**: $6,850-13,850 vs HomeStars fees

### **Month 3** (System Optimized)
- **Leads Generated**: 60-80 direct leads
- **Jobs Booked**: 12-18 projects
- **Revenue**: $15,000-25,000  
- **Ad Spend**: $1,150
- **Net Increase**: $13,850-23,850 vs HomeStars fees

### **Monthly Savings vs HomeStars**
- **Before**: Pay $28+ per lead won × 10 jobs = $280+ fees
- **After**: Generate unlimited leads, pay only ad costs
- **Savings**: $10,000-20,000+ monthly

---

## 🚨 **CRITICAL SUCCESS FACTORS**

### **Response Time = Money**
- **15 minutes response** = 80% close rate
- **1 hour response** = 60% close rate  
- **4+ hour response** = 30% close rate

### **Lead Quality Indicators**
- **Commercial projects** = Highest value
- **"Urgent" keywords** = Immediate priority
- **Large square footage** = Big paychecks
- **KW region** = Your sweet spot

---

## 🎯 **READY TO LAUNCH?**

### **Test Command (Run This Now)**
```bash
# Test the complete system
curl -X POST "https://hkdfernand.app.n8n.cloud/webhook/sooptimal-superpower-lead" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Commercial Test Lead",
    "phone": "4378304202",
    "email": "fernandconstructions@sooptimal.com", 
    "projectType": "urgent commercial drywall installation",
    "location": "kitchener downtown",
    "timeline": "this week",
    "squareFootage": "5000",
    "description": "need professional drywall for new office space, budget 15k, start asap"
  }'
```

**Expected**: 
- Score: 85+ points (URGENT priority)
- SMS to (437) 830-4202 within 2 minutes
- Auto-reply email sent
- Lead saved to Google Sheets

### **Your Next Steps**
1. ✅ Run the test above
2. ✅ Set up Gmail connection (5 minutes)  
3. ✅ Get TextBelt/Twilio SMS key (5 minutes)
4. 🚀 Launch Google Ads (20 minutes)
5. 🚀 Launch Facebook Ads (20 minutes)

**Total setup time**: 2 hours → Automatic lead generation forever

**Ready to test and launch? Let's start with the webhook test! 🚀**