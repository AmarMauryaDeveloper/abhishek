export function Stats() {
  const stats = [
    { number: '100+', label: 'Happy Clients' },
    { number: '500+', label: 'Campaigns Delivered' },
    { number: '300%', label: 'Average ROI Increase' },
    { number: '50Cr+', label: 'Revenue Generated' },
  ]

  return (
    <section className="border-b border-green-500/20 bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-4xl font-bold text-lime-400 sm:text-5xl">
                {stat.number}
              </div>
              <p className="text-sm text-slate-400 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
