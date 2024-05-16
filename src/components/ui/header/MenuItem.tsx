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
          'text-xl list-inside list-none text-slate-600',
          // if pathname is equal to path -> usePathname()
          path === pathname &&
            'ring-1 ring-slate-900 rounded-sm font-bold text-slate-950',
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
