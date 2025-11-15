import { useState } from 'react'
import {
  Sparkles,
  Compass,
  Feather,
  Heart,
  Moon,
  Mail,
  ArrowRight,
  Star
} from 'lucide-react'

function Starfield() {
  // Decorative starfield using absolute positioned dots
  const stars = Array.from({ length: 80 })
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((_, i) => {
        const left = Math.random() * 100
        const top = Math.random() * 100
        const size = Math.random() * 2 + 1
        const opacity = Math.random() * 0.6 + 0.2
        const twinkle = Math.random() > 0.5
        return (
          <span
            key={i}
            className={`absolute rounded-full bg-amber-200/80 shadow-[0_0_8px_rgba(245,197,93,0.35)] ${
              twinkle ? 'animate-pulse' : ''
            }`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity,
            }}
          />
        )
      })}
    </div>
  )
}

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0b1020] text-gray-300 relative">
      {/* Glow gradient background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
      </div>
      <Starfield />

      {/* Navigation */}
      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="h-6 w-6 text-amber-300" />
            <div>
              <p className="text-amber-300 font-semibold tracking-wide">The Lost Sock Society</p>
              <p className="text-xs text-gray-400">Where strays find their way home</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300/80">
            <a href="#how" className="hover:text-amber-300 transition-colors">How it works</a>
            <a href="#story" className="hover:text-amber-300 transition-colors">Our story</a>
            <a href="#pricing" className="hover:text-amber-300 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-8 pb-16 md:pt-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-white/5 px-3 py-1 text-xs text-amber-200/90 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                A monthly match for the socks you miss
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-gray-100">
                For every orphaned sock,
                <span className="block text-amber-300">a second chance.</span>
              </h1>
              <p className="mt-5 text-lg text-gray-300/90 leading-relaxed">
                We search the quiet places—behind radiators, beneath moonlit laundry lines—
                and send you a single, beautiful, high‑quality sock to heal what7s been lost.
                Mysterious. A little sad. Always hopeful.
              </p>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@homeforlostthings.com"
                      className="w-full rounded-md bg-white/5 pl-11 pr-4 py-3 text-gray-100 placeholder-gray-500 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-amber-300/60 transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center rounded-md bg-amber-300 text-[#0b1020] font-semibold px-5 py-3 shadow-lg shadow-amber-300/20 hover:bg-amber-200 transition"
                  >
                    Begin the search
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
                {submitted && (
                  <p className="mt-3 text-sm text-amber-200/90">
                    Thank you. A quiet courier has been dispatched. Check your inbox for a note from us.
                  </p>
                )}
              </form>

              <div className="mt-6 flex items-center gap-6 text-sm text-gray-400/90">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-300" />
                  Ethically sourced, unmatched quality
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-amber-300" />
                  1% to shelters & warm‑clothing drives
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-300/20 via-transparent to-sky-400/10 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-amber-300/20 border border-amber-300/30 flex items-center justify-center">
                        <Feather className="h-8 w-8 text-amber-300" />
                      </div>
                      <p className="text-amber-200 font-medium tracking-wide">Single Sock Subscription</p>
                      <p className="mt-2 text-sm text-gray-400">
                        Loomed with care. Dyed in midnight hues. Sent with a story stitched inside the cuff.
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-left text-sm">
                        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-300" /> Merino & bamboo blends</div>
                        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-300" /> Cozy, durable knit</div>
                        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-300" /> Story card enclosed</div>
                        <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-300" /> Plastic‑free wrap</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/15 border border-amber-300/30">
                <Compass className="h-5 w-5 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">We seek</h3>
              <p className="mt-2 text-sm text-gray-400">Our finders comb the lintways and forgotten corners, searching for patterns that call to yours.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/15 border border-amber-300/30">
                <Feather className="h-5 w-5 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">We match</h3>
              <p className="mt-2 text-sm text-gray-400">Not identical—never that—but kindred. A sock that understands the one you lost.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300/15 border border-amber-300/30">
                <Heart className="h-5 w-5 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">We deliver</h3>
              <p className="mt-2 text-sm text-gray-400">Once a month, a single sock arrives—soft as a sigh, sturdy as morning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-amber-300">A small elegy for things that wander</h2>
            <p className="mt-4 leading-relaxed text-gray-300/90">
              Somewhere between washer and dawn, a sock slips the world. We light a candle for it, and another for you.
              The Lost Sock Society began as a whisper in a laundromat—an oath to mend small griefs with gentle craft.
            </p>
            <p className="mt-4 leading-relaxed text-gray-300/90">
              Each parcel carries a note, a thread of story, and a promise: that even what7s missing can be met with grace.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-100">Choose your belonging</h2>
              <p className="mt-3 text-gray-400">A simple plan, honest materials, and devotion to comfort.</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300/90">
                <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-amber-300"/> Midnight blue, warm gold, and soft grey palettes</li>
                <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-amber-300"/> Inclusive sizes, gentle cuffs</li>
                <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-amber-300"/> Cancel anytime—though we hope you stay</li>
              </ul>
            </div>
            <div>
              <div className="relative rounded-3xl border border-amber-300/30 bg-amber-300/10 p-8">
                <div className="absolute -top-4 -right-4 rounded-full bg-amber-300 text-[#0b1020] text-xs font-semibold px-3 py-1 shadow">Most loved</div>
                <h3 className="text-2xl font-semibold text-amber-200">The Pilgrim</h3>
                <p className="mt-2 text-gray-200/80">One single, beautiful sock delivered every month.</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-bold text-gray-100">$7</span>
                  <span className="text-gray-400 mb-1">/ month</span>
                </div>
                <button
                  onClick={() => setSubmitted(true)}
                  className="mt-6 w-full rounded-md bg-amber-300 px-5 py-3 font-semibold text-[#0b1020] shadow-lg shadow-amber-300/20 hover:bg-amber-200 transition"
                >
                  Start your first match
                </button>
                <p className="mt-3 text-xs text-gray-600">Free domestic post. International: small sigh of $3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-gray-100">Questions, softly answered</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Will the sock match exactly?',
                a: 'No. We believe in kindship over clones. Your match will harmonize with pattern, palette, or spirit.'
              },
              {
                q: 'What sizes do you offer?',
                a: 'From delicate to gallant. We ask your size at checkout and knit accordingly.'
              },
              {
                q: 'Materials?',
                a: 'Merino, bamboo, and a hint of moonlight. Never itchy. Always kind.'
              },
              {
                q: 'Can I pause or cancel?',
                a: 'Yes—anytime. Life wanders; we understand.'
              }
            ].map(({ q, a }, idx) => (
              <details key={idx} className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10 transition">
                <summary className="cursor-pointer list-none select-none flex items-center justify-between">
                  <span className="text-gray-100 font-medium">{q}</span>
                  <span className="text-amber-300 group-open:rotate-90 transition-transform">›</span>
                </summary>
                <p className="mt-3 text-sm text-gray-300/90">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Moon className="h-4 w-4 text-amber-300" />
            <span className="text-sm">The Lost Sock Society  B7 Since a Tuesday long ago</span>
          </div>
          <div className="text-xs text-gray-500">
            Crafted with care in midnight blue, warm gold, and soft grey.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
