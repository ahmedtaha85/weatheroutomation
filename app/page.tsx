import BackgroundEffects from './components/BackgroundEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import SubscribeForm from './components/SubscribeForm';
import Footer from './components/Footer';
import WeatherDecorations from './components/WeatherDecorations';

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />

        <section id="subscribe" className="max-w-6xl mx-auto px-6 py-24 relative">
          <WeatherDecorations variant="subscribe" />
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden z-10">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3 relative">
              Stay Informed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative text-white">
              Never Miss the <span className="text-gradient">Forecast</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10 relative">
              Join thousands getting Mogadishu weather delivered to their inbox — free, daily, and on time.
            </p>
            <div className="relative">
              <SubscribeForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
