import { useState } from 'react'
import { products } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'
import ProductGrid from '../components/ProductGrid'

export default function Collection({ newOnly = false, onSelect }) {
  const [filter, setFilter] = useState('All')

  const available = newOnly
    ? products.filter((product) => product.isNew)
    : products

  const filtered =
    filter === 'All'
      ? available
      : available.filter((product) => product.category === filter)

  const categories = [
    'All',
    ...new Set(available.map((product) => product.category)),
  ]

  return (
    <section className="container-shell min-h-[65vh] py-16">
      <SectionHeading
        label={newOnly ? 'Discover Something New' : 'The Epoxyaura Collection'}
        title={newOnly ? 'New Arrivals' : 'Art for Your Everyday'}
        text="Find a piece that feels at home in your space."
      />

      <div className="mx-auto mb-6 flex w-fit flex-wrap justify-center gap-2 rounded-3xl border border-gold/15 bg-paper/45 p-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`rounded-full border px-5 py-2 text-sm ${
              filter === category
                ? 'border-forest bg-forest text-cream shadow-sm'
                : 'border-transparent text-gold hover:bg-white/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-center gap-4 text-xs text-ink/55">
        <span>{filtered.length} {filtered.length === 1 ? 'design' : 'designs'} to discover</span>
        <span aria-hidden="true" className="h-px flex-1 bg-gold/15" />
        <span>Handcrafted with care</span>
      </div>

      <ProductGrid items={filtered} onSelect={onSelect} />
    </section>
  )
}
