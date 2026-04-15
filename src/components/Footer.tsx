export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-neutral-800 px-8 py-6 flex items-center justify-between text-xs text-neutral-500">
      <span className="font-branding lowercase">obscurus labs</span>
      <span>&copy; {new Date().getFullYear()} obscurus labs. all rights reserved.</span>
    </footer>
  );
}
