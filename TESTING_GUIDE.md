# 🧪 SoOptimal Contracting - Testing Guide

## Current System Status
✅ **Website Live**: https://sooptimal.com  
✅ **Basic Workflow**: Pricing calculator + webhook response  
⚠️ **Email & Sheets**: Need configuration (next step)

## 🎯 Test Scenarios to Run

### Test 1: Basic Residential Quote
**Go to**: https://sooptimal.com  
**Fill out:**
- Project Type: `Residential`
- Service Type: `Complete Service` 
- Square Footage: `1000`
- Room Count: `3`
- Name: `Test Customer`
- Email: `your-email@example.com`
- Phone: `555-123-4567`

**Expected Result:**
- Estimate: $4,037 - $5,462  
- Success message appears
- Base calculation: 1000 × $4.75 = $4,750

### Test 2: Large Commercial Project
**Fill out:**
- Project Type: `Commercial`
- Service Type: `Complete Service`
- Square Footage: `5000`
- Room Count: `20`
- Name: `Big Project Manager`
- Email: `commercial@test.com`
- Phone: `555-987-6543`

**Expected Result:**
- Estimate: $15,895 - $21,505
- 12% bulk discount applied (5000+ sq ft)
- Base: 5000 × $4.25 × 0.88 = $18,700

### Test 3: Small Repair Job
**Fill out:**
- Project Type: `Residential`
- Service Type: `Repair`
- Square Footage: `100`
- Room Count: `1`
- Name: `Small Job Client`
- Email: `repair@test.com`

**Expected Result:**
- Estimate: $297 - $405
- Minimum $350 applied
- Hourly rate calculation

### Test 4: 300-Apartment Project Test
**Fill out:**
- Project Type: `Commercial`
- Service Type: `Complete Service`
- Square Footage: `150000` (500 sq ft × 300 units)
- Room Count: `300`
- Name: `Property Developer`
- Email: `developer@bigproject.com`
- Phone: `555-BIG-DEAL`

**Expected Result:**
- Massive bulk discount (12% off)
- Room complexity surcharge (10% for 300 rooms)
- Estimate should be around $463K - $628K
- High-value lead detection

## 🔧 Direct API Testing

### Test the n8n Webhook Directly:
```bash
curl -X POST "https://hkdfernand.app.n8n.cloud/webhook/sooptimal-quote" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "API Test Customer",
    "email": "test@sooptimal.com", 
    "phone": "437-830-4202",
    "projectType": "residential",
    "serviceType": "complete",
    "sqFootage": "2000",
    "roomCount": "4",
    "address": "123 Test St, Kitchener ON",
    "projectDetails": "Testing the webhook integration"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Quote request submitted successfully!",
  "estimate": {
    "range": "$3,726 - $5,049",
    "basePrice": 4387,
    "projectType": "residential",
    "serviceType": "complete"
  }
}
```

## ✅ What to Check During Tests

### 1. Website Functionality
- [ ] Form fields populate correctly
- [ ] Calculator updates in real-time
- [ ] Price estimates appear instantly
- [ ] Form submits without errors
- [ ] Success message displays

### 2. Pricing Logic Verification
- [ ] Residential rates: $4.75/sq ft (complete)
- [ ] Commercial rates: $4.25/sq ft (complete)
- [ ] Bulk discounts: 8% (2000+ sq ft), 12% (5000+ sq ft)
- [ ] Minimums: $350 residential, $1500 commercial
- [ ] Room complexity: 10% surcharge for 5+ rooms

### 3. API Response Check
- [ ] Webhook returns JSON response
- [ ] Success field is `true`
- [ ] Estimate range is calculated correctly
- [ ] Contact info is included

## 🐛 Troubleshooting Common Issues

### Issue: "Network Error" or form won't submit
- **Check**: Internet connection
- **Check**: n8n workflow is active
- **Solution**: Refresh page and try again

### Issue: Pricing seems wrong
- **Check**: Input values (sq footage, room count)
- **Check**: Project type (residential vs commercial)
- **Calculation**: Verify manually using rates above

### Issue: No response from webhook
- **Check**: n8n cloud instance is running
- **Check**: Workflow ID: `iOqVxV9AC2zluDpI`
- **URL**: https://hkdfernand.app.n8n.cloud/webhook/sooptimal-quote

## 🎉 Success Criteria

Your system is working perfectly if:
1. ✅ All test scenarios return expected price ranges
2. ✅ Website form submits successfully
3. ✅ Webhook API responds with proper JSON
4. ✅ Large projects get bulk discounts
5. ✅ Minimum charges apply to small jobs

## 📞 Next Steps After Testing

Once basic pricing is confirmed working:
1. **Add Email Setup**: Configure Gmail SMTP for automated emails
2. **Add Google Sheets**: Create lead tracking spreadsheet
3. **Test End-to-End**: Full customer journey from quote to follow-up

---

**Run these tests now and let me know the results!**  
*This will help us verify the core functionality before adding advanced features.*