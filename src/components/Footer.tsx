'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Trust Badges */}
      <div className={styles.trustBar}>
        <div className={`container ${styles.trustInner}`}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><rect x="1" y="3" width="22" height="18" rx="2"/></svg>
            </div>
            <div className={styles.trustText}>
              <h4>Free Shipping</h4>
              <p>Free Shipping on all orders</p>
            </div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <div className={styles.trustText}>
              <h4>50+ Years of Trust</h4>
              <p>Decades of Precision &amp; Legacy</p>
            </div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div className={styles.trustText}>
              <h4>Online Support</h4>
              <p>Mon-Sat 10AM to 9PM</p>
            </div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            </div>
            <div className={styles.trustText}>
              <h4>Flexible Payment</h4>
              <p>Pay with Multiple Credit Cards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerCol}>
            <h3>Let&apos;s get in touch</h3>
            <p className={styles.footerDesc}>Sign up for our newsletter and receive 10% off your first order.</p>
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className={styles.input} />
              <button type="submit" className={styles.subscribeBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h3>Main Menu</h3>
            <div className={styles.linkList}>
              <Link href="/">Brands</Link>
              <Link href="/">Collections</Link>
              <Link href="/">Watch Finder</Link>
              <Link href="/">Special Offer</Link>
              <Link href="/">Store Locator</Link>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h3>Information</h3>
            <div className={styles.linkList}>
              <Link href="/">Corporate Sales</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Service &amp; Repair</Link>
              <Link href="/">Careers</Link>
              <Link href="/">FAQs</Link>
              <Link href="/">Our Store</Link>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h3>Legal</h3>
            <div className={styles.linkList}>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Use</Link>
              <Link href="/">Shipping Policy</Link>
              <Link href="/">Return Policy</Link>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h3>Reach Us</h3>
            <div className={styles.linkList}>
              <a href="tel:9169167676">📞 9169167676</a>
              <a href="mailto:Enquiry@poojatimes.com">✉️ Enquiry@poojatimes.com</a>
              <a href="https://wa.me/919111480111" target="_blank" rel="noopener">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyright}>
        <div className="container">
          <p>© 2026 Pooja Times. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
