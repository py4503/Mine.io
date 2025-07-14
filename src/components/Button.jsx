import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    
<button
  className={`relative block w-full font-semibold leading-6 text-white bg-gray-800 shadow-sm cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100 ${className}`}
  {...props}
>
  <span
    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
  ></span>

  <span className="relative z-10 px-5 py-2 rounded-xl bg-gray-950 flex items-center justify-center space-x-2">
    <span className="transition-all duration-500 group-hover:translate-x-1">
      {children}
    </span>
    <svg
      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-0.5"
      data-slot="icon"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        fillRule="evenodd"
      ></path>
    </svg>
  </span>
</button>

  )
}

export default Button
