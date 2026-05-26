export function Testimonials() {
  const testimonials = [
    {
      text: '"ADSWITHABHI transformed our online presence. We saw a 300% increase in leads within 3 months!"',
      author: 'Sarah Johnson',
      company: 'Tech Startup',
      rating: 5,
    },
    {
      text: '"The ROI on our Google Ads campaigns has been incredible. Best decision we made for our business."',
      author: 'Rajesh Patel',
      company: 'E-commerce Business',
      rating: 5,
    },
    {
      text: '"Professional, transparent, and result-oriented. They truly understand digital marketing."',
      author: 'Priya Sharma',
      company: 'Consulting Firm',
      rating: 5,
    },
  ]

  return (
    <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            What Our Clients Say About Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Don't just take our word for it. Here's what our clients have to say about working with ADSWITHABHI.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-8">
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-lime-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-6 text-slate-300">{testimonial.text}</blockquote>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
