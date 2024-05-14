type PropsExternalLink = React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function ExternalLink({
  children,
  ...props
}: PropsExternalLink) {
  return (
    <>
      {' '}
      <a
        target='_blank'
        rel='noopener noreferrer'
        className='font-light text-blue-500 underline underline-offset-4'
        {...props}
      >
        {children}
      </a>
    </>
  )
}
