import { cn } from '@/lib/utils'

type PropsTitle = React.HTMLAttributes<HTMLHeadingElement>

export default function Title({ children, className, ...props }: PropsTitle) {
  return (
    <h1
      className={cn('font-bold uppercase text-balance', className)}
      {...props}
    >
      {children}
    </h1>
  )
}
