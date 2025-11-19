import { motion } from 'framer-motion'

const projects = [
  { title: 'SaaS Dashboard', tag: 'React • Tailwind', img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop' },
  { title: 'E‑commerce Store', tag: 'Next.js • Stripe', img: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Marketing Site', tag: 'Vite • Headless CMS', img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Mobile App Landing', tag: 'Framer Motion', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Analytics Portal', tag: 'FastAPI • Mongo', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Portfolio', tag: 'Minimal • SEO', img: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="text-slate-300 mt-2">A snapshot of projects we’ve shipped.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10">Start a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-slate-400 text-sm">{p.tag}</p>
                </div>
                <span className="text-slate-300 text-sm">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
