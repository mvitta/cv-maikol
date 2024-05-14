import { ComponentProps } from 'react'

export default function Container({
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className='px-2 py-9 mb-4 border border-black' {...props}>
      {children}
    </div>
  )
}
