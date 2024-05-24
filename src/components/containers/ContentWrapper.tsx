import { HTMLAttributes } from 'react'

type PropsContentWrapper = HTMLAttributes<HTMLDivElement>

export default function ContentWrapper({ children }: PropsContentWrapper) {
  return <div className='max-w-[800px] mx-auto'>{children}</div>
}
