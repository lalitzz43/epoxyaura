import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import SectionHeading from '../components/SectionHeading'

const story = [
  'EPOXYAURA was founded in 2025 by Brijesh Gautam and Praveshika Gautam, with a shared passion for creativity, craftsmanship and distinctive design.',
  'Our journey began with a simple thought — to transform ordinary spaces into something extraordinary through the beauty of handcrafted resin art.',
  'Inspired by art, creativity, colours, textures, modern interiors, architecture and the beauty of everyday surroundings, we bring together different ideas and artistic elements to create unique epoxy resin tables and decorative art pieces that add character and sophistication to every space.',
  'At EPOXYAURA, every creation is thoughtfully designed and carefully handcrafted. From distinctive table designs to artistic decorative pieces, we believe that every creation should have its own character, charm and story.',
  'What makes us different is our love for details, our commitment to handmade craftsmanship and our vision of creating designs that are not just beautiful but meaningful.',
  "We also believe that every space deserves something special. That's why we explore unique designs and creative possibilities to bring distinctive ideas to life.",
]

export default function About() {
  const pageRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const elements = pageRef.current.querySelectorAll('[data-about-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    elements.forEach((element) => {
      element.classList.add('about-reveal-ready')
      observer.observe(element)
    })
    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('about-reveal-ready', 'about-visible'))
    }
  }, [])

  return (
    <div ref={pageRef}>
      <section className="relative isolate overflow-hidden border-b border-gold/15 bg-paper/35">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 -z-10 size-[32rem] rounded-full border border-gold/15" />
        <div className="container-shell py-12 text-center md:py-20" data-about-reveal>
          <p className="section-label">About EPOXYAURA</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.04] tracking-tight text-forest">More Than Just Tables.<br /><span className="italic text-gold">It's a Feeling.</span></h1>
          <p className="mx-auto mt-7 max-w-lg text-xs font-medium leading-6 tracking-wide text-ink/75 md:text-sm">Founded in 2025 <span aria-hidden="true" className="mx-2 text-gold">|</span> A Creative Journey by Two Founders</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Handcrafted with care', 'Distinctive by design', 'Made to mean more'].map((text) => <span key={text} className="rounded-full border border-gold/20 bg-cream px-4 py-2 text-[11px] text-gold">{text}</span>)}
          </div>
        </div>
      </section>

      <section className="container-shell grid items-start gap-10 py-12 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" aria-labelledby="about-story-title">
        <div className="lg:sticky lg:top-40" data-about-reveal>
          <div className="relative overflow-hidden rounded-3xl bg-paper">
            <img src="/images/photoone.jpeg" alt="Forest River handcrafted resin table with natural wood and blue-green resin" loading="lazy" className="aspect-[4/5] max-h-[560px] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10251ef2] to-transparent px-7 pb-8 pt-20 text-cream">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#e5c77e]">Art in the everyday</p>
              <p className="mt-3 font-display text-3xl italic">A little nature.<br />A lot of character.</p>
            </div>
          </div>
        </div>
        <div>
          <div data-about-reveal>
            <p className="section-label">Our Story</p>
            <h2 id="about-story-title" className="mt-4 font-display text-4xl leading-tight text-forest md:text-5xl">An idea, a passion,<br /><span className="italic text-gold">a beautiful beginning.</span></h2>
          </div>
          <div className="mt-7 space-y-5 text-sm leading-8 text-ink/80 md:text-base">
            {story.map((paragraph) => <p key={paragraph} data-about-reveal>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-forest py-12 text-cream md:py-16" aria-labelledby="founders-title">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div data-about-reveal>
            <p className="section-label !text-[#e5c77e]">The people behind the art</p>
            <h2 id="founders-title" className="mt-4 font-display text-4xl md:text-5xl">Our Founders</h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/80">Founded by Brijesh Gautam and Praveshika Gautam, EPOXYAURA is built on a shared vision of creativity, dedication and a passion for handmade art. Together, we aim to bring thoughtfully crafted resin creations to homes, workplaces and distinctive spaces.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-about-reveal>
            {['Brijesh Gautam', 'Praveshika Gautam'].map((name) => <div key={name} className="rounded-2xl border border-[#e5c77e]/25 bg-white/5 p-6 transition-colors hover:bg-white/10"><span aria-hidden="true" className="flex size-14 items-center justify-center rounded-full border border-[#e5c77e]/40 font-display text-2xl text-[#e5c77e]">{name.split(' ').map((part) => part[0]).join('')}</span><h3 className="mt-5 font-display text-2xl text-[#eed9a6]">{name}</h3><p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/60">Co-founder</p></div>)}
          </div>
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div data-about-reveal><SectionHeading label="Our Craft" title="Beauty in Every Detail" /></div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['01', 'Imagine', 'A colour, a landscape or a personal idea starts the design.'],
            ['02', 'Create', 'Wood, resin and carefully considered details bring the concept to life.'],
            ['03', 'Refine', 'The finish and final details give each piece its individual character.'],
          ].map(([number, title, text]) => <div key={number} data-about-reveal className="rounded-2xl border border-gold/20 bg-white/40 p-7 transition-colors hover:bg-paper/60"><p className="font-display text-4xl text-gold/65">{number}</p><h3 className="mt-4 font-display text-3xl text-forest">{title}</h3><p className="mt-3 text-sm leading-7 text-ink/75">{text}</p></div>)}
        </div>
        <div className="mt-14 border-t border-gold/20 pt-10 text-center" data-about-reveal>
          <h2 className="font-display text-3xl font-bold italic leading-tight text-gold md:text-4xl">EPOXYAURA – Where Resin Meets Elegance.</h2>
          <p className="mt-4 text-sm leading-7 text-ink/75">Every creation tells a story. Every detail reflects an art.</p>
          <Link to="/collection" className="button-gold mt-7">Discover our creations <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </section>
    </div>
  )
}