'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
    delay?: number;
    staggerDelay?: number;
}

export default function TextReveal({
    text,
    className = '',
    as: Tag = 'p',
    delay = 0,
    staggerDelay = 0.04,
}: TextRevealProps) {
    const words = text.split(' ');

    return (
        <Tag className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}>
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * staggerDelay,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: 'inline-block' }}
                >
                    {word}
                </motion.span>
            ))}
        </Tag>
    );
}
