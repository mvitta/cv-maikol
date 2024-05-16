import ExternalLink from '@/components/ui/ExternalLink'
import { cn } from '@/lib/utils'

interface PropsAddLinksToItem extends React.HTMLAttributes<HTMLElement> {
  words?: { text: string; url: string }[]
  children: React.ReactNode
}

export default function AddLinksToItem({
  children,
  words,
  className,

  ...props
}: PropsAddLinksToItem) {
  if (!children) return null
  const p = children.toString()

  if (!words)
    return (
      <li className={cn('`mb-5 text-pretty py-1', className)} {...props}>
        {p}
      </li>
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
    <li className={cn('mb-5 text-pretty py-1', className)} {...props}>
      {parts}
    </li>
  )
}
