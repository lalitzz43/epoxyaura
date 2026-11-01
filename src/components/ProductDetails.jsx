import { useEffect } from 'react'
import { BRAND_EMAIL, formatPrice } from '../data/siteData'
import { getProductContent, sunlightSuitability } from '../data/productContent'

export default function ProductDetails({ product, onClose }) {
  const details = getProductContent(product)
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <dialog
      ref={(element) => {
        if (element && !element.open) element.showModal()
      }}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      aria-labelledby="product-title"
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-2xl border-0 bg-cream p-0 text-ink shadow-2xl backdrop:bg-black/65 md:overflow-hidden"
    >
      <div className="relative grid min-h-0 md:h-[85dvh] md:grid-cols-2">
        <button
          autoFocus
          onClick={onClose}
          aria-label="Close product details"
          className="sticky right-3 top-3 z-10 col-start-1 row-start-1 mr-3 mt-3 flex h-10 w-10 justify-self-end items-center justify-center rounded-full border border-gold/20 bg-cream text-2xl shadow md:absolute md:m-0"
        >
          ×
        </button>

        <div className="col-start-1 row-start-1 flex min-h-0 items-start justify-center bg-paper md:h-full md:items-center">
        {product.image && <img
          src={product.image}
          alt={`${product.name} — sample interior photo`}
          className="block h-auto w-full object-contain md:h-full"
        />}
        </div>

        <div className="min-h-0 min-w-0 p-6 md:overflow-y-auto md:p-8 md:pt-16">
          {product.name !== 'Royal Blossom' && <p className="section-label">{product.category} Collection</p>}
          <h2 id="product-title" className={`mt-4 font-display text-4xl ${product.headingCase === 'normal' ? '' : 'uppercase'}`}>
            {details?.title || product.name}
          </h2>
          {product.colors && <p className="mt-2 text-sm text-ink/60">{product.colors}</p>}
          <p className="mt-5 text-2xl text-gold">
            {formatPrice(product.price)}
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-ink/70">
            {(details?.paragraphs || [product.description]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="font-display text-lg italic text-gold">{details?.tagline || 'EpoxyAura – Where Resin Meets Elegance.'}</p>
          </div>
          <h3 className={`mt-7 font-display text-2xl ${product.headingCase === 'normal' ? '' : 'uppercase'}`}>{details?.specificationHeading || 'Product Specifications'}</h3>
          <dl className="mt-3 divide-y divide-gold/15 text-sm">
            {Object.entries(details?.specifications || { 'Sunlight Suitability': sunlightSuitability }).map(([label, value]) => (
              <div key={label} className="py-2.5">
                <dt className="font-semibold">{label}</dt>
                <dd className="mt-1 leading-6 text-ink/70">{value}</dd>
              </div>
            ))}
            <div className="py-2.5"><dt className="font-semibold">Price</dt><dd className="mt-1 text-gold">{formatPrice(product.price)}</dd></div>
          </dl>

          <a
            href={`mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(
              `Enquiry about ${product.name}`,
            )}`}
            className="button-gold mt-7"
          >
            Enquire About This Piece →
          </a>
        </div>
      </div>
    </dialog>
  )
}
