import { ProductCard } from "./product-card"

const products = [
  {
    name: "Essence Mascara",
    price: "$19.99",
    image: "/images/mascara.png",
  },
  {
    name: "Glamour Palette",
    price: "$45.00",
    image: "/images/palette.png",
  },
  {
    name: "Hydra Serum",
    price: "$68.00",
    image: "/images/serum.png",
  },
  {
    name: "Velvet Lipstick",
    price: "$24.99",
    image: "/images/lipstick.png",
  },
]

export function ProductsSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Trending Now
          </h2>
          <p className="mt-3 text-muted-foreground">
            Recommended for you          
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
