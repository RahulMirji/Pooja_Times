'use client';

import Link from 'next/link';
import styles from '../app/page.module.css';

const BRAND_LIST = [
  { name: 'Rolex', domain: 'rolex.com' },
  { name: 'Tudor', domain: 'tudorwatch.com' },
  { name: 'Omega', domain: 'omegawatches.com' },
  { name: 'Breguet', domain: 'breguet.com' },
  { name: 'Bvlgari', domain: 'bulgari.com' },
  { name: 'Franck Muller', domain: 'franckmuller.com' },
  { name: 'Blancpain', domain: 'blancpain.com' },
  { name: 'Zenith', domain: 'zenith-watches.com' },
  { name: 'Hublot', domain: 'hublot.com' },
  { name: 'Breitling', domain: 'breitling.com' },
  { name: 'Chopard', domain: 'chopard.com' },
  { name: 'Grand Seiko', domain: 'grand-seiko.com' },
  { name: 'Montblanc', domain: 'montblanc.com' },
  { name: 'TAG Heuer', domain: 'tagheuer.com' },
  { name: 'Longines', domain: 'longines.com' },
  { name: 'Rado', domain: 'rado.com' },
  { name: 'Versace', domain: 'versace.com' },
  { name: 'Tissot', domain: 'tissotwatches.com' },
  { name: 'Balmain', domain: 'balmain.com' },
  { name: 'Movado', domain: 'movado.com' },
  { name: 'Victorinox', domain: 'victorinox.com' },
  { name: 'Seiko', domain: 'seikowatches.com' },
  { name: 'Emporio Armani', domain: 'armani.com' },
  { name: 'Michael Kors', domain: 'michaelkors.com' },
  { name: 'Hugo Boss', domain: 'hugoboss.com' },
  { name: 'Swarovski', domain: 'swarovski.com' },
  { name: 'Fossil', domain: 'fossil.com' },
  { name: 'Diesel', domain: 'diesel.com' },
  { name: 'Skagen', domain: 'skagen.com' },
  { name: 'Daniel Wellington', domain: 'danielwellington.com' },
  { name: 'Casio', domain: 'casio.com' },
  { name: 'Citizen', domain: 'citizenwatch.com' },
  { name: 'Hamilton', domain: 'hamiltonwatch.com' },
  { name: 'Frederique Constant', domain: 'frederiqueconstant.com' },
  { name: 'Mido', domain: 'midowatches.com' },
  { name: 'Certina', domain: 'certina.com' },
];

export default function BrandLogos() {
  return (
    <section className={`${styles.brandsSection} container`}>
      <h2 className={styles.sectionTitle}>Brand List</h2>
      <div className={styles.brandGrid}>
        {BRAND_LIST.map((brand) => (
          <Link href="/" key={brand.name} className={styles.brandCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://logo.clearbit.com/${brand.domain}`}
              alt={brand.name}
              className={styles.brandLogo}
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <span className={styles.brandFallback}>{brand.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
