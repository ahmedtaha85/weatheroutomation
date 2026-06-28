import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyAndTerms() {
  return (
    <div className="min-h-screen bg-[#091633] text-white selection:bg-[#1157f2]/30">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {/* Header-ka Bogga */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Center</h1>
            <p className="text-muted-foreground text-lg">
              Transparency, Trust, and Future Growth.
            </p>
          </div>

          {/* Privacy Policy */}
          <section className="glass-card p-8 rounded-3xl border border-[#1157f2]/10 bg-white/5">
            <h2 className="text-2xl font-bold mb-6 text-[#1157f2]">1. Privacy Policy</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Your trust is our priority. When you subscribe to Jawi Skies, we collect your email address
              exclusively for the purpose of delivering weather forecasts.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>We never share, sell, or rent your data to third parties.</li>
              <li>You can unsubscribe at any time with one click.</li>
              <li>Your data is stored securely and used only for service delivery.</li>
            </ul>
          </section>

          {/* Vision & Expansion */}
          <section className="glass-card p-8 rounded-3xl border border-[#1157f2]/10 bg-white/5">
            <h2 className="text-2xl font-bold mb-6 text-[#1157f2]">2. Our Vision & Expansion</h2>
            <p className="text-white/80 leading-relaxed">
              Jawi Skies is a passion project built by <span className="font-bold text-white">Ahmed Taaha Abass</span>.
              While we are currently providing high-precision data for <strong>Mogadishu</strong>,
              our roadmap includes scaling our weather modeling infrastructure to serve <strong>every region in Somalia</strong>.
              We are committed to continuous development and innovation.
            </p>
          </section>

          {/* Terms of Service */}
          <section className="glass-card p-8 rounded-3xl border border-[#1157f2]/10 bg-white/5">
            <h2 className="text-2xl font-bold mb-6 text-[#1157f2]">3. Terms of Service</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p><strong>Accuracy:</strong> Weather patterns are complex. While we use advanced data, our forecasts should be used as a guidance tool.</p>
              <p><strong>Acceptable Use:</strong> This service is intended for personal use. Users are prohibited from scraping or reselling our data without permission.</p>
              <p><strong>Updates:</strong> We may update these terms as we expand our service coverage across the country.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}