interface ProductCardProps {
  name: string
  price: string
  image: string
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <span className="text-sm font-medium text-gray-900">{price}</span>
        </div>
        <button
          className="mt-1 w-full rounded-full border border-gray-300 px-4 py-2 text-xs font-medium hover:bg-black hover:text-white transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}