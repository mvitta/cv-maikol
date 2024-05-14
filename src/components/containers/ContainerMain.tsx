type PropsContainerMain = React.HTMLAttributes<HTMLElement>

export default function ContainerMain({
  children,
  ...props
}: PropsContainerMain) {
  return (
    <main className='mt-4 py-16 px-3 sm:px-6 md:px-32 lg:px-44' {...props}>
      {children}
    </main>
  )
}
