export default function ContainerHeader({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      id='container-header'
      className={`p-3 flex justify-center gap-x-10 gap-y-4 lg:justify-between items-center flex-wrap ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
