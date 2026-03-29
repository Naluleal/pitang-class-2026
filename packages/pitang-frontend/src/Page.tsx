import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { ProductsSection } from "./components/products-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  )
}
