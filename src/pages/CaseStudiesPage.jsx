import { TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    title: 'E-commerce Brand',
    industry: 'Online Retail',
    results: '250% ROI Increase',
    description: 'Increased online sales by 250% through targeted Google Ads and SEO optimization.',
    metrics: [
      { label: 'Traffic', value: '+180%' },
      { label: 'Conversions', value: '+250%' },
      { label: 'AOV', value: '+45%' },
    ],
  },
  {
    title: 'SaaS Startup',
    industry: 'Software',
    results: '500+ Qualified Leads',
    description: 'Generated 500+ qualified leads in 6 months through content marketing and PPC.',
    metrics: [
      { label: 'Leads', value: '500+' },
      { label: 'Cost/Lead', value: '-40%' },
      { label: 'Conversions', value: '80+' },
    ],
  },
  {
    title: 'Healthcare Practice',
    industry: 'Healthcare',
    results: '300+ New Patients',
    description: 'Brought in 300+ new patients through local SEO and social media marketing.',
    metrics: [
      { label: 'New Patients', value: '300+' },
      { label: 'Appointment Rate', value: '+85%' },
      { label: 'Avg Value', value: '₹15K' },
    ],
  },
  {
    title: 'B2B Software',
    industry: 'Technology',
    results: '₹5Cr Revenue',
    description: 'Helped close enterprise deals worth ₹5Cr through account-based marketing.',
    metrics: [
      { label: 'Pipeline', value: '₹5Cr' },
      { label: 'Deal Velocity', value: '+60%' },
      { label: 'Win Rate', value: '+35%' },
    ],
  },
  {
    title: 'E-learning Platform',
    industry: 'Education',
    results: '10K+ Enrollments',
    description: 'Achieved 10K+ course enrollments through Meta Ads and influencer partnerships.',
    metrics: [
      { label: 'Enrollments', value: '10K+' },
      { label: 'CAC', value: '₹200' },
      { label: 'Lifetime Value', value: '₹5000' },
    ],
  },
  {
    title: 'Real Estate Agency',
    industry: 'Real Estate',
    results: '₹20Cr in Sales',
    description: 'Facilitated ₹20Cr in property sales through targeted Google Ads campaigns.',
    metrics: [
      { label: 'Sales', value: '₹20Cr' },
      { label: 'Inquiries', value: '2000+' },
      { label: 'Conversion', value: '15%' },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-lime-500/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-sm font-medium text-lime-300">Case Studies</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Real Results for <span className="text-lime-400">Real Businesses</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            See how we've helped businesses like yours achieve extraordinary growth through smart digital marketing.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.title} className="group rounded-2xl border border-green-500/20 bg-slate-900/50 p-8 transition hover:border-lime-400/50 hover:bg-slate-900/80">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400/20 text-lime-400 group-hover:bg-lime-400/30">
                  <TrendingUp size={20} />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase text-lime-400">{study.industry}</p>
                <h3 className="mb-2 text-xl font-semibold text-white">{study.title}</h3>
                <p className="mb-6 text-sm text-slate-400">{study.description}</p>
                <div className="mb-6 rounded-lg bg-slate-950/50 p-4">
                  <p className="text-sm font-semibold text-slate-300">Key Results:</p>
                  <p className="mt-2 text-2xl font-bold text-lime-400">{study.results}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-bold text-lime-400">{metric.value}</p>
                      <p className="text-xs text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">Our Track Record</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '100+', label: 'Successful Projects' },
              { number: '₹500Cr+', label: 'Revenue Generated' },
              { number: '95%', label: 'Client Retention' },
              { number: '3.2x', label: 'Avg ROI Multiple' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-lime-400 sm:text-5xl">{stat.number}</div>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Your Success Story Starts Here</h2>
          <p className="mb-10 text-lg text-slate-400">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-lime-300"
          >
            Schedule Your Free Audit
          </a>
        </div>
      </section>
    </div>
  )
}
