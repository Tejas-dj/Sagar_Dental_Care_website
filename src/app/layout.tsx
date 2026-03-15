import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sagar Dental Care — Best Dentist in Krishnarajapuram, Bengaluru',
    template: '%s | Sagar Dental Care',
  },
  description:
    'Sagar Dental Care — 27 years of trusted dental excellence in Krishnarajapuram, Bengaluru. Specializing in dental implants, cosmetic dentistry, orthodontics, laser dentistry, and full mouth rehabilitation.',
  keywords: [
    'dentist in Krishnarajapuram',
    'dental clinic Bengaluru',
    'dental implants Bengaluru',
    'cosmetic dentistry',
    'orthodontics',
    'laser dentistry',
    'root canal treatment',
    'Sagar Dental Care',
    'best dentist KR Puram',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
