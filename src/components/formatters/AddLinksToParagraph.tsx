import { cn } from '@/lib/utils'
import ExternalLink from '../ui/ExternalLink'

interface PropsAddLinksToParagraph extends React.HTMLAttributes<HTMLElement> {
  words?: { text: string; url: string }[]
  children: React.ReactNode
}

export default function AddLinksToParagraph({
  children,
  words,
  className,

  ...props
}: PropsAddLinksToParagraph) {
  if (!children) return null
  const p = children.toString()

  if (!words)
    return (
      <p
        className={cn('mb-5 text-pretty py-1 leading-loose', className)}
        {...props}
      >
        {p}
      </p>
    )

  const parts = []
  let lastIndex = 0

  words?.forEach(({ text, url }) => {
    const index = p.indexOf(text, lastIndex)
    if (index !== -1) {
      parts.push(p.substring(lastIndex, index))
      parts.push(
        <ExternalLink href={url} key={url}>
          {text}
        </ExternalLink>
      )
      lastIndex = index + text.length
    }
  })

  parts.push(p.substring(lastIndex))

  return (
    <p
      className={cn('mb-5 text-pretty py-1 leading-loose', className)}
      {...props}
    >
      {parts}
    </p>
  )
}
