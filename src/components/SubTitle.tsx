type PropsSubTitle = React.HTMLAttributes<HTMLHeadingElement>

export default function SubTitle({ children, ...props }: PropsSubTitle) {
  return (
    <h2 className='font-semibold mb-6 text-balance capitalize' {...props}>
      {children}
    </h2>
  )
}
