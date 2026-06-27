export default function WeatherHero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-24 text-center overflow-hidden">
            <div className="absolute top-10 right-20 animate-float-cloud">
                <div className="w-32 h-16 bg-white/20 rounded-full blur-xl" />
            </div>

            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-sun bg-clip-text text-transparent animate-sun-pulse">
                Jawi Skies
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-10">
                Precision atmospheric insights. Accurate, professional, and delivered to your inbox.
            </p>

            <button className="bg-sky text-white px-10 py-4 rounded-full font-bold shadow-glow hover:scale-105 transition-transform">
                Get Started
            </button>
        </section>
    );
}