import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#091633]/80 border-b border-[#1157f2]/20">
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 max-w-6xl mx-auto">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo size="md" />
        </a>
        <div className="flex items-center gap-5 md:gap-8 text-sm text-white">
          <a href="#about" className="hover:text-white/80 transition-colors hidden sm:inline">
            About
          </a>
          <a href="#how-it-works" className="hover:text-white/80 transition-colors hidden sm:inline">
            How It Works
          </a>
          <a href="/privacy" className="hover:text-white/80 transition-colors">
            Privacy
          </a>
          <a
            href="#subscribe"
            className="px-4 py-2 rounded-full bg-[#1157f2] text-white font-medium hover:bg-[#0f4ad4] transition-colors text-sm"
          >
            Subscribe
          </a>
        </div>
      </nav>
    </header>
  );
}
