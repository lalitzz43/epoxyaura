export default function ResponsiveBanner({ src, alt, width, height, eager = false }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        className="hidden h-auto w-full lg:block"
      />
      <div role="img" aria-label={alt} className="lg:hidden">
        {['left', 'right'].map((side) => (
          <div key={side} className="relative overflow-hidden" style={{ aspectRatio: `${width / 2} / ${height}` }}>
            <img
              src={src}
              alt=""
              aria-hidden="true"
              width={width}
              height={height}
              loading={eager ? 'eager' : 'lazy'}
              fetchPriority={eager ? 'high' : 'auto'}
              className="absolute top-0 block h-full !w-[200%] !max-w-none"
              style={{ left: side === 'left' ? 0 : '-100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
