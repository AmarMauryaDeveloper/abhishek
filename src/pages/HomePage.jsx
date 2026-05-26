import { Hero } from '../components/Hero'
import { Stats } from '../components/Stats'
import { Services } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { CTA } from '../components/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}
