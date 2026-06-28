export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 md:py-32 text-center overflow-hidden px-6">
      {/* Background gradients and grid remain the same */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(17, 87, 242, 0.25) 0%, transparent 70%)' }} />

      <div className="absolute inset-0 pointer-events-none animate-grid-fade" aria-hidden="true" style={{ backgroundImage: `linear-gradient(rgba(17, 87, 242, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 87, 242, 0.12) 1px, transparent 1px)`, backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }} />

      {/* Halkan ayaan ka saaray <Logo /> component-ka */}

      <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1157f2]/30 bg-[#1157f2]/10 text-[#1157f2] text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#1157f2] animate-pulse" />
        Mogadishu, Somalia
      </div>

      <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.1] text-white animate-fade-up" style={{ animationDelay: '0.3s' }}>
        Weather Intelligence, <span className="text-gradient">Delivered Daily</span>
      </h1>

      <p className="relative text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
        Accurate Mogadishu forecasts sent straight to your inbox — morning, afternoon, and evening. Plan smarter, every day.
      </p>

      {/* Buttons & Stats remain same... */}
    </section>
  );
}