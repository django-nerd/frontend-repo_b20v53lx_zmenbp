const testimonials = [
  {
    quote: 'They delivered beyond expectations. Clean code, clear communication, and a smooth process from start to finish.',
    name: 'Ava Thompson',
    role: 'Founder, Northwind',
  },
  {
    quote: 'Our conversion rates jumped 35% after the redesign. They care about outcomes, not just output.',
    name: 'Michael Park',
    role: 'Head of Growth, Lumina',
  },
  {
    quote: 'Super collaborative and detail‑oriented. Performance and accessibility were top‑notch.',
    name: 'Sofia Martinez',
    role: 'PM, Peak Labs',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Clients say nice things</h2>
        <p className="text-slate-300 mt-2">We build lasting partnerships through craft and candor.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">
                <p className="text-white font-medium">{t.name}</p>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
