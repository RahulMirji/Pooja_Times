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
