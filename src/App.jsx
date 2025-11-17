import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stories from './components/Stories'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
      <Features />
      <Stories />
      <CTA />
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-amber-600/90 flex items-center justify-center text-stone-50 font-bold">W</div>
            <span>WarmWrite</span>
          </div>
          <p className="text-center">© {new Date().getFullYear()} WarmWrite, Inc. Cozy tools for clear writing.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-800">Privacy</a>
            <a href="#" className="hover:text-stone-800">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
