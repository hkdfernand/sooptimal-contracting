// Google Ads Campaign Setup for SoOptimal Contracting
import { chromium } from 'playwright';

const BUSINESS_INFO = {
  name: 'SoOptimal Contracting',
  phone: '(437) 830-4202',
  website: 'https://sooptimal.com',
  serviceAreas: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph'],
  budget: '$20 per day',
  targetKeywords: [
    'drywall contractor kitchener',
    'drywall installation waterloo', 
    'basement drywall cambridge',
    'commercial drywall guelph',
    'drywall repair near me',
    'drywall finishing kitchener waterloo'
  ]
};

const AD_COPY = {
  headlines: [
    'Professional Drywall Services',
    'Free Estimates | Same Week',
    'KW Drywall Contractor',
    '10+ Years Experience',
    'Quality Workmanship',
    'Licensed & Insured'
  ],
  descriptions: [
    'Expert drywall installation, repair & finishing across Kitchener-Waterloo region. Call (437) 830-4202 for your free estimate today!',
    'Transform your space with professional drywall services. Basement renovations, commercial projects & residential work. Book consultation now.'
  ],
  extensions: {
    sitelinks: [
      { text: 'Free Quote', url: 'https://sooptimal.com#quote' },
      { text: 'Our Work', url: 'https://sooptimal.com#gallery' },
      { text: 'Service Areas', url: 'https://sooptimal.com#areas' },
      { text: 'Contact Us', url: 'https://sooptimal.com#contact' }
    ],
    callouts: [
      'Free Estimates',
      'Same Week Service', 
      '10+ Years Experience',
      'Licensed & Insured',
      'Quality Workmanship',
      'Residential & Commercial'
    ]
  }
};

