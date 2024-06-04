import { ComponentProps } from 'react'

export default function MenuIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      className='fill-black dark:fill-white'
      viewBox='0 -960 960 960'
      {...props}
    >
      <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
    </svg>
  )
}
