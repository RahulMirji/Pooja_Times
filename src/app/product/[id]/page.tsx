import Image from 'next/image';
import Link from 'next/link';
import { getProductById, getProducts, formatPrice } from '@/data/products';
import ClientActions from './ClientActions';
import styles from './page.module.css';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);
  const products = await getProducts();

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Product Not Found</h1>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/">Watches</Link>
          <span>/</span>
          <span className={styles.current}>{product.name}</span>
        </nav>

        {/* Product Layout */}
        <div className={styles.layout}>
          {/* Image Gallery */}
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                priority
                style={{ objectFit: 'contain', width: '100%', height: '100%', background: 'transparent' }}
              />
            </div>
            {product.gallery?.length > 1 && (
              <div className={styles.thumbnails}>
                {product.gallery.map((img, i) => (
                  <div key={i} className={`${styles.thumb} ${i === 0 ? styles.thumbActive : ''}`}>
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      width={80}
                      height={80}
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className={styles.info}>
            <p className={styles.brand}>{product.brand}</p>
            <h1>{product.name}</h1>
            <p className={styles.price}>{formatPrice(product.price)}</p>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.specsSummary}>
              {product.specs.slice(0, 4).map(spec => (
                <div key={spec.label} className={styles.specItem}>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <span className={styles.specValue}>{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Use an interactive client component for adding to cart to avoid Making the whole page Client Component */}
            <ClientActions product={product} />
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <div className={styles.tabList}>
            <button className={styles.tabActive}>Detailed Specifications</button>
            <button className={styles.tab}>Shipping & Returns</button>
            <button className={styles.tab}>Reviews</button>
          </div>
          <div className={styles.tabContent}>
            <table className={styles.specsTable}>
              <tbody>
                {product.specs.map(spec => (
                  <tr key={spec.label}>
                    <td className={styles.specKey}>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        <section className={styles.related}>
          <h2>You May Also Like</h2>
          <div className={styles.relatedGrid}>
            {products.filter(p => p.id !== product.id).slice(0, 3).map(p => (
              <Link href={`/product/${p.id}`} key={p.id} className={`card ${styles.relatedCard}`}>
                <div className={styles.relatedImage}>
                  <Image src={p.image} alt={p.name} width={300} height={300} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className={styles.relatedInfo}>
                  <p className={styles.relatedBrand}>{p.brand}</p>
                  <p className={styles.relatedName}>{p.name}</p>
                  <p className={styles.relatedPrice}>{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
