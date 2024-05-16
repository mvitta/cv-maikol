import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export default function Container({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={cn('p-2 mb-4', className)} {...props}>
      {children}
    </div>
  )
}
