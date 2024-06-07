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
          'absolute left-[-1px] h-[30px] pl-4 border-l border-l-transparent',
          `${text.toLowerCase() === 'perfil' && 'top-0'}`,
          `${text.toLowerCase() === 'experiencia' && 'top-[35px]'}`,
          `${text.toLowerCase() === 'certificaciones' && 'top-[70px]'}`,
          'hover:border-l-blue-500 hover:text-slate-950 hover:font-bold',
          'xl:static xl:border-none',
          `font-light text-[18px] list-inside list-none text-slate-600`,
          'transition-all duration-200 ease-out',
          path === pathname &&
            'font-bold text-slate-900 underline underline-offset-8 decoration-slate-500 border-l-blue-500',
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
