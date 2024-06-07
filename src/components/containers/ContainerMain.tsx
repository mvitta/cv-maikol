import { cn } from '@/lib/utils'
import ScrollTop from '../ui/ScrollTop'

type PropsContainerMain = React.HTMLAttributes<HTMLElement>

export default function ContainerMain({
  children,
  className,
  ...props
}: PropsContainerMain) {
  return (
    <main
      className={cn(
        'relative mt-[60px] py-16 px-3 sm:px-6 md:px-32 lg:px-44',
        className
      )}
      {...props}
    >
      {children}
      <ScrollTop />
    </main>
  )
}
