import Link from 'next/link';
import styles from './page.module.css';

export default function OrderConfirmation() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.card}>
          {/* Success icon */}
          <div className={styles.iconWrap}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1>Order Confirmed!</h1>
          <p className={styles.subtitle}>Thank you for your purchase. Your order has been placed successfully.</p>

          <div className={styles.orderInfo}>
            <div className={styles.infoRow}>
              <span className={styles.label}>Order Number</span>
              <span className={styles.value}>#PT-20260328-001</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Date</span>
              <span className={styles.value}>March 28, 2026</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Estimated Delivery</span>
              <span className={styles.value}>April 2 – April 4, 2026</span>
            </div>
          </div>

          {/* Items */}
          <div className={styles.items}>
            <h3>Items Ordered</h3>
            <div className={styles.itemRow}>
              <div className={styles.itemDot} />
              <div>
                <p className={styles.itemName}>Royal Chronograph</p>
                <p className={styles.itemBrand}>Rolex · Qty: 1</p>
              </div>
              <p className={styles.itemPrice}>$42,500</p>
            </div>
            <div className={styles.itemRow}>
              <div className={styles.itemDot} />
              <div>
                <p className={styles.itemName}>Seamaster Diver 300M</p>
                <p className={styles.itemBrand}>Omega · Qty: 1</p>
              </div>
              <p className={styles.itemPrice}>$28,900</p>
            </div>
          </div>

          {/* Summary */}
          <div className={styles.summary}>
            <div className={styles.summaryRow}><span>Subtotal</span><span>$71,400</span></div>
            <div className={styles.summaryRow}><span>Shipping</span><span>Free</span></div>
            <div className={styles.summaryRow}><span>Tax</span><span>$5,712</span></div>
            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span>Total</span><span>$77,112</span>
            </div>
          </div>

          {/* Shipping */}
          <div className={styles.shipping}>
            <h3>Shipping To</h3>
            <p>Sophia Sharma</p>
            <p className={styles.shippingAddr}>123 Luxury Lane, Mumbai 400001, India</p>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <Link href="/orders/1" className="btn-primary">Track Your Order</Link>
            <Link href="/" className={styles.continueLink}>Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
