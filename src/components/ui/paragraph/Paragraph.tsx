import { cn } from '@/lib/utils'

interface PropsParagraph extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function Paragraph({
  children,
  className,
  ...props
}: PropsParagraph) {
  return (
    <p
      className={cn('mb-5 text-pretty py-1 leading-loose', className)}
      {...props}
    >
      {children}
    </p>
  )
}
