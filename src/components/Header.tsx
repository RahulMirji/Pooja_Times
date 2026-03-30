'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';
import styles from './Header.module.css';

// Mega Menu Data
const MEGA_MENUS = {
  brands: [
    {
      title: 'Luxury & Premium',
      columns: 3,
      items: [
        'Rolex', 'Balmain', 'Blancpain', 'Breguet', 'Breitling',
        'Bvlgari', 'Chopard', 'Franck Muller', 'Grand Seiko', 'Hublot',
        'Longines', 'Mont Blanc', 'Movado', 'Omega', 'Rado',
        'Roamer', 'Seiko', 'SevenFriday', 'TAG Heuer', 'Tissot',
        'Tudor', 'Versace', 'Victorinox', 'Zenith'
      ]
    },
    {
      title: 'Fashion',
      columns: 3,
      items: [
        'Alba', 'Alexandre Christie', 'Anne Klein', 'Armani Exchange', 'Bering',
        'Calvin Klein', 'Casio', 'Cerruti 1881', 'Citizen', 'Daniel Wellington',
        'Diesel', 'Emporio Armani', 'Fastrack', 'Fossil', 'GC',
        'Giordano', 'Guess', 'Helix', 'Hugo Boss', 'Kenneth Cole',
        'Michael Kors', 'Police', 'Q&Q', 'Skagen', 'Swarovski',
        'Timex', 'Titan', 'Tommy Hilfiger', 'Versace', 'KWC X GUESS'
      ]
    }
  ],
  collections: [
    {
      title: 'By Gender',
      columns: 1,
      items: ["Men's Watches", "Women's Watches", 'Unisex']
    },
    {
      title: 'By Category',
      columns: 1,
      items: ['Automatic', 'Chronograph', 'Smartwatches', 'Dress Watches', 'Sports Watches']
    },
    {
      title: 'Special',
      columns: 1,
      items: ['Limited Editions', 'New Arrivals', 'Online Exclusives']
    }
  ],
  watchFinder: [
    {
      title: 'By Price',
      columns: 1,
      items: ['Under ₹5,000', '₹5,000 - ₹15,000', '₹15,000 - ₹50,000', 'Above ₹50,000']
    },
    {
      title: 'By Style',
      columns: 1,
      items: ['Classic', 'Diver', 'Aviator', 'Skeleton', 'Vintage']
    },
    {
      title: 'By Movement',
      columns: 1,
      items: ['Automatic', 'Quartz', 'Solar', 'Mechanical']
    }
  ],
  specialOffer: [
    {
      title: 'Current Deals',
      columns: 1,
      items: ['Deal of the Day', 'Clearance Sale', 'Up to 50% Off']
    },
    {
      title: 'Gifting',
      columns: 1,
      items: ['Gift Sets', 'Corporate Gifting', 'E-Gift Cards']
    }
  ],
  storeLocator: [
    {
      title: 'Our Boutiques',
      columns: 1,
      items: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai']
    },
    {
      title: 'Support',
      columns: 1,
      items: ['Authorized Service Centers', 'Book an Appointment']
    }
  ]
};

export default function Header() {
  const { totalItems, toggleCart } = useCart();

  return (
    <>
      <header className={styles.header}>
        {/* Top Contact Bar */}
        <div className={styles.topBar}>
          <div className={`container ${styles.topBarInner}`}>
            <div className={styles.contactLinks}>
              <a href="tel:9169167676" className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                9169167676
              </a>
              <a href="mailto:Enquiry@poojatimes.com" className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                Enquiry@poojatimes.com
              </a>
              <a href="https://wa.me/919111480111" className={styles.contactItem} target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                9111480111
              </a>
            </div>
            <div className={styles.topBarRight}>
              <Link href="/" className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Find a Store
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Bar */}
        <div className={styles.logoBar}>
          <div className={`container ${styles.logoBarInner}`}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoName}>Pooja Times</span>
              <span className={styles.logoTagline}>Since 2024</span>
            </Link>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className={styles.navBar}>
          <div className={`container ${styles.navInner}`}>
            <div className={styles.navLinks}>

              {/* BRANDS WITH MEGA MENU */}
              <div className={styles.navItem}>
                <div className={styles.navLink}>
                  Brands <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <div className={styles.megaMenu}>
                  <div className={`container ${styles.megaMenuInner}`}>
                    {MEGA_MENUS.brands.map((section) => (
                      <div key={section.title} className={styles.menuColumn}>
                        <h3 className={styles.menuTitle}>{section.title}</h3>
                        <div className={`${styles.menuList} ${section.columns > 1 ? styles.multiColumn : ''}`}>
                          {section.items.map((item) => (
                            <Link href="/" key={item} className={styles.menuItem}>{item}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* COLLECTIONS WITH MEGA MENU */}
              <div className={styles.navItem}>
                <div className={styles.navLink}>
                  Collections <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <div className={styles.megaMenu}>
                  <div className={`container ${styles.megaMenuInner}`}>
                    {MEGA_MENUS.collections.map((section) => (
                      <div key={section.title} className={styles.menuColumn}>
                        <h3 className={styles.menuTitle}>{section.title}</h3>
                        <div className={styles.menuList}>
                          {section.items.map((item) => (
                            <Link href="/" key={item} className={styles.menuItem}>{item}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* WATCH FINDER WITH MEGA MENU */}
              <div className={styles.navItem}>
                <div className={styles.navLink}>
                  Watch Finder <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <div className={styles.megaMenu}>
                  <div className={`container ${styles.megaMenuInner}`}>
                    {MEGA_MENUS.watchFinder.map((section) => (
                      <div key={section.title} className={styles.menuColumn}>
                        <h3 className={styles.menuTitle}>{section.title}</h3>
                        <div className={styles.menuList}>
                          {section.items.map((item) => (
                            <Link href="/" key={item} className={styles.menuItem}>{item}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SPECIAL OFFER WITH MEGA MENU */}
              <div className={styles.navItem}>
                <div className={styles.navLink}>
                  Special Offer <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </div>
                <div className={styles.megaMenu}>
                  <div className={`container ${styles.megaMenuInner}`}>
                    {MEGA_MENUS.specialOffer.map((section) => (
                      <div key={section.title} className={styles.menuColumn}>
                        <h3 className={styles.menuTitle}>{section.title}</h3>
                        <div className={styles.menuList}>
                          {section.items.map((item) => (
                            <Link href="/" key={item} className={styles.menuItem}>{item}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* STORE LOCATOR WITH MEGA MENU *Optional* */}
              <div className={styles.navItem}>
                <Link href="/" className={styles.navLink} style={{ gap: '5px', alignItems: 'center', display: 'flex' }}>
                  Store Locator <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                </Link>
                <div className={styles.megaMenu}>
                  <div className={`container ${styles.megaMenuInner}`}>
                    {MEGA_MENUS.storeLocator.map((section) => (
                      <div key={section.title} className={styles.menuColumn}>
                        <h3 className={styles.menuTitle}>{section.title}</h3>
                        <div className={styles.menuList}>
                          {section.items.map((item) => (
                            <Link href="/" key={item} className={styles.menuItem}>{item}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            <div className={styles.navActions}>
              <button className={styles.iconBtn} aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <Link href="/profile" className={styles.iconBtn} aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
              <button className={styles.iconBtn} aria-label="Wishlist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
              <button className={styles.cartBtn} onClick={toggleCart} aria-label="Cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {totalItems > 0 && (
                  <span className={styles.cartBadge}>{totalItems}</span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <CartDrawer />
    </>
  );
}
