import { Hero } from './components/Hero'
import { Servicios } from './components/Servicios'
import { Proyectos } from './components/Proyectos'
import { WhyUs } from './components/WhyUs'
import { Testimonios } from './components/Testimonios'
import { Process } from './components/Process'
import { Presence } from './components/Presence'
import { CtaForm } from './components/CtaForm'

export default function ConstructoraVargasPage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Proyectos />
      <WhyUs />
      <Testimonios />
      <Process />
      <Presence />
      <CtaForm />
    </>
  )
}
