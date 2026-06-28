'use client';

import WeatherDecorations from './WeatherDecorations';
// Halkan ayaan ka saxnay import-ka si uu u tilmaamo app/paths.ts
import { DECOR_CLOUD, DECOR_RAIN, DECOR_SUN } from '../paths';

function hideOnError(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.display = 'none';
}

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#091633]" aria-hidden="true">
      <WeatherDecorations variant="global" />

      <img
        src={DECOR_SUN}
        alt=""
        onError={hideOnError}
        className="absolute top-[8%] right-[5%] w-28 md:w-36 opacity-[0.12] animate-float object-contain"
      />
      <img
        src={DECOR_CLOUD}
        alt=""
        onError={hideOnError}
        className="absolute top-[30%] left-[3%] w-40 md:w-52 opacity-[0.1] animate-float object-contain"
        style={{ animationDelay: '2s' }}
      />
      <img
        src={DECOR_CLOUD}
        alt=""
        onError={hideOnError}
        className="absolute bottom-[20%] right-[8%] w-32 opacity-[0.08] animate-float object-contain scale-x-[-1]"
        style={{ animationDelay: '3.5s' }}
      />
      <img
        src={DECOR_RAIN}
        alt=""
        onError={hideOnError}
        className="absolute bottom-[10%] left-[10%] w-36 md:w-48 opacity-[0.1] animate-float object-contain"
        style={{ animationDelay: '1.5s' }}
      />
      <img
        src={DECOR_RAIN}
        alt=""
        onError={hideOnError}
        className="absolute top-[50%] right-[15%] w-24 opacity-[0.08] animate-float object-contain"
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
}