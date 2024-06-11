import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SVGProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface PropsMenuItem extends React.LiHTMLAttributes<HTMLLIElement> {
  text: string
  pathname: string
  fn: () => void
  // eslint-disable-next-line no-unused-vars
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export default function MenuItem({
  text,
  className,
  pathname,
  Icon,
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
          'hover:border-l-blue-500 hover:text-slate-950 dark:hover:text-white hover:font-bold',
          'xl:static xl:border-none',
          `font-light text-[18px] list-inside list-none text-slate-600`,
          'transition-all duration-200 ease-out',
          path === pathname &&
            'font-bold border-l-blue-500 text-blue-500 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-500',
          'xl:mb-0',
          className
        )}
        {...props}
      >
        <Link
          href={pathname}
          className={twMerge('w-full inline-block text-start', 'flex gap-x-2')}
        >
          <Icon />
          <span>{text}</span>
        </Link>
      </li>
    </>
  )
}
