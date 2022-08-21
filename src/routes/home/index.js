import { h } from 'preact'
import style from './style.css'

const Home = () => (
  <div
    class={`bg-fixed bg-black/50 bg-center bg-no-repeat bg-cover ${style.wrapper}`}
  >
    <section
      class="flex flex-col justify-center h-screen min-h-[35em] relative text-center overflow-hidden"
      id="banner"
    >
      <div class="inner">
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
  </div>
)

export default Home
