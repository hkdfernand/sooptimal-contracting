# 🚀 Manual n8n Cloud Setup - Your $28+ Lead Machine

## 🎯 **Quick Import Instructions**

Since we have the workflows ready but API connection has restrictions, here's how to manually import them into your n8n cloud:

**Your n8n Cloud URL**: https://hkdfernand.app.n8n.cloud

---

## 📧 **WORKFLOW 1: Lead Qualification & SMS Alerts**

### **Step 1: Create New Workflow**
1. Go to: https://hkdfernand.app.n8n.cloud
2. Click "Add Workflow" → "Blank Workflow"
3. Name: "SoOptimal Lead Qualification & SMS Alert"

### **Step 2: Add Gmail Trigger**
1. Click "Add first node" → "Trigger" → "Gmail"
2. **Settings**:
   - **Trigger**: "On New Email"
   - **Gmail Account**: Connect your `fernandconstructions@sooptimal.com`
   - **Filter**: Label = "INBOX"
   - **Poll Time**: Every 2 minutes

### **Step 3: Add Lead Scoring Code**
1. Add node → "Code" → "Code"
2. **Name**: "AI Lead Scorer"
3. **Paste this exact code**:

```javascript
// Advanced Lead Scoring for SoOptimal
const headers = $input.item.json.payload?.headers || [];
const subject = headers.find(h => h.name === 'Subject')?.value || '';
const from = headers.find(h => h.name === 'From')?.value || '';
const body = $input.item.json.snippet || '';
const content = (subject + ' ' + body).toLowerCase();

// High-value keywords with weighted scoring
const keywords = {
  'commercial': 25, 'apartment': 22, 'building': 20, 'urgent': 30,
  'basement': 20, 'renovation': 18, 'drywall': 15, 'installation': 15,
  'multi-unit': 30, 'asap': 25, 'contractor': 10, 'quote': 12, 'estimate': 12
};

let leadScore = 0;
let foundKeywords = [];

Object.entries(keywords).forEach(([keyword, points]) => {
  if (content.includes(keyword)) {
    leadScore += points;
    foundKeywords.push(keyword);
  }
});

// Determine priority and action
let priority = 'low';
let action = 'log';
let estimatedValue = '$400+';

if (leadScore >= 40) {
  priority = 'urgent';
  action = 'immediate_sms';
  estimatedValue = '$1500+';
} else if (leadScore >= 25) {
  priority = 'high';
  action = 'sms';
  estimatedValue = '$800+';
} else if (leadScore >= 10) {
  priority = 'medium';
  action = 'email_alert';
  estimatedValue = '$500+';
}

return {
  json: {
    timestamp: new Date().toISOString(),
    from, subject, body: body.substring(0, 200),
    leadScore, priority, action,
    keywords: foundKeywords.join(', '),
    estimatedValue,
    urgencyLevel: content.includes('urgent') || content.includes('asap') ? 'HIGH' : 'NORMAL'
  }
};
```

### **Step 4: Add SMS Filter**
1. Add node → "Flow" → "Filter"
2. **Name**: "SMS Alert Filter"  
3. **Condition**: `{{ $json.action }}` **contains** `sms`

### **Step 5: Add SMS Alert**
1. Add node → "Regular" → "HTTP Request"
2. **Name**: "Send SMS Alert"
3. **Settings**:
   - **Method**: POST
   - **URL**: `https://api.textbelt.com/text`
   - **Body Type**: JSON
   - **Body**:
```json
{
  "phone": "4378304202",
  "message": "🚨 {{ $json.priority.toUpperCase() }} LEAD ({{ $json.estimatedValue }})\n\n📧 From: {{ $json.from }}\n📋 {{ $json.subject }}\n💰 Score: {{ $json.leadScore }}/100\n🏷️ {{ $json.keywords }}\n\n📞 RESPOND NOW - $28+ LEAD!",
  "key": "textbelt"
}
```

### **Step 6: Connect Nodes**
1. **Gmail** → **AI Lead Scorer**
2. **AI Lead Scorer** → **SMS Alert Filter**  
3. **SMS Alert Filter** → **Send SMS Alert**

### **Step 7: Test & Activate**
1. Click "Test Workflow"
2. Send yourself a test email with "urgent commercial drywall" in subject
3. Should receive SMS within 2 minutes
4. Click "Save" → "Activate"

---

## 📘 **WORKFLOW 2: Facebook Auto-Posting**

