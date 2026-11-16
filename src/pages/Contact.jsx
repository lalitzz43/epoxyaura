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
      <a
        href="https://wa.me/919267939233"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp at +91 92679 39233 (opens in a new tab)"
        title="WhatsApp: +91 92679 39233"
        className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#128c4a] text-white shadow-xl transition-colors hover:bg-[#0d703b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128c4a] md:right-8 md:h-16 md:w-16"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
          <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.97L.02 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01C18.64 23.83 24 18.48 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.06 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.45-9.9 9.91-9.9a9.83 9.83 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.87-9.93 9.87Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </section>
  )
}
