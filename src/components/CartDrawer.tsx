'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={closeCart} />}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <h3>Your Cart</h3>
          <button onClick={closeCart} className={styles.closeBtn} aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map(item => (
                <div key={item.product.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemBrand}>{item.product.brand}</p>
                    <p className={styles.itemName}>{item.product.name}</p>
                    <p className={styles.itemPrice}>{formatPrice(item.product.price)}</p>
                    <div className={styles.itemActions}>
                      <div className={styles.quantity}>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className={styles.removeBtn} onClick={() => removeItem(item.product.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <span className={styles.subtotalPrice}>{formatPrice(totalPrice)}</span>
              </div>
              <Link href="/checkout" onClick={closeCart} className={styles.checkoutBtn}>
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
