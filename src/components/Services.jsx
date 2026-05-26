import { BarChart3, Search, Globe, ShieldCheck, PenTool, Zap } from 'lucide-react'

const services = [
  {
    title: 'SEO Optimization',
    description: 'Rank higher on Google and drive organic traffic with proven SEO strategies.',
    icon: Search,
  },
  {
    title: 'Google Ads (PPC)',
    description: 'Get instant visibility and qualified leads with targeted pay-per-click campaigns.',
    icon: BarChart3,
  },
  {
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage audiences across all social platforms.',
    icon: Globe,
  },
  {
    title: 'Meta & Instagram Ads',
    description: 'Reach your ideal customers with powerful Facebook and Instagram advertising.',
    icon: ShieldCheck,
  },
  {
    title: 'Content Marketing',
    description: 'Create compelling content that attracts, engages, and converts your audience.',
    icon: PenTool,
  },
  {
    title: 'Website Optimization',
    description: 'Convert more visitors into customers with high-performing landing pages.',
    icon: Zap,
  },
]

export function Services() {
  return (
    <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Digital Marketing Solutions That Drive Growth
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            From SEO to paid advertising, we offer comprehensive digital marketing services tailored to your business goals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-green-500/20 bg-slate-900/50 p-8 transition hover:border-lime-400/50 hover:bg-slate-900/80"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400/20 text-lime-400 group-hover:bg-lime-400/30">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

