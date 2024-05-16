type PropsItem = React.HTMLAttributes<HTMLLIElement>

export default function Item({ children, ...props }: PropsItem) {
  return (
    <>
      <li {...props}>{children}</li>
    </>
  )
}
