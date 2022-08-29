import { h } from 'preact'
import {route} from 'preact-router'
import { useState } from 'preact/hooks'

const CookieConsent = () => {
  const [consent, setConsent] = useState(document.cookie.split(';').find((row) => row.startsWith('consent='))?.split('=')[1] || false)
  const [details, setDetails] = useState(false)

  const getCookies = () => {
    return (document.cookie || '').split(';')
  }
  const setCookie = (c) => {
    document.cookie = c
  }

  const clickAccept = () => {
    setConsent(true)
    setCookie('consent=true;max-age=31536000')
  }

  const clickDetails = () => {
    console.log('click details')
    setDetails(true)
    route('/legal')
  }

  if (consent) {
    return null
  }

  return (
    <div id="useCookies" class="z-10 fixed bottom-0 right-0 p-3 shadow-sm">
      <div
        class="w-72 bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 dark:shadow-sm dark:shadow-slate-400"
        style="cursor: auto;"
      >
        <div class="w-16 mx-auto relative -mt-10 mb-3">
          <img
            class="-mt-1"
            src="https://www.svgrepo.com/show/30963/cookie.svg"
            alt="Cookie Icon SVG"
          />
        </div>
        <span class="w-full sm:w-48  block leading-normal text-gray-800 dark:text-slate-200 text-sm mb-3">
          Fem servir galetes. Aquestes no recullen ni emmagatzemen dades
          personals.
        </span>
        <div class="flex items-center justify-between">
          <a
            class="text-xs dark:text-gray-400 text-gray-600 mr-1 hover:text-gray-800 dark:hover:text-gray-100 hover:cursor-pointer"
            onClick={clickDetails}
          >
            Més informació
          </a>
          <div class="w-1/2">
            <button
              type="button"
              onClick={() => {
                clickAccept()
              }}
              class="py-2 px-4 uppercase bg-red-500 dark:bg-red-800 hover:bg-red-800 dark:hover:bg-red-900 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-sm "
            >
              D'acord
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
