import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[#1157f2]/15 mt-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo size="md" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#subscribe" className="hover:text-white transition-colors">
            Subscribe
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; 2026 Jawi Skies
        </div>
      </div>
    </footer>
  );
}
