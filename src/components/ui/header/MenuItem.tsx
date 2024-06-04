import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface PropsMenuItem extends React.LiHTMLAttributes<HTMLLIElement> {
  text: string
  pathname: string
  fn: () => void
}

export default function MenuItem({
  text,
  className,
  pathname,
  fn,
  ...props
}: PropsMenuItem) {
  const path = usePathname()

  return (
    <>
      <li
        onClick={() => {
          fn()
        }}
        className={cn(
          `font-light text-xl list-inside list-none text-slate-600 mb-4`,
          'hover:text-slate-950 hover:font-bold',
          'transition-all duration-200 ease-out',
          path === pathname &&
            'font-bold text-slate-900 underline underline-offset-8',
          'dark:text-dark-mode-text-items dark:hover:text-white',
          'xl:mb-0',
          className
        )}
        {...props}
      >
        <Link
          href={pathname}
          className={twMerge('w-full inline-block text-start', '')}
        >
          {text}
        </Link>
      </li>
    </>
  )
}
