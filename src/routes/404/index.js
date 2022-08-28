import { h } from 'preact'
import Hero from '../../components/hero'

const Espais = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/images/banner.webp)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      class="scroll-smooth"
    >
      <Hero isLanding={false} title="Ups!" subtitle="Sembla que t'has equivoat de porta." cta={{text:'Tonar a l\'inici', link:"/"}}/>

    </div>
  )
}

export default Espais
