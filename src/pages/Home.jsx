import { Link } from 'react-router'
import { images, products } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import ProductGrid from '../components/ProductGrid'
import FeatureIcon from '../components/FeatureIcon'
import ResponsiveBanner from '../components/ResponsiveBanner'

export default function Home({ onSelect }) {
  const features = [
    ['diamond', 'Premium Quality', 'High-grade resin & durable finish'],
    ['shield', 'Long Lasting Durability', 'Crafted to stay beautiful'],
    ['drop', 'Water Resistant Surface', 'Easy to clean & maintain'],
    ['sparkle', 'Unique Handmade Design', 'No two pieces are alike'],
  ]

  return (
    <>
      <section aria-label="EPOXYAURA handcrafted resin art and furniture">
        <h1 className="sr-only">EPOXYAURA ? Artistry in Every Curve.</h1>
        <Link to="/collection" className="block focus-visible:outline-2 focus-visible:outline-gold focus-visible:-outline-offset-4">
          <ResponsiveBanner
            src={images.hero}
            alt="EPOXYAURA ? Artistry in Every Curve. Handcrafted resin tables and art pieces. Explore the Forest River Table collection."
            eager
            width={2560}
            height={853}
          />
        </Link>
      </section>

      <section aria-label="Our product qualities" className="bg-[#f3efe3] py-6 md:py-7">
        <div className="container-shell grid grid-cols-2 gap-y-7 md:grid-cols-4">
          {features.map(([icon, title, text]) => (
            <div key={title} className="relative px-3 text-center before:absolute before:bottom-1 before:left-0 before:top-2 before:w-px before:bg-gold/35 before:content-[''] odd:before:hidden md:odd:before:block md:first:before:hidden">
              <FeatureIcon type={icon} />
              <h3 className="mt-2 font-display text-base font-semibold md:text-xl">{title}</h3>
              <p className="mt-1 text-[10px] text-ink/75 md:text-xs">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="signature-tables-title" className="container-shell py-7 md:py-12">
        <div className="mb-6 text-center md:mb-9">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-gold md:text-[11px]">
            Our Collection
          </p>
          <h2 id="signature-tables-title" className="font-display text-[clamp(1.65rem,6.5vw,3.5rem)] font-medium leading-tight tracking-[-0.025em] text-ink">
            Signature Resin Tables
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-5 text-ink/80 md:mt-3 md:text-sm">Explore our handcrafted resin tables, each with its own story, colours and character.</p>
        </div>
        <ProductGrid items={products} onSelect={onSelect} />
      </section>


      <section className="container-shell py-16">
        <SectionHeading
          label="Freshly Imagined"
          title="New Arrivals"
          text="Discover the latest additions to the EPOXYAURA collection."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.filter((product) => product.isNew).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelect}
            />
          ))}
        </div>
      </section>
    </>
  )
}
