import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jawi Skies — Mogadishu Weather Forecasts',
  description:
    'Accurate Mogadishu weather forecasts delivered to your inbox three times daily. Morning, afternoon, and evening — free and always on time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
