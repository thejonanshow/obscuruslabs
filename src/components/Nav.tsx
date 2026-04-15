export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <div className="font-branding text-xl lowercase tracking-tight">
        obscurus <span className="text-neutral-500">labs</span>
      </div>
      <div className="flex items-center gap-8 text-sm text-neutral-400">
        <a href="#product" className="hover:text-white transition-colors">product</a>
        <a href="#tech" className="hover:text-white transition-colors">tech</a>
        <a href="#faq" className="hover:text-white transition-colors">faq</a>
      </div>
    </nav>
  );
}
