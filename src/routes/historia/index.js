import { h } from 'preact'
import { Link } from 'preact-router'
import Hero from '../../components/hero'

const Historia = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/images/banner.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      class="scroll-smooth"
    >
      <Hero
        isLanding={false}
        title="Història"
        subtitle="UNA ESPARTERIA CENTENÀRIA DE REUS."
      />

      <article class="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 m-0 border-0">
        <section class="overflow-hidden text-gray-700 p-8">
          <div class="w-11/12 mx-auto">
            <h3 class="uppercase leading-10 tracking-widest font-extrabold text-xl">
              En paraules de Conrad Gallisà
            </h3>
            <span class="max-w-[40%] float-right ml-4 top-1 rounded-sm inline-block border-0 relative">
              <img
                src="assets/images/historia-gallisa.webp"
                alt="Nanos a la plaça Mercadal"
              ></img>
            </span>
            <p class="mb-6 tracking-widest">
              L'Esparteria Gallisà es va obrir el 1910. Inicialment eren el meu
              avi i el seu germà i als anys 20 s'ho va quedar el meu avi i el
              seu germà va obrir un magatzem d'adobs al carrer Sant Llorenç.
              Durant la gerra Civil hi va caure una bomba que la va enrrunar que
              va portar al meu avi a tornar-la a construir des dels fonaments.
            </p>
            <p class="mb-6 tracking-widest">
              Va portar la botiga fins al 1960 que va morir i es llavors que
              s'en fa càrrec el meu pare fins a la seva jubilació.
            </p>
            <hr class="border-gray-300 border-0 border-b-2 border-solid my-10" />
            <h3 class="uppercase leading-10 tracking-widest font-extrabold text-xl">
            EL TREBALL DE JOBACASÉN
            </h3>
            <span class="max-w-[40%] float-left mr-4 top-1 rounded-sm inline-block border-0 relative">
              <img
                src="assets/images/dibuixos.webp"
                alt="Nanos a la plaça Mercadal"
              ></img>
            </span>
            
            <p class="mb-6 tracking-widest">
            Joan Baptista Cabré Sendrós (Riudoms 1952).
            </p>
            <p><Link class="underline text-red-500 hover:text-blue-800 visited:text-red-900" href="/espais">Descobreix més sobre els espais del restaurant.</Link></p>
          </div>
        </section>
      </article>
    </div>
  )
}

export default Historia
