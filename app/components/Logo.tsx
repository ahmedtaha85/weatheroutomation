import Image from 'next/image';
import { OFFICIAL_LOGO } from '../../assets/images/Logo/paths';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

// Hubi in qeybtan "sizes" ay ka horreyso function-ka Logo
const sizes = {
  sm: { h: 40, w: 160 },
  md: { h: 64, w: 256 },
  lg: { h: 96, w: 384 },
  xl: { h: 128, w: 512 }
};

export default function Logo({ size = 'md' }: LogoProps) {
  // Hadda `sizes` waa la aqoonsanayaa
  const { h, w } = sizes[size];

  return (
    <div
      style={{ height: `${h}px`, width: `${w}px` }}
      className="relative flex items-center justify-center"
    >
      <Image
        src={OFFICIAL_LOGO}
        alt="Jawi Skies Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}