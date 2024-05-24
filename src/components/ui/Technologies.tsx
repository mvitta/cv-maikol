import { iconsSkills } from '@/components/icons/technologies/icons'
import { HTMLAttributes } from 'react'

export default function Technologies({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className='icons' {...props}>
      <div className='icons-slide'>
        {iconsSkills.map((IconSkill) => (
          <IconSkill
            className='mx-5 icon-svg'
            key={crypto.randomUUID()}
            width={50}
            height={50}
          />
        ))}
      </div>
      <div className='icons-slide'>
        {iconsSkills.map((IconSkill) => (
          <IconSkill
            className='mx-5 icon-svg'
            key={crypto.randomUUID()}
            width={50}
            height={50}
          />
        ))}
      </div>
    </section>
  )
}
