import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-96 w-96 bg-lime-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 bg-lime-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-lime-500/10 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-lime-400" />
          <span className="text-sm font-medium text-lime-300">Smart Ads. Real Growth.</span>
        </div>

        <div className="mb-8 max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Grow Your Business with
            <br />
            <span className="text-lime-400">Data-Driven</span> Digital
            <br />
            Marketing
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-400 sm:text-xl">
            ADSWITHABHI helps brands increase visibility, leads, and sales through powerful digital marketing strategies that deliver real results.
          </p>
        </div>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-lime-300">
            Get Free Audit
            <ArrowRight size={20} />
          </button>
          <button className="inline-flex items-center justify-center rounded-full border-2 border-lime-400 px-8 py-4 text-lg font-semibold text-lime-400 transition hover:bg-lime-400/10">
            Book a Strategy Call
          </button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/20">
              <svg className="h-4 w-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-300">100+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/20">
              <svg className="h-4 w-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-300">5+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/20">
              <svg className="h-4 w-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-300">₹50Cr+ Revenue Generated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
