import WeatherDecorations from './WeatherDecorations';

const features = [
  {
    icon: '📍',
    title: 'Mogadishu Only',
    desc: 'Hyper-local forecasts built exclusively for the capital city.',
  },
  {
    icon: '⏰',
    title: 'Three Times Daily',
    desc: 'Morning, afternoon, and evening — right when you need them.',
  },
  {
    icon: '📧',
    title: 'Inbox Delivery',
    desc: 'No apps to install. Weather arrives directly in your email.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 relative">
      <WeatherDecorations variant="about" />
      <div className="text-center mb-16 relative z-10">
        <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
          About Us
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Built for <span className="text-[#1157f2]">Mogadishu</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Precision weather insights designed for the people who call this city home.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-foreground/90">
            Jawi Skies is a free weather service that delivers accurate Mogadishu
            forecasts three times a day — so you&apos;re never caught off guard.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you&apos;re heading to work, planning a trip, or organizing an
            outdoor event, our real-time data helps you make confident decisions
            every single day.
          </p>
        </div>

        <div className="grid gap-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 rounded-2xl hover:border-[#1157f2]/40 transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
