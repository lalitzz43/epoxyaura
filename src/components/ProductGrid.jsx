import ProductCard from './ProductCard'

export default function ProductGrid({ items, onSelect }) {
  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
