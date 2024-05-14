type PropsTitle = React.HTMLAttributes<HTMLHeadingElement>

export default function Title({ children, ...props }: PropsTitle) {
  return (
    <h1
      className='mb-8 font-bold uppercase text-2xl xl:text-4xl 2xl:text-5xl text-balance'
      {...props}
    >
      {children}
    </h1>
  )
}
