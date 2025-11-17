export default function Stories() {
  const items = [
    {
      quote: 'It\'s the first editor that makes me want to write again. Calm, warm, and surprisingly capable.',
      author: 'Adriana, essayist'
    },
    {
      quote: 'The tone suggestions are subtle and kind. It helps without taking over my voice.',
      author: 'Marcus, product manager'
    },
    {
      quote: 'I draft in the morning light theme and edit at night with the cozy dark. It\'s just… pleasant.',
      author: 'Sana, novelist'
    }
  ]

  return (
    <section id="stories" className="bg-white text-stone-800">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Writers feel at home here</h2>
          <p className="mt-3 text-stone-600">Notes from people who spend their days with words.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <blockquote className="text-stone-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-stone-500">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
