'use client'

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
        className={`text-xl list-inside list-none text-slate-600 ${className} ${
          path === pathname
            ? 'ring-1 ring-slate-900 rounded-sm font-bold text-slate-950'
            : ''
        }`}
        {...props}
      >
        <Link href={pathname} className='py-4 px-3'>
          {text}
        </Link>
      </li>
    </>
  )
}
