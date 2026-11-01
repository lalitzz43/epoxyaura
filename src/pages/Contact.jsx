import { BRAND_EMAIL } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const subject = encodeURIComponent(
      `EPOXYAURA enquiry: ${data.get('interest')}`,
    )
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
    )

    window.location.href = `mailto:${BRAND_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="container-shell py-16">
      <SectionHeading
        label="Let's Connect"
        title="Have a Custom Idea?"
        text="Tell us about your space, your favourite colours or the piece you have in mind."
      />

      <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-forest p-8 text-cream shadow-xl md:p-10">
          <p className="section-label text-[#dfbf7f]">Made for your space</p>
          <h2 className="mt-4 font-display text-4xl">
            Let’s create something beautiful.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            For product enquiries, custom designs or gifting ideas,
            share a few details using the form.
          </p>

          <div className="mt-8 border-t border-white/20 pt-6">
            <p className="text-xs uppercase tracking-widest text-[#dfbf7f]">
              Email
            </p>
            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="mt-2 inline-block text-sm hover:text-[#dfbf7f]"
            >
              {BRAND_EMAIL}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-gold/15 bg-white/50 p-6 shadow-sm md:p-9">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Enter your name"
              className="field"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="field"
            />
          </div>

          <div>
            <label htmlFor="interest" className="mb-2 block text-sm">
              Interested In
            </label>
            <select id="interest" name="interest" className="field">
              <option>Product enquiry</option>
              <option>Custom resin table</option>
              <option>Resin art</option>
              <option>Bulk order / gifting</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us what you have in mind..."
              className="field resize-y"
            />
          </div>

          <button type="submit" className="button-gold">
            Open Email Enquiry <span aria-hidden="true">→</span>
          </button>

          <p className="text-xs leading-6 text-ink/55">
            This opens your email app with the enquiry filled in.
            Send it from there to complete your enquiry.
          </p>
        </form>
      </div>
    </section>
  )
}
