'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface VideoBackgroundProps {
    videos: string[];
    className?: string;
}

export default function VideoBackground({ videos, className }: VideoBackgroundProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleEnded = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, [videos.length]);

    useEffect(() => {
        // When the source changes, load and play
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(() => { /* autoplay may be blocked */ });
        }
    }, [currentIndex]);

    return (
        <video
            ref={videoRef}
            className={className}
            autoPlay
            muted
            playsInline
            onEnded={handleEnded}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
        >
            <source src={videos[currentIndex]} type="video/mp4" />
        </video>
    );
}
