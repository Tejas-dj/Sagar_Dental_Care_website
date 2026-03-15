'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    height?: number;
}

export default function BeforeAfter({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
    height = 400,
}: BeforeAfterProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const position = useMotionValue(50); // percentage
    const [displayPos, setDisplayPos] = useState(50);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        const unsubscribe = position.on('change', (v) => {
            setDisplayPos(v);
        });
        return unsubscribe;
    }, [position]);

    const handleMove = useCallback(
        (clientX: number) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
            position.set(percent);
        },
        [position]
    );

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true);
        handleMove(e.clientX);
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={containerRef}
            className={styles.container}
            style={{ height }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            {/* After Image (background) */}
            <div className={styles.imageWrapper}>
                <div
                    className={styles.imagePlaceholder}
                    style={{ backgroundImage: afterImage ? `url(${afterImage})` : undefined }}
                >
                    {!afterImage && <span className={styles.placeholderText}>After Image</span>}
                </div>
            </div>

            {/* Before Image (clipped) */}
            <div
                className={styles.imageWrapper}
                style={{
                    clipPath: `inset(0 ${100 - displayPos}% 0 0)`,
                    position: 'absolute',
                    inset: 0,
                }}
            >
                <div
                    className={styles.imagePlaceholder}
                    style={{
                        backgroundImage: beforeImage ? `url(${beforeImage})` : undefined,
                        backgroundColor: beforeImage ? undefined : 'var(--color-gray-300)',
                    }}
                >
                    {!beforeImage && <span className={styles.placeholderText}>Before Image</span>}
                </div>
            </div>

            {/* Slider Handle */}
            <motion.div
                className={`${styles.handle} ${isDragging ? styles.dragging : ''}`}
                style={{ left: `${displayPos}%` }}
            >
                <div className={styles.handleLine} />
                <div className={styles.handleKnob}>
                    <span className={styles.handleArrows}>◄ ►</span>
                </div>
                <div className={styles.handleLine} />
            </motion.div>

            {/* Labels */}
            <div className={styles.labels}>
                <span className={styles.label}>{beforeLabel}</span>
                <span className={styles.label}>{afterLabel}</span>
            </div>
        </div>
    );
}
