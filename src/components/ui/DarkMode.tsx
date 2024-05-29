'use client'

import { useEffect, useState } from 'react'
import Dark from '../icons/Dark'
import Light from '../icons/Light'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function DarkMode() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        width={30}
        height={30}
        sizes='30x30'
        alt='Loading Light/Dark Toggle'
        priority={false}
        title='Loading Light/Dark Toggle'
      />
    )
  }

  console.log(theme)

  if (theme === 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <Dark className='dark:fill-dark-mode-fill-icons dark:hover:fill-white' />
      </button>
    )
  }

  if (theme === 'light') {
    return (
      <button onClick={() => setTheme('dark')}>
        <Light className='dark:fill-dark-mode-fill-icons dark:hover:fill-white' />
      </button>
    )
  }
}
