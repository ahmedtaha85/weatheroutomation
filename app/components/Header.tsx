export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* Logo-ga Header-ka */}
      <img
        src="/assets/images/Logo/JAWISKIES-03.png"
        alt="Jawi Skies"
        className="w-[140px] h-auto object-contain"
      />
      <nav className="flex gap-6 text-sm font-medium">
        <a href="/about">About</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/privacy">Privacy</a>
        <a href="/subscribe" className="bg-blue-600 px-4 py-2 rounded-full text-white">Subscribe</a>
      </nav>
    </header>
  );
}