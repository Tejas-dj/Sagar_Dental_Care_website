'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Gem, Zap, Smile, Sparkles, Ruler, Crown, RefreshCcw } from 'lucide-react';
import BeforeAfter from '@/components/interactive/BeforeAfter';
import VideoBackground from '@/components/ui/VideoBackground';
import styles from './gallery.module.css';

const FILTERS = ['All', 'Implants', 'Veneers', 'Whitening', 'Orthodontics'];

interface GalleryItem {
    id: number;
    title: string;
    category: string;
    icon: React.ReactNode;
    image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
    { id: 1, title: 'Dental Implant Restoration', category: 'Implants', icon: <Anchor size={32} />, image: '/images/dental implant.png' },
    { id: 2, title: 'Porcelain Veneer Makeover', category: 'Veneers', icon: <Gem size={32} />, image: '/images/Smile Design with Veneers.jpg' },
    { id: 3, title: 'Professional Whitening', category: 'Whitening', icon: <Zap size={32} />, image: '/images/Professional Whitening.jpg' },
    { id: 4, title: 'Full Arch Implants', category: 'Implants', icon: <Smile size={32} />, image: '/images/Full Arch Implants.webp' },
    { id: 5, title: 'Smile Design with Veneers', category: 'Veneers', icon: <Sparkles size={32} />, image: '/images/Smile Design with Veneers.jpg' },
    { id: 6, title: 'Orthodontic Alignment', category: 'Orthodontics', icon: <Ruler size={32} />, image: '/images/Orthodontic Alignment .png' },
    { id: 7, title: 'Teeth Whitening Result', category: 'Whitening', icon: <RefreshCcw size={32} />, image: '/images/Teeth Whitening Result.png' },
    { id: 8, title: 'Single Implant Crown', category: 'Implants', icon: <Crown size={32} />, image: '/images/Single Implant Crown.jpg' },
    { id: 9, title: 'Clear Aligner Treatment', category: 'Orthodontics', icon: <Smile size={32} />, image: '/images/Clear Aligner Treatment.jpg' },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredItems =
        activeFilter === 'All'
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

    return (
        <>
                        <section className={styles.galleryHero}>
                <VideoBackground videos={['/images/video_1.mp4', '/images/video_2.mp4']} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 22, 40, 0.6)', zIndex: 1 }} />
                <motion.h1
                    className={styles.galleryHeroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <span className="gradient-text-gold-teal">Transformations</span>
                </motion.h1>
                <motion.p
                    className={styles.galleryHeroSub}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    Real results from real patients
                </motion.p>
            </section>

                        <section className={`${styles.filterSection} container`}>
                <div className={styles.filterBar}>
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            <div className={`${styles.galleryGrid} container`}>
                <AnimatePresence mode="popLayout">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className={styles.galleryItem}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className={styles.galleryImagePlaceholder}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                                </div>
                                <div className={styles.galleryItemOverlay}>
                                    <div>
                                        <div className={styles.galleryItemLabel}>{item.title}</div>
                                        <div className={styles.galleryItemTag}>{item.category}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            className={styles.noItems}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            No items found for this filter.
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

                        <section className={styles.featuredSection}>
                <div className="container">
                    <motion.div className={styles.featuredHeader} {...fadeUp}>
                        <span className="overline">Featured Transformation</span>
                        <h2 className="heading-2" style={{ color: 'var(--color-navy)', marginTop: 'var(--space-4)' }}>
                            See the Difference
                        </h2>
                    </motion.div>

                    <motion.div className={styles.featuredCard} {...fadeUp}>
                        <BeforeAfter
                            beforeImage=""
                            afterImage=""
                            beforeLabel="Before"
                            afterLabel="After"
                            height={380}
                        />
                        <div className={styles.featuredTestimonial}>
                            <p className={styles.featuredQuote}>
                                &ldquo;I never thought I could smile confidently again. The team at Sagar Dental
                                Care transformed my smile and my life. The implants look and feel completely
                                natural.&rdquo;
                            </p>
                            <p className={styles.featuredAuthor}>— Priya M.</p>
                            <p className={styles.featuredTreatment}>Full Mouth Implants</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
