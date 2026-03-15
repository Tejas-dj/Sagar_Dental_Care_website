'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from 'lucide-react';
import VideoBackground from '@/components/ui/VideoBackground';
import styles from './contact.module.css';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const stagger = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' as const },
};

export default function ContactPage() {
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setToastMessage(`${label} copied to clipboard!`);
        setTimeout(() => setToastMessage(null), 3000);
    };

    return (
        <>
                        <section className={styles.contactHero}>
                <VideoBackground videos={['/images/video_1.mp4', '/images/video_2.mp4']} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 22, 40, 0.6)', zIndex: 1 }} />
                <motion.h1
                    className={styles.contactHeroTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    Get in <span className="gradient-text-gold-teal">Touch</span>
                </motion.h1>
                <motion.p
                    className={styles.contactHeroSub}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    We&apos;d love to hear from you
                </motion.p>
            </section>

                        <div className={`${styles.contactLayout} container`}>
                {/* Info Side */}
                <div className={styles.infoSide}>
                    <motion.div className={styles.infoCard} {...stagger} transition={{ delay: 0, duration: 0.5 }}>
                        <div className={styles.infoIconWrapper}><MapPin size={24} color="var(--color-teal)" /></div>
                        <div className={styles.infoContent}>
                            <h3>Visit Us</h3>
                            <p>Sri Krishna Nilayam, 69, Devasandra Main Road<br />JC Layout, Krishnarajapuram<br />Bengaluru, Karnataka 560036</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.infoCard} 
                        {...stagger} 
                        transition={{ delay: 0.1, duration: 0.5 }}
                        onClick={() => handleCopy('+918088815232', 'Phone number')}
                        style={{ cursor: 'pointer' }}
                        title="Click to copy phone number"
                    >
                        <div className={styles.infoIconWrapper}><Phone size={24} color="var(--color-teal)" /></div>
                        <div className={styles.infoContent}>
                            <h3>Call Us</h3>
                            <p>+91 80888 15232</p>
                            <span style={{ fontSize: '12px', color: 'var(--color-teal)', fontWeight: 600 }}>Click to copy</span>
                        </div>
                    </motion.div>

                    <motion.div className={styles.infoCard} {...stagger} transition={{ delay: 0.2, duration: 0.5 }}>
                        <div className={styles.infoIconWrapper}><Clock size={24} color="var(--color-teal)" /></div>
                        <div className={styles.infoContent}>
                            <h3>Working Hours</h3>
                            <p>Mon – Fri: 9:30 AM – 1:30 PM, 4:30 PM – 9:00 PM<br />Saturday: 9:00 AM – 1:30 PM<br />Sunday: 9:30 AM – 1:30 PM (On Appointment only)</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.infoCard} 
                        {...stagger} 
                        transition={{ delay: 0.3, duration: 0.5 }}
                        onClick={() => handleCopy('sagardentalcare1999@gmail.com', 'Email address')}
                        style={{ cursor: 'pointer' }}
                        title="Click to copy email address"
                    >
                        <div className={styles.infoIconWrapper}><Mail size={24} color="var(--color-teal)" /></div>
                        <div className={styles.infoContent}>
                            <h3>Email</h3>
                            <p>sagardentalcare1999@gmail.com</p>
                            <span style={{ fontSize: '12px', color: 'var(--color-teal)', fontWeight: 600 }}>Click to copy</span>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div className={styles.mapSection} {...fadeUp}>
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6!2d77.68!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSagar+Dental+Care!5e0!3m2!1sen!2sin!4v1"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sagar Dental Care Location"
                            />
                        </div>
                        <div className={styles.parkingInfo}>
                            🅿️ Free parking available at the clinic premises
                        </div>
                    </motion.div>
                </div>

                {/* Form Side has been removed as per request */}
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            left: '50%',
                            background: 'var(--color-navy)',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            zIndex: 1000,
                            fontWeight: 500,
                            fontSize: '14px'
                        }}
                    >
                        <CheckCircle2 color="var(--color-teal)" size={20} />
                        {toastMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