### **Step 1: Create New Workflow**
1. New workflow: "SoOptimal Facebook Auto-Posting"

### **Step 2: Add Schedule Trigger**
1. Add trigger → "Schedule" → "Cron"
2. **Name**: "Post Schedule (3x Daily)"
3. **Expression**: `0 9,14,19 * * *` (9 AM, 2 PM, 7 PM)

### **Step 3: Add Content Generator**
1. Add node → "Code" → "Code"
2. **Name**: "Smart Content Generator"
3. **Code**:

```javascript
// Smart Facebook Content Generator
const hour = new Date().getHours();
const captions = {
  morning: [
    "🌅 Starting another day of quality drywall work! Professional results in the KW region. Call (437) 830-4202 for your free estimate! #SoOptimal #Drywall #KitchenerWaterloo",
    "☕ Good morning! Ready to transform your space with expert drywall? Serving Kitchener, Waterloo, Cambridge & Guelph. #Professional #QualityWork"
  ],
  afternoon: [
    "🔨 Hard at work delivering paint-ready finishes! 10+ years of experience shows. #WorkInProgress #SoOptimal #Drywall",
    "⚡ Another satisfied client in the making! Quality that lasts. Call (437) 830-4202 #KitchenerWaterloo #Professional"
  ],
  evening: [
    "✨ Project completed! From rough to paint-ready in the KW region. Who's next? #Completed #SoOptimal #FreeEstimate",
    "🏠 Transform your space with professional drywall. This client is ready for paint! Book today: (437) 830-4202"
  ]
};

let timeCategory = 'afternoon';
if (hour >= 7 && hour <= 12) timeCategory = 'morning';
else if (hour >= 17 && hour <= 22) timeCategory = 'evening';

const templates = captions[timeCategory];
const caption = templates[Math.floor(Math.random() * templates.length)];

return {
  json: {
    caption: caption + "\n\n📞 (437) 830-4202 | 🌐 sooptimal.com\n\n#SoOptimalContracting #Drywall #HomeImprovement #Construction #KW",
    timeOfDay: timeCategory,
    timestamp: new Date().toISOString()
  }
};
```

### **Step 4: Facebook Posting (When Ready)**
*Note: You'll need to set up Facebook Developer API later*

1. Add node → "Social Media" → "Facebook"
2. Connect your Facebook page
3. Use `{{ $json.caption }}` as post content

---

## 🔑 **Required API Keys & Setup**

### **TextBelt SMS** (Free tier):
1. Go to: https://textbelt.com/
2. Sign up for free account
3. Get API key
4. Replace "textbelt" with your actual key in SMS workflow

### **Gmail OAuth**:
1. Go to: https://console.cloud.google.com/
2. Enable Gmail API
3. Create OAuth2 credentials
4. Connect in n8n Gmail trigger

### **Facebook Page Access** (Later):
1. Go to: https://developers.facebook.com/
2. Create app for "SoOptimal Social Automation"
3. Get Page Access Token
4. Connect to Facebook node

---

## 🚨 **IMMEDIATE PRIORITY: GET SMS ALERTS WORKING**

**Do This First (10 minutes)**:
1. ✅ Import Workflow 1 (Lead Qualification)
2. ✅ Connect Gmail to your `fernandconstructions@sooptimal.com`
3. ✅ Set up TextBelt SMS
4. ✅ Test with fake lead email
5. ✅ Activate workflow

**This Week**:
- Facebook automation setup
- Google Drive photo integration
- Advanced lead tracking

---

## 📊 **What This Gets You**

**Every Email Lead**:
- Automatically scored 0-100 points
- High-value leads (25+) = instant SMS to (437) 830-4202
- You respond within 15 minutes = higher conversion
- More jobs = more money

**Example SMS You'll Get**:
```
🚨 HIGH LEAD ($800+)

📧 From: contractor.needed@company.com
📋 Need drywall for office renovation
💰 Score: 32/100
🏷️ commercial, renovation, drywall

📞 RESPOND NOW - $28+ LEAD!
```

**Your AI assistant works 24/7 catching every lead while you focus on the actual drywall work! 💪**

---

## 🆘 **Need Help?**

**If stuck**:
1. Check n8n execution log for errors
2. Test each node individually  
3. Verify API credentials are correct
4. Start with simple test emails

**Priority**: Get Workflow 1 (SMS alerts) working first - that's where the money is!