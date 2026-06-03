function Navbar() {
  return (
    <nav className="mx-auto w-full max-w-7xl px-6 pt-6 pb-2 md:px-10 flex flex-row items-center justify-between text-slate-200">
      <h2 className="text-sm font-bold tracking-widest uppercase text-slate-100 flex items-center gap-2 m-0">
        <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></span>
        BUILDER.PORTFOLIO
      </h2>
      <p className="text-xs font-mono text-slate-400 bg-[#16223f] px-3 py-1 rounded-md border border-[#20315c] tracking-tight">
        STATUS // ACTIVE GROWTH
      </p>
    </nav>
  )
}

export default Navbar
