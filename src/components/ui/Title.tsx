import { cn } from '@/lib/utils'
import styles from './Title.module.css'

type PropsTitle = React.HTMLAttributes<HTMLHeadingElement>

export default function Title({ children, className, ...props }: PropsTitle) {
  return (
    <h1
      className={cn(
        'title-main font-bold uppercase text-balance',
        styles.titleMain,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
