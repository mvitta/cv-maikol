'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface PropsMenuItem extends React.LiHTMLAttributes<HTMLLIElement> {
  text: string
  pathname: string
}

export default function MenuItem({
  text,
  className,
  pathname,
  ...props
}: PropsMenuItem) {
  const path = usePathname()

  return (
    <>
      <li
        className={cn(
          // tailwindCSS default li
          'font-light text-xl list-inside list-none text-slate-600',
          // hover
          'hover:text-slate-950 hover:font-bold',
          // animation
          'transition-all duration-200 ease-out',
          // if pathname is equal to path -> usePathname()
          path === pathname && 'font-bold text-slate-900',
          //dark mode
          'dark:text-dark-mode-text-items dark:hover:text-white',
          className
        )}
        {...props}
      >
        <Link href={pathname} className='py-4 px-3'>
          {text}
        </Link>
      </li>
    </>
  )
}

// `text-xl list-inside list-none text-slate-600 ${
//   className ? ` ${className}` : ''
// } ${
//   path === pathname
//     ? 'ring-1 ring-slate-900 rounded-sm font-bold text-slate-950'
//     : ''
// }`
