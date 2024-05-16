interface PropsParagraph extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function Paragraph({ children, ...props }: PropsParagraph) {
  return (
    <p className='mb-5 text-pretty py-1' {...props}>
      {children}
    </p>
  )
}
