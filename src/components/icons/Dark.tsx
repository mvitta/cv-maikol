export default function Dark({ ...props }: React.ComponentProps<'svg'>) {
  return (
    <button name='btn-dark'>
      <svg viewBox='0 0 23 23' fill='#000000' className={`w-6 h-6`} {...props}>
        <path
          d='M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    </button>
  )
}
