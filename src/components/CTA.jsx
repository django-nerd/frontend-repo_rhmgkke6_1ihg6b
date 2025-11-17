export default function CTA() {
  return (
    <section className="bg-stone-900 text-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="rounded-lg border border-stone-700 bg-stone-900 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Make space for your best writing</h3>
            <p className="mt-2 text-stone-300">Start a cozy free trial. No credit card. Just words.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors">Start free</button>
            <button className="px-5 py-3 rounded-md border border-stone-600 text-stone-100 hover:bg-stone-800 transition-colors">Book a demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}
