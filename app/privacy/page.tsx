import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Jawi Skies',
  description: 'Privacy Policy for Jawi Skies Mogadishu weather email service.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#091633] text-foreground">
      <header className="border-b border-[#1157f2]/20 py-6 px-6">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white font-semibold hover:text-[#1157f2] transition-colors">
            ← Back to Jawi Skies
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 prose prose-invert prose-headings:text-white prose-p:text-muted-foreground prose-li:text-muted-foreground">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 25, 2026</p>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
            <p>
              Jawi Skies (&quot;we&quot;, &quot;our&quot;) provides a free Mogadishu weather email
              service. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>When you subscribe, we collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Subscription date and active status</li>
            </ul>
            <p className="mt-2">We do not collect passwords, payment details, or precise location data.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Send Mogadishu weather forecasts 3 times daily (07:00, 13:00, 18:00 Mogadishu time)</li>
              <li>Maintain your subscription and prevent duplicate sign-ups</li>
              <li>Improve our service reliability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Storage & Security</h2>
            <p>
              Your data is stored securely in Supabase (cloud database). We use industry-standard
              security practices including encrypted connections and access controls. Only authorized
              systems can read subscriber data for email delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
            <p>We use trusted providers to operate the service:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-white">Supabase</strong> — data storage</li>
              <li><strong className="text-white">Resend</strong> — email delivery</li>
              <li><strong className="text-white">OpenWeatherMap</strong> — weather data</li>
            </ul>
            <p className="mt-2">These providers process data only as needed to deliver the service.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to your stored data</li>
              <li>Request correction of your name or email</li>
              <li>Request deletion / unsubscribe at any time</li>
            </ul>
            <p className="mt-2">
              To unsubscribe or delete your data, contact us at{' '}
              <a href="mailto:support@jawiskies.com" className="text-[#1157f2] hover:underline">
                support@jawiskies.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p>
              Our website may use essential cookies for session management via Supabase. We do not
              use advertising or tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children</h2>
            <p>
              Jawi Skies is not directed at children under 13. We do not knowingly collect data
              from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes</h2>
            <p>
              We may update this policy. Changes will be posted on this page with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              Questions about this policy? Email{' '}
              <a href="mailto:support@jawiskies.com" className="text-[#1157f2] hover:underline">
                support@jawiskies.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
