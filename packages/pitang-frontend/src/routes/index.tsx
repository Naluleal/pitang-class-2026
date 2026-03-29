import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '../components/hero-section'
import { ProductsSection } from '../components/products-section'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
    </>
  )
}