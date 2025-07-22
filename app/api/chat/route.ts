import { NextResponse } from 'next/server';

// Smart fallback responses for when API fails
function getSmartMockResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Welcome to O'Ben Brands! 🐷 We're your trusted source for premium live pigs, fresh pork cuts, and provisions. How can I help you today?";
  }
  
  // Pricing queries
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
    return "Our pricing: Live pigs (Large White, 100kg) start at ₦150,000. Fresh pork cuts are ₦3,500/kg. We also have affordable provisions and everyday essentials. Contact us on WhatsApp +2347037983163 for current rates!";
  }
  
  // Product queries
  if (lowerMessage.includes('pig') && !lowerMessage.includes('pork')) {
    return "We offer premium live pigs including Large White breed (100kg for ₦150,000). All our pigs are ethically sourced from traceable farms. Perfect for celebrations, events, or farming!";
  }
  
  if (lowerMessage.includes('pork')) {
    return "Our fresh pork cuts are processed hygienically and sold at ₦3,500/kg. We offer various cuts including chops, belly, shoulder, and more. All meat is traceable and fresh!";
  }
  
  if (lowerMessage.includes('provision') || lowerMessage.includes('snack') || lowerMessage.includes('drink')) {
    return "Yes! Our provision store has snacks, beverages, soft drinks, biscuits, and everyday essentials. We offer real-time stock updates and seasonal discounts!";
  }
  
  // Delivery queries
  if (lowerMessage.includes('deliver') || lowerMessage.includes('location') || lowerMessage.includes('area')) {
    return "We deliver across Lagos, Ogun, and beyond! Our delivery is fast, reliable, and we ensure freshness. Contact us on WhatsApp +2347037983163 to confirm delivery to your area.";
  }
  
  // Contact queries
  if (lowerMessage.includes('contact') || lowerMessage.includes('whatsapp') || lowerMessage.includes('phone')) {
    return "You can reach us via:\n📱 WhatsApp: +2347037983163\n📧 Email: info@obenbrands.com or beniphemeh11@yahoo.com\nWe're here to help with orders, questions, and support!";
  }
  
  // Order queries
  if (lowerMessage.includes('order') || lowerMessage.includes('buy') || lowerMessage.includes('purchase')) {
    return "Ready to order? You can:\n1️⃣ Browse our products on this website\n2️⃣ Contact us via WhatsApp +2347037983163\n3️⃣ Call us directly\nWe make ordering fresh, quality products simple and convenient!";
  }
  
  // Quality/safety queries
  if (lowerMessage.includes('quality') || lowerMessage.includes('safe') || lowerMessage.includes('clean') || lowerMessage.includes('hygien')) {
    return "Quality is our priority! We ensure:\n✅ Ethical sourcing from traceable farms\n✅ Safe & hygienic processing\n✅ Fresh delivery\n✅ Clean handling practices\nTrusted by families across Lagos and beyond!";
  }
  
  // Default helpful response
  const defaultResponses = [
    "I'm here to help with information about O'Ben Brands! We specialize in premium pigs, fresh pork, and provisions. What would you like to know?",
    "Great question! O'Ben Brands offers live pigs, pork cuts, and everyday provisions. We serve Lagos, Ogun, and beyond. How can I assist you?",
    "Thanks for your interest in O'Ben Brands! We're your trusted partner for quality pigs, pork, and provisions. What specific information do you need?",
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export async function POST(req: Request) {
  console.log('🔥 API route called!'); 
  
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
      console.log('⚠️ No Gemini API key, using smart fallback');
      const fallbackReply = getSmartMockResponse(message);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      return NextResponse.json({ reply: fallbackReply });
    }

    console.log('🚀 Sending request to Gemini...'); 

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
                text: `You are a helpful AI assistant for O'Ben Brands, a Nigerian company that sells pigs, pork, and provisions.

IMPORTANT BUSINESS INFORMATION:
- We sell live pigs (Large White breed, 100kg = ₦150,000)
- Fresh pork cuts at ₦3,500/kg
- Provisions store with snacks, beverages, soft drinks, biscuits, everyday essentials
- We serve Lagos, Ogun, and surrounding areas
- Contact: +2347037983163 (WhatsApp)
- Emails: info@obenbrands.com, beniphemeh11@yahoo.com
- We offer fast delivery and ethical sourcing
- Safe & hygienic processing practices
- Traceable farms and clean handling

INSTRUCTIONS:
- Be friendly, helpful, and professional
- Focus on our products and services
- Keep responses under 100 words
- If you don't know specific details, suggest they contact us via WhatsApp
- Always provide accurate pricing information
- Emphasize quality, freshness, and reliability

CUSTOMER MESSAGE: ${message}

Respond helpfully as O'Ben Brands' AI assistant:`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 200,
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
        
        // Specific Gemini error handling
        if (geminiRes.status === 400) {
          console.log('⚠️ Gemini bad request, using fallback');
        } else if (geminiRes.status === 403) {
          console.log('⚠️ Gemini API key issue, using fallback');
        } else if (geminiRes.status === 429) {
          console.log('⚠️ Gemini rate limit, using fallback');
        } else {
          console.log('⚠️ Gemini API failed, using fallback');
        }
        
        // Fall back to smart mock response
        const fallbackReply = getSmartMockResponse(message);
        return NextResponse.json({ reply: fallbackReply });
      }

      const data = await geminiRes.json();
      console.log('✅ Gemini response received successfully');

      // Extract reply from Gemini's response structure
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                   'I apologize, but I couldn\'t generate a response. Please contact us via WhatsApp at +2347037983163.';
      
      return NextResponse.json({ reply });

    } catch (geminiError) {
      console.error('💥 Gemini API error:', geminiError);
      console.log('⚠️ Falling back to smart mock response');
      
      // Fall back to smart mock response
      const fallbackReply = getSmartMockResponse(message);
      return NextResponse.json({ reply: fallbackReply });
    }

  } catch (error) {
    console.error('💥 General error:', error);
    return NextResponse.json(
      { 
        error: 'Sorry, there was an error processing your request. Please contact us via WhatsApp at +2347037983163.' 
      }, 
      { status: 500 }
    );
  }
}

// Test endpoint
export async function GET() {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  return NextResponse.json({ 
    message: 'O\'Ben Brands Chat API is working! 🐷',
    timestamp: new Date().toISOString(),
    mode: geminiApiKey ? 'Gemini AI with Smart Fallback' : 'Smart Mock Mode',
    apiKeyConfigured: !!geminiApiKey
  });
}