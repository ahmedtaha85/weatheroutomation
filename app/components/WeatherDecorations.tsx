type WeatherDecorationsProps = {
  variant?: 'about' | 'process' | 'subscribe' | 'global';
};

export default function WeatherDecorations({ variant = 'global' }: WeatherDecorationsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sun — top right, subtle */}
      <svg
        className={`absolute text-[#1157f2]/20 animate-float ${variant === 'about' ? 'top-8 right-8 w-24 h-24' : 'top-4 right-4 w-16 h-16 opacity-60'}`}
        style={{ animationDelay: '0s' }}
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="32" r="14" fill="currentColor" opacity="0.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="32"
            y1="8"
            x2="32"
            y2="14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${deg} 32 32)`}
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Cloud — left side */}
      <svg
        className={`absolute text-white/10 animate-float ${variant === 'process' ? 'top-20 left-4 w-40 h-24' : 'top-1/3 left-6 w-28 h-16'}`}
        style={{ animationDelay: '2s' }}
        viewBox="0 0 120 70"
        fill="currentColor"
      >
        <ellipse cx="45" cy="45" rx="30" ry="22" />
        <ellipse cx="75" cy="38" rx="35" ry="26" />
        <ellipse cx="55" cy="28" rx="22" ry="18" />
      </svg>

      {/* Cloud — bottom right, smaller */}
      <svg
        className="absolute bottom-16 right-10 w-20 h-12 text-white/8 animate-float"
        style={{ animationDelay: '4s' }}
        viewBox="0 0 120 70"
        fill="currentColor"
      >
        <ellipse cx="40" cy="45" rx="25" ry="18" />
        <ellipse cx="70" cy="40" rx="30" ry="20" />
      </svg>

      {/* Rain drops — scattered, very subtle */}
      {[
        { left: '15%', top: '60%', delay: '1s', size: 8 },
        { left: '22%', top: '72%', delay: '2.5s', size: 6 },
        { left: '78%', top: '55%', delay: '3s', size: 7 },
        { left: '85%', top: '68%', delay: '1.5s', size: 5 },
        { left: '70%', top: '80%', delay: '4s', size: 6 },
      ].map((drop, i) => (
        <svg
          key={i}
          className="absolute text-[#1157f2]/25 animate-float"
          style={{ left: drop.left, top: drop.top, animationDelay: drop.delay, width: drop.size, height: drop.size * 1.4 }}
          viewBox="0 0 12 16"
          fill="currentColor"
        >
          <path d="M6 0C3 4 0 8 0 11a6 6 0 1012 0c0-3-3-7-6-11z" />
        </svg>
      ))}
    </div>
  );
}
