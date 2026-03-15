'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'var(--color-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        }}>
            <motion.div
                animate={{
                    scale: [1, 1.15, 1], // Pulsating scale
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: 'drop-shadow(0 0 10px rgba(45, 212, 191, 0.3))'
                }}
            >
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Aesthetic Tooth Shape */}
                    <path
                        d="M7 21C4.5 21 3 17.7 3 15.3C3 13 4.2 9.6 6 8C6.5 6.5 8 5 8 5S9.5 6.5 11 8C12.8 9.6 14 13 14 15.3C14 17.7 12.5 21 10 21H7Z"
                        stroke="var(--color-teal)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13 8C14.5 6.5 16 5 16 5C18 7.3 18 9.7 16 11.7C14.7 13 12 13.7 10 13.7"
                        stroke="var(--color-teal)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.8"
                    />

                    {/* Heart pulse in the center */}
                    <motion.path
                        d="M8.5 14.5C8.5 14.5 9 14 10 14C11 14 11.5 14.5 11.5 14.5"
                        stroke="var(--color-gold)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </svg>
            </motion.div>
        </div>
    );
}
