
export default function FeatureIcon({ type }) {
  const paths = {
    diamond: <><path d="M7 6h18l6 8-15 17L1 14Z" /><path d="M1 14h30M7 6l9 25L25 6M7 6l9 8 9-8M16 14v17" /></>,
    shield: <><path d="M16 3c4 3 8 4 12 4v11c0 7-7 11-12 14C11 29 4 25 4 18V7c4 0 8-1 12-4Z" /><path d="m18 11-6 6 6 6Z" fill="currentColor" stroke="none" /></>,
    drop: <path d="M16 3C13 8 6 15 6 21a10 10 0 0 0 20 0c0-6-7-13-10-18Z" />,
    sparkle: <g fill="currentColor" stroke="none"><path d="M15 6c1 8 3 10 9 12-6 2-8 5-9 13-2-8-4-11-10-13 6-2 8-4 10-12Z" /><path d="M26 1c.5 4 1.5 5 5 6-3.5 1-4.5 2-5 6-.7-4-1.5-5-5-6 3.5-1 4.3-2 5-6ZM5 2c.4 3 1 4 4 5-3 1-3.6 2-4 5-.5-3-1-4-4-5 3-1 3.5-2 4-5Z" /></g>,
  }

  return (
    <svg viewBox="0 0 34 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true" className="mx-auto h-9 w-9 text-gold md:h-10 md:w-10">
      {paths[type]}
    </svg>
  )
}
