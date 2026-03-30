import Image from 'next/image';
import Link from 'next/link';
import { getProductsByCategory, formatPrice } from '@/data/products';
import styles from './page.module.css';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.id;
  const products = await getProductsByCategory(categoryId);

  const formatTitle = (id: string) => {
    switch(id) {
      case 'men': return "Men's Watches";
      case 'women': return "Women's Watches";
      case 'accessories': return "Watch Accessories";
      default: return id.charAt(0).toUpperCase() + id.slice(1);
    }
  };

  return (
    <div className={styles.categoryPage}>
      <div className={`container ${styles.categoryInner}`}>
        <h1 className={styles.title}>{formatTitle(categoryId)}</h1>
        <p className={styles.subtitle}>Discover our curated collection for {formatTitle(categoryId).toLowerCase()}.</p>
        
        {products.length === 0 ? (
          <div className={styles.emptyState}>No products found for this category.</div>
        ) : (
          <div className={styles.productGrid}>
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={420}
                    style={{ objectFit: 'contain', width: '100%', height: '100%', padding: '16px' }}
                  />
                </div>
                <div className={styles.productInfo}>
                  <p className={styles.productBrand}>{product.brand}</p>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productPrice}>{formatPrice(product.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
