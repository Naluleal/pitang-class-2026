import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Pitang<span className="text-muted-foreground">.commerce</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Botão de Login: variante ghost para parecer apenas texto */}
          <Button variant="ghost" className="text-sm font-medium" asChild>
            <Link to="/login">Login</Link>
          </Button>

          {/* Botão de Sign Up: estilizado para ser preto e arredondado */}
          <Button 
            className="text-sm font-medium bg-black text-white hover:bg-black/90 rounded-full px-6" 
            asChild
          >
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}