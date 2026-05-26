import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Ready to Scale Your Business with Smart Ads?
        </h2>
        <p className="mb-10 text-lg text-slate-400">
          Let's discuss how we can help you achieve your business goals with data-driven digital marketing strategies.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-lime-300">
            Get Your Free Audit
            <ArrowRight size={20} />
          </button>
          <button className="inline-flex items-center justify-center rounded-full border-2 border-lime-400 px-8 py-4 text-lg font-semibold text-lime-400 transition hover:bg-lime-400/10">
            View Our Results
          </button>
        </div>
      </div>
    </section>
  )
}
