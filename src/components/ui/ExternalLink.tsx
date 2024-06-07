import { cn } from '@/lib/utils'

interface PropsExternalLink
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string
  text?: string
}

export default function ExternalLink({
  children,
  className,
  text,
  ...props
}: PropsExternalLink) {
  return (
    <>
      <a
        href={typeof children === 'string' ? children : ''}
        target='_blank'
        rel='noopener noreferrer'
        className={cn(
          'font-light text-blue-500 hover:text-blue-300 underline underline-offset-4 contrast-100',
          className
        )}
        {...props}
      >
        {text ? text : children}
      </a>
    </>
  )
}
