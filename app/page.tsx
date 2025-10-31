import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import PricingSection from "@/components/pricing-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import BookingForm from "@/components/booking-form"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <BookingForm />
      <ContactSection />
      <Footer />
    </main>
  )
}
