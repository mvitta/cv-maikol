import { cn } from '@/lib/utils'

export default function ContainerHeader({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      id='container-header'
      className={cn(
        'flex justify-center gap-x-10 gap-y-4 justify-between items-center flex-wrap',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
