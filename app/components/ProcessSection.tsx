import WeatherDecorations from './WeatherDecorations';

const schedule = [
  {
    time: '07:00',
    label: 'Morning',
    title: 'Start Your Day Right',
    desc: 'Temperature, clouds, and wind — everything you need before stepping out.',
  },
  {
    time: '13:00',
    label: 'Afternoon',
    title: 'Midday Check-In',
    desc: 'Fresh data to help you plan the rest of your day with confidence.',
  },
  {
    time: '18:00',
    label: 'Evening',
    title: 'Evening Outlook',
    desc: 'Know what tonight and tomorrow morning hold before you wind down.',
  },
];

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24 relative">
      <WeatherDecorations variant="process" />
      <div className="text-center mb-16 relative z-10">
        <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
          How It Works
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Three Steps to <span className="text-[#1157f2]">Smarter Days</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Simple setup. Powerful results. Weather on your schedule.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16 relative z-10">
        {[
          { step: '01', title: 'Sign Up', desc: 'Enter your name and email in seconds.' },
          { step: '02', title: 'We Track', desc: 'Your info is stored securely in our system.' },
          { step: '03', title: 'You Receive', desc: 'Forecasts land in your inbox 3× daily.' },
        ].map((item) => (
          <div key={item.step} className="glass-card p-8 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 text-5xl font-black text-[#1157f2]/10">
              {item.step}
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1157f2] text-white font-bold text-sm flex items-center justify-center mx-auto mb-5">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        {schedule.map((item) => (
          <div
            key={item.label}
            className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all group"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl font-bold text-white">{item.time}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary px-2 py-1 rounded-full bg-[#1157f2]/15">
                {item.label}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
