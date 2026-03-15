import React from 'react';
import { ShieldCheck, Sparkles, Crown } from 'lucide-react';

export const SERVICES_DATA = [
    {
        slug: 'cosmetic-dentistry',
        icon: <Sparkles size={32} />,
        title: 'Cosmetic Dentistry',
        description: 'Transform your smile with veneers, whitening, and complete makeovers.',
        features: ['Digital Smile Design', 'Porcelain Veneers', 'Teeth Whitening'],
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
    },
    {
        slug: 'dental-implants',
        icon: <Crown size={32} />,
        title: 'Dental Implants',
        description: 'Permanent, natural-looking solutions for missing teeth.',
        features: ['Single Tooth Replacement', 'Implant Bridges', 'Full Arch Restoration'],
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800'
    },
    {
        slug: 'orthodontics',
        icon: <ShieldCheck size={32} />,
        title: 'Orthodontics',
        description: 'Straighten your teeth with invisible aligners or traditional braces.',
        features: ['Invisalign', 'Clear Braces', 'Early Intervention'],
        image: 'https://images.unsplash.com/photo-1598256989494-0263856308b9?auto=format&fit=crop&q=80&w=800'
    },
    {
        slug: 'root-canal',
        icon: <Sparkles size={32} />, // Using Sparkles as placeholder if dedicated icon not available yet
        title: 'Root Canal Treatment',
        description: 'Save your natural tooth with our painless, microscopic endodontics.',
        features: ['Single Sitting RCT', 'Microscopic Endodontics', 'Post & Core'],
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800'
    },
    {
        slug: 'kids-dentistry',
        icon: <Crown size={32} />,
        title: 'Pediatric Dentistry',
        description: 'Gentle, fun, and fearless dental care for your little ones.',
        features: ['Fluoride Application', 'Pit & Fissure Sealants', 'Habit Breaking'],
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
    },
    {
        slug: 'laser-dentistry',
        icon: <ShieldCheck size={32} />,
        title: 'Laser Dentistry',
        description: 'Advanced laser technology for painless gum surgeries and healing.',
        features: ['Gum Contouring', 'Depigmentation', 'Laser Disinfection'],
        image: 'https://images.unsplash.com/photo-1598256989494-0263856308b9?auto=format&fit=crop&q=80&w=800'
    },
];

export const TESTIMONIALS_ROW1 = [
    {
        text: "The best and most experienced doctor ever. Literally my 12-year infection was treated within 15 days. The best ever — thank you Dr. Vidhya Sagar!",
        name: "Varshini V.",
        role: "Infection Treatment",
        initials: "VV"
    },
    {
        text: "More than a doctor, a true gentleman and best person. Seeing Dr. Sagar Sir since my childhood and he always had the end solution to my dental problems. Thanks sir for serving an admirable true service.",
        name: "Ram Charan",
        role: "General Dental Care",
        initials: "RC"
    },
    {
        text: "Reliable and trustworthy destination for all dental needs, serving patients for several years. The treatment options are on par with the latest procedures to ensure you're on the path to recovery.",
        name: "Balaji B.",
        role: "General Dental Care",
        initials: "BB"
    },
    {
        text: "Finding a heart surgeon is easy but not a good dentist, in my opinion. But Dr. Sagar is adept and kind. He is so proficient in what he does and quick as well. I have had 2 RCTs and a wisdom tooth extraction — no issues even after 5 years of his treatment.",
        name: "Bhavana",
        role: "Wisdom Tooth Extraction & RCT",
        initials: "BH"
    },
];

export const TESTIMONIALS_ROW2 = [
    {
        text: "We have been visiting from our childhood — even my daughter got her cavity treated at this clinic. His friendliness and care make us happy. I recommend visiting the clinic once if you have any dental concern.",
        name: "Saritha",
        role: "Dental Cavities & Tooth Decay",
        initials: "SA"
    },
    {
        text: "My friend suggested Sagar Dental Clinic. We visited and consulted with Dr. Vidhya Sagar. The clinic staff is very humble and supportive. The doctor listens to patients patiently. My wife's teeth are fine now — thank you Sagar Clinic!",
        name: "Anil P.",
        role: "Oral Rehabilitation",
        initials: "AP"
    },
    {
        text: "Very good treatment, friendly and communicative. Quite an experienced professional.",
        name: "Sridhara N.",
        role: "General Dental Care",
        initials: "SN"
    },
    {
        text: "Excellent treatment and experienced. Most highly qualified certified doctor is available.",
        name: "SM Nagaraj Y.",
        role: "General Dental Care",
        initials: "NY"
    },
];
