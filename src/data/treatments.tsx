import {
    ShieldCheck, Sparkles, Wrench, Activity, Scale, Smile, Search,
    Baby, MonitorPlay, Gem, Zap, Crown, Component, Anchor, FileVideo, Stethoscope, Ruler,
    HeartPulse, Sun,
} from 'lucide-react';
import React from 'react';

export interface Treatment {
    slug: string;
    name: string;
    category: string;
    categoryId: string;
    shortDescription: string;
    description: string;
    procedure: string[];
    recoveryTime: string;
    icon: React.ReactNode;
}

export const TREATMENT_CATEGORIES = [
    { id: 'general', label: 'General & Preventive', icon: <ShieldCheck size={24} /> },
    { id: 'cosmetic', label: 'Cosmetic Dentistry', icon: <Sparkles size={24} /> },
    { id: 'restorative', label: 'Restorative & Rehab', icon: <Wrench size={24} /> },
    { id: 'surgical', label: 'Surgical & Advanced', icon: <Activity size={24} /> },
    { id: 'ortho', label: 'Orthodontics', icon: <Scale size={24} /> }, // Scale is closest to ruler/align
];

export const TREATMENTS: Treatment[] = [
    // General & Preventive
    {
        slug: 'routine-dental-examination',
        name: 'Routine Dental Examination',
        category: 'General & Preventive Care',
        categoryId: 'general',
        shortDescription: 'The foundation of oral health.',
        description:
            'A comprehensive dental examination is the cornerstone of maintaining excellent oral health. Our thorough check-ups include digital X-rays, oral cancer screening, gum health assessment, and a personalized treatment plan to keep your smile at its best.',
        procedure: [
            'Complete oral examination',
            'Digital X-rays and imaging',
            'Gum health assessment',
            'Oral cancer screening',
            'Personalized treatment plan discussion',
        ],
        recoveryTime: 'No recovery needed',
        icon: <Search size={40} />, // Magnifying Glass
    },
    {
        slug: 'children-dental-care',
        name: 'Children Dental Care',
        category: 'General & Preventive Care',
        categoryId: 'general',
        shortDescription: 'Specialized, gentle care for young smiles.',
        description:
            'We make dentistry fun and fear-free for children. Our pediatric dental services include fluoride treatments, sealants, early orthodontic assessments, and education on proper brushing techniques in a warm, child-friendly environment.',
        procedure: [
            'Child-friendly examination',
            'Fluoride treatment application',
            'Dental sealants',
            'Early orthodontic assessment',
            'Oral hygiene education',
        ],
        recoveryTime: 'No recovery needed',
        icon: <Baby size={40} />,
    },

    // Cosmetic Dentistry
    {
        slug: 'smile-designing',
        name: 'Smile Designing',
        category: 'Cosmetic Dentistry',
        categoryId: 'cosmetic',
        shortDescription: 'AI-assisted digital smile makeovers.',
        description:
            'Using cutting-edge digital imaging and AI-powered design software, we can show you your future smile before any work begins. Our smile design process considers your facial proportions, skin tone, and personal preferences to create a truly bespoke result.',
        procedure: [
            'Digital facial analysis',
            'AI-powered smile simulation',
            'Custom treatment planning',
            'Mock-up creation',
            'Phased implementation',
        ],
        recoveryTime: 'Varies by procedure',
        icon: <MonitorPlay size={40} />, // Screen/Tech feeling
    },
    {
        slug: 'ceramic-veneers',
        name: 'Ceramic Veneers',
        category: 'Cosmetic Dentistry',
        categoryId: 'cosmetic',
        shortDescription: 'Ultra-thin custom shells for a perfect aesthetic.',
        description:
            'Our premium ceramic veneers are crafted from the finest porcelain to deliver a natural, luminous smile. Each veneer is custom-designed to match your ideal tooth shape, size, and shade for a flawless result.',
        procedure: [
            'Consultation and digital design',
            'Minimal tooth preparation',
            'Precision impressions',
            'Custom veneer fabrication',
            'Bonding and final adjustments',
        ],
        recoveryTime: '1-2 days sensitivity',
        icon: <Gem size={40} />, // Diamond for precision/beauty
    },
    {
        slug: 'tooth-whitening',
        name: 'Tooth Whitening',
        category: 'Cosmetic Dentistry',
        categoryId: 'cosmetic',
        shortDescription: 'Professional brightening solutions.',
        description:
            'Achieve a dramatically brighter smile with our professional whitening treatments. We offer both in-office power whitening for instant results and custom take-home kits for gradual enhancement.',
        procedure: [
            'Shade assessment',
            'Gum protection application',
            'Professional whitening gel application',
            'LED light activation',
            'Post-treatment care instructions',
        ],
        recoveryTime: '24-48 hours sensitivity',
        icon: <Zap size={40} />, // Fast/Energy/Bright
    },
    {
        slug: 'cosmetic-dentistry',
        name: 'Cosmetic Dentistry',
        category: 'Cosmetic Dentistry',
        categoryId: 'cosmetic',
        shortDescription: 'General aesthetic enhancements.',
        description:
            'From tooth-colored fillings to gum contouring, our comprehensive cosmetic services address every aspect of your smile aesthetics. We combine artistry with dental science to deliver results that look and feel completely natural.',
        procedure: [
            'Comprehensive smile assessment',
            'Treatment options discussion',
            'Custom procedure planning',
            'Precision implementation',
            'Follow-up and maintenance',
        ],
        recoveryTime: 'Varies by procedure',
        icon: <Sparkles size={40} />,
    },

    // Restorative & Rehabilitation
    {
        slug: 'full-mouth-rehabilitation',
        name: 'Full Mouth Rehabilitation',
        category: 'Restorative & Rehabilitation',
        categoryId: 'restorative',
        shortDescription: 'Complete restoration of function and aesthetics.',
        description:
            'For patients requiring extensive dental work, our full mouth rehabilitation program provides a comprehensive, phased approach to restoring complete oral health, function, and aesthetics using the latest materials and techniques.',
        procedure: [
            'Comprehensive evaluation',
            'Digital treatment planning',
            'Phased treatment execution',
            'Prosthetic rehabilitation',
            'Long-term maintenance planning',
        ],
        recoveryTime: '2-4 weeks per phase',
        icon: <Component size={40} />, // Structure/Components
    },
    {
        slug: 'crowns-and-bridges',
        name: 'Crowns & Bridges',
        category: 'Restorative & Rehabilitation',
        categoryId: 'restorative',
        shortDescription: 'Restoring damaged or missing teeth.',
        description:
            'Our precision-crafted crowns and bridges restore damaged teeth to their full strength and beauty. Using advanced CAD/CAM technology and premium ceramics, we ensure a perfect fit and natural appearance.',
        procedure: [
            'Tooth preparation',
            'Digital impression',
            'Temporary crown placement',
            'Custom crown fabrication',
            'Permanent cementation',
        ],
        recoveryTime: '2-3 days adjustment',
        icon: <Crown size={40} />,
    },
    {
        slug: 'dentures',
        name: 'Dentures',
        category: 'Restorative & Rehabilitation',
        categoryId: 'restorative',
        shortDescription: 'Modern, comfortable prosthetic solutions.',
        description:
            'Modern dentures are nothing like the old days. Our custom-made dentures are designed for optimal comfort, natural appearance, and reliable function. We offer full dentures, partial dentures, and implant-supported options.',
        procedure: [
            'Initial consultation and impressions',
            'Jaw relationship recording',
            'Try-in appointment',
            'Final denture delivery',
            'Adjustment visits',
        ],
        recoveryTime: '1-2 weeks adjustment',
        icon: <Smile size={40} />,
    },

    // Surgical & Advanced
    {
        slug: 'dental-implants',
        name: 'Dental Implants',
        category: 'Surgical & Advanced Treatments',
        categoryId: 'surgical',
        shortDescription: 'The gold standard for replacing missing teeth.',
        description:
            'Dental implants provide a permanent, natural-looking solution for missing teeth. Our implant specialists use 3D-guided surgery for precise placement, ensuring optimal outcomes with minimal discomfort.',
        procedure: [
            '3D CBCT scan and planning',
            'Guided implant placement surgery',
            'Healing period (osseointegration)',
            'Abutment placement',
            'Custom crown attachment',
        ],
        recoveryTime: '3-6 months total',
        icon: <Anchor size={40} />, // Permanent fixture
    },
    {
        slug: 'root-canal-treatment',
        name: 'Root Canal Treatment',
        category: 'Surgical & Advanced Treatments',
        categoryId: 'surgical',
        shortDescription: 'Pain-free preservation of natural teeth.',
        description:
            'Root canal treatment saves severely damaged or infected teeth. Using advanced rotary instruments and microscopic precision, our endodontic procedures are virtually painless and highly successful.',
        procedure: [
            'Diagnosis and X-ray',
            'Local anesthesia administration',
            'Pulp removal and canal cleaning',
            'Canal shaping and disinfection',
            'Permanent filling and crown',
        ],
        recoveryTime: '2-3 days mild discomfort',
        icon: <Activity size={40} />, // Vitality/Endo
    },
    {
        slug: 'periodontal-treatment',
        name: 'Periodontal Treatment',
        category: 'Surgical & Advanced Treatments',
        categoryId: 'surgical',
        shortDescription: 'Advanced gum care and surgery.',
        description:
            'Healthy gums are the foundation of a healthy smile. Our periodontal treatments range from deep cleaning (scaling and root planing) to advanced surgical procedures for gum regeneration and bone grafting.',
        procedure: [
            'Periodontal evaluation',
            'Deep cleaning (scaling & root planing)',
            'Antibiotic therapy if needed',
            'Surgical intervention if required',
            'Maintenance program',
        ],
        recoveryTime: '1-2 weeks',
        icon: <HeartPulse size={40} />, // Gum health
    },
    {
        slug: 'laser-treatment',
        name: 'Laser Treatment',
        category: 'Surgical & Advanced Treatments',
        categoryId: 'surgical',
        shortDescription: 'Minimally invasive soft tissue procedures.',
        description:
            'Our advanced dental laser technology enables minimally invasive procedures with faster healing, less pain, and superior precision. Ideal for gum therapy, teeth whitening, and soft tissue management.',
        procedure: [
            'Assessment and treatment planning',
            'Laser calibration',
            'Precision laser application',
            'Post-procedure care',
            'Follow-up evaluation',
        ],
        recoveryTime: '24-48 hours',
        icon: <Sun size={40} />, // Laser/light
    },

    // Orthodontics
    {
        slug: 'orthodontic-treatment',
        name: 'Orthodontic Treatment',
        category: 'Orthodontics',
        categoryId: 'ortho',
        shortDescription: 'Braces and aligners for teeth alignment.',
        description:
            'Whether you prefer traditional braces or invisible aligners, our orthodontic specialists create personalized treatment plans for a perfectly aligned, confident smile. We treat patients of all ages with the latest techniques.',
        procedure: [
            'Comprehensive orthodontic assessment',
            'Digital scanning and treatment planning',
            'Appliance selection and placement',
            'Regular adjustment appointments',
            'Retainer fitting and maintenance',
        ],
        recoveryTime: '12-24 months treatment',
        icon: <Ruler size={40} />, // Alignment/Measure
    },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
    return TREATMENTS.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(categoryId: string): Treatment[] {
    return TREATMENTS.filter((t) => t.categoryId === categoryId);
}
