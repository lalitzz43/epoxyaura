import { Link } from 'react-router'
import { BRAND_EMAIL, navigation } from '../data/siteData'
import ResponsiveBanner from './ResponsiveBanner'

export default function Footer() {
  return (
    <>
      <ResponsiveBanner
        src="/images/footer2.jpeg"
        alt="About EPOXYAURA: More Than Just Tables. It's a Feeling. Handcrafted with love."
        width="3072"
        height="600"
      />
      <div className="relative bg-[#0b1008]">
        <div className="aspect-[4096/356] overflow-hidden">
        <img
          src="/images/aajfoot.jpeg"
          alt="Let's connect. Have a Question or a Custom Idea? We'd love to hear from you."
          className="block h-full w-full object-cover object-top"
          width="4096"
          height="815"
          loading="lazy"
        />
        </div>
        <div className="flex justify-center px-5 py-5 md:absolute md:inset-y-0 md:right-[6%] md:items-center md:p-0">
          <a
            href="https://wa.me/919267939233"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp at +91 92679 39233 (opens in a new tab)"
            className="inline-flex items-center gap-3 rounded-full border border-[#e5c77e]/60 bg-[#0b1008]/90 px-5 py-3 text-white shadow-lg transition-colors hover:bg-[#24402a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5c77e]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0 text-[#65d889]" aria-hidden="true">
              <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.97L.02 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01C18.64 23.83 24 18.48 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.06 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.45-9.9 9.91-9.9a9.83 9.83 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.87-9.93 9.87Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg>
            <span className="text-left text-sm leading-5"><span className="block font-semibold">Chat on WhatsApp</span><span className="block text-[#e5c77e]">+91 92679 39233</span></span>
          </a>
        </div>
      </div>
      <footer className="border-t border-[#b99851]/60 bg-[#0b100d] text-[#f2ead4]" style={{ backgroundImage: 'radial-gradient(ellipse at top left, #26332566, transparent 65%)' }}>
        <div className="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] lg:gap-8 lg:py-20">
          <div>
            <Link to="/" className="relative block w-full max-w-[250px] overflow-hidden">
              <img
                src="/images/footerlogo.png"
                alt="EPOXYAURA - Handcrafted Resin Art"
                className="relative -left-[8%] block h-auto !w-[116%] !max-w-none object-contain mix-blend-screen"
                loading="lazy"
              />
            </Link>
            <p className="mt-6 font-display text-2xl italic text-[#e5c77e]">Where Resin Meets Elegance.</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">Unique resin creations, thoughtfully crafted to add beauty and character to every space.</p>
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
            <a href="https://wa.me/919267939233" target="_blank" rel="noopener noreferrer" className="mt-5 block text-sm text-white/75 hover:text-[#e5c77e]">Contact us &rarr;</a>
          </div>
          <div className="lg:border-l lg:border-[#b99851]/30 lg:pl-7">
            <h2 className="font-display text-2xl text-[#e5c77e]">Made for Your Space</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">A colour, a story, a piece that feels like you. Find your next statement table.</p>
            <Link to="/collection" className="mt-6 inline-flex rounded-full border border-[#c7a45e] px-5 py-3 text-xs font-medium text-[#e5c77e] transition-colors hover:bg-[#e5c77e] hover:text-[#0b100d]">Discover the Collection &rarr;</Link>
          </div>
        </div>
        <div className="border-t border-[#b99851]/40">
          <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-white/45">
            <p>&copy; {new Date().getFullYear()} EPOXYAURA. All rights reserved.</p>
            <p className="tracking-wider text-[#c7a45e]/80">Inspired by Imagination, Crafted with Love.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
