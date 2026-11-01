import { Link } from 'react-router'
import { images } from '../data/siteData'

export default function AboutSection({ full = false }) {
  return (
    <section className="grid bg-paper lg:grid-cols-2">
      <div className="relative min-h-80 overflow-hidden bg-paper" style={{ backgroundImage: "linear-gradient(0deg, #10251ee6, #10251e10), url('/images/photoone.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {images.forest && <img
          src={images.forest}
          alt="Sunlight passing through a green forest"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />}
        <p className="absolute bottom-10 left-8 font-display text-4xl italic text-[#edd7a3] md:left-14 md:text-5xl">
          Inspired by nature.
          <br />
          Crafted with love.
        </p>
      </div>

      <div className="flex flex-col justify-center px-7 py-14 md:px-14 lg:py-20">
        <p className="section-label mb-4">About EPOXYAURA</p>
        <h2 className="section-title">
          More Than Just Tables.
          <br />
          It’s a Feeling.
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-ink/70">
          At EPOXYAURA, we create resin art and furniture inspired by
          nature’s colours, textures and flowing forms. Each design
          brings a little warmth and individuality into your space.
        </p>

        {full ? (
          <>
            <p className="mt-4 max-w-lg text-sm leading-7 text-ink/70">
              Our vision brings together thoughtful design, natural
              wood and expressive resin details. From a quiet reading
              corner to a statement living room, we believe beautiful
              objects should feel personal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Thoughtful design', 'Nature inspired', 'Made with care'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gold/30 px-4 py-2 text-xs text-gold"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </>
        ) : (
          <Link to="/about" className="button-gold mt-6 self-start">
            Our Story <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  )
}
