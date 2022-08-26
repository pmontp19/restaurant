import { h } from 'preact'
import { Link } from 'preact-router/match'

const Header = () => {
  const toggleMenu = () => {
    const menu = document.getElementById('navbar-default')
    menu.classList.toggle('hidden')
  }
  return (
    <nav class="sticky top-0 z-40 backdrop-blur transition-colors duration-500 bg-g:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/90 supports-backdrop-blur:bg-white/60 dark:bg-transparent px-2 sm:px-4 py-2.5 uppercase">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
          <img
            src="/assets/images/mini.png"
            class="mr-3 h-6 sm:h-9"
            alt="Cal Gallisa logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-slate-900 dark:text-white">
            Cal Gallisà
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span class="sr-only">Obre menú</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 text-slate-700 dark:text-slate-200 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                activeClassName="md:bg-transparent md:text-slate-900 font-bold"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Inici
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                onClick={toggleMenu}
                activeClassName="md:bg-transparent md:text-slate-900 font-bold"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Menú
              </Link>
            </li>
            <li>
              <Link
                href="/espais"
                onClick={toggleMenu}
                activeClassName="md:bg-transparent md:text-slate-900 font-bold"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Espais
              </Link>
            </li>
            <li>
              <Link
                href="/historia"
                onClick={toggleMenu}
                activeClassName="md:bg-transparent md:text-slate-900 font-bold"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Història
              </Link>
            </li>
            <li>
              <Link
                href="/contacte"
                onClick={toggleMenu}
                activeClassName="md:bg-transparent md:text-slate-900 font-bold"
                class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contacte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
