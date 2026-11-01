import { formatPrice } from '../data/siteData'
import { sunlightSuitability } from '../data/productContent'

export default function ProductCard({ product, onSelect }) {
  return (
    <article className="product-card group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white/50">
      <div className="relative overflow-hidden bg-paper">
        {product.image && <img
          src={product.image}
          alt={`${product.name} — sample interior photo`}
          loading="lazy"
          className="block h-auto w-full"
        />}

        {product.isNew && (
          <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-cream/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold shadow-sm backdrop-blur">
            New
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 text-center">
        <h3 className="font-display text-2xl">{product.name.replace(/\s*[-–]\s*Epoxy(?: Resin)? Table$|\s+Table$/i, '')}</h3>
        {product.colors && <p className="mt-1 text-xs text-ink/60">{product.colors}</p>}

        <span className="mx-auto mt-4 rounded-full border border-gold/50 px-5 py-1 text-sm">
          {formatPrice(product.price)}
        </span>

        <p className="mt-5 text-xs text-gold">
          18″ Round <span className="mx-2">|</span> 18″ Height
        </p>
        <p className="mt-2 text-xs text-ink/60">
          3-leg detachable base
        </p>

        <p className="mt-5 min-h-24 text-left text-sm leading-6 text-ink/70">
          {product.description}
        </p>

        <p className="mt-auto pt-4 text-left text-xs leading-5 text-ink/65">
          <span className="font-semibold">Sunlight Suitability:</span> {sunlightSuitability}
        </p>

        <button
          onClick={() => onSelect(product)}
          className="button-gold mx-auto mt-5"
        >
          View Details <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}
