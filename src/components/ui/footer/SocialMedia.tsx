import Github from '@/components/icons/social_media/Github'
import Linkedin from '@/components/icons/social_media/Linkedin'

export default function SocialMedia() {
  const iconsSocialMedia = [
    { Icon: Github, url: 'https://github.com/mvitta' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/maikoldevjs/' },
  ]
  return (
    <section className='flex justify-around items-center'>
      <div>
        <span>© 2024 - Maikol Alberto Vitta Mejia</span>
      </div>
      <div className='flex gap-x-3'>
        {iconsSocialMedia.map(({ Icon, url }) => (
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            key={crypto.randomUUID()}
            aria-label='icons about social networks'
          >
            <Icon width={30} height={30} />
          </a>
        ))}
      </div>
    </section>
  )
}
