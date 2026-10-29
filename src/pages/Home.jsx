// src/pages/Home.jsx
import Hero                from '../components/sections/home/Hero'
import Values              from '../components/sections/home/Values'
import About               from '../components/sections/home/About'
import ServicesPreview     from '../components/sections/home/ServicesPreview'
import PreventativeStats   from '../components/sections/home/PreventativeStats'
import FAQ                 from '../components/sections/home/FAQ'
import PatientPortalBanner from '../components/sections/PatientPortalBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <About />
      <ServicesPreview />
      <PreventativeStats />
      <FAQ />
      <PatientPortalBanner />
    </>
  )
}
