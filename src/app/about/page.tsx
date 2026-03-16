'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';
import styles from './about.module.css';
import BlurText from "@/components/ui/BlurText";
import SpotlightCard from '@/components/ui/SpotlightCard';
import VideoBackground from '@/components/ui/VideoBackground';

import { Heart, Microscope, ShieldCheck } from 'lucide-react';

import { CORE_VALUES, ASSOCIATES_DATA } from '@/data/company';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const stagger = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' as const },
};

export default function AboutPage() {
    return (
        <>
                        <section className={styles.aboutHero}>
                <VideoBackground videos={['/images/video_1.mp4', '/images/video_2.mp4']} />
                <div className={styles.aboutHeroOverlay} />
                <motion.div
                    className={styles.aboutHeroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className={styles.aboutHeroTitle}>
                        Excellence in Every{' '}
                        <span className="gradient-text-gold-teal">Smile</span>
                    </h1>
                    <p className={styles.aboutHeroSub}>
                        The story behind decades of trusted dental excellence
                    </p>
                </motion.div>
            </section>

                        <section className={styles.teamSection}>
                <div className="container">
                    <motion.div className={styles.teamHeader} {...fadeUp}>
                        <span className="overline" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>Meet The Team</span>
                    </motion.div>
                    <div style={{ textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <BlurText
                            text="The Experts Behind Your Smile"
                            delay={100}
                            animateBy="words"
                            direction="bottom"
                            className={styles.philosophyText}
                        />
                    </div>

                                        <motion.div className={styles.mainDoctorCard} {...fadeUp} style={{ marginTop: 'var(--space-16)' }}>
                        <div className={styles.mainDoctorImage}>
                            <img src="/images/Dr.Vidhya Sagar.png" alt="Prof. Dr. D V Vidhya Sagar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className={styles.mainDoctorInfo}>
                            <span className={styles.doctorDegree}>BDS, MDS — Periodontics & Implantology</span>
                            <h3 className={styles.doctorName}>Prof. Dr. D V Vidhya Sagar</h3>
                            <p className={styles.doctorTitle}>Founder & Chief Consultant</p>
                            <p className={styles.doctorBio}>
                                Prof. Dr. D V Vidhya Sagar is a highly accomplished Periodontist and Implantologist
                                with over 27 years of extensive experience in the field of dentistry. He is the founder
                                of Sagar Dental Care, a premier dental clinic located in Krishnarajapuram, Bengaluru.
                                His expertise spans a wide range of advanced dental procedures, including dental implants,
                                smile makeovers, and full mouth rehabilitations. He passionately leverages cutting-edge 
                                technology to deliver precision, comfort, and the highest standard of care to every patient.
                            </p>
                            <motion.div
                                className={styles.signature}
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 0.3, width: 'auto' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                — Dr. Vidhya Sagar
                            </motion.div>
                        </div>
                    </motion.div>

                                        <div className={styles.associateGrid}>
                        {ASSOCIATES_DATA.map((doc, i) => (
                            <motion.div
                                key={doc.name}
                                className={styles.associateCard}
                                {...stagger}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className={styles.associateImagePlaceholder}>
                                    {doc.image ? (
                                        <img src={doc.image} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        'Photo Placeholder'
                                    )}
                                </div>

                                {/* Default State */}
                                <div className={styles.associateInfo}>
                                    <div className={styles.associateName}>{doc.name}</div>
                                    <div className={styles.associateDegree}>{doc.degree}</div>
                                </div>

                                {/* Hover Reveal */}
                                <div className={styles.associateOverlay}>
                                    <div className={styles.overlaySpec}>{doc.specialization}</div>
                                    <div className={styles.overlayName}>{doc.name}</div>
                                    <div className={styles.overlayDegree}>{doc.degree}</div>
                                    <p className={styles.overlayBio}>{doc.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

                        <section className={`${styles.philosophy} container`}>
                <motion.div {...fadeUp}>
                    <span className="overline" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>Our Philosophy</span>
                </motion.div>
                <BlurText
                    text="We believe great dentistry is born from the union of science, art, and genuine human care."
                    delay={100}
                    animateBy="words"
                    direction="bottom"
                    className={styles.philosophyText}
                />

                <div className={styles.valuesGrid}>
                    {CORE_VALUES.map((value, i) => (
                        <motion.div
                            key={value.title}
                            {...stagger}
                            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: '100%' }}
                        >
                            <SpotlightCard className={styles.valueCard} spotlightColor="rgba(45, 212, 191, 0.15)">
                                <span className={styles.valueIcon}>{value.icon}</span>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDesc}>{value.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}

