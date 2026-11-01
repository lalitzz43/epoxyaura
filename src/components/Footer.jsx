import { Link } from 'react-router'
import { BRAND_EMAIL, navigation } from '../data/siteData'
import Logo from './Logo'
import ResponsiveBanner from './ResponsiveBanner'

export default function Footer() {
  return (
    <>
      <ResponsiveBanner
        src="/images/footer2.jpeg"
        alt="About EpoxyAura: More Than Just Tables. It's a Feeling. Handcrafted with love."
        width="3072"
        height="600"
      />
      <div className="aspect-[4096/356] overflow-hidden bg-[#0b1008]">
        <img
          src="/images/aajfoot.jpeg"
          alt="Let's connect. Have a Question or a Custom Idea? We'd love to hear from you."
          className="block h-full w-full object-cover object-top"
          width="4096"
          height="815"
          loading="lazy"
        />
      </div>
      <footer className="border-t border-[#b99851]/60 bg-[#0b100d] text-[#f2ead4]" style={{ backgroundImage: 'radial-gradient(ellipse at top left, #26332566, transparent 65%)' }}>
        <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] lg:gap-8 lg:py-20">
          <div>
            <div
              className="inline-flex"
              style={{ backgroundImage: 'radial-gradient(ellipse 65% 25% at 50% 77%, #f8f5ec 40%, #f8f5ecbb 65%, transparent 100%)' }}
            >
              <Logo />
            </div>
            <p className="mt-6 font-display text-2xl italic text-[#e5c77e]">Where Resin Meets Elegance.</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">Handcrafted resin tables inspired by nature, made to bring art and character into your everyday spaces.</p>
          </div>
          <nav aria-label="Footer navigation" className="lg:border-l lg:border-[#b99851]/30 lg:pl-7">
            <h2 className="font-display text-2xl text-[#e5c77e]">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {navigation.map(([key, label]) => <li key={key}><Link to={key === 'home' ? '/' : `/${key}`} className="transition-colors hover:text-[#e5c77e]">{label}</Link></li>)}
            </ul>
          </nav>
          <div className="lg:border-l lg:border-[#b99851]/30 lg:pl-7">
            <h2 className="font-display text-2xl text-[#e5c77e]">Get in Touch</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">For product enquiries, bulk orders or a custom creation.</p>
            <a href={`mailto:${BRAND_EMAIL}`} className="mt-4 inline-block break-all text-sm text-[#e5c77e] hover:underline">{BRAND_EMAIL}</a>
            <Link to="/contact" className="mt-5 block text-sm text-white/75 hover:text-[#e5c77e]">Contact us &rarr;</Link>
          </div>
          <div className="lg:border-l lg:border-[#b99851]/30 lg:pl-7">
            <h2 className="font-display text-2xl text-[#e5c77e]">Made for Your Space</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">A colour, a story, a piece that feels like you. Find your next statement table.</p>
            <Link to="/collection" className="mt-6 inline-flex rounded-full border border-[#c7a45e] px-5 py-3 text-xs font-medium text-[#e5c77e] transition-colors hover:bg-[#e5c77e] hover:text-[#0b100d]">Discover the Collection &rarr;</Link>
          </div>
        </div>
        <div className="border-t border-[#b99851]/40">
          <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-white/45">
            <p>&copy; {new Date().getFullYear()} EpoxyAura. All rights reserved.</p>
            <p className="tracking-wider text-[#c7a45e]/80">Inspired by nature. Crafted with love.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
