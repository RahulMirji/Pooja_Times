'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import styles from './HeroCarousel.module.css';

const HERO_SLIDES = [
  { src: '/gukesh.png', alt: 'Exclusive watch collection' },
  { src: '/Newarri.png', alt: 'New arrivals collection' },
  { src: '/off.png', alt: 'Special offers on timepieces' },
];

const INTERVAL = 4000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goToSlide((current + 1) % HERO_SLIDES.length);
  }, [current, goToSlide]);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, next]);

  return (
    <section className={styles.hero}>
      <div
        className={styles.slideTrack}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div key={slide.src} className={styles.slide}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className={styles.heroImage}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
