import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-white">
              <Code2 size={18} />
            </span>
            <span>TwoDev Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#expertise">Expertise</NavLink>
            <NavLink href="#portfolio">Work</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition-colors">
              Start a project
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink href="#services" onClick={close}>Services</NavLink>
            <NavLink href="#expertise" onClick={close}>Expertise</NavLink>
            <NavLink href="#portfolio" onClick={close}>Work</NavLink>
            <NavLink href="#pricing" onClick={close}>Pricing</NavLink>
            <NavLink href="#testimonials" onClick={close}>Testimonials</NavLink>
            <a href="#contact" onClick={close} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
