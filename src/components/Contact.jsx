import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
          budget: e.target.budget.value,
        }),
      })

      if (res.ok) {
        setStatus('Thanks! We will be in touch shortly.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tell us about your project</h2>
          <p className="text-slate-300 mt-2">We’re two developers. You’ll work directly with us.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Your name</label>
              <input required name="name" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input required name="email" type="email" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Budget</label>
              <select name="budget" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option className="bg-slate-900">$2,500 – $5,000</option>
                <option className="bg-slate-900">$5,000 – $10,000</option>
                <option className="bg-slate-900">$10,000+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex-1">
              <label className="block text-sm text-slate-300 mb-2">Project details</label>
              <textarea required name="message" rows="7" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are you building? Goals, timeline, references..."></textarea>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button type="submit" className="px-5 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-blue-50">Send</button>
              <p className="text-sm text-slate-400">{status}</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
