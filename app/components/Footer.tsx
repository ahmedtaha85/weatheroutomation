export default function Footer() {
  return (
    <div className="flex flex-col items-center py-10 bg-[#091633] border-t border-white/10">
      {/* Logo-ga Footer-ka oo ka sii weyn midka header-ka */}
      <img
        src="/assets/images/Logo/JAWISKIES-03.png"
        alt="Jawi Skies"
        className="w-[180px] h-auto object-contain mb-4 opacity-80"
      />
      <p className="text-xs text-gray-400">&copy; 2026 Jawi Skies. Mogadishu, Somalia.</p>
      <p className="text-[10px] text-gray-500 mt-1">Powered by Ahmed Taaha Abass</p>
    </div>
  );
}