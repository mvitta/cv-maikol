import { cn } from '@/lib/utils'

type PropsContainerMain = React.HTMLAttributes<HTMLElement>

export default function ContainerMain({
  children,
  className,
  ...props
}: PropsContainerMain) {
  return (
    <main
      className={cn('py-16 px-3 sm:px-6 md:px-32 lg:px-44', className)}
      {...props}
    >
      {children}
    </main>
  )
}
