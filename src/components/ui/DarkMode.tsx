'use client'

import { useRef, useEffect, useState, type MouseEventHandler } from 'react'
import Dark from '../icons/Dark'
import Light from '../icons/Light'

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)
  const reftButton = useRef<HTMLButtonElement>(null)

  const handlerCLick: MouseEventHandler = (e) => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const doc = document.documentElement
    if (darkMode) {
      doc.classList.add('dark')
    } else {
      doc.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button onClick={handlerCLick}>
      {darkMode ? (
        <Dark className='dark:fill-dark-mode-fill-icons dark:hover:fill-white' />
      ) : (
        <Light className='dark:fill-dark-mode-fill-icons dark:hover:fill-white' />
      )}
    </button>
  )
}
