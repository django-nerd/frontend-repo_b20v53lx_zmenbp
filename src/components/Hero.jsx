import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Custom-built web experiences by two developers
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-6 text-lg text-slate-300 max-w-xl">
                We design, build, and ship fast, accessible websites and apps. Minimalist design, robust engineering, and a friendly, transparent process.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">
                  Get a free estimate
                </a>
                <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                  See our work
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.3 }} className="mt-10 grid grid-cols-3 sm:flex sm:flex-wrap gap-6 text-sm text-slate-300">
                <div>
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p>years each</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p>projects shipped</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p>client satisfaction</p>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[420px] sm:h-[520px] lg:h-[680px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/30 shadow-[0_0_80px_rgba(59,130,246,0.15)]">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
