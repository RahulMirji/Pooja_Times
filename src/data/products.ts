export interface Product {
  id: string; // We'll keep it string for routing ease
  name: string;
  price: number;
  image: string;
  brand: string;
  description: string;
  gallery: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface DummyJSONProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
  thumbnail: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number;
}

const mapDummyJSONToProduct = (item: DummyJSONProduct): Product => ({
  id: item.id.toString(),
  name: item.title,
  price: item.price,
  image: item.thumbnail || item.images[0] || '',
  brand: item.brand || 'Luxury Concept',
  description: item.description,
  gallery: item.images,
  specs: [
    { label: 'Movement', value: 'Automatic Caliber' },
    { label: 'Case Material', value: 'Stainless Steel / Gold' },
    { label: 'Weight', value: item.weight ? `${item.weight}g` : '150g' },
    { label: 'Dimensions', value: item.dimensions ? `${item.dimensions.width}x${item.dimensions.height}mm` : '42mm' },
    { label: 'Water Resistance', value: '100m' },
    { label: 'Crystal', value: 'Scratch-resistant Sapphire' },
  ],
});

export async function getProducts(): Promise<Product[]> {
  try {
    const [mensRes, womensRes] = await Promise.all([
      fetch('https://dummyjson.com/products/category/mens-watches'),
      fetch('https://dummyjson.com/products/category/womens-watches')
    ]);

    if (!mensRes.ok || !womensRes.ok) {
      throw new Error('Failed to fetch products');
    }

    const mensData = await mensRes.json();
    const womensData = await womensRes.json();
    
    const allItems: DummyJSONProduct[] = [
      ...(mensData.products || []),
      ...(womensData.products || [])
    ];

    return allItems.map(mapDummyJSONToProduct);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(p => p.id === id) || null;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
}

export const BRANDS = [
  'Rolex', 'Patek Philippe', 'Audemars Piguet', 
  'A. Lange & Söhne', 'Vacheron Constantin', 'IWC Schaffhausen',
  'Jaeger-LeCoultre', 'Cartier', 'Omega', 
  'Blancpain', 'Piaget', 'Breguet'
];

const mockedAccessories: Product[] = [
  {
    id: 'acc-1',
    name: "Classic Leather Watch Box",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1596765738870-fbfaeb90dd47?auto=format&fit=crop&q=80&w=800",
    brand: "Pooja Exclusives",
    description: "Premium leather watch box accommodating up to 6 luxury timepieces.",
    gallery: ["https://images.unsplash.com/photo-1596765738870-fbfaeb90dd47?auto=format&fit=crop&q=80&w=800"],
    specs: [{ label: 'Material', value: 'Genuine Leather' }, { label: 'Capacity', value: '6 Watches' }]
  },
  {
    id: 'acc-2',
    name: "Automatic Watch Winder",
    price: 350.00,
    image: "https://images.unsplash.com/photo-1612817288484-934c264a66e6?auto=format&fit=crop&q=80&w=800",
    brand: "Horology Gear",
    description: "Silent motor automatic dual watch winder with piano black finish.",
    gallery: ["https://images.unsplash.com/photo-1612817288484-934c264a66e6?auto=format&fit=crop&q=80&w=800"],
    specs: [{ label: 'Material', value: 'Wood & Glass' }, { label: 'Motors', value: '2 Independent' }]
  },
  {
    id: 'acc-3',
    name: "Vintage Calfskin Strap",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1508656919611-db9eb9018ca3?auto=format&fit=crop&q=80&w=800",
    brand: "Pooja Exclusives",
    description: "Hand-stitched vintage calfskin leather strap, 20mm.",
    gallery: ["https://images.unsplash.com/photo-1508656919611-db9eb9018ca3?auto=format&fit=crop&q=80&w=800"],
    specs: [{ label: 'Material', value: 'Calfskin Leather' }, { label: 'Size', value: '20mm' }]
  },
  {
    id: 'acc-4',
    name: "Travel Watch Pouch",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    brand: "Horology Gear",
    description: "Protective travel pouch crafted from soft suede.",
    gallery: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800"],
    specs: [{ label: 'Material', value: 'Suede' }, { label: 'Capacity', value: '1 Watch' }]
  }
];

export async function getProductsByCategory(id: string): Promise<Product[]> {
  try {
    if (id === 'accessories') {
      return mockedAccessories;
    }
    
    // Fallback to DummyJSON for men and women
    const endpoint = id === 'women' ? 'womens-watches' : id === 'men' ? 'mens-watches' : null;
    
    if (!endpoint) {
      return [];
    }

    const res = await fetch(`https://dummyjson.com/products/category/${endpoint}`);
    
    if (!res.ok) {
        return [];
    }

    const data = await res.json();
    const items: DummyJSONProduct[] = data.products || [];
    return items.map(mapDummyJSONToProduct);
  } catch (error) {
    console.error('Error fetching category products:', error);
    return [];
  }
}
