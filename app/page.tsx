import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Users,
  Shield,
  Leaf,
  Heart,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Image src="/oben-logo.png" alt="O'Ben Brands Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold text-green-700">O'Ben Brands</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#products" className="text-sm font-medium hover:text-green-600 transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Shop Now
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-green-50 to-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                    Your Trusted Source for Pigs, Pork & Provisions
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Farm-fresh. Traceable. Delivered to your door. Quality pork and everyday essentials from ethical
                    farming practices.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Shop Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Browse Products
                  </Button>
                  <Button variant="outline" size="lg" className="bg-green-500 text-white hover:bg-green-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Fresh pork and provisions"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">How It Works</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Simple steps to get fresh pork and provisions delivered to your door
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <ShoppingCart className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">1. Browse Products</h3>
                <p className="text-gray-600">Live pigs, pork, provisions, foodstuff, drinks & more</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Package className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">2. Place Your Order</h3>
                <p className="text-gray-600">Easy checkout. Choose delivery or pickup.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Truck className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">3. Get Fast Delivery</h3>
                <p className="text-gray-600">We deliver fresh and on time — always.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">What We Offer</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🐷</div>
                    <h3 className="text-2xl font-bold text-green-700">Onimuelede – Pigs & Pork</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Buy pigs by size or breed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Freshly processed pork sold per kg</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Ethically sourced from traceable farms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Safe & hygienic processing practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🛍️</div>
                    <h3 className="text-2xl font-bold text-green-700"> Provision Stores </h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Snacks and drinks (biscuits, beverages, soft drinks)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Real-time stock updates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Seasonal discounts & coupons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Everyday essentials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">Featured Products</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width="300"
                  height="200"
                  alt="Live Pig"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Premium Live Pig</h3>
                    <Badge variant="destructive">Hot</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Pure Large white, 100kg</p>
                  <p className="font-bold text-green-600">₦150,000</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width="300"
                  height="200"
                  alt="Fresh Pork"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Fresh Pork Cuts</h3>
                    <Badge>Best Value</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Premium cuts per kg</p>
                  <p className="font-bold text-green-600">₦3,500/kg</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width="300"
                  height="200"
                  alt="Weekend Kitchen Pack"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Weekend Kitchen Pack</h3>
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Pork + groceries combo</p>
                  <p className="font-bold text-green-600">₦25,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">What Our Customers Say</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">"The pork was fresh and the delivery was fast!"</p>
                  <p className="font-semibold">— Kemi, Lagos</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">"So convenient! I placed an order for pork cuts and got delivery within the hour. Excellent service."</p>
                  <p className="font-semibold">— Tope, Abeokuta</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">"Best quality provisions and excellent customer service!"</p>
                  <p className="font-semibold">— Adebayo, Lagos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose O'Ben */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">Why Choose O'Ben?</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-green-600" />
                <span>Fresh & traceable meats</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-green-600" />
                <span>Fast & reliable delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-600" />
                <span>Safe & clean processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-green-600" />
                <span>Affordable pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-green-600" />
                <span>Local farmer partnerships</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <span>WhatsApp support available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Info
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800 mb-6">
                  Delivery Info & Service Areas
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">We Deliver to:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>Lagos</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>Ogun State</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>Surrounding areas on request</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timeframe:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span>Orders placed before 12pm are delivered same-day</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span>Next-day delivery available for all others</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Pickup Option:</h3>
                <div className="space-y-2">
                  <p>
                    <strong>Lagos Location:</strong> 1, Obadiah Street Ilaje Bariga, Lagos
                  </p>
                  <p>
                    <strong>Abeokuta Location:</strong> Plot 3, Boundary Estate Shoyooye Abeokuta
                  </p>
                  <p>
                    <strong>Pickup Hours:</strong> Mon–Sat, 9am–5pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to eat fresh and live better?</h2>
              <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get quality pork and provisions at the tap of a button.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="text-green-600 border-white hover:bg-white">
                  Shop Fresh Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Get up to 50% off your first order!
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community for deals, tips, and farm updates.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Subscribe
                  </Button>
                </form>
                <Button variant="outline" className="w-full bg-green-500 text-white hover:bg-green-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join WhatsApp List
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Prefer chatting? Order easily on WhatsApp
              </h2>
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message us now on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800 mb-6">
                  Contact & Support
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>+2347037983163</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span>info@obenbrands.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span>beniphemeh11@yahoo.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <Button variant="link" className="p-0 h-auto text-green-600">
                      WhatsApp Support
                    </Button>
                  </div>
                </div>
              </div>
              <div id="about">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800 mb-6">
                  About O'Ben Brands
                </h2>
                <p className="text-gray-600 mb-4">
                   At O'Ben Brands, we’re more than just a marketplace — we’re your trusted partner for premium pigs, fresh pork, and daily provisions. 
  With a passion for quality and a heart for community, we connect local farms to your table through ethical sourcing, clean processing, 
  and fast delivery. Whether you're planning a family celebration or stocking up, we make fresh food simple, safe, 
  and accessible. We serve homes and businesses across Lagos, Ogun, and beyond with products you can trust and service you'll love.
                </p>
                <p className="text-green-700 font-semibold">Trusted by families, loved by cooks.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center space-x-2">
          <Image src="/oben-logo.png" alt="O'Ben Brands Logo" width={24} height={24} className="rounded-full" />
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} O'Ben Brands. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Home
          </Link>
          <Link href="#products" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Products
          </Link>
          <Link href="#about" className="text-xs hover:underline underline-offset-4 text-gray-600">
            About
          </Link>
          <Link href="#contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
        </nav>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
