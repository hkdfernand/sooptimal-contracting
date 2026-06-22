// Google Verification Troubleshooting & Facebook Setup
import { chromium } from 'playwright';

const BUSINESS_INFO = {
  name: 'SoOptimal Contracting',
  phone: '(437) 830-4202',
  email: 'fernandconstructions@sooptimal.com',
  website: 'https://sooptimal.com',
  serviceAreas: 'Kitchener, Waterloo, Cambridge, Guelph',
  description: `Professional drywall installation, repair, and finishing services with 10+ years experience. Serving residential and commercial clients across Kitchener-Waterloo region.

✓ Clean, paint-ready finishes
✓ Reliable scheduling  
✓ Free estimates
✓ Residential & commercial projects

Call (437) 830-4202 for your free quote!`
};

async function troubleshootGoogleVerification() {
  console.log('🔍 Google Business Profile Verification Troubleshooting');
  console.log('');
  console.log('📞 VERIFICATION OPTIONS TO TRY:');
  console.log('');
  console.log('1. PHONE VERIFICATION:');
  console.log('   - Go to: https://business.google.com/');
  console.log('   - Click "Request new verification"');
  console.log('   - Choose "Phone call" if available');
  console.log('   - Verify phone: (437) 830-4202');
  console.log('');
  console.log('2. POSTCARD VERIFICATION:');
  console.log('   - If phone fails, request postcard');
  console.log('   - Takes 5-7 business days');
  console.log('   - Enters verification code from postcard');
  console.log('');
  console.log('3. EMAIL CHECK:');
  console.log('   - Check all folders: Inbox, Spam, Promotions');
  console.log('   - Search for: "Google" "verification" "business"');
  console.log('   - Email: fernandconstructions@sooptimal.com');
  console.log('');
  console.log('4. BUSINESS ADDRESS ISSUE:');
  console.log('   - Make sure you entered a specific street address');
  console.log('   - Avoid PO boxes or virtual addresses');
  console.log('   - Use your actual work/home address');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://business.google.com/');
  
  console.log('✅ Opening Google Business Profile for manual troubleshooting...');
  console.log('⏰ Browser will stay open for 10 minutes');
  
  await page.waitForTimeout(600000); // 10 minutes
  await browser.close();
}

async function setupFacebookBusiness() {
  console.log('📘 Setting Up Facebook Business Page (No Verification Needed!)');
  console.log('');
  console.log('📋 YOUR PAGE INFORMATION:');
  console.log(`Page Name: ${BUSINESS_INFO.name}`);
  console.log(`Category: Construction Company`);
  console.log(`Phone: ${BUSINESS_INFO.phone}`);
  console.log(`Website: ${BUSINESS_INFO.website}`);
  console.log(`Service Areas: ${BUSINESS_INFO.serviceAreas}`);
  console.log('');
  console.log('📝 DESCRIPTION TO COPY/PASTE:');
  console.log(BUSINESS_INFO.description);
  console.log('');
  console.log('🎯 QUICK SETUP STEPS:');
  console.log('1. Login to Facebook');
  console.log('2. Go to business.facebook.com OR facebook.com/pages/create');
  console.log('3. Choose "Business or Brand"');
  console.log('4. Enter: SoOptimal Contracting');
  console.log('5. Choose category: Construction Company');
  console.log('6. Add phone and website');
  console.log('7. Upload cover photo (your best drywall work)');
  console.log('8. Complete About section with description above');
  console.log('9. Publish page immediately');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://business.facebook.com/');
  
  console.log('✅ Facebook Business opened');
  console.log('💡 This works immediately - no verification wait!');
  console.log('⏰ Browser will stay open for 15 minutes');
  
  await page.waitForTimeout(900000); // 15 minutes
  await browser.close();
}

// Main execution
const task = process.argv[2];

switch(task?.toLowerCase()) {
  case 'google':
    await troubleshootGoogleVerification();
    break;
  case 'facebook':
    await setupFacebookBusiness();
    break;
  case 'both':
    console.log('🚀 Running Google troubleshooting AND Facebook setup');
    await troubleshootGoogleVerification();
    console.log('');
    console.log('Moving to Facebook setup...');
    await setupFacebookBusiness();
    break;
  default:
    console.log('🤖 Verification Troubleshooting & Facebook Setup');
    console.log('');
    console.log('Usage: node automation/verification-troubleshooting.js [task]');
    console.log('');
    console.log('Options:');
    console.log('  google    - Troubleshoot Google verification');
    console.log('  facebook  - Set up Facebook Business page');
    console.log('  both      - Do both tasks');
    console.log('');
    console.log('Example: node automation/verification-troubleshooting.js both');
}