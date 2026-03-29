import { Link } from "@tanstack/react-router"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="flex items-center">
            <span className="text-lg font-semibold tracking-tight text-black">
              Pitang<span className="text-gray-500">.commerce</span>
            </span>
          </Link>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/"
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              Terms
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              Privacy
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pitang.commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}