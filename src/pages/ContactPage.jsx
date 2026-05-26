import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    alert("Thank you! We'll get back to you soon.")
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-lime-500/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-lime-400" />
            <span className="text-sm font-medium text-lime-300">Get in Touch</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Let's Grow Your Business <span className="text-lime-400">Together</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Ready to scale your business with smart digital marketing? Get in touch for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-8 text-2xl font-bold text-white">Contact Information</h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400/20 text-lime-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:hello@adswithabhi.com" className="text-slate-400 transition hover:text-lime-400">
                    hello@adswithabhi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400/20 text-lime-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+919876543210" className="text-slate-400 transition hover:text-lime-400">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400/20 text-lime-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-slate-400">Remote-First | Serving All of India</p>
                </div>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-slate-900/50 p-6">
                <h4 className="mb-4 font-semibold text-white">Response Time</h4>
                <p className="text-sm text-slate-400">We typically respond within 24 hours during business days.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-green-500/20 bg-slate-900/50 p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-green-500/20 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition focus:border-lime-400 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-green-500/20 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition focus:border-lime-400 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-green-500/20 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition focus:border-lime-400 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-white">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-green-500/20 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition focus:border-lime-400 focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-green-500/20 bg-slate-950/50 px-4 py-3 text-white transition focus:border-lime-400 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="ppc">Google Ads (PPC)</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="meta">Meta & Instagram Ads</option>
                    <option value="content">Content Marketing</option>
                    <option value="website">Website Optimization</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full rounded-lg border border-green-500/20 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition focus:border-lime-400 focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-lime-400 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-green-500/20 bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is included in a free consultation?',
                a: 'Our 30-minute consultation includes a review of your current marketing efforts, identification of growth opportunities, and a personalized strategy recommendation.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'Results vary by service. Paid ads can show results in 1-2 weeks. SEO typically takes 3-6 months for significant results.',
              },
              {
                q: 'Do you offer contract flexibility?',
                a: 'Yes, we offer flexible contract terms. Most clients start with a 3-month engagement to see initial results.',
              },
              {
                q: 'How do you measure success?',
                a: 'We track ROI, conversion rates, traffic metrics, and custom KPIs based on your business goals.',
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-lg border border-green-500/20 bg-slate-900/50 p-6">
                <h3 className="mb-3 font-semibold text-white">{item.q}</h3>
                <p className="text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
