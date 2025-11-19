import { Code2, ShoppingCart, Search, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Code2,
    title: 'Custom Websites',
    desc: 'Tailored, performant websites built with modern stacks and clean code.',
  },
  {
    icon: ShoppingCart,
    title: 'E‑commerce',
    desc: 'Conversion‑focused storefronts with secure checkout and integrations.',
  },
  {
    icon: Search,
    title: 'SEO',
    desc: 'Technical SEO, structured data, and content architecture that ranks.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    desc: 'Reliable updates, monitoring, and support to keep things running.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="text-slate-300 mt-2">Full‑stack craftsmanship with a product mindset.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 hover:border-white/20 transition-colors">
              <div className="inline-flex w-11 h-11 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-white mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
