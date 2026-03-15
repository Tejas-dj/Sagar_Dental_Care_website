'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Crown, Star } from 'lucide-react';
import TextReveal from '@/components/ui/TextReveal';
import styles from './home.module.css';
import ScrollFloat from '@/components/ui/ScrollFloat';
import ShinyText from '@/components/ui/ShinyText';
import SplitText from '@/components/ui/SplitText';
import LogoLoop from '@/components/ui/LogoLoop';
import CustomIcon from '@/components/ui/CustomIcon';
import SpotlightCard from '@/components/ui/SpotlightCard';
import VideoBackground from '@/components/ui/VideoBackground';
import { SERVICES_DATA, TESTIMONIALS_ROW1, TESTIMONIALS_ROW2 } from '@/data/home';

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

export default function HomePage() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.3]);

  return (
    <>
            <section className={styles.hero}>
        <div className={styles.heroBg}>
          <VideoBackground videos={['/images/video_1.mp4', '/images/video_2.mp4']} />
        </div>
        <div className={styles.heroOverlay} />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={styles.heroOverline}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent' }}
          >
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: 'var(--tracking-wide)' }}>Sagar Dental Care</span>
          </motion.div>

          {/* Replaced Title with SplitText */}
          <div className={styles.heroTitleWrapper} style={{ marginBottom: '1.5rem' }}>
            <SplitText
              text="The Future of Your Oral Health and Smile"
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
            transition={{ delay: 0.8, duration: 0.6 }} 
          >
            Where cutting-edge technology meets compassionate care.
            Experience dentistry redefined with precision and warmth.
          </motion.p>

          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <Link href="/contact" className="btn btn-primary">
              Visit Us
            </Link>
            <Link href="/treatments" className="btn btn-outline">
              Our Treatments
            </Link>
          </motion.div>
        </motion.div>

        {/* Google Rating Widget - Clickable Link */}
        <motion.a
          href="https://maps.app.goo.gl/Q9DzhQ7nXnvf9rBB9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ratingWidget}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {/* Google Logo */}
          <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px', display: 'flex', alignItems: 'center' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="G"
              width={24}
              height={24}
              style={{ display: 'block' }}
            />
          </div>

          <div className={styles.ratingContent}>
            <div className={styles.ratingStars}>
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={16} color="#FBBC05" fill="#FBBC05" style={{ marginRight: '2px' }} />
              ))}
            </div>
            <div className={styles.ratingText}>
              <span className={styles.ratingScore}>3.9</span>
              <span className={styles.ratingLabel}>Based on 24 reviews</span>
            </div>
          </div>
          <div className={styles.ratingArrow}>→</div>
        </motion.a>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

            <section style={{ background: 'var(--color-navy)', padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', width: '100%', overflow: 'hidden' }}>
        <p className="overline" style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.4)' }}>Trusted By & Affiliated With</p>
        <LogoLoop
          logos={[
            { node: <img src="/images/Ida_Logo.png" alt="Indian Dental Association" style={{ height: '76px', objectFit: 'contain', opacity: 0.8 }} /> },
            { node: <img src="/images/ISOP_Logo.png" alt="Indian Society of Periodontology" style={{ height: '76px', objectFit: 'contain', opacity: 0.8 }} /> },
            { node: <img src="/images/IAOI_Logo.png" alt="Indian Society of Oral Implantologists" style={{ height: '76px', objectFit: 'contain', opacity: 0.8 }} /> },
            { node: <img src="/images/ISPRP_Logo.png" alt="Indian Society of Prosthodontics-Restorative-Periodontics" style={{ height: '76px', objectFit: 'contain', opacity: 0.8 }} /> },
          ]}
          direction="left"
          logoHeight={76}
          gap={80}
          speed={80}
          pauseOnHover={true}
        />
      </section>

            <section className={`${styles.introduction} container`}>
        <motion.div {...fadeUp}>
          <span className={`overline ${styles.introOverline}`}>Welcome</span>
        </motion.div>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=10%'
          stagger={0.03}>
          Dentistry redefined with precision, compassion, and state-of-the-art technology.
        </ScrollFloat>

        <div style={{ height: '2rem' }} aria-hidden="true" />

        <motion.p className={styles.introDescription} {...fadeUp}>
          At Sagar Dental Care, we combine decades of expertise with the latest in dental
          innovation to deliver an experience that&apos;s as comfortable as it is transformative.
        </motion.p>
      </section>

            <section className={styles.services}>
        <div className="container">
          <motion.div className={styles.sectionHeader} {...fadeUp}>
            <span className="overline">What We Offer</span>
            <h2 className="heading-2" style={{ color: 'var(--color-navy)', marginTop: 'var(--space-4)' }}>
              Comprehensive Dental Services
            </h2>
          </motion.div>
        </div>

                <div className={styles.servicesGrid}>
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.slug}
              {...fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/treatments/${service.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <SpotlightCard className={styles.serviceCard} spotlightColor="rgba(45, 212, 191, 0.15)">
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map(f => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>

                <div className={styles.mobileServicesScroll}>
          {SERVICES_DATA.map((service, index) => (
            <div key={`mob-${service.slug}`} className={styles.mobileServiceCard}>
              <Link href={`/treatments/${service.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <SpotlightCard className={styles.serviceCard} spotlightColor="rgba(45, 212, 191, 0.15)">
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                </SpotlightCard>
              </Link>
            </div>
          ))}
        </div>

      </section>

            <section className={styles.parallaxSection} ref={parallaxRef}>
        <motion.div className={styles.parallaxBg} style={{ y: parallaxY }}>
          <motion.img 
            src="/images/Perfect_Smile.webp" 
            alt="Perfect Smile" 
            className={styles.parallaxImage} 
            style={{ scale: parallaxScale, width: '100%', height: '120%', objectFit: 'cover' }} 
          />
        </motion.div>
        <div className={styles.parallaxOverlay} />

        <div className={styles.parallaxContent}>
          <motion.span className={`overline ${styles.parallaxTag}`} {...fadeUp}>
            Why Choose Us
          </motion.span>
          <motion.h2 className={styles.parallaxTitle} {...fadeUp}>
            A Perfect Smile Changes Everything
          </motion.h2>
          <motion.p className={styles.parallaxDesc} {...fadeUp}>
            Your smile is the first thing the world sees. We use the most advanced dental
            technology to ensure it&apos;s the best version of itself — painlessly and precisely.
          </motion.p>

          <motion.div className={styles.parallaxFeatures} {...fadeUp}>
            <div className={styles.parallaxFeature}>
              <div className={styles.featureIcon}><ShieldCheck size={28} /></div>
              <span className={styles.featureText}>Pain-Free Procedures</span>
            </div>
            <div className={styles.parallaxFeature}>
              <div className={styles.featureIcon}><Sparkles size={28} /></div>
              <span className={styles.featureText}>Latest Technology</span>
            </div>
            <div className={styles.parallaxFeature}>
              <div className={styles.featureIcon}><Crown size={28} /></div>
              <span className={styles.featureText}>Premium Results</span>
            </div>
          </motion.div>
        </div>
      </section>

            <section className={styles.testimonials}>
        <div className="container">
          <motion.div className={styles.sectionHeader} {...fadeUp}>
            <span className="overline">Testimonials</span>
            <h2 className="heading-2" style={{ color: 'var(--color-navy)', marginTop: 'var(--space-4)' }}>
              Loved by Our Patients
            </h2>
          </motion.div>
        </div>

        {/* Row 1: Slides Left */}
        <div className={`${styles.testimonialTrack} ${styles.row1}`}>
          {[...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1].map((t, i) => (
            <div key={`r1-${i}`} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="var(--color-gold)" color="var(--color-gold)" />)}
              </div>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Slides Right */}
        <div className={`${styles.testimonialTrack} ${styles.row2}`} style={{ marginTop: 'var(--space-6)' }}>
          {[...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2].map((t, i) => (
            <div key={`r2-${i}`} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="var(--color-gold)" color="var(--color-gold)" />)}
              </div>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className={styles.finalCta}>
        <motion.div className={styles.ctaContent} {...fadeUp}>
          <h2 className={styles.ctaTitle}>
            Ready to <span className="gradient-text-gold-teal">Smile?</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Book your consultation today and take the first step towards the smile you deserve.
          </p>
          <Link href="/contact">
            <motion.button
              className={styles.magneticBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Book an Appointment →
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
