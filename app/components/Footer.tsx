import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#091633] border-t border-[#1157f2]/20 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo size="md" />
          <p className="text-white/60 text-sm max-w-xs text-center md:text-left">
            Daily Mogadishu weather forecasts delivered directly to your inbox.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-white/80">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/privacy" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Weather Automation. All rights reserved.| Developed by Ahmed Taaha
      </div>
      <div className="text-muted-foreground mt-4">
        Questions? Reach out: <a href="mailto:jawiskies@gmail.com" className="text-[#1157f2] hover:underline">jawiskies@gmail.com</a>
      </div>
    </footer>
  );
} 