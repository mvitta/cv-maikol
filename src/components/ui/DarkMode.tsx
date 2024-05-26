'use client'

import { useRef, useEffect, useState, type MouseEventHandler } from 'react'
import Dark from '../icons/Dark'
import Light from '../icons/Light'

export default function DarkMode() {
  const [theme, setDarkMode] = useState<'light' | 'dark'>(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme : dark)'
    ).matches
    if (prefersDarkMode) {
      localStorage.setItem('theme', 'dark')
      return 'dark'
    }
    localStorage.setItem('theme', 'light')
    return 'light'
  })

  const handlerCLick: MouseEventHandler = () => {
    setDarkMode((preTheme) => {
      if (preTheme === 'light') {
        localStorage.setItem('theme', 'light')
        return 'dark'
      }
      localStorage.setItem('theme', 'light')
      return 'light'
    })
  }

  useEffect(() => {
    console.log(localStorage.getItem('theme'))

    const doc = document.documentElement
    if (localStorage.getItem('theme') === 'dark') {
      doc.classList.add('dark')
    } else {
      doc.classList.remove('dark')
    }
  }, [theme])

  return (
    <button onClick={handlerCLick}>
      {theme === 'dark' ? (
        <Dark className='dark:fill-dark-mode-fill-icons dark:hover:fill-white' />
      ) : (
        <Light className='dark:fill-dark-mode-fill-icons dark:hover:fill-white' />
      )}
    </button>
  )
}
