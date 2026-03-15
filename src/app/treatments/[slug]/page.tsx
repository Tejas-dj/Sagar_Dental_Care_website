'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getTreatmentBySlug, TREATMENTS } from '@/data/treatments';
import styles from './detail.module.css';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

export default function TreatmentDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const treatment = getTreatmentBySlug(slug);

    if (!treatment) {
        return (
            <div className={styles.notFound}>
                <h1 className={styles.notFoundTitle}>Treatment Not Found</h1>
                <p>The treatment you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/treatments" className="btn btn-primary" style={{ marginTop: 'var(--space-6)', display: 'inline-flex' }}>
                    ← Back to Treatments
                </Link>
            </div>
        );
    }

    return (
        <motion.div className={styles.detailPage} {...fadeUp}>
            <Link href="/treatments" className={styles.backLink}>
                ← Back to All Treatments
            </Link>

            <span className={styles.detailIcon}>{treatment.icon}</span>
            <span className={styles.detailCategory}>{treatment.category}</span>
            <h1 className={styles.detailTitle}>{treatment.name}</h1>
            <p className={styles.detailDesc}>{treatment.description}</p>

            {/* Procedure Steps */}
            <div className={styles.procedureSection}>
                <span className={styles.sectionLabel}>The Procedure</span>
                <div className={styles.procedureList}>
                    {treatment.procedure.map((step, i) => (
                        <motion.div
                            key={i}
                            className={styles.procedureStep}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                        >
                            <span className={styles.stepNumber}>{i + 1}</span>
                            <span className={styles.stepText}>{step}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recovery Time */}
            <motion.div
                className={styles.recoveryCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <span className={styles.recoveryIcon}>🕐</span>
                <div>
                    <div className={styles.recoveryLabel}>Recovery Time</div>
                    <div className={styles.recoveryTime}>{treatment.recoveryTime}</div>
                </div>
            </motion.div>
        </motion.div>
    );
}
