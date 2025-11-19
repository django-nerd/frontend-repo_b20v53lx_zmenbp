import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(600px_200px_at_0%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(600px_200px_at_100%_40%,rgba(8,145,178,0.2),transparent_40%)]" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} TwoDev Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
