'use client'

import { useState } from 'react'

type PropsButton = React.HTMLAttributes<HTMLButtonElement>

export default function Button({ id, ...props }: PropsButton) {
  const [show, setShow] = useState(true)

  if (!id) return null

  if (show) {
    return (
      <button
        className='absolute bottom-0 right-10'
        onClick={() => {
          const descr = document.getElementById(id)
          descr?.classList.remove('h-[100px]', 'overflow-y-hidden')
          setShow(!show)
        }}
        {...props}
      >
        <span className='text-blue-700 contrast-200 hover:text-blue-500'>
          ...ver mas
        </span>
      </button>
    )
  }

  return (
    <button
      className='absolute bottom-0 right-10'
      onClick={() => {
        const descr = document.getElementById(id)
        descr?.classList.add('h-[100px]', 'overflow-y-hidden')
        setShow(!show)
      }}
      {...props}
    >
      <span className='text-blue-700 contrast-200 hover:text-blue-500'>
        ...ver menos
      </span>
    </button>
  )
}
