import { h } from 'preact'
import Button from '../button'
import LogoIcon from '../logo'

const Hero = ({ isLanding, title, subtitle, cta }) => {
  if (isLanding) {
    return (
      <section class="flex flex-col justify-center h-auto sm:h-[calc(100vh_-_60px)] min-h-[28em] sm:px-0 px-5 pt-16 pb-10 relative text-center overflow-hidden text-slate-50 dark:text-slate-900">
        <div>
          <h2 class="w-11/12 transform scale-100 inline-block text-3xl opacity-100 relative mb-6">
            <LogoIcon />
          </h2>
          <p class="uppercase tracking-wide text-md">
            Un restaurant
            <br />
            al cor de Reus.
            <br />
          </p>
        </div>
        <a href="#one" class="mt-20 sm:block hidden ">
          <span class="text-sm uppercase">Descobreix-nos</span>

          <div class="mx-auto mt-6 animate-bounce text-slate-700 bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg
              class="w-6 h-6 "
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

  return (
    <section class="flex flex-col justify-center relative text-center overflow-hidden text-white pt-32 pb-24 px-6">
      <div>
        <h2 class="inline-block uppercase text-3xl relative mb-4 leading-7 font-extrabold tracking-widest font-sans">
          {title}
        </h2>
        <p class="uppercase tracking-widest text-md mb-10">{subtitle}</p>
        {cta && <Button href={cta.link}>{cta.text}</Button>}
      </div>
    </section>
  )
}

export default Hero
