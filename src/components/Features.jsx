export default function Features() {
  const features = [
    {
      title: 'A room of your own',
      desc: 'A focused editor with warm neutrals, soft contrast, and type that feels friendly. Built to make writing feel inviting.',
    },
    {
      title: 'Quiet power',
      desc: 'Outline, snippets, and version notes—there when you need them, out of sight when you don\'t.',
    },
    {
      title: 'Human-first AI',
      desc: 'Gentle suggestions that keep your voice. Rewrites, summaries, and tone shifts with a single prompt.',
    },
  ]

  return (
    <section id="features" className="bg-stone-50 text-stone-800">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Thoughtful tools, simple by design</h2>
          <p className="mt-3 text-stone-600">Everything feels familiar. Nothing gets in the way.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-stone-900">{f.title}</h3>
              <p className="mt-2 text-stone-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
