type PropsList = React.HTMLAttributes<HTMLUListElement>

export default function List({ children, ...props }: PropsList) {
  return <ul {...props}>{children}</ul>
}
