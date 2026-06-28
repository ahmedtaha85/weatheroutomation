import WeatherDecorations from './WeatherDecorations';

const features = [
  {
    icon: '📍',
    title: 'Mogadishu & Beyond',
    desc: 'Currently serving the capital, with plans to expand to all Somali regions.',
  },
  {
    icon: '⏰',
    title: 'Three Times Daily',
    desc: 'Morning, afternoon, and evening forecasts delivered right when you need them.',
  },
  {
    icon: '📧',
    title: 'Inbox Delivery',
    desc: 'No apps to install. Reliable weather data arrives directly in your email.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 relative">
      <WeatherDecorations variant="about" />

      {/* Header-ka Guud */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
          About Us
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Built for <span className="text-[#1157f2]">Somalia</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Precision weather insights designed to empower every Somali citizen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          {/* Qeybta Creator-ka */}
          <div className="glass-card p-8 rounded-2xl border border-[#1157f2]/20">
            <h3 className="text-xl font-bold text-white mb-3">Meet the Creator</h3>
            <p className="text-foreground/90 leading-relaxed">
              Jawi Skies waxaa aasaasay oo horumariyey <span className="font-bold text-[#1157f2]">Ahmed Taaha Abass</span>.
              Ujeeddadaydu waa inaan fududeeyo helitaanka xogta cimilada ee bulshada Soomaaliyeed,
              anigoo isticmaalaya teknoolajiyad casri ah si aan u taageero nolol maalmeedkaaga.
            </p>
          </div>

          {/* Qeybta Vision-ka */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hadda, Jawi Skies waxay diiradda saaraysaa inay siiso saadaasha cimilada ee saxda ah dadka ku nool
              Mogadishu. Si kastaba ha ahaatee, waxaa noo qorsheysan inaan adeeggan u ballaarino dhammaan
              gobollada dalka Soomaaliya, si uu qof kasta oo Soomaali ah u helo xog la isku halleyn karo.
            </p>
          </div>
        </div>

        {/* Features-ka */}
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