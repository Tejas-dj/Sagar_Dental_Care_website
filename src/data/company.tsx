import React from 'react';
import { Heart, Microscope, ShieldCheck } from 'lucide-react';

export const CORE_VALUES = [
    {
        icon: <Heart size={32} color="var(--color-teal)" />,
        title: 'Compassion',
        desc: 'Every patient is family. We treat you with genuine warmth, empathy, and understanding throughout your journey.'
    },
    {
        icon: <Microscope size={32} color="var(--color-teal)" />,
        title: 'Advanced Technology',
        desc: 'We invest in the latest digital imaging, laser systems, and CAD/CAM technology for precision results.'
    },
    {
        icon: <ShieldCheck size={32} color="var(--color-teal)" />,
        title: 'Integrity',
        desc: 'Transparent communication, honest recommendations, and ethical practice guide every decision we make.'
    },
];

export const ASSOCIATES_DATA = [
    {
        name: 'Dr. D. Rithika Sagar',
        degree: 'B.D.S',
        specialization: 'Cosmetic Dental Surgeon',
        bio: 'Dr. Rithika Sagar specializes in aesthetic and cosmetic dental procedures, helping patients achieve confident, natural-looking smiles. With a keen eye for detail and a passion for smile makeovers, she brings a blend of artistry and clinical precision to every treatment.',
        image: '/images/Dr. Rithika Sagar.png',
    },
    {
        name: 'Dr. Raghavendra S.R.',
        degree: 'B.D.S, M.D.S',
        specialization: 'Consultant Orthodontist',
        bio: 'Dr. Raghavendra S.R. is a skilled orthodontist dedicated to creating beautifully aligned smiles using both traditional braces and modern aligner systems. His methodical approach to treatment planning ensures predictable, lasting results for patients of all ages.',
        image: '/images/Doctor_profile_placeholder.png',
    },
    {
        name: 'Dr. R. Satish',
        degree: 'B.D.S, M.D.S',
        specialization: 'Consultant Oral-Maxillofacial Surgeon',
        bio: 'Dr. R. Satish brings extensive surgical expertise in complex oral and maxillofacial procedures, including wisdom tooth extractions, jaw surgeries, and facial trauma management. His calm demeanor and precision-driven technique ensure safe, comfortable outcomes even in the most challenging cases.',
        image: '/images/Doctor_profile_placeholder.png',
    },
    {
        name: 'Dr. S.R. Sairam',
        degree: 'BDS, M.B.A',
        specialization: 'Laser Dentistry — Dip. in Laser Dentistry (IALD & AALZ Germany)',
        bio: 'Dr. S.R. Sairam is a certified laser dentistry specialist with internationally recognized training from IALD and AALZ Germany. He pioneers minimally invasive, pain-free dental treatments using state-of-the-art laser technology, making advanced care accessible and comfortable for every patient.',
        image: '/images/Doctor_profile_placeholder.png',
    },
];
