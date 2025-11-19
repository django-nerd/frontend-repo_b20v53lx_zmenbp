const tiers = [
  {
    name: 'Starter',
    price: '$2,500+',
    features: ['1-3 pages', 'Custom design', 'Basic SEO', 'Analytics setup', '2 weeks delivery'],
  },
  {
    name: 'Growth',
    price: '$6,000+',
    featured: true,
    features: ['Up to 10 pages', 'CMS integration', 'Advanced SEO', 'Animations', '4-6 weeks delivery'],
  },
  {
    name: 'E‑commerce',
    price: '$9,000+',
    features: ['Products & checkout', 'Payments & tax', 'Email & CRM', 'Performance optimization', '6-8 weeks delivery'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing</h2>
          <p className="text-slate-300 mt-2">Transparent, value‑based packages. We also do custom quotes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 bg-slate-900/40 ${t.featured ? 'border-blue-400/40 shadow-[0_0_60px_rgba(59,130,246,0.2)]' : 'border-white/10'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                <span className="text-white text-2xl font-bold">{t.price}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-lg font-semibold transition-colors ${t.featured ? 'bg-white text-slate-900 hover:bg-blue-50' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                Request proposal
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
