// SoOptimal Contracting - Business Profile Automation
import { chromium } from 'playwright';

// Business information to use across all platforms
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

Call (437) 830-4202 for your free quote today!`,
  serviceAreas: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph'],
  categories: ['Drywall Contractor', 'General Contractor', 'Construction Company'],
  hours: {
    'Monday': '7:00 AM - 6:00 PM',
    'Tuesday': '7:00 AM - 6:00 PM', 
    'Wednesday': '7:00 AM - 6:00 PM',
    'Thursday': '7:00 AM - 6:00 PM',
    'Friday': '7:00 AM - 6:00 PM',
    'Saturday': '8:00 AM - 4:00 PM',
    'Sunday': 'Closed'
  }
};

// Helper function to wait and handle common form elements
async function fillFormField(page, selector, value, options = {}) {
  try {
    await page.waitForSelector(selector, { timeout: 5000 });
    await page.fill(selector, value);
    if (options.pressTab) {
      await page.keyboard.press('Tab');
    }
    return true;
  } catch (error) {
    console.log(`Could not fill field ${selector}: ${error.message}`);
    return false;
  }
}

// HomeStars Profile Setup
async function setupHomeStars() {
  console.log('🏠 Setting up HomeStars profile...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://homestars.com/');
    
    // Look for "Join as a Pro" or similar button
    await page.click('text=Join as a Pro', { timeout: 10000 });
    
    console.log('✅ Opened HomeStars signup page');
    console.log('📝 Please manually complete the signup with this info:');
    console.log(`Business Name: ${BUSINESS_INFO.name}`);
    console.log(`Phone: ${BUSINESS_INFO.phone}`);
    console.log(`Email: ${BUSINESS_INFO.email}`);
    console.log(`Website: ${BUSINESS_INFO.website}`);
    console.log(`Service Areas: ${BUSINESS_INFO.serviceAreas.join(', ')}`);
    
    // Keep browser open for manual completion
    console.log('🖱️  Browser will stay open for manual completion...');
    await page.waitForTimeout(300000); // Wait 5 minutes
    
  } catch (error) {
    console.log(`❌ HomeStars setup error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

// Facebook Business Page Helper
async function setupFacebookBusiness() {
  console.log('📘 Setting up Facebook Business page...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://business.facebook.com/');
    
    console.log('✅ Opened Facebook Business');
    console.log('📝 Please login and create page with this info:');
    console.log(`Page Name: ${BUSINESS_INFO.name}`);
    console.log(`Category: Construction Company`);
    console.log(`Phone: ${BUSINESS_INFO.phone}`);
    console.log(`Website: ${BUSINESS_INFO.website}`);
    console.log(`Description: ${BUSINESS_INFO.description}`);
    
    // Keep browser open for manual completion
    await page.waitForTimeout(300000); // Wait 5 minutes
    
  } catch (error) {
    console.log(`❌ Facebook setup error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

// Yellow Pages Canada
async function setupYellowPages() {
  console.log('📞 Setting up Yellow Pages Canada...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.yellowpages.ca/');
    
    // Look for business listing option
    await page.click('text=List Your Business', { timeout: 10000 });
    
    console.log('✅ Opened Yellow Pages business listing');
    console.log('📝 Use this information:');
    console.log(`Business Name: ${BUSINESS_INFO.name}`);
    console.log(`Category: Drywall Contractors`);
    console.log(`Phone: ${BUSINESS_INFO.phone}`);
    console.log(`Website: ${BUSINESS_INFO.website}`);
    
    await page.waitForTimeout(300000); // Wait 5 minutes
    
  } catch (error) {
    console.log(`❌ Yellow Pages setup error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

// Google Search Console Setup Helper
async function setupGoogleSearchConsole() {
  console.log('🔍 Setting up Google Search Console...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://search.google.com/search-console/');
    
    console.log('✅ Opened Google Search Console');
    console.log('📝 Steps to complete:');
    console.log('1. Click "Add Property"');
    console.log('2. Choose "URL prefix"');
    console.log('3. Enter: https://sooptimal.com');
    console.log('4. Choose "HTML tag" verification method');
    console.log('5. Copy the meta tag and I\'ll add it to your website');
    console.log('6. Submit sitemap: https://sooptimal.com/sitemap.xml');
    
    await page.waitForTimeout(300000); // Wait 5 minutes
    
  } catch (error) {
    console.log(`❌ Google Search Console error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

// Main function to run automation
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('🤖 SoOptimal Contracting - Business Profile Automation');
    console.log('');
    console.log('Usage: node automation/business-profile-automation.js [platform]');
    console.log('');
    console.log('Available platforms:');
    console.log('  homestars     - Set up HomeStars profile');
    console.log('  facebook      - Set up Facebook Business page');  
    console.log('  yellowpages   - Set up Yellow Pages Canada');
    console.log('  searchconsole - Set up Google Search Console');
    console.log('  all           - Run all setups');
    console.log('');
    console.log('Example: node automation/business-profile-automation.js homestars');
    return;
  }
  
  const platform = args[0].toLowerCase();
  
  switch (platform) {
    case 'homestars':
      await setupHomeStars();
      break;
    case 'facebook':
      await setupFacebookBusiness();
      break;
    case 'yellowpages':
      await setupYellowPages();
      break;
    case 'searchconsole':
      await setupGoogleSearchConsole();
      break;
    case 'all':
      console.log('🚀 Running all platform setups...');
      await setupHomeStars();
      await setupFacebookBusiness();
      await setupYellowPages();
      await setupGoogleSearchConsole();
      break;
    default:
      console.log(`❌ Unknown platform: ${platform}`);
      console.log('Available: homestars, facebook, yellowpages, searchconsole, all');
  }
}

// Export business info for other scripts
export { BUSINESS_INFO, fillFormField };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}