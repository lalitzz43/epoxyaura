export const BRAND_EMAIL = 'hello@example.com'
// Launch se pehle upar apna real business email lagana.

export const images = {
  hero: '/images/bannerone.jpeg',
  forest: null,
}

export const products = [
  {
    id: 1,
    name: 'Forest River',
    category: 'Nature',
    colors: 'Wood · Green · Blue',
    price: 10000,
    image: '/images/photoone.jpeg',
    description:
      'Natural wood tones and flowing river-inspired colours bring a peaceful character to your favourite corner.',
    isNew: false,
  },
  {
    id: 3,
    name: 'Golden Fusion - Epoxy Table',
    contentKey: 'Golden Fusion',
    category: 'Luxury',
    colors: 'Multicolor - Gold',
    price: 10000,
    image: '/images/photoeight.jpeg',
    description:
      'A dramatic combination of dark tones and golden details, created for warm and expressive interiors.',
    isNew: true,
  },
  {
    id: 4,
    name: 'Royal Blossom',
    category: 'Floral',
    colors: 'Resin - Real Dried Flowers',
    price: 10000,
    image: '/images/photosix.jpeg',
    description:
      'A floral-inspired statement piece celebrating delicate details and the beauty of nature.',
    isNew: false,
  },
  {
    id: 5,
    name: 'Galaxy Flow – Epoxy Table',
    contentKey: 'Galaxy Flow',
    headingCase: 'normal',
    category: 'Abstract',
    colors: 'Blue · Teal · Multicolour',
    price: 7000,
    image: '/images/Galaxy Flow Table.jpeg',
    description:
      'Deep blues and swirling multicolour patterns bring a galaxy-inspired touch to your space.',
    isNew: true,
  },
  {
    id: 6,
    name: 'Lava Flow – Epoxy Table',
    contentKey: 'Lava Flow',
    headingCase: 'normal',
    category: 'Abstract',
    colors: 'Red · Orange · White',
    price: 7000,
    image: '/images/Lava Flow Table.jpeg',
    description:
      'Flowing reds, warm orange tones and soft white layers create a vibrant statement for your home.',
    isNew: true,
  },
  {
    id: 7,
    name: 'Golden Ocean',
    category: 'Ocean',
    colors: 'Blue · Black · White · Gold',
    price: 9000,
    image: '/images/GOLDER-OCEAN.jpeg',
    description:
      'Ocean-inspired waves in blue, black, white and gold bring artistic elegance and a luxurious touch to your space.',
    isNew: true,
  },
]

export const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['collection', 'Collection'],
  ['new-arrivals', 'New Arrivals'],
  ['contact', 'Contact Us'],
]

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

