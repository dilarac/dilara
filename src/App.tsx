import { useState } from 'react'
import { ArrowRight, Menu, X, Sparkle } from 'lucide-react'

const BRAND = 'Janus Studio'
const NAV_LINKS = ['Work', 'Studio', 'Services', 'Contact']
const CTA_SECONDARY = 'Sign in'
const CTA_PRIMARY = 'Book a call'
const HEADLINE = 'Two faces. One vision.'
const SUBTEXT =
  'Janus Studio crafts cinematic brand experiences that look both ways at once — honoring where you started, and designing where you are going.'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/janus-hero.mp4"
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-10 flex flex-col h-full">
        <nav className="liquid-glass rounded-full max-w-5xl w-[calc(100%-2rem)] mx-auto mt-6 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <Sparkle className="w-5 h-5" />
            <span>{BRAND}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-white text-sm">
              {CTA_SECONDARY}
            </a>
            <button
              type="button"
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm"
            >
              {CTA_PRIMARY}
            </button>
          </div>

          <button
            type="button"
            className="liquid-glass md:hidden rounded-full p-2 text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="liquid-glass md:hidden rounded-3xl max-w-5xl w-[calc(100%-2rem)] mx-auto mt-3 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-white/20">
              <a href="#" className="text-white text-sm">
                {CTA_SECONDARY}
              </a>
              <button
                type="button"
                className="liquid-glass rounded-full px-6 py-2 text-white text-sm"
              >
                {CTA_PRIMARY}
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-8">
            {HEADLINE}
          </h1>
          <p className="text-white/80 text-sm max-w-xl leading-relaxed mb-10">
            {SUBTEXT}
          </p>

          <form className="liquid-glass rounded-full flex items-center gap-2 p-1.5 w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none border-none text-white placeholder:text-white/50 text-sm px-4 py-2"
            />
            <button
              type="submit"
              className="flex-shrink-0 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors"
              aria-label="Submit email"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App
