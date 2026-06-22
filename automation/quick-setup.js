// Quick Manual Setup Helper for SoOptimal Contracting
import { chromium } from 'playwright';

const BUSINESS_INFO = {
  name: 'SoOptimal Contracting',
  phone: '(437) 830-4202',
  email: 'fernandconstructions@sooptimal.com',
  website: 'https://sooptimal.com',
  description: `Professional drywall installation, repair, and finishing services across Kitchener-Waterloo, Cambridge, and Guelph. We specialize in clean, paint-ready finishes for residential and commercial projects.

Services:
• Drywall installation & repair
• Taping, mudding, and finishing  
• Commercial and multi-unit projects
• Basement renovations

10+ years experience delivering quality workmanship with reliable scheduling. Free estimates available.

Call (437) 830-4202 for your free quote today!`
};

async function openHomeStars() {
  console.log('🏠 Opening HomeStars for manual setup...');
  console.log('');
  console.log('📋 Your Business Information:');
  console.log(`Business Name: ${BUSINESS_INFO.name}`);
  console.log(`Phone: ${BUSINESS_INFO.phone}`);
  console.log(`Email: ${BUSINESS_INFO.email}`);
  console.log(`Website: ${BUSINESS_INFO.website}`);
  console.log(`Service Areas: Kitchener, Waterloo, Cambridge, Guelph`);
  console.log(`Category: Drywall Contractor`);
  console.log('');
  console.log('📝 Description to copy/paste:');
  console.log(BUSINESS_INFO.description);
  console.log('');
  console.log('🎯 Steps:');
  console.log('1. Look for "Join as a Pro" or "Get Listed" button');
  console.log('2. Fill out the signup form with the info above');
  console.log('3. Upload 3-5 of your best drywall project photos');
  console.log('4. Complete business verification');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://homestars.com/');
  
  console.log('✅ HomeStars opened in browser');
  console.log('⏰ Browser will stay open for 10 minutes...');
  
  // Wait 10 minutes for manual completion
  await page.waitForTimeout(600000);
  await browser.close();
}

async function openFacebook() {
  console.log('📘 Opening Facebook Business for page creation...');
  console.log('');
  console.log('📋 Your Page Information:');
  console.log(`Page Name: ${BUSINESS_INFO.name}`);
  console.log(`Category: Construction Company`);
  console.log(`Phone: ${BUSINESS_INFO.phone}`);
  console.log(`Website: ${BUSINESS_INFO.website}`);
  console.log('');
  console.log('📝 About Section:');
  console.log(BUSINESS_INFO.description);
  console.log('');
  console.log('🎯 Steps:');
  console.log('1. Login to Facebook');
  console.log('2. Go to business.facebook.com or click "Create" > "Page"');
  console.log('3. Choose "Business" and fill in the details above');
  console.log('4. Add cover photo and profile picture');
  console.log('5. Complete business information');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://business.facebook.com/');
  
  console.log('✅ Facebook Business opened');
  console.log('⏰ Browser will stay open for 10 minutes...');
  
  await page.waitForTimeout(600000);
  await browser.close();
}

async function openYellowPages() {
  console.log('📞 Opening Yellow Pages Canada...');
  console.log('');
  console.log('📋 Your Listing Information:');
  console.log(`Business Name: ${BUSINESS_INFO.name}`);
  console.log(`Category: Drywall Contractors`);
  console.log(`Phone: ${BUSINESS_INFO.phone}`);
  console.log(`Website: ${BUSINESS_INFO.website}`);
  console.log(`Service Areas: Kitchener, Waterloo, Cambridge, Guelph, Ontario`);
  console.log('');
  console.log('📝 Description:');
  console.log(BUSINESS_INFO.description);
  console.log('');
  console.log('🎯 Steps:');
  console.log('1. Look for "List Your Business" or "Add Business" button');
  console.log('2. Search first to make sure you\'re not already listed');
  console.log('3. Fill out business details with info above');
  console.log('4. Verify your business');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.yellowpages.ca/');
  
  console.log('✅ Yellow Pages Canada opened');
  console.log('⏰ Browser will stay open for 10 minutes...');
  
  await page.waitForTimeout(600000);
  await browser.close();
}

async function openGoogleSearchConsole() {
  console.log('🔍 Opening Google Search Console...');
  console.log('');
  console.log('📋 Setup Information:');
  console.log('Property URL: https://sooptimal.com');
  console.log('Sitemap URL: https://sooptimal.com/sitemap.xml');
  console.log('');
  console.log('🎯 Steps:');
  console.log('1. Login with your Google account (fernandconstructions@sooptimal.com)');
  console.log('2. Click "Add Property"');
  console.log('3. Choose "URL prefix" method');
  console.log('4. Enter: https://sooptimal.com');
  console.log('5. Choose "HTML tag" verification');
  console.log('6. Copy the meta tag and let me know - I\'ll add it to your website');
  console.log('7. After verification, submit sitemap: https://sooptimal.com/sitemap.xml');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://search.google.com/search-console/');
  
  console.log('✅ Google Search Console opened');
  console.log('⏰ Browser will stay open for 10 minutes...');
  
  await page.waitForTimeout(600000);
  await browser.close();
}

// Main execution
const platform = process.argv[2];

switch(platform?.toLowerCase()) {
  case 'homestars':
    await openHomeStars();
    break;
  case 'facebook':
    await openFacebook();
    break;
  case 'yellowpages':
    await openYellowPages();
    break;
  case 'searchconsole':
    await openGoogleSearchConsole();
    break;
  default:
    console.log('🤖 SoOptimal Quick Setup Helper');
    console.log('');
    console.log('Usage: node automation/quick-setup.js [platform]');
    console.log('');
    console.log('Options:');
    console.log('  homestars      - HomeStars profile setup');
    console.log('  facebook       - Facebook Business page');
    console.log('  yellowpages    - Yellow Pages Canada');
    console.log('  searchconsole  - Google Search Console');
    console.log('');
    console.log('Example: node automation/quick-setup.js homestars');
}