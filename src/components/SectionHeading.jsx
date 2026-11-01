
export default function SectionHeading({ label, title, text }) {
  return (
    <div className="page-heading mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <div aria-hidden="true" className="mx-auto mb-5 h-8 w-px bg-gradient-to-b from-transparent to-gold/60" />
      <p className="section-label mb-4">{label}</p>
      <h2 className="section-title">{title}</h2>
      {text && (
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/65 md:text-base">{text}</p>
      )}
    </div>
  )
}
