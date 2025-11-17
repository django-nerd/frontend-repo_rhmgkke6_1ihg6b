import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    // Nothing extra needed; Spline will load via iframe
  }, [])

  return (
    <section className="relative bg-stone-900 text-stone-100">
      <div className="absolute inset-0 -z-10">
        <iframe
          ref={ref}
          title="Cozy Workspace"
          src="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-28 sm:py-36">
        <div className="bg-stone-900/65 backdrop-blur-sm rounded-lg p-6 sm:p-8 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-50">Write warmly. Create clearly.</h1>
          <p className="mt-4 text-stone-200 leading-relaxed">A calm writing space that helps you shape ideas into thoughtful words. Minimal, cozy, and distraction-free—yet powerful when you need it.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-md bg-amber-600 text-stone-50 hover:bg-amber-700 transition-colors">Start free trial</button>
            <button className="px-5 py-3 rounded-md border border-stone-300/30 text-stone-100 hover:bg-stone-800 transition-colors">See how it works</button>
          </div>
          <p className="mt-3 text-sm text-stone-300">No gradients. No noise. Just you and your words.</p>
        </div>
      </div>
    </section>
  )
}
