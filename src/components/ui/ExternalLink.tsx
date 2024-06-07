type PropsExternalLink = React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function ExternalLink({
  children,
  ...props
}: PropsExternalLink) {
  return (
    <>
      <a
        href={typeof children === 'string' ? children : ''}
        target='_blank'
        rel='noopener noreferrer'
        className='font-light text-blue-500 hover:text-blue-300 underline underline-offset-4 contrast-100'
        {...props}
      >
        {children}
      </a>
    </>
  )
}
