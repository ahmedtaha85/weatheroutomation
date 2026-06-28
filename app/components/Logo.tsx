// Logo.tsx
import Image from 'next/image';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const sizes = {
  sm: { h: 40, w: 160 },
  md: { h: 64, w: 256 },
  lg: { h: 96, w: 384 },
  xl: { h: 128, w: 512 }
};

export default function Logo({ size = 'md' }: LogoProps) {
  const { h, w } = sizes[size];

  return (
    <div style={{ height: `${h}px`, width: `${w}px` }} className="relative flex items-center justify-center">
      <Image
        // Path-ka saxda ah markuu ku jiro public folder-ka
        src="/assets/images/Logo/JAWISKIES-03.png"
        alt="Jawi Skies "
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}