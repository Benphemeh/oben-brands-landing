import { NextResponse } from 'next/server';

// Enhanced smart fallback responses with more detailed information
function getSmartMockResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Welcome to O'Ben Brands! 🐷 We're your trusted source for premium live pigs, fresh pork cuts, and quality provisions. We serve Lagos, Ogun, and beyond with farm-fresh products delivered to your door. How can I help you today?";
  }
  
  // Pricing queries - Enhanced with more details
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
    return `📋 O'Ben Brands Pricing:
🐷 **Live Pigs:** Large White breed (100kg) - ₦150,000
🥩 **Fresh Pork:** ₦3,500/kg (various cuts available)
🛍️ **Provisions:** Snacks, beverages, biscuits, everyday essentials at competitive prices
💸 **Special Offer:** New customers get ₦500 off first order!
📱 Contact +2347037983163 (WhatsApp) for current rates and bulk discounts!`;
  }
  
  // Enhanced product queries
  if (lowerMessage.includes('pig') && !lowerMessage.includes('pork')) {
    return `🐖 Premium Live Pigs Available:
🔸 **Large White Breed** - 100kg for ₦150,000
✅ Ethically sourced from traceable farms
✅ Perfect for celebrations, events, or farming
✅ Safe & hygienic handling practices
✅ Health certificates available
📍 **Service Areas:** Lagos State, Ogun State & surrounding areas
🚚 **Delivery:** Fast & reliable with temperature control`;
  }
  
  if (lowerMessage.includes('pork')) {
    return `🥩 Fresh Pork Cuts - ₦3,500/kg:
🔸 Various cuts: chops, belly, shoulder, ribs & more
✅ Freshly processed & hygienically packaged
✅ Vacuum-sealed for freshness
✅ All meat is traceable and farm-fresh
🧊 **Packaging:** 2kg portions available, properly refrigerated
📦 **Delivery:** Same-day if ordered before 12pm, next-day otherwise`;
  }
  
  if (lowerMessage.includes('provision') || lowerMessage.includes('snack') || lowerMessage.includes('drink') || lowerMessage.includes('grocery')) {
    return `🛍️ O'Ben Provision Store:
🔸 Quality foodstuff & groceries
🔸 Snacks, biscuits & beverages
🔸 Soft drinks & everyday essentials
✅ Real-time stock updates
✅ Seasonal discounts & exclusive deals
✅ Fresh inventory regularly updated
📱 WhatsApp +2347037983163 for current stock!`;
  }
  
  // Enhanced delivery queries
  if (lowerMessage.includes('deliver') || lowerMessage.includes('location') || lowerMessage.includes('area') || lowerMessage.includes('shipping')) {
    return `🚚 Delivery Information:
📍 **Service Areas:** Lagos State, Ogun State & surrounding areas
⏰ **Same-Day Delivery:** Orders before 12pm
📅 **Next-Day Delivery:** Orders after 12pm
🧊 **Temperature Control:** Insulated packaging with ice packs
📦 **Pickup Options Available:**
   • Lagos: 1 Obadiah Street, Ilaje Bariga
   • Abeokuta: Plot 3, Boundary Estate Shoyooye
⏰ **Pickup Hours:** Mon-Sat, 9am-5pm
💰 **Delivery Fee:** Varies by location - contact for quote`;
  }
  
  // Enhanced contact queries
  if (lowerMessage.includes('contact') || lowerMessage.includes('whatsapp') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
    return `📞 Contact O'Ben Brands:
📱 **WhatsApp:** +2347037983163 (Preferred - 24/7 support)
📧 **Email:** info@obenbrands.com or beniphemeh11@yahoo.com
🌐 **Website:** https://oben-brands.vercel.app/
📱 **Social Media:** @oben_brands (Instagram)
🏢 **Locations:**
   • Lagos: 1 Obadiah Street, Ilaje Bariga
   • Abeokuta: Plot 3, Boundary Estate Shoyooye
We're here to help with orders, questions, and support!`;
  }
  
  // Enhanced order queries
  if (lowerMessage.includes('order') || lowerMessage.includes('buy') || lowerMessage.includes('purchase') || lowerMessage.includes('shop')) {
    return `🛒 How to Order from O'Ben Brands:
1️⃣ **Website:** Browse products at https://oben-brands.vercel.app/
2️⃣ **WhatsApp:** Chat & order directly +2347037983163
3️⃣ **Pickup:** Visit our Lagos or Abeokuta locations
💡 **Order Tips:**
✅ Orders before 12pm = Same-day delivery
✅ Bulk orders get special discounts
✅ New customers get ₦500 off first order
✅ Multiple payment options available`;
  }
  
  // Enhanced quality/safety queries
  if (lowerMessage.includes('quality') || lowerMessage.includes('safe') || lowerMessage.includes('clean') || lowerMessage.includes('hygien') || lowerMessage.includes('fresh')) {
    return `🌟 O'Ben Brands Quality Guarantee:
✅ **Ethical Sourcing:** From traceable, certified farms
✅ **Safe Processing:** Hygienic handling & processing
✅ **Fresh Delivery:** Temperature-controlled packaging
✅ **Clean Practices:** Vacuum-sealed, properly refrigerated
✅ **Traceability:** Complete farm-to-table tracking
✅ **Health Certificates:** Available for all livestock
🏆 **Mission:** "From farm to table" - Fresh is best!
💝 **Customer Promise:** Trusted by families, loved by cooks`;
  }
  
  // Packaging and branding queries
  if (lowerMessage.includes('package') || lowerMessage.includes('packaging') || lowerMessage.includes('wrap')) {
    return `📦 O'Ben Brands Packaging:
🔸 **Vacuum-sealed** for maximum freshness
🔸 **Food-grade materials** for safety
🔸 **Insulated delivery boxes** with ice packs
🔸 **Clear labeling:** Weight, date, storage instructions
🔸 **Eco-friendly options** available
✅ Includes thank-you card and storage tips
✅ QR codes for easy reordering
🎁 **Unboxing Experience:** Delightful & professional`;
  }
  
  // Hours and availability
  if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('time') || lowerMessage.includes('available')) {
    return `⏰ O'Ben Brands Operating Hours:
📱 **WhatsApp Support:** 24/7 availability
🏢 **Pickup Locations:**
   • Mon-Sat: 9am-5pm
   • Sunday: Contact for special arrangements
🚚 **Delivery:** 7 days a week
📦 **Orders:** Place anytime online or via WhatsApp
⚡ **Same-day delivery:** Order before 12pm
📅 **Next-day delivery:** Order after 12pm`;
  }
  
  // Payment queries
  if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('card') || lowerMessage.includes('transfer')) {
    return `💳 Payment Options:
✅ Bank Transfer
✅ Card Payments (Online)
✅ Cash on Delivery (Selected areas)
✅ WhatsApp Payment Links
💰 **Special Offers:**
🎁 ₦500 off for new customers
💸 Bulk order discounts available
📱 Contact +2347037983163 for payment assistance`;
  }
  
  // Location-specific queries
  if (lowerMessage.includes('lagos') || lowerMessage.includes('abeokuta') || lowerMessage.includes('ogun')) {
    return `📍 **O'Ben Brands Locations:**
🏢 **Lagos Office:**
   📍 1 Obadiah Street, Ilaje Bariga, Lagos
   ⏰ Mon-Sat: 9am-5pm
🏢 **Abeokuta Office:**
   📍 Plot 3, Boundary Estate Shoyooye, Abeokuta
   ⏰ Mon-Sat: 9am-5pm
🚚 **Delivery Coverage:**
   • All of Lagos State
   • All of Ogun State  
   • Surrounding areas on request
💬 Contact us to confirm delivery to your specific area!`;
  }
  
  // Default enhanced responses
  const defaultResponses = [
    "Welcome to O'Ben Brands! 🐷 We're Nigeria's trusted source for farm-fresh pigs, premium pork cuts, and quality provisions. From our traceable farms to your table, we ensure freshness and quality every step of the way. What can I help you with today?",
    
    "Hello! O'Ben Brands specializes in premium livestock, fresh pork (₦3,500/kg), and everyday provisions. We serve Lagos, Ogun, and beyond with same-day delivery for orders before 12pm. How can I assist you with your fresh food needs?",
    
    "Hi there! 🌟 At O'Ben Brands, we believe fresh is best! Whether you need live pigs (Large White ₦150,000), premium pork cuts, or quality provisions, we've got you covered with ethical sourcing and fast delivery. What brings you here today?",
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export async function POST(req: Request) {
  console.log('🔥 Enhanced API route called!'); 
  
  try {
    const body = await req.json();
    console.log('📝 Request body received:', body); 
    
    const { message } = body;

    if (!message || typeof message !== 'string') {
      console.error('❌ Invalid message:', message);
      return NextResponse.json(
        { error: 'Please provide a valid message' }, 
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;
    console.log('🔑 Gemini API Key exists:', !!geminiApiKey);

    if (!geminiApiKey) {
      console.log('⚠️ No Gemini API key, using enhanced smart fallback');
      const fallbackReply = getSmartMockResponse(message);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      return NextResponse.json({ reply: fallbackReply });
    }

    console.log('🚀 Sending request to Gemini with enhanced context...'); 

    try {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a helpful AI assistant for O'Ben Brands, Nigeria's trusted source for farm-fresh livestock, premium pork, and quality provisions.

COMPREHENSIVE BUSINESS INFORMATION:

🏢 COMPANY OVERVIEW:
- Mission: "From farm to table" - We believe fresh is best
- Slogan: "Pure. Fresh. Delivered with Care" / "Trust in Every Cut"
- Tagline: "Trusted by families, loved by cooks"
- Values: Ethical sourcing, quality assurance, community-first service

📍 LOCATIONS & CONTACT:
- Website: https://oben-brands.vercel.app/
- WhatsApp: +2347037983163 (Primary contact - 24/7 support)
- Email: info@obenbrands.com, beniphemeh11@yahoo.com
- Social Media: @oben_brands (Instagram)

🏢 Physical Locations:
- Lagos: 1 Obadiah Street, Ilaje Bariga, Lagos
- Abeokuta: Plot 3, Boundary Estate Shoyooye, Abeokuta
- Pickup Hours: Monday-Saturday, 9am-5pm

🐷 PRODUCTS & PRICING:

**ONIMUELEDE - Pigs & Pork Division:**
- Live Pigs: Large White breed, 100kg = ₦150,000
- Fresh Pork Cuts: ₦3,500/kg (various cuts: chops, belly, shoulder, ribs)
- All livestock ethically sourced from traceable, certified farms
- Health certificates available
- Safe & hygienic processing practices

**O'BEN PROVISION STORE:**
- Quality foodstuff & groceries
- Snacks, biscuits & beverages
- Soft drinks & everyday essentials
- Real-time stock updates
- Seasonal discounts & exclusive deals

🚚 DELIVERY & SERVICE AREAS:
- Service Areas: Lagos State, Ogun State, surrounding areas on request
- Same-day delivery: Orders placed before 12pm
- Next-day delivery: Orders placed after 12pm
- Temperature-controlled delivery with ice packs
- Insulated packaging for freshness

📦 PACKAGING & QUALITY:
- Vacuum-sealed for maximum freshness
- Food-grade materials for safety
- Proper labeling: weight, date, storage instructions
- Eco-friendly packaging options
- Complete farm-to-table traceability
- Thank-you cards and storage tips included

💳 PAYMENT OPTIONS:
- Bank Transfer
- Card Payments (Online)
- Cash on Delivery (selected areas)
- WhatsApp payment links
- Multiple payment gateways supported

🎁 SPECIAL OFFERS:
- New customers get ₦500 off first order
- Bulk order discounts available
- Seasonal promotions and coupons
- Loyalty rewards program

⏰ OPERATING HOURS:
- WhatsApp Support: 24/7
- Physical locations: Mon-Sat 9am-5pm
- Online ordering: Available 24/7
- Delivery: 7 days a week

🌟 QUALITY GUARANTEES:
- Ethical sourcing from traceable farms
- Safe & hygienic processing
- Fresh delivery with temperature control
- Clean handling practices
- Complete farm-to-table tracking
- Customer satisfaction guarantee

INSTRUCTIONS:
- Be friendly, helpful, and professional
- Use emojis appropriately to make responses engaging
- Keep responses comprehensive but under 150 words when possible
- Always provide specific pricing when asked
- Emphasize quality, freshness, and reliability
- Suggest WhatsApp contact for complex inquiries
- Highlight same-day delivery for orders before 12pm
- Mention new customer discount when appropriate
- Use the company slogans and values naturally
- Always provide contact information when relevant

CUSTOMER MESSAGE: ${message}

Respond helpfully as O'Ben Brands' knowledgeable AI assistant, drawing from all the detailed information above:`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 250, // Increased for more detailed responses
            },
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              }
            ]
          }),
        }
      );

      console.log('📡 Gemini response status:', geminiRes.status);

      if (!geminiRes.ok) {
        const errorText = await geminiRes.text();
        console.error('❌ Gemini API error:', geminiRes.status, errorText);
        
        console.log('⚠️ Gemini API failed, using enhanced fallback');
        const fallbackReply = getSmartMockResponse(message);
        return NextResponse.json({ reply: fallbackReply });
      }

      const data = await geminiRes.json();
      console.log('✅ Gemini response received successfully');

      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                   'I apologize, but I couldn\'t generate a response. Please contact us via WhatsApp at +2347037983163 for immediate assistance.';
      
      return NextResponse.json({ reply });

    } catch (geminiError) {
      console.error('💥 Gemini API error:', geminiError);
      console.log('⚠️ Falling back to enhanced smart mock response');
      
      const fallbackReply = getSmartMockResponse(message);
      return NextResponse.json({ reply: fallbackReply });
    }

  } catch (error) {
    console.error('💥 General error:', error);
    return NextResponse.json(
      { 
        error: 'Sorry, there was an error processing your request. Please contact us via WhatsApp at +2347037983163 for immediate assistance.' 
      }, 
      { status: 500 }
    );
  }
}