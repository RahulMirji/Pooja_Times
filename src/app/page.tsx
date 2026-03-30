import Image from 'next/image';
import Link from 'next/link';
import { getProducts, BRANDS, formatPrice } from '@/data/products';
import BrandLogos from '@/components/BrandLogos';
import HeroCarousel from '@/components/HeroCarousel';
import HeroCTA from '@/components/HeroCTA';
import styles from './page.module.css';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      {/* ===== HERO CAROUSEL ===== */}
      <HeroCarousel />

      {/* ===== HERO CTA ===== */}
      <HeroCTA />

      {/* ===== CATEGORY CARDS ===== */}
      <section className={styles.categories}>
        <div className={`container ${styles.categoriesInner}`}>
          <Link href="/" className={styles.categoryCard}>
            <div className={styles.categoryImage}>
              <Image
                src="/category-men.png"
                alt="Watches for Men"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.categoryInfo}>
              <h3>Watches for Men Online</h3>
              <span className={styles.categoryCount}>2902 items</span>
              <span className={styles.categoryArrow}>→</span>
            </div>
          </Link>
          <Link href="/" className={styles.categoryCard}>
            <div className={styles.categoryImage}>
              <Image
                src="/category-women.png"
                alt="Watches for Women"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.categoryInfo}>
              <h3>Watches for Women Online</h3>
              <span className={styles.categoryCount}>1843 items</span>
              <span className={styles.categoryArrow}>→</span>
            </div>
          </Link>
          <Link href="/" className={styles.categoryCard}>
            <div className={styles.categoryImage}>
              <Image
                src="/category-accessories.png"
                alt="Watch Accessories"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.categoryInfo}>
              <h3>Accessories</h3>
              <span className={styles.categoryCount}>15 items</span>
              <span className={styles.categoryArrow}>→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section className={`${styles.newArrivals} container`}>
        <h2 className={styles.sectionTitle}>New Arrivals</h2>
        <div className={styles.productGrid}>
          {products.slice(0, 8).map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
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
        {products.length > 0 && (
          <div className={styles.shopMoreWrap}>
            <Link href="/" className={styles.shopMoreBtn}>Shop more</Link>
          </div>
        )}
      </section>

      {/* ===== BRAND LOGOS ===== */}
      <BrandLogos />

      {/* ===== EDITORIAL SECTION ===== */}
      <section className={styles.editorial}>
        <div className={`container ${styles.editorialInner}`}>
          <div className={styles.editorialContent}>
            <p className={styles.editorialLabel}>CRAFTSMANSHIP</p>
            <h2 className={styles.editorialTitle}>The Art of<br />Timekeeping</h2>
            <p className={styles.editorialDesc}>
              Each timepiece in our collection tells a story of precision, heritage, and unparalleled craftsmanship. Discover the legacy behind every watch.
            </p>
            <Link href="/" className={styles.editorialBtn}>Discover</Link>
          </div>
          <div className={styles.editorialImage}>
            <Image
              src="/hero-banner.png"
              alt="The Art of Timekeeping"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
