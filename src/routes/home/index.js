import { h } from 'preact'
import Button from '../../components/button'
import style from './style.css'

const Home = () => {
  const Spotlight = ({
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    style = 1,
    customButtons
  }) => (
    <section class="bg-black/10 md:flex md:items-center block justify-between">
      <div
        class={`md:w-2/5 w-full inline-block relative ${
          style === 1 ? 'order-1' : 'order-2'
        }`}
      >
        <img class="block w-full" src={imageSrc} alt={imageAlt} />
      </div>
      <div
        class={`md:w-3/5 w-full text-center md:text-left max-w-none pt-16 pb-8 py-12 md:pt-8 md:pb-0.5 md:px-16 ${
          style === 1 ? 'order-2' : 'order-1'
        } md:max-w-3xl text-white`}
      >
        <h2 class="text-xl leading-7 tracking-[.225em] uppercase font-extrabold mb-4">
          {title}
        </h2>
        <p class="mb-8 tracking-widest">{description}</p>
        <Button href={buttonLink}>{buttonText}</Button>
        {customButtons &&
          customButtons.map(({ text, link, variant }) => (
            <Button href={link} variant={variant}>
              {text}
            </Button>
          ))}
      </div>
    </section>
  )

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
    >
      <section class="flex flex-col justify-center h-[calc(100vh_-_61px)] min-h-[35em] relative text-center overflow-hidden">
        <div>
          <h2 class="transform scale-100 transition-transform duration-500 inline-block font text-3xl opacity-100 relative">
            <img class="image brand" src="/assets/images/logo_negatiu.svg" />
          </h2>
          <p class="uppercase tracking-wide text-white">
            Un restaurant
            <br />
            al cor de Reus.
            <br />
          </p>
        </div>
        <a href="#one" class="text-white">
          Descobreix-nos
        </a>
        {/* <div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center bottom-20 left-2/4 absolute">
        <svg
          class="w-6 h-6 dark:text-red-200"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div> */}
      </section>

      <section id="one" class="bg-zinc-700 p-0 m-0 border-0">
        <Spotlight
          title="Cuina i menús"
          description="Gastronomia mediterrània. Visita la nostra carta."
          imageSrc="/assets/images/sala-mercadal.jpg"
          imageAlt="Carta i menu"
          buttonText="Menús"
          buttonLink="/carta"
          style={1}
        />
        <Spotlight
          title="Espais del restaurant"
          description="Disposem d'espais íntims per a celebracions d'amics, grups i esdeveniments."
          imageSrc="/assets/images/refugi01.jpg"
          imageAlt="Espais del restaurant"
          buttonText="Espais"
          buttonLink="/espais"
          style={2}
          customButtons={[
            {
              text: 'Visita virtual',
              link: 'https://goo.gl/maps/sA5NtgZAaX5CDJic9',
              variant: 'outline'
            }
          ]}
        />
        <Spotlight
          title="Gallisà, un comerç centenari"
          description="L'esparteria Gallisà era una històrica botiga de Reus. L'última esparteria que quedava a la ciutat i que entre les seves parets acumulava més d'un segle de servei."
          imageSrc="/assets/images/historia-gallisa.jpg"
          imageAlt="Nanos de reus i Cal Gallisa"
          buttonText="Història"
          buttonLink="/historia"
          style={1}
        />
      </section>

      <section class="bg-red-500 text-center pt-20 pb-14 block">
        <div class="mx-auto aspect-w-16 aspect-h-9 w-11/12">
          <iframe
            src="https://www.youtube.com/embed/TktJhmXgoTs"
            title="Cal Gallisa Restaurant a Reus"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </section>

      <section class="bg-transparent text-center pt-20 pb-14 px-10  block">
        <div class="text-center max-w-7xl mx-auto">
          <header>
						<h2>Troba'ns</h2>
					</header>
        </div>
      </section>
    </div>
  )
}

export default Home
