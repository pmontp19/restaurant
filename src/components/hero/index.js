import { h } from 'preact'
import Button from '../button'

const Hero = ({ isLanding, title, subtitle, cta }) => {
  if (isLanding) {
    return (
      <section class="flex flex-col justify-center h-[calc(100vh_-_60px)] min-h-[35em] relative text-center overflow-hidden">
        <div>
          <h2 class="transform scale-100 transition-transform duration-500 inline-block font text-3xl opacity-100 relative mb-6">
            <img src="/assets/images/logo_negatiu.svg" />
          </h2>
          <p class="uppercase tracking-wide text-md text-white">
            Un restaurant
            <br />
            al cor de Reus.
            <br />
          </p>
        </div>
        <a href="#one" class="mt-20">
          <span class="text-white text-sm uppercase">Descobreix-nos</span>

          <div
            href="#one"
            class="mx-auto mt-6 animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
          >
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
          </div>
        </a>
      </section>
    )
  }

  return (<section class="flex flex-col justify-center relative text-center overflow-hidden text-white pt-32 pb-24 px-6">
  <div>
    <h2 class="inline-block uppercase text-3xl relative mb-4 leading-7 font-extrabold tracking-widest font-sans">
      {title}
    </h2>
    <p class="uppercase tracking-widest text-md mb-10">
    {subtitle}
    </p>
    {cta && <Button href={cta.link}>{cta.text}</Button>}
  </div>
  
</section>)
}

export default Hero
