'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { TREATMENT_CATEGORIES, TREATMENTS, getTreatmentsByCategory } from '@/data/treatments';
import styles from './treatments.module.css';
import SplitText from '@/components/ui/SplitText';
import SpotlightCard from '@/components/ui/SpotlightCard';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const WATERMARK_LABELS: Record<string, string> = {
    general: 'PREVENTION',
    cosmetic: 'BEAUTY',
    restorative: 'STRENGTH',
    surgical: 'PRECISION',
    ortho: 'ALIGNMENT',
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
    general: 'The foundation of lifelong oral health through proactive, gentle care.',
    cosmetic: 'Transform your smile with artistry and the latest aesthetic innovations.',
    restorative: 'Rebuild strength, function, and beauty with precision engineering.',
    surgical: 'Advanced procedures with cutting-edge technology for complex cases.',
    ortho: 'Achieve perfect alignment for a confident, balanced smile.',
};

export default function TreatmentsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('');

    const filteredTreatments = useMemo(() => {
        if (!searchTerm) return null;
        return TREATMENTS.filter(
            (t) =>
                t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handlePillClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        setSearchTerm('');
        const el = document.getElementById(categoryId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
                        <section className={styles.treatmentsHero}>
                <div className={styles.heroParticles} />
                <div className={styles.heroTitleWrapper} style={{ marginBottom: '1rem' }}>
                    <SplitText
                        text="Comprehensive Care"
                        className={styles.heroTitle}
                        delay={50}
                        from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        ease="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        textAlign="center"
                    />
                </div>
                <motion.p
                    className={styles.heroSubtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Every treatment tailored to your unique needs
                </motion.p>

                {/* Search */}
                <motion.div
                    className={styles.searchContainer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <span className={styles.searchIcon}><Search size={20} /></span>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search treatments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </motion.div>
            </section>

                        <div className={styles.mobilePills}>
                {TREATMENT_CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        className={`${styles.pill} ${activeCategory === cat.id ? styles.active : ''}`}
                        onClick={() => handlePillClick(cat.id)}
                    >
                        {cat.icon} {cat.label}
                    </button>
                ))}
            </div>

                        <div className={styles.treatmentsLayout}>
                {/* Sidebar (Desktop) */}
                <aside className={styles.sidebar}>
                    {TREATMENT_CATEGORIES.map((cat) => (
                        <a
                            key={cat.id}
                            href={`#${cat.id}`}
                            className={`${styles.sidebarLink} ${activeCategory === cat.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <span className={styles.sidebarIcon}>{cat.icon}</span>
                            {cat.label}
                        </a>
                    ))}
                </aside>

                {/* Content */}
                <div className={styles.content}>
                    {/* Search Results */}
                    {searchTerm && filteredTreatments && (
                        <div className={styles.categorySection}>
                            <div className={styles.categoryHeader}>
                                <h2 className={styles.categoryTitle}>
                                    Search Results for &ldquo;{searchTerm}&rdquo;
                                </h2>
                                <p className={styles.categoryDesc}>
                                    {filteredTreatments.length} treatment{filteredTreatments.length !== 1 ? 's' : ''} found
                                </p>
                            </div>
                            <div className={styles.cardsGrid}>
                                {filteredTreatments.length > 0 ? (
                                    filteredTreatments.map((treatment, i) => (
                                        <motion.div key={treatment.slug} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                                            <Link href={`/treatments/${treatment.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                                                <SpotlightCard className={styles.serviceCard} spotlightColor="rgba(45, 212, 191, 0.15)">
                                                    <span className={styles.cardIcon}>{treatment.icon}</span>
                                                    <h3 className={styles.cardTitle}>{treatment.name}</h3>
                                                    <p className={styles.cardDesc}>{treatment.shortDescription}</p>
                                                    <span className={styles.cardArrow}>Learn More →</span>
                                                </SpotlightCard>
                                            </Link>
                                        </motion.div>
                                    ))
                                ) : (
                                    <p className={styles.noResults}>No treatments found. Try a different search term.</p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Category Sections */}
                    {!searchTerm &&
                        TREATMENT_CATEGORIES.map((cat) => {
                            const catTreatments = getTreatmentsByCategory(cat.id);
                            return (
                                <section key={cat.id} id={cat.id} className={styles.categorySection}>
                                    <motion.div className={`${styles.categoryHeader} ${styles.categoryWatermark}`} {...fadeUp}>
                                        <span className={styles.watermarkText}>{WATERMARK_LABELS[cat.id]}</span>
                                        <h2
                                            className={`${styles.categoryTitle} ${cat.id === 'cosmetic' ? styles.gradientGoldTeal : ''
                                                }`}
                                        >
                                            {cat.label}
                                        </h2>
                                        <p className={styles.categoryDesc}>{CATEGORY_DESCRIPTIONS[cat.id]}</p>
                                    </motion.div>

                                    <div className={styles.cardsGrid}>
                                        {catTreatments.map((treatment, i) => (
                                            <motion.div
                                                key={treatment.slug}
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: '-50px' }}
                                                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <Link href={`/treatments/${treatment.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                                                    <SpotlightCard className={styles.serviceCard} spotlightColor="rgba(45, 212, 191, 0.15)">
                                                        <span className={styles.cardIcon}>{treatment.icon}</span>
                                                        <h3 className={styles.cardTitle}>{treatment.name}</h3>
                                                        <p className={styles.cardDesc}>{treatment.shortDescription}</p>
                                                        <span className={styles.cardArrow}>Learn More →</span>
                                                    </SpotlightCard>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
