import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ServicesSection } from "@/components/services-section"
import { FAQSection } from "@/components/faq-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <FAQSection />
      <ProductShowcaseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
