'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import styles from './page.module.css';

export default function Checkout() {
  const { items, totalPrice } = useCart();
  const shipping = 0;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Checkout</span>
        </nav>

        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.layout}>
          {/* Left - Forms */}
          <div className={styles.forms}>
            {/* Shipping Address */}
            <div className={`card ${styles.formCard}`}>
              <h3>Shipping Address</h3>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label>First Name</label>
                  <input type="text" placeholder="Sophia" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Sharma" className={styles.input} />
                </div>
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label>Address</label>
                  <input type="text" placeholder="123 Luxury Lane" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>City</label>
                  <input type="text" placeholder="Mumbai" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>Postal Code</label>
                  <input type="text" placeholder="400001" className={styles.input} />
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className={`card ${styles.formCard}`}>
              <h3>Delivery Options</h3>
              <div className={styles.radioGroup}>
                <label className={styles.radio}>
                  <input type="radio" name="delivery" defaultChecked />
                  <div className={styles.radioContent}>
                    <span className={styles.radioTitle}>Standard Delivery</span>
                    <span className={styles.radioDesc}>5-7 business days · Free</span>
                  </div>
                </label>
                <label className={styles.radio}>
                  <input type="radio" name="delivery" />
                  <div className={styles.radioContent}>
                    <span className={styles.radioTitle}>Express Delivery</span>
                    <span className={styles.radioDesc}>2-3 business days · $25</span>
                  </div>
                </label>
                <label className={styles.radio}>
                  <input type="radio" name="delivery" />
                  <div className={styles.radioContent}>
                    <span className={styles.radioTitle}>Premium White Glove</span>
                    <span className={styles.radioDesc}>Next day · $75</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className={`card ${styles.formCard}`}>
              <h3>Payment Method</h3>
              <div className={styles.radioGroup}>
                <label className={styles.radio}>
                  <input type="radio" name="payment" defaultChecked />
                  <div className={styles.radioContent}>
                    <span className={styles.radioTitle}>Credit Card</span>
                  </div>
                </label>
                <label className={styles.radio}>
                  <input type="radio" name="payment" />
                  <div className={styles.radioContent}>
                    <span className={styles.radioTitle}>PayPal</span>
                  </div>
                </label>
                <label className={styles.radio}>
                  <input type="radio" name="payment" />
                  <div className={styles.radioContent}>
                    <span className={styles.radioTitle}>Apple Pay</span>
                  </div>
                </label>
              </div>

              <div className={styles.cardFields}>
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label>Card Number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>Expiry</label>
                  <input type="text" placeholder="MM/YY" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label>CVV</label>
                  <input type="text" placeholder="123" className={styles.input} />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className={styles.summary}>
            <div className={`card ${styles.summaryCard}`}>
              <h3>Order Summary</h3>
              <div className={styles.summaryItems}>
                {items.length > 0 ? items.map(item => (
                  <div key={item.product.id} className={styles.summaryItem}>
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={56}
                      height={56}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div>
                      <p className={styles.summaryItemName}>{item.product.name}</p>
                      <p className={styles.summaryItemQty}>Qty: {item.quantity}</p>
                    </div>
                    <p className={styles.summaryItemPrice}>{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                )) : (
                  <p className={styles.emptyText}>No items in cart</p>
                )}
              </div>

              <div className={styles.summaryBreakdown}>
                <div className={styles.summaryRow}><span>Subtotal</span><span>{formatPrice(totalPrice)}</span></div>
                <div className={styles.summaryRow}><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
                <div className={styles.summaryRow}><span>Tax</span><span>{formatPrice(tax)}</span></div>
                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Link href="/order-confirmation" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
