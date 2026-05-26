import { Target, Users, Zap, Eye, Heart, User } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-lime-500/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-sm font-medium text-lime-300">About Us</span>
          </div>
          <h1 className="mb-8 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Empowering Brands Through <span className="text-lime-400">Data-Driven</span> Digital Marketing
          </h1>
          <p className="max-w-2xl text-lg text-slate-400">
            Since 2019, ADSWITHABHI has been helping businesses like yours scale faster with proven digital marketing strategies.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/20">
                <Target size={32} className="text-lime-400" />
              </div>
              <h2 className="mb-6 text-4xl font-bold text-white">Our Mission</h2>
              <p className="mb-6 text-lg text-slate-400">
                To empower businesses with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
              </p>
              <p className="text-slate-400">
                We believe every business deserves access to world-class digital marketing expertise. That's why we're committed to delivering transparent, results-focused solutions that transform how brands connect with their audiences.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-8">
                <div className="mb-4 h-12 w-12 rounded-lg bg-lime-400/20 flex items-center justify-center text-lime-400">
                  <Eye size={20} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Vision</h3>
                <p className="text-slate-400">To be India's most trusted digital marketing partner for ambitious businesses.</p>
              </div>
              <div className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-8">
                <div className="mb-4 h-12 w-12 rounded-lg bg-lime-400/20 flex items-center justify-center text-lime-400">
                  <Heart size={20} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Values</h3>
                <p className="text-slate-400">Transparency, Results, Innovation, and Customer Success drive everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Meet Our Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Experienced digital marketers dedicated to your success.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Abhishek Kumar', role: 'Founder & CEO' },
              { name: 'Priya Singh', role: 'Head of Strategy' },
              { name: 'Rajesh Patel', role: 'Senior SEO Specialist' },
              { name: 'Sofia Khan', role: 'PPC Manager' },
            ].map((member) => (
              <div key={member.name} className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-6 text-center">
                <div className="mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-lime-400/30 to-lime-400/10 mx-auto flex items-center justify-center text-lime-400">
                  <User size={40} />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '5+', label: 'Years in Business' },
              { number: '100+', label: 'Happy Clients' },
              { number: '₹50Cr+', label: 'Revenue Generated' },
              { number: '300%', label: 'Avg ROI Increase' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-lime-400 sm:text-5xl">{stat.number}</div>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-white">Why Choose ADSWITHABHI?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Results-Driven',
                desc: 'We focus on measurable outcomes and ROI for every campaign.',
              },
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Industry veterans with 50+ combined years of digital marketing experience.',
              },
              {
                icon: Zap,
                title: 'Latest Technology',
                desc: 'We use cutting-edge tools and AI to optimize campaigns in real-time.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400/20 text-lime-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
