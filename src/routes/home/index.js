import { h } from 'preact'
import Button from '../../components/button'
import CookieConsent from '../../components/cookies'
import Hero from '../../components/hero'
import LazyTube from '../../components/lazytube'
import style from './style.css'

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
  <section
    class={`${
      style === 1 ? 'bg-black/5' : 'bg-black/10'
    } md:flex md:items-center block justify-between`}
  >
    <div
      class={`md:w-2/5 w-full inline-block relative ${
        style === 1 ? 'order-1' : 'order-2'
      }`}
    >
      <img class="block w-full" src={imageSrc} alt={imageAlt} loading="lazy" />
    </div>
    <div
      class={`md:w-3/5 w-full text-center md:text-left max-w-none pt-10 px-8 pb-6 md:pt-8 md:px-14 ${
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

const Home = () => {
  return (
    <div
      class={`${style.wrapper} bg-fixed bg-cover bg-center bg-no-repeat`}
    >
      
      <Hero isLanding={true} />

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

      <section class="bg-red-500 dark:bg-red-600 text-center pt-20 pb-14 block">
        {typeof window !== "undefined" && (
          <LazyTube
          url="https://www.youtube-nocookie.com/embed/TktJhmXgoTs"
          title="Cal Gallisa Restaurant a Reus"
        />
          )}
        
      </section>

      <section id="cta" class="bg-transparent text-center pt-20 pb-14 block">
        <div class="justify-center md:flex block text-white">
          <header class="order-1 md:pr-8 block md:text-left text-center">
            <h2 class="uppercase leading-7 text-2xl font-extrabold tracking-widest mb-2">
              Troba'ns
            </h2>
            <p class="mb-4 ">Estem a la plaça Mercadal de Reus, número 12</p>
          </header>
          <ul class="order-2 md:ml-0 flex-col flex md:mx-0">
            <li>
              <Button href="https://g.page/cal_gallisa?gm" variant="primary">
                Com arribar
              </Button>
            </li>
            <li>
              <Button href="tel://+34977120566" variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="mr-2 -ml-1 w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Truca
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home
