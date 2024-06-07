'use client'

import { useEffect, useRef } from 'react'

export default function ScrollTop() {
  const refDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (refDiv.current) {
        if (window.scrollY > 720) {
          refDiv.current.classList.remove('hidden')
          refDiv.current.classList.add('block')
        } else {
          refDiv.current.classList.remove('block')
          refDiv.current.classList.add('hidden')
        }
      }
    })
  }, [])

  return (
    <div
      onClick={() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      ref={refDiv}
      className='hidden fixed bottom-8 right-8 z-[99]'
    >
      <div
        aria-label='scroll to top'
        className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-md bg-blue-500 text-black shadow-md transition duration-300 ease-in-out hover:bg-opacity-80'
      >
        <span className='mt-[6px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-whitek'></span>
      </div>
    </div>
  )
}