async function setupGoogleAds() {
  console.log('🎯 Setting up Google Ads for Lead Generation...');
  console.log('');
  console.log('📋 CAMPAIGN SETUP INFORMATION:');
  console.log(`Business: ${BUSINESS_INFO.name}`);
  console.log(`Daily Budget: ${BUSINESS_INFO.budget}`);
  console.log(`Target Areas: ${BUSINESS_INFO.serviceAreas.join(', ')}`);
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://ads.google.com/');
    
    console.log('🎯 GOOGLE ADS SETUP STEPS:');
    console.log('');
    console.log('1. CAMPAIGN CREATION:');
    console.log('   - Choose "Get phone calls" or "Get website visits"');
    console.log('   - Campaign type: Search');
    console.log('   - Campaign name: "SoOptimal Drywall - Search Leads"');
    console.log('');
    
    console.log('2. LOCATION TARGETING:');
    console.log('   - Target: Kitchener, Waterloo, Cambridge, Guelph');
    console.log('   - Radius: 25km from each city');
    console.log('   - Language: English');
    console.log('');
    
    console.log('3. BUDGET & BIDDING:');
    console.log('   - Daily budget: $20 CAD');
    console.log('   - Bid strategy: Maximize clicks');
    console.log('   - Maximum CPC limit: $8');
    console.log('');
    
    console.log('4. KEYWORDS TO ADD:');
    BUSINESS_INFO.targetKeywords.forEach((keyword, index) => {
      console.log(`   ${index + 1}. "${keyword}" - Broad match`);
    });
    console.log('');
    
    console.log('5. AD COPY TEMPLATES:');
    console.log('');
    console.log('   HEADLINES (use 3):');
    AD_COPY.headlines.forEach((headline, index) => {
      console.log(`   ${index + 1}. ${headline}`);
    });
    console.log('');
    
    console.log('   DESCRIPTIONS (use 2):');
    AD_COPY.descriptions.forEach((desc, index) => {
      console.log(`   ${index + 1}. ${desc}`);
    });
    console.log('');
    
    console.log('   SITELINK EXTENSIONS:');
    AD_COPY.extensions.sitelinks.forEach((link, index) => {
      console.log(`   ${index + 1}. ${link.text} → ${link.url}`);
    });
    console.log('');
    
    console.log('   CALLOUT EXTENSIONS:');
    AD_COPY.extensions.callouts.forEach((callout, index) => {
      console.log(`   ${index + 1}. ${callout}`);
    });
    console.log('');
    
    console.log('6. CONVERSION TRACKING:');
    console.log('   - Track phone calls from ads');
    console.log('   - Track form submissions on website');
    console.log('   - Set up Google Analytics linking');
    console.log('');
    
    console.log('7. NEGATIVE KEYWORDS (add these):');
    const negativeKeywords = [
      'free', 'diy', 'how to', 'tutorial', 'cheap', 'jobs', 'career', 
      'supplies', 'materials', 'walmart', 'home depot', 'lowes'
    ];
    negativeKeywords.forEach((keyword, index) => {
      console.log(`   ${index + 1}. -${keyword}`);
    });
    console.log('');
    
    console.log('💰 EXPECTED RESULTS:');
    console.log('   - Cost per click: $3-8');
    console.log('   - Clicks per day: 3-7');
    console.log('   - Leads per month: 15-25');
    console.log('   - Cost per lead: $20-40');
    console.log('   - Close rate target: 20%');
    console.log('   - Jobs per month: 3-5');
    console.log('   - Revenue target: $3,000-6,000');
    console.log('');
    
    console.log('✅ Google Ads setup page opened');
    console.log('⏰ Browser will stay open for 20 minutes for setup');
    
    await page.waitForTimeout(1200000); // 20 minutes
    
  } catch (error) {
    console.log(`❌ Setup error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

async function setupFacebookAds() {
  console.log('📘 Setting up Facebook Lead Generation Ads...');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.facebook.com/business/ads-manager');
    
    console.log('📘 FACEBOOK ADS SETUP:');
    console.log('');
    console.log('1. CAMPAIGN OBJECTIVE:');
    console.log('   - Choose "Lead Generation"');
    console.log('   - Campaign name: "SoOptimal Drywall Leads - KW"');
    console.log('   - Budget: $15/day');
    console.log('');
    
    console.log('2. AUDIENCE TARGETING:');
    console.log('   - Location: Kitchener, Waterloo, Cambridge, Guelph');
    console.log('   - Radius: 25km');
    console.log('   - Age: 25-65');
    console.log('   - Interests: Home improvement, renovation, real estate');
    console.log('   - Behaviors: New homeowners, home improvement spenders');
    console.log('');
    
    console.log('3. LEAD FORM QUESTIONS:');
    console.log('   1. What type of drywall project? (Multiple choice)');
    console.log('      - New installation');
    console.log('      - Repair work');
    console.log('      - Basement finishing');
    console.log('      - Commercial project');
    console.log('');
    console.log('   2. When do you need this completed?');
    console.log('      - This month');
    console.log('      - Next 2-3 months'); 
    console.log('      - Just planning');
    console.log('');
    console.log('   3. Approximate square footage?');
    console.log('   4. Phone number (required)');
    console.log('   5. Best time to call?');
    console.log('');
    
    console.log('4. AD CREATIVE:');
    console.log('   - Use before/after photos of your work');
    console.log('   - Video of you working (builds trust)');
    console.log('   - Headline: "Free Drywall Estimates in KW Region"');
    console.log('   - Text: "Professional drywall installation & repair. 10+ years serving Kitchener-Waterloo homeowners. Get your free quote today!"');
    console.log('');
    
    console.log('✅ Facebook Ads Manager opened');
    console.log('⏰ Browser will stay open for 20 minutes');
    
    await page.waitForTimeout(1200000); // 20 minutes
    
  } catch (error) {
    console.log(`❌ Setup error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

// Main execution
const platform = process.argv[2];

switch(platform?.toLowerCase()) {
  case 'google':
    await setupGoogleAds();
    break;
  case 'facebook':
    await setupFacebookAds();
    break;
  case 'both':
    console.log('🚀 Setting up both Google and Facebook ads...');
    await setupGoogleAds();
    console.log('\\nMoving to Facebook setup...');
    await setupFacebookAds();
    break;
  default:
    console.log('🎯 SoOptimal Lead Generation Setup');
    console.log('');
    console.log('Usage: node automation/google-ads-setup.js [platform]');
    console.log('');
    console.log('Options:');
    console.log('  google    - Set up Google Ads campaign');
    console.log('  facebook  - Set up Facebook lead ads');
    console.log('  both      - Set up both platforms');
    console.log('');
    console.log('Example: node automation/google-ads-setup.js google');
    console.log('');
    console.log('💰 Goal: Generate 40+ direct leads/month');
    console.log('📞 No more HomeStars fees - customers call YOU directly!');
}