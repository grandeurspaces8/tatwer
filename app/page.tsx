import Navbar         from '../components/Navbar'
import Hero           from '../components/Hero'
import TrustBar       from '../components/TrustBar'
import About          from '../components/About'
import Projects       from '../components/Projects'
import Amenities      from '../components/Amenities'
import PaymentPlans   from '../components/PaymentPlans'
import Testimonials   from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import BottomCTA      from '../components/BottomCTA'
import Footer         from '../components/Footer'
import FloatingPhone  from '../components/FloatingPhone'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Projects />
      <Amenities />
      <PaymentPlans />
      <Testimonials />
      <ContactSection />
      <BottomCTA />
      <Footer />
      <FloatingPhone />
    </main>
  )
}
