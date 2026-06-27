import Image from 'next/image';
import { OFFICIAL_LOGO } from '../../assets/images/Logo/paths';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

// Waxaan kordhinay cabbirka (h) iyo (w) si aan u hubinno inuu logo-gu u muuqdo mid weyn
const sizes = {
  sm: { h: 40, w: 160 },  // Navbar
  md: { h: 64, w: 256 },  // Standard
  lg: { h: 96, w: 384 },  // Hero
  xl: { h: 128, w: 512 }  // Xtra Large
};

export default function Logo({ size = 'md' }: LogoProps) {
  const { h, w } = sizes[size];

  return (
    <div
      style={{ height: `${h}px`, width: `${w}px` }}
      className="relative flex items-center justify-center"
    >
      <Image
        src={OFFICIAL_LOGO}
        alt=""
        fill
        className="object-contain" // Tani waxay hubinaysaa in sawirku uusan qalloocin
        priority
      />
    </div>
  );
}