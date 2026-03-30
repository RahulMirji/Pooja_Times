import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Profile() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <div className={styles.avatar}>SS</div>
              <div>
                <p className={styles.sidebarName}>Sophia Sharma</p>
                <p className={styles.sidebarEmail}>sophia@example.com</p>
              </div>
            </div>
            <nav className={styles.sidebarNav}>
              <Link href="/profile" className={styles.navActive}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                Overview
              </Link>
              <Link href="/orders/1" className={styles.navItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
                Order History
              </Link>
              <Link href="/profile" className={styles.navItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                Wishlist
              </Link>
              <Link href="/profile" className={styles.navItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Addresses
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.main}>
            <h1>Hello, Sophia Sharma</h1>
            <p className={styles.subtitle}>Welcome back to your dashboard.</p>

            <div className={styles.dashboardGrid}>
              {/* Recent Order */}
              <div className={`card ${styles.dashCard}`}>
                <div className={styles.dashHeader}>
                  <h3>Recent Order</h3>
                  <Link href="/orders/1" className={styles.viewLink}>View All</Link>
                </div>
                <div className={styles.orderCard}>
                  <div className={styles.orderTop}>
                    <div>
                      <p className={styles.orderId}>Order #PT-20260328</p>
                      <p className={styles.orderDate}>March 28, 2026</p>
                    </div>
                    <span className={styles.statusBadge}>Shipped</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '60%' }} />
                  </div>
                  <div className={styles.orderItem}>
                    <Image src="/watch1.png" alt="Watch" width={48} height={48} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                    <div>
                      <p className={styles.orderItemName}>Royal Chronograph</p>
                      <p className={styles.orderItemBrand}>Rolex</p>
                    </div>
                    <p className={styles.orderItemPrice}>$42,500</p>
                  </div>
                </div>
              </div>

              {/* Wishlist Preview */}
              <div className={`card ${styles.dashCard}`}>
                <div className={styles.dashHeader}>
                  <h3>Wishlist</h3>
                  <Link href="/profile" className={styles.viewLink}>View All</Link>
                </div>
                <div className={styles.wishlistGrid}>
                  {['/watch2.png', '/watch3.png', '/watch4.png'].map((img, i) => (
                    <div key={i} className={styles.wishlistItem}>
                      <Image src={img} alt="Watch" width={100} height={100} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px' }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Details */}
              <div className={`card ${styles.dashCard} ${styles.fullWidth}`}>
                <div className={styles.dashHeader}>
                  <h3>Profile Details</h3>
                  <button className={styles.viewLink}>Edit</button>
                </div>
                <div className={styles.profileDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Full Name</span>
                    <span>Sophia Sharma</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Email</span>
                    <span>sophia@example.com</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Phone</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Address</span>
                    <span>123 Luxury Lane, Mumbai 400001</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
