// Logo.tsx
import Image from 'next/image';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};


const sizes = {
  sm: { h: 50, w: 250 },  // Header (aad u weynay si uu u soo baxo)
  md: { h: 80, w: 320 },  // Footer
  lg: { h: 120, w: 480 }, // Haddii aad meel kale u baahato
  xl: { h: 160, w: 640 }
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