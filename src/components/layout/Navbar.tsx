'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import StaggeredMenu from '@/components/ui/StaggeredMenu';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/gallery', label: 'Smile Gallery' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const scrollY = useScrollPosition();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isScrolled = scrollY > 50;

    const navClass = `${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent
        }`;

    return (
        <>
            <motion.nav
                className={navClass}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className={styles.navInner}>
                                        <Link href="/" className={styles.logo}>
                        <img src="/images/Sagar_dental_only _logo.png" alt="Sagar Dental Care" className={styles.logoIcon} style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '50%' }} />
                        <div className={styles.logoText}>
                            <span className={styles.logoName}>Sagar Dental Care</span>
                        </div>
                    </Link>

                                        <div className={styles.navLinks}>
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                                >
                                    <span style={{ position: 'relative' }}>
                                        {link.label}
                                        {isActive && (
                                            <motion.span
                                                className={styles.linkUnderline}
                                                layoutId="navUnderline"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Hamburger - Aligned End */}
                    {/* Hamburger replaced by StaggeredMenu for Mobile */}
                    <div className={styles.mobileMenuContainer}>
                        <StaggeredMenu
                            items={NAV_LINKS.map(l => ({ label: l.label, link: l.href }))}
                            socialItems={[
                                { label: <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={24} /> Visit Us</span>, link: 'https://maps.app.goo.gl/Q9DzhQ7nXnvf9rBB9' }
                            ]}
                            colors={['#e0f2fe', '#0f766e']}
                            accentColor="var(--color-teal)"
                            menuButtonColor="var(--color-navy)"
                            openMenuButtonColor="var(--color-teal)"
                        />
                    </div>

                    {/* Placeholder for desktop balance if needed, or social icons */}
                    <div className={styles.desktopBalance} style={{ width: '42px', display: 'none' }} />
                </div>
            </motion.nav>
        </>
    );
}
