import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCTA.module.css';

export default function HeroCTA() {
  return (
    <section className={styles.heroCta}>
      <div className={`container ${styles.heroCtaInner}`}>
        {/* Left — Text */}
        <div className={styles.ctaContent}>
          <p className={styles.ctaLabel}>Exclusive Collection</p>
          <h1 className={styles.ctaTitle}>
            Discover Luxury<br />Timepieces
          </h1>
          <p className={styles.ctaDesc}>
            Explore our curated selection of premium watches from the world&apos;s
            finest brands — crafted for those who value precision and style.
          </p>
          <Link href="/" className={styles.ctaBtn}>
            Shop Now
          </Link>
        </div>

        {/* Right — Image */}
        <div className={styles.ctaImage}>
          <Image
            src="/model.png"
            alt="Luxury watch showcase"
            fill
            style={{ objectFit: 'contain', padding: '20px', borderRadius: '15px' }}
            sizes="45vw"
          />
        </div>
      </div>
    </section>
  );
}
