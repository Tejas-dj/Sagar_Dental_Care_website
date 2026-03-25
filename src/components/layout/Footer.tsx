import Link from 'next/link';
import styles from './Footer.module.css';

const QUICK_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Smile Gallery' },
    { href: '/contact', label: 'Contact' },
];

const SERVICE_LINKS = [
    { href: '/treatments#cosmetic', label: 'Cosmetic Dentistry' },
    { href: '/treatments#surgical', label: 'Dental Implants' },
    { href: '/treatments#ortho', label: 'Orthodontics' },
    { href: '/treatments#restorative', label: 'Full Mouth Rehab' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                                <div className={styles.footerAbout}>
                    <div className={styles.footerLogo}>
                        <img src="/images/Sagar_dental_only_logo.png" alt="Sagar Dental Care" style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '50%' }} />
                        <span className={styles.footerLogoName}>Sagar Dental Care</span>
                    </div>
                    <p className={styles.footerDesc}>
                        27 Years of Excellence in dental care with precision,
                        compassion, and cutting-edge technology since 1999.
                    </p>
                    {/* No social media links */}
                </div>

                {/* Quick Links */}
                <div className={styles.footerColumn}>
                    <h4>Quick Links</h4>
                    <div className={styles.footerLinks}>
                        {QUICK_LINKS.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.footerLink}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                                <div className={styles.footerColumn}>
                    <h4>Services</h4>
                    <div className={styles.footerLinks}>
                        {SERVICE_LINKS.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.footerLink}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                                <div className={styles.footerColumn}>
                    <h4>Visit Us</h4>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📍</span>
                        <span>Sri Krishna Nilayam, 69, Devasandra Main Road,<br />Krishnarajapuram, Bengaluru 560036</span>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📞</span>
                        <span><a href="tel:+918088815232" style={{ color: 'inherit', textDecoration: 'none' }}>+91 80888 15232</a></span>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>⏰</span>
                        <span>Mon–Fri: 9:30 AM – 1:30 PM, 4:30 – 9:00 PM<br />Sat: 9:00 AM – 1:30 PM<br />Sun: On Appointment</span>
                    </div>
                    <div className={styles.mapContainer}>
                        <a href="https://maps.app.goo.gl/Q9DzhQ7nXnvf9rBB9" target="_blank" rel="noopener noreferrer" className={styles.mapPlaceholder} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                            📍 View on Google Maps
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © 2026 Sagar Dental Care. All rights reserved.
                </p>
                <div className={styles.bottomLinks}>
                    <span className={styles.bottomLink} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Powered and Designed by
                        <a href="https://www.linkedin.com/in/tejas-d-jaiprakash/" target="_blank" rel="noopener noreferrer" className={styles.designerLink}>
                            CobaltKite.Creatives (Tejas D. Jaiprakash)
                        </a>
                    </span>
                    <span className={styles.bottomLink}>
                        Contact: <a href="tel:+916366713839" className={styles.designerLink}>+91 6366713839</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
