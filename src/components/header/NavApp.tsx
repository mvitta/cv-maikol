type PropsNavApp = React.HTMLAttributes<HTMLElement>

export default function NavApp({ children, className, ...props }: PropsNavApp) {
  return (
    <nav id='nav-bar' className={`w-full ${className}`} {...props}>
      {children}
    </nav>
  )
}
