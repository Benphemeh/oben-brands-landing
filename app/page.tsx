"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Users,
  Shield,
  Leaf,
  Heart,
  Bot,
  Menu,
} from "lucide-react";
import ChatInterface from "@/components/chat/chatInterface";
import FloatingChatButton from "@/components/chat/floatingChatButton";

export default function HomePage() {
  const [showChat, setShowChat] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2347037983163', '_blank');
  };

  const handleShopNowClick = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header - Full Width with Edge-to-Edge Layout */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="w-full px-4 lg:px-6 xl:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
                <Image
                  src="/oben-logo.png"
                  alt="O'Ben Brands Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-green-700">
                  O'Ben Brands
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="#products"
                  className="text-sm font-medium hover:text-green-600 transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className="text-sm font-medium hover:text-green-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:text-green-600 transition-colors"
                >
                  Contact
                </Link>
                <button
                  onClick={handleChatToggle}
                  className="text-sm font-medium hover:text-green-600 transition-colors flex items-center space-x-1 bg-green-50 hover:bg-green-100 px-3 py-2 rounded-md border border-green-200"
                >
                  <Bot className="w-4 h-4" />
                  <span>AI Assistant</span>
                  {showChat && (
                    <span className="text-xs bg-green-600 text-white px-1 rounded">
                      ON
                    </span>
                  )}
                </button>
              </nav>

              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleShopNowClick}
                >
                  Shop Now
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={handleChatToggle}
                  className="text-green-600 hover:text-green-700 p-2 rounded-md border border-green-200"
                >
                  <Bot className="w-5 h-5" />
                  {showChat && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"></span>
                  )}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-600 hover:text-gray-700"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-4 py-4 space-y-3 max-w-7xl mx-auto">
                <Link
                  href="#products"
                  className="block text-sm font-medium text-gray-600 hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className="block text-sm font-medium text-gray-600 hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block text-sm font-medium text-gray-600 hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 flex-1"
                    onClick={handleShopNowClick}
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-green-50 to-green-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                      Your Trusted Source for Pigs, Pork & Provisions
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                      Farm-fresh. Traceable. Delivered to your door. Quality
                      pork and everyday essentials from ethical farming
                      practices.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={handleShopNowClick}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Shop Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Browse Products
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/StockCake-Pigs in Field_1748603740.jpg"
                    width="600"
                    height="400"
                    alt="Fresh pork and provisions"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section
            id="products"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">
                  What We Offer
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From premium live pigs to fresh pork cuts and everyday provisions, we bring quality from farm to your table.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl">🐷</div>
                      <h3 className="text-2xl font-bold text-green-700">
                        Onimuelede Pigs & Pork
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Premium live pigs - Large White, Duroc, Hampshire & more in sizes </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Fresh pork cuts - Sold per Kilogram (chops, belly, ribs & more)</span>
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
                      <h3 className="text-2xl font-bold text-green-700">
                        O'Ben Provision Stores
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Quality foodstuff & groceries</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Snacks, biscuits & beverages</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Real-time stock updates & seasonal discounts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Everyday essentials at competitive prices</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple steps to get fresh pork and provisions delivered to your door
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <ShoppingCart className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">1. Browse & Order</h3>
                  <p className="text-gray-600">
                    Browse our products online, via WhatsApp, or visit our locations
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <Package className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">2. Quality Processing</h3>
                  <p className="text-gray-600">
                    Fresh processing with temperature-controlled packaging
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <Truck className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">3. Fast Delivery</h3>
                  <p className="text-gray-600">
                    Same-day delivery for orders before 12pm across Lagos & Ogun
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">
                  Featured Products
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Premium quality products at competitive prices
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/IMG_8980.JPG?height=200&width=300"
                    width="300"
                    height="200"
                    alt="Premium Live Pig"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Premium Live Pig</h3>
                      <Badge variant="destructive">Popular</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Large White breed, 100kg - Health certified
                    </p>
                    <p className="font-bold text-green-600 text-lg">₦150,000</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/Pork-Chops-2.webp?height=200&width=300"
                    width="300"
                    height="200"
                    alt="Fresh Pork Cuts"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Fresh Pork Cuts</h3>
                      <Badge>Best Value</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Chops, belly, shoulder, ribs - Vacuum sealed
                    </p>
                    <p className="font-bold text-green-600 text-lg">₦5,000/kg</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src="/provisions.png?height=200&width=300"
                    width="300"
                    height="200"
                    alt="Weekend Kitchen Pack"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Weekend Kitchen Pack</h3>
                      <Badge variant="secondary">Combo Deal</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Pork cuts + essential provisions bundle
                    </p>
                    <p className="font-bold text-green-600 text-lg">₦25,000</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">
                  What Our Customers Say
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      "The pork was incredibly fresh and the delivery was super fast! Quality you can trust."
                    </p>
                    <p className="font-semibold">— Kemi A., Lagos</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      "Ordered pork cuts in the morning, got delivery within hours. The WhatsApp ordering is so convenient!"
                    </p>
                    <p className="font-semibold">— Tope O., Abeokuta</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      "Best quality provisions and excellent customer service. The AI assistant is very helpful too!"
                    </p>
                    <p className="font-semibold">— Adebayo M., Lagos</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose O'Ben */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800">
                  Why Choose O'Ben Brands?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From farm to table - we ensure quality every step of the way
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <span>Fresh & traceable from certified farms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-green-600" />
                  <span>Same-day delivery across Lagos & Ogun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span>Safe & hygienic processing standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-green-600" />
                  <span>Affordable pricing with quality guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <span>Supporting local farmers & communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span>24/7 WhatsApp support & AI assistance</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Experience Fresh Quality?
                </h2>
                <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get premium pork and provisions delivered fresh to your door. New customers save up to 25% on first order!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order on WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-green-600 border-white hover:bg-white"
                    onClick={handleShopNowClick}
                  >
                    Browse Products
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Support */}
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div id="about">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800 mb-6">
                    About O'Ben Brands
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We are more than just a marketplace — we're your trusted
                    partner for premium pigs, fresh pork, and daily provisions.
                    With a passion for quality and a heart for community, we
                    connect local farms to your table through ethical sourcing,
                    clean processing, and fast delivery.
                  </p>
                  <p className="text-green-700 font-semibold text-lg">
                    "Trusted by families, loved by cooks."
                  </p>
                  <div className="mt-6">
                    <h3 className="font-semibold text-green-700 mb-2">Service Areas:</h3>
                    <p className="text-gray-600">Lagos State, Ogun State & surrounding areas</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800 mb-6">
                    Contact & Locations
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span>+2347037983163 (24/7 Support)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <span>info@obenbrands.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      <Button
                        variant="link"
                        className="p-0 h-auto text-green-600 hover:text-green-700"
                        onClick={handleWhatsAppClick}
                      >
                        WhatsApp Support
                      </Button>
                    </div>
                    <div className="mt-6 space-y-3">
                      <h3 className="font-semibold text-green-700">Physical Locations:</h3>
                      <div className="text-gray-600 space-y-2">
                        <p><strong>Lagos:</strong> 1 Obadiah Street, Akoka Road Lagos</p>
                        <p><strong>Abeokuta:</strong> Plot 3, Boundary Estate Shoyooye Abeokuta</p>
                        <p><strong>Hours:</strong> Monday-Saturday, 9am-5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
          <div className="container mx-auto flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/oben-logo.png"
                alt="O'Ben Brands Logo"
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} O'Ben Brands. All rights reserved.
              </p>
            </div>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                href="#products"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Products
              </Link>
              <Link
                href="#about"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>

      {/* Chat Interface */}
      <ChatInterface 
        isOpen={showChat} 
        onClose={() => setShowChat(false)} 
      />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Floating AI Assistant Button (Mobile) */}
      <div className="md:hidden">
        <FloatingChatButton 
          onClick={handleChatToggle} 
          isActive={showChat} 
        />
      </div>
    </>
  );
}