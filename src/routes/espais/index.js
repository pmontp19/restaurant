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
      <Hero
        isLanding={false}
        cta={{
          text: 'Visita virtual',
          link: 'https://goo.gl/maps/sA5NtgZAaX5CDJic9'
        }}
        title="Espais"
        subtitle="Disposem d'espais íntims per a celebracions d'amics, grups i esdeveniments."
      />

      <article class="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 m-0 border-0">
        <section class="overflow-hidden text-gray-700 p-8">
          <h3 class="dark:text-slate-50 uppercase text-2xl relative mb-4 leading-7 font-extrabold tracking-widest font-sans">
            Sala refugi i sala soterrani
          </h3>
          <div class="grid grid-flow-col grid-rows-3 grid-cols-2 gap-7">
            <div>
              <img
                src="/assets/images/sales/sala-refugi1.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-refugi2.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-refugi3.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-refugi4.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-refugi5.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-refugi6.webp"
                alt=""
                loading="lazy"
              />
            </div>
          </div>


          <h3 class="mt-16 dark:text-slate-50 uppercase text-2xl relative mb-4 leading-7 font-extrabold tracking-widest font-sans">
            Sala Mercadal i Barra
          </h3>
          <div class="grid grid-flow-col grid-rows-3 grid-cols-2 gap-7">
            <div>
              <img
                src="/assets/images/sales/sala-mercadal1.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-mercadal2.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-mercadal3.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-mercadal4.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-mercadal5.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="/assets/images/sales/sala-mercadal6.webp"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default Espais
