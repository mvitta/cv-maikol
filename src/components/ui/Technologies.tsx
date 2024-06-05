import { iconsSkills } from '@/components/icons/technologies/icons'
import { HTMLAttributes } from 'react'

export default function Technologies({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`icons ${className}`} {...props}>
      <div className='icons-slide'>
        {iconsSkills.map(({ Icon, id }) => (
          <Icon className='mx-5 icon-svg' key={id} width={50} height={50} />
        ))}
      </div>
      <div className='icons-slide'>
        {iconsSkills.map(({ Icon, id }) => (
          <Icon className='mx-5 icon-svg' key={id} width={50} height={50} />
        ))}
      </div>
    </section>
  )
}
