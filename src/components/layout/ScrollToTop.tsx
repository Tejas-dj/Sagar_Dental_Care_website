'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    aria-label="Scroll to top"
                    style={{
                        position: 'fixed',
                        bottom: 'var(--space-8)',
                        right: 'var(--space-8)',
                        width: 48,
                        height: 48,
                        borderRadius: 'var(--radius-full)',
                        background: 'linear-gradient(135deg, var(--color-teal), var(--color-teal-dark))',
                        color: 'var(--color-white)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                        zIndex: 'var(--z-sticky)',
                        boxShadow: '0 4px 20px rgba(45, 212, 191, 0.3)',
                    }}
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
}
