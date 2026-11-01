export default function ResponsiveBanner({ src, alt, width, height, eager = false, className = 'block h-auto w-full' }) {
  return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        className={className}
      />
  )
}
