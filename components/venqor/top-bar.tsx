export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      {/* Subtle blur background */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md border-b border-slate-800/50" />

      {/* Logo */}
      <span className="relative font-semibold text-white text-lg tracking-[-0.04em] font-mono">
        Venqor
      </span>

      {/* CTA */}
      <button className="relative px-4 py-1.5 text-sm font-medium text-slate-300 border border-slate-700 rounded-lg hover:border-slate-500 hover:text-white transition-colors duration-200">
        Se connecter
      </button>
    </header>
  )
}
