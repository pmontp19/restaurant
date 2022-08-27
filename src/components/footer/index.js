import { h } from 'preact'

const Footer = () => {
  return (
    <footer class="bg-neutral-800 md:pt-14 md:px-8 md:pb-10 pt-6 pb-4 text-center block ">
      <ul class="cursor-default list-none mb-8">
        <li class="inline-block transition-colors pr-4 hover:text-white">
          <a href="https://www.facebook.com/calgallisa/">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              class="mr-2 -ml-1 w-8 h-8"
              aria-hidden="true"
              aria-label="Facebook"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
        </li>
        <li class="inline-block transition-colors pr-4 hover:text-white">
          <a href="https://www.instagram.com/cal_gallisa/">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              class="mr-2 -ml-1 w-8 h-8"
              aria-hidden="true"
              aria-label="Instagram"
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
            </svg>
          </a>
        </li>
        <li class="inline-block transition-colors hover:text-white">
          <a href="https://g.page/cal_gallisa?gm">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              class="mr-2 -ml-1 w-8 h-8"
              aria-hidden="true"
              aria-label="Google"
            >
              <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
            </svg>
          </a>
        </li>
      </ul>
      <ul class="uppercase">
        <li class="block sm:inline-block py-2 transition-colors hover:text-white cursor-pointer"><a href='#'>Mencions legals</a></li>
        <li class="block ml-0 pl-0 sm:border-l-slate-500/50 py-2 sm:border-l sm:inline-block sm:ml-4 sm:pl-4">&copy; {(new Date().getFullYear())} Cal Gallisà</li>
      </ul>
    </footer>
  )
}

export default Footer
