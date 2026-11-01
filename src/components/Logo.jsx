import { Link } from 'react-router'
import { useId } from 'react'

export default function Logo() {
  const filterId = useId()
  return (
    <Link to="/" className="inline-flex shrink-0 items-center">
      <svg width="0" height="0" aria-hidden="true" className="absolute pointer-events-none">
        <defs>
          <filter id={filterId} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 -12 0 10" />
            <feComposite in2="SourceAlpha" operator="in" />
          </filter>
        </defs>
      </svg>
      <img
        src="/images/finallogo.png"
        alt="EPOXYAURA — Where resin meets elegance"
        className="h-24 w-auto max-w-65 object-contain md:h-28 md:max-w-[300px]"
        style={{ filter: `url(#${filterId})` }}
      />
    </Link>
  )
}
