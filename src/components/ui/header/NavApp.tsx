import { cn } from '@/lib/utils'

type PropsNavApp = React.HTMLAttributes<HTMLElement>

export default function NavApp({ children, className, ...props }: PropsNavApp) {
  return (
    <nav id='nav-bar' className={cn('w-full', className)} {...props}>
      <ul className='flex gap-y-2 justify-center items-center flex-wrap min-h-16'>
        {children}
      </ul>
    </nav>
  )
}
