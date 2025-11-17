import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur supports-[backdrop-filter]:bg-stone-50/70 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-amber-600/90 flex items-center justify-center text-stone-50 font-bold">W</div>
          <span className="text-stone-800 font-semibold tracking-tight">WarmWrite</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-stone-700">
          <a href="#features" className="hover:text-stone-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-stone-900 transition-colors">Pricing</a>
          <a href="#stories" className="hover:text-stone-900 transition-colors">Stories</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border border-stone-300 text-stone-800 hover:bg-stone-100 transition-colors">Sign in</button>
          <button className="px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800 transition-colors">Start writing</button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-stone-300 text-stone-700">
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-stone-700">
            <a href="#features" className="py-1">Features</a>
            <a href="#pricing" className="py-1">Pricing</a>
            <a href="#stories" className="py-1">Stories</a>
            <div className="flex items-center gap-3 pt-2">
              <button className="flex-1 px-4 py-2 rounded-md border border-stone-300 text-stone-800 hover:bg-stone-100 transition-colors">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-md bg-amber-700 text-white hover:bg-amber-800 transition-colors">Start</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
