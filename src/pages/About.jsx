import SectionHeading from '../components/SectionHeading'
import AboutSection from '../components/AboutSection'

export default function About() {
  return (
    <>
      <div className="container-shell pt-16">
        <SectionHeading
          label="Our Story"
          title={<span className="font-bold italic">Where Resin Meets Elegance</span>}
          text="Art inspired by nature. Objects created to feel personal."
        />
      </div>

      <AboutSection full />

      <section className="container-shell py-16">
        <SectionHeading
          label="Our Craft"
          title="Beauty in Every Detail"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ['01', 'Imagine', 'A colour, a landscape or a personal idea starts the design.'],
            ['02', 'Create', 'Wood, resin and carefully considered details bring the concept to life.'],
            ['03', 'Refine', 'The finish and final details give each piece its individual character.'],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-2xl border border-gold/20 bg-white/40 p-7 transition-colors hover:bg-paper/60">
              <p className="font-display text-4xl text-gold/60">{number}</p>
              <h3 className="mt-3 font-display text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
