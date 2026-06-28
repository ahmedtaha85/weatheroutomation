import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jawi Skies — Mogadishu Weather Forecasts',
  description:
    'Accurate Mogadishu weather forecasts delivered to your inbox three times daily. Morning, afternoon, and evening — free and always on time.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Waxaan ku daray overflow-x-hidden si loo joojiyo dhaq-dhaqaaqa horizontal-ka ah.
        min-h-screen waxay hubinaysaa in website-ku uu qaato ugu yaraan dhererka shaashadda oo dhan.
      */}
      <body className="antialiased overflow-x-hidden min-h-screen bg-[#091633]">
        {children}
      </body>
    </html>
  );
}