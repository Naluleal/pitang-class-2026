import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router" // Importação necessária

export function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Everything You Need, All in One Place.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
          From daily essentials to the latest tech. Discover millions of products with fast delivery.
        </p>
        <div className="mt-10">
          {/* Adicionado asChild para o Button e Link para a rota de login */}
          <Button
            size="lg"
            className="rounded-full bg-foreground px-8 py-6 text-base font-medium text-background hover:bg-foreground/90"
            asChild
          >
            <Link to="/login">
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}