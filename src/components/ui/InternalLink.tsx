import { cn } from '@/lib/utils'

interface PropsInternalLink
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

export default function IternalLink({
  children,
  text,
  className,
  href,
  ...props
}: PropsInternalLink) {
  return (
    <a
      className={cn('border rounded py-2 px-3', className)}
      href={href}
      {...props}
    >
      {children}
      {text}
    </a>
  )
}
