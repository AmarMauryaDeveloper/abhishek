import { ArrowRight, BarChart3, Search, Globe, ShieldCheck, PenTool, Zap } from 'lucide-react'

const serviceDetails = [
  {
    title: 'SEO Optimization',
    icon: Search,
    description: 'Rank higher on Google and drive organic traffic with proven SEO strategies.',
    features: [
      'Keyword research and analysis',
      'On-page and technical SEO',
      'Link building strategy',
      'Content optimization',
      'Local SEO',
      'Monthly reporting',
    ],
  },
  {
    title: 'Google Ads (PPC)',
    icon: BarChart3,
    description: 'Get instant visibility and qualified leads with targeted pay-per-click campaigns.',
    features: [
      'Campaign setup and optimization',
      'Keyword bidding strategy',
      'Ad copy testing',
      'Landing page optimization',
      'Conversion tracking',
      'Performance analytics',
    ],
  },
  {
    title: 'Social Media Marketing',
    icon: Globe,
    description: 'Build your brand presence and engage audiences across all social platforms.',
    features: [
      'Content calendar creation',
      'Post scheduling and publishing',
      'Community management',
      'Influencer partnerships',
      'Social listening',
      'Engagement tracking',
    ],
  },
  {
    title: 'Meta & Instagram Ads',
    icon: ShieldCheck,
    description: 'Reach your ideal customers with powerful Facebook and Instagram advertising.',
    features: [
      'Audience segmentation',
      'Creative design and copywriting',
      'A/B testing',
      'Retargeting campaigns',
      'Conversion optimization',
      'ROI tracking',
    ],
  },
  {
    title: 'Content Marketing',
    icon: PenTool,
    description: 'Create compelling content that attracts, engages, and converts your audience.',
    features: [
      'Blog writing and optimization',
      'Video content strategy',
      'Infographic creation',
      'Whitepaper development',
      'Case study writing',
      'Content distribution',
    ],
  },
  {
    title: 'Website Optimization',
    icon: Zap,
    description: 'Convert more visitors into customers with high-performing landing pages.',
    features: [
      'UX/UI analysis',
      'Conversion rate optimization',
      'A/B testing',
      'Speed optimization',
      'Mobile responsiveness',
      'CRO consulting',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-lime-500/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-sm font-medium text-lime-300">Our Services</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Digital Marketing Solutions That <span className="text-lime-400">Drive Results</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            From SEO to paid advertising, we offer comprehensive digital marketing services tailored to your business goals.
          </p>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {serviceDetails.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400/20 text-lime-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mb-6 text-slate-400">{service.description}</p>
                  <div>
                    <p className="mb-4 text-sm font-semibold text-lime-300">What's Included:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-slate-400">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">Our Process</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your goals and market' },
              { step: '02', title: 'Strategy', desc: 'Develop tailored marketing plan' },
              { step: '03', title: 'Execution', desc: 'Launch and optimize campaigns' },
              { step: '04', title: 'Analytics', desc: 'Track results and iterate' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-6">
                <div className="mb-4 text-3xl font-bold text-lime-400">{item.step}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mb-10 text-lg text-slate-400">
            Let's discuss which services are right for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-lime-300"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
