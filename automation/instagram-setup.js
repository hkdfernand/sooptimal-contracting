// Instagram Business Account Setup
import { chromium } from 'playwright';

const BUSINESS_INFO = {
  name: 'SoOptimal Contracting',
  phone: '(437) 830-4202',
  email: 'fernandconstructions@sooptimal.com',
  website: 'https://sooptimal.com',
  username: '@sooptimalcontracting',
  bio: '🏗️ Professional Drywall | KW Region | 📞 (437) 830-4202',
  description: `Professional drywall contractor serving Kitchener-Waterloo region.

🔨 10+ years experience
✅ Clean, paint-ready finishes
📍 Kitchener, Waterloo, Cambridge, Guelph
📞 Call (437) 830-4202 for free quote

#Drywall #Contractor #KitchenerWaterloo #Construction #Renovation`
};

async function setupInstagramBusiness() {
  console.log('📸 Setting Up Instagram Business Account');
  console.log('');
  console.log('📋 YOUR ACCOUNT INFORMATION:');
  console.log(`Username: ${BUSINESS_INFO.username}`);
  console.log(`Phone: ${BUSINESS_INFO.phone}`);
  console.log(`Email: ${BUSINESS_INFO.email}`);
  console.log(`Website: ${BUSINESS_INFO.website}`);
  console.log('');
  console.log('📝 BIO TO COPY/PASTE:');
  console.log(BUSINESS_INFO.bio);
  console.log('');
  console.log('🎯 SETUP STEPS:');
  console.log('1. Open Instagram app or go to instagram.com');
  console.log('2. Sign up or login');
  console.log('3. Go to Settings > Account > Switch to Professional Account');
  console.log('4. Choose "Business"');
  console.log('5. Select category: "Construction Company"');
  console.log('6. Add contact info: phone, email, address');
  console.log('7. Add bio and website link');
  console.log('8. Upload profile picture (your logo or professional photo)');
  console.log('');
  console.log('📱 FIRST POSTS TO CREATE:');
  console.log('- Before/after drywall work');
  console.log('- Process videos (mudding, sanding, finishing)');
  console.log('- Completed projects with hashtags');
  console.log('- Quote: "Quality drywall work in KW region"');
  console.log('- Service area map');
  console.log('');
  console.log('🏷️ HASHTAGS TO USE:');
  console.log('#Drywall #Contractor #KitchenerWaterloo #Cambridge #Guelph');
  console.log('#Construction #Renovation #HomeImprovement #Professional');
  console.log('#QualityWork #FreeEstimate #Residential #Commercial');
  console.log('');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.instagram.com/');
  
  console.log('✅ Instagram opened');
  console.log('💡 Pro tip: Convert to business account for contact button!');
  console.log('⏰ Browser will stay open for 15 minutes');
  
  await page.waitForTimeout(900000); // 15 minutes
  await browser.close();
}

await setupInstagramBusiness();