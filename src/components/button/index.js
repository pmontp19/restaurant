import { h } from 'preact'

const Button = ({ children, variant, ...props }) => {
  const commonClasses =
    'px-8 py-2.5 mr-2 mb-2 font-bold rounded-sm text-sm tracking-wider no-underline text-ellipsis appearance-none cursor-pointer inline-block uppercase text-center overflow-hidden align-baseline'
  if (variant === 'outline') {
    return (
      <a
        href={props.href}
        class={
          'bg-transparent hover:bg-red-800 text-white hover:text-white py-2 px-4 border border-white hover:border-red-800 ' +
          commonClasses
        }
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={props.href}
      class={
        'text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 ' +
        commonClasses
      }
    >
      {children}
    </a>
  )
}

export default Button
