// Deploy Automation Workflows to n8n Cloud
const N8N_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTE1ODJiMy0zZDJkLTRmYTItOWJkOS0yNjJkOGQ5ZDY4ZjgiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMjM3ZjE0ZmEtNjE2NS00NTQ0LTljMjAtOTMzZTFlNTRlY2Y1IiwiaWF0IjoxNzgwMzM4NDgzLCJleHAiOjE3ODgwNjI0MDB9.6Ll_gHDmQ0Yusst3yG99hJ-AIfQD3lFASGvacYNdinI';
const N8N_URL = 'https://hkdfernand.app.n8n.cloud/api/v1';

// Lead Qualification Workflow
const leadQualificationWorkflow = {
  name: "SoOptimal Lead Qualification & SMS Alert",
  settings: {},
  nodes: [
    {
      id: "gmail-trigger",
      name: "Gmail - New Lead Email",
      type: "n8n-nodes-base.gmailTrigger",
      typeVersion: 1,
      position: [100, 200],
      parameters: {
        filters: {
          labelIds: ["INBOX"]
        },
        pollTimes: {
          item: [{ mode: "everyMinute" }]
        }
      }
    },
    {
      id: "lead-scorer",
      name: "AI Lead Scorer",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [300, 200],
      parameters: {
        jsCode: `// Advanced Lead Scoring for SoOptimal
const headers = $input.item.json.payload?.headers || [];
const subject = headers.find(h => h.name === 'Subject')?.value || '';
const from = headers.find(h => h.name === 'From')?.value || '';
const body = $input.item.json.snippet || '';
const content = (subject + ' ' + body).toLowerCase();

// High-value keywords with weighted scoring
const keywords = {
  'commercial': 25, 'apartment': 22, 'building': 20, 'urgent': 30,
  'basement': 20, 'renovation': 18, 'drywall': 15, 'installation': 15,
  'multi-unit': 30, 'asap': 25, 'contractor': 10, 'quote': 12
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
};`
      }
    },
    {
      id: "sms-filter",
      name: "SMS Alert Filter",
      type: "n8n-nodes-base.filter",
      typeVersion: 2,
      position: [500, 150],
      parameters: {
        conditions: {
          options: {
            leftValue: "={{ $json.action }}",
            operation: "contains", 
            rightValue: "sms"
          }
        }
      }
    },
    {
      id: "sms-alert",
      name: "Send SMS Alert",
      type: "n8n-nodes-base.httpRequest",
      typeVersion: 4,
      position: [700, 100],
      parameters: {
        method: "POST",
        url: "https://api.textbelt.com/text",
        sendBody: true,
        bodyContentType: "json",
        jsonBody: `{
  "phone": "4378304202",
  "message": "🚨 {{ $json.priority.toUpperCase() }} LEAD ({{ $json.estimatedValue }})\\n\\n📧 From: {{ $json.from }}\\n📋 {{ $json.subject }}\\n💰 Score: {{ $json.leadScore }}/100\\n🏷️ {{ $json.keywords }}\\n\\n📞 RESPOND NOW - $28+ LEAD!",
  "key": "textbelt"
}`
      }
    }
  ],
  connections: {
    "Gmail - New Lead Email": {
      main: [[{ node: "AI Lead Scorer", type: "main", index: 0 }]]
    },
    "AI Lead Scorer": {
      main: [[{ node: "SMS Alert Filter", type: "main", index: 0 }]]
    },
    "SMS Alert Filter": {
      main: [[{ node: "Send SMS Alert", type: "main", index: 0 }]]
    }
  }
};

// Facebook Auto-Posting Workflow  
const facebookWorkflow = {
  name: "SoOptimal Facebook Auto-Posting",
  settings: {},
  nodes: [
    {
      id: "schedule",
      name: "Post Schedule (3x Daily)",
      type: "n8n-nodes-base.cron",
      typeVersion: 1,
      position: [100, 200],
      parameters: {
        rule: { hour: [9, 14, 19], minute: [0] }
      }
    },
    {
      id: "content-generator", 
      name: "Smart Content Generator",
      type: "n8n-nodes-base.code",
      typeVersion: 2,
      position: [300, 200],
      parameters: {
        jsCode: `// Smart Facebook Content Generator
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
    caption: caption + "\\n\\n📞 (437) 830-4202 | 🌐 sooptimal.com\\n\\n#SoOptimalContracting #Drywall #HomeImprovement #Construction #KW",
    timeOfDay: timeCategory,
    timestamp: new Date().toISOString()
  }
};`
      }
    }
  ],
  connections: {
    "Post Schedule (3x Daily)": {
      main: [[{ node: "Smart Content Generator", type: "main", index: 0 }]]
    }
  }
};

// Deploy function
async function deployWorkflows() {
  console.log('🚀 Deploying SoOptimal Automation to n8n Cloud...');
  
  try {
    // Deploy Lead Qualification Workflow
    const leadResponse = await fetch(N8N_URL + '/workflows', {
      method: 'POST',
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadQualificationWorkflow)
    });
    
    if (leadResponse.ok) {
      const leadData = await leadResponse.json();
      console.log('✅ Lead Qualification Workflow deployed!');
      console.log('Response:', JSON.stringify(leadData, null, 2));
    } else {
      console.error('❌ Lead workflow failed:', await leadResponse.text());
    }
    
    // Deploy Facebook Workflow
    const fbResponse = await fetch(N8N_URL + '/workflows', {
      method: 'POST',
      headers: {
        'X-N8N-API-KEY': N8N_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(facebookWorkflow)
    });
    
    if (fbResponse.ok) {
      const fbData = await fbResponse.json();
      console.log('✅ Facebook Automation Workflow deployed:', fbData.data.id);
    } else {
      console.error('❌ Facebook workflow failed:', await fbResponse.text());
    }
    
  } catch (error) {
    console.error('❌ Deployment error:', error.message);
  }
}

deployWorkflows();