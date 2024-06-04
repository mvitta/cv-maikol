'use client'

import { useEffect, useState } from 'react'
import Dark from '../icons/Dark'
import Light from '../icons/Light'
import { useTheme } from 'next-themes'

export default function DarkMode() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        height='30px'
        width='30px'
      >
        <rect width='20' height='20' x='2' y='2' fill='none' rx='2' />
      </svg>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'dark' ? (
        <Dark
          width={30}
          height={30}
          className='dark:fill-dark-mode-fill-icons dark:hover:fill-white'
        />
      ) : (
        <Light
          width={30}
          height={30}
          className='dark:fill-dark-mode-fill-icons dark:hover:fill-white'
        />
      )}
    </button>
  )
}
