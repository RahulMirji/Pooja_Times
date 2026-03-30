import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function OrderDetail() {
  const steps = [
    { label: 'Order Placed', date: 'Mar 28', done: true },
    { label: 'Shipped', date: 'Mar 29', done: true },
    { label: 'Out for Delivery', date: 'Apr 2', done: false },
    { label: 'Delivered', date: 'Apr 3', done: false },
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/profile">Profile</Link>
          <span>/</span>
          <span>Order #PT-20260328-001</span>
        </nav>

        <h1 className={styles.title}>Order Details</h1>
        <p className={styles.orderId}>Order #PT-20260328-001 · March 28, 2026</p>

        {/* Tracking Stepper */}
        <div className={styles.stepper}>
          {steps.map((step, i) => (
            <div key={i} className={`${styles.step} ${step.done ? styles.stepDone : ''}`}>
              <div className={styles.stepDot}>
                {step.done && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              {i < steps.length - 1 && <div className={`${styles.stepLine} ${step.done ? styles.lineDone : ''}`} />}
              <p className={styles.stepLabel}>{step.label}</p>
              <p className={styles.stepDate}>{step.date}</p>
            </div>
          ))}
        </div>

        {/* Order Items */}
        <div className={styles.section}>
          <h2>Items</h2>
          <div className={styles.itemsList}>
            {[
              { name: 'Royal Chronograph', brand: 'Rolex', price: '$42,500', img: '/watch1.png', qty: 1 },
              { name: 'Seamaster Diver 300M', brand: 'Omega', price: '$28,900', img: '/watch2.png', qty: 1 },
            ].map((item, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.itemImage}>
                  <Image src={item.img} alt={item.name} width={80} height={80} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className={styles.itemInfo}>
                  <p className={styles.itemBrand}>{item.brand}</p>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemQty}>Qty: {item.qty}</p>
                </div>
                <p className={styles.itemPrice}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Details Grid */}
        <div className={styles.detailsGrid}>
          <div className={`card ${styles.detailCard}`}>
            <h3>Delivery Address</h3>
            <p className={styles.detailName}>Sophia Sharma</p>
            <p className={styles.detailAddr}>123 Luxury Lane</p>
            <p className={styles.detailAddr}>Mumbai 400001, India</p>
            <p className={styles.detailAddr}>+91 98765 43210</p>
          </div>

          <div className={`card ${styles.detailCard}`}>
            <h3>Payment Summary</h3>
            <div className={styles.paymentRows}>
              <div className={styles.payRow}><span>Subtotal</span><span>$71,400</span></div>
              <div className={styles.payRow}><span>Shipping</span><span>Free</span></div>
              <div className={styles.payRow}><span>Tax</span><span>$5,712</span></div>
              <div className={`${styles.payRow} ${styles.payTotal}`}><span>Total</span><span>$77,112</span></div>
            </div>
            <div className={styles.payMethod}>
              <span className={styles.payLabel}>Payment Method</span>
              <span>Credit Card ending in 4242</span>
            </div>
          </div>
        </div>

        <div className={styles.footerActions}>
          <Link href="/profile" className="btn-outline">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
