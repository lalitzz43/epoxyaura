import { Link } from 'react-router'
import { images, products } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import ProductGrid from '../components/ProductGrid'
import AboutSection from '../components/AboutSection'
import FeatureIcon from '../components/FeatureIcon'

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
          <img
            src={images.hero}
            alt="EPOXYAURA ? Artistry in Every Curve. Handcrafted resin tables and art pieces. Explore the Forest River Table collection."
            fetchPriority="high"
            width={2560}
            height={853}
            className="block h-auto w-full"
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

      <section aria-labelledby="signature-tables-title" className="container-shell py-16 md:py-24">
        <div className="relative isolate mb-10 overflow-hidden rounded-[2rem] border border-gold/20 bg-[#f1ecdf] px-6 py-10 sm:px-10 md:mb-12 md:px-12 md:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-36 -z-10 size-[30rem] rounded-full border border-gold/15 bg-[radial-gradient(circle,rgba(190,149,73,0.15),transparent_70%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-24 -z-10 size-[23rem] rounded-full border border-gold/10" />
          <div className="mb-7 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs">Our Collection</p>
          </div>
          <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
            <h2 id="signature-tables-title" className="font-display text-[clamp(2.75rem,5.6vw,5.5rem)] leading-[0.98] tracking-[-0.035em] text-forest">
              Signature<br />
              <span className="font-normal italic text-gold">Resin Tables</span><span className="text-gold">.</span>
            </h2>
            <div className="max-w-sm lg:pb-1">
              <p className="text-sm leading-7 text-ink/70 sm:text-base">Explore expressive designs, each with its own story, colours and character.</p>
              <Link to="/collection" className="group mt-6 inline-flex items-center gap-4 border-b border-gold/40 pb-2 text-sm font-medium text-gold transition-colors hover:border-gold hover:text-forest">
                Explore the collection
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-gold/20 pt-5 text-[10px] uppercase tracking-[0.18em] text-gold sm:text-xs">
            <span>Nature inspired. Artfully crafted.</span>
            <span className="flex items-center gap-2"><span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />{String(products.length).padStart(2, '0')} signature designs</span>
          </div>
        </div>
        <ProductGrid items={products} onSelect={onSelect} />
      </section>

      <AboutSection />

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
