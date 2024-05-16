import { cn } from '@/lib/utils'

type PropsSubTitle = React.HTMLAttributes<HTMLHeadingElement>

export default function SubTitle({
  children,
  className,
  ...props
}: PropsSubTitle) {
  return (
    <h2
      className={cn('font-semibold mb-6 text-balance capitalize', className)}
      {...props}
    >
      {children}
    </h2>
  )
}
