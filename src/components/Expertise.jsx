import { Sparkles, Rocket, ShieldCheck, Gauge } from 'lucide-react'

const items = [
  { icon: Sparkles, title: 'Design systems', desc: 'Consistent, scalable UI libraries.' },
  { icon: Rocket, title: 'Performance', desc: 'Lighthouse‑green scores by default.' },
  { icon: ShieldCheck, title: 'Quality', desc: 'Type safety, testing, and CI baked in.' },
  { icon: Gauge, title: 'DX focused', desc: 'Developer‑first workflows for speed.' },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our expertise</h2>
          <p className="text-slate-300 mt-2">We blend product thinking, design, and engineering.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="inline-flex w-11 h-11 items-center justify-center rounded-lg bg-white/10 text-white mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
