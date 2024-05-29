'use client'

import Cv from '../../icons/Cv'
import ContainerHeader from '@/components/containers/ContainerHeader'
import MenuItem from '@/components/ui/header/MenuItem'
import NavApp from '@/components/ui/header/NavApp'
import Github from '@/components/icons/social_media/Github'
import Linkedin from '@/components/icons/social_media/Linkedin'
import { useEffect, useRef } from 'react'
import DarkMode from '../DarkMode'

type PropsHeader = React.HTMLAttributes<HTMLElement>

export default function Header({ children, ...props }: PropsHeader) {
  const refHeader = useRef<HTMLDivElement>(null)
  const items = [
    { pathname: '/', text: 'Perfil' },
    { pathname: '/experience', text: 'Experiencia Laboral' },
    { pathname: '/certifications', text: 'Certificaciones' },
  ]
  const iconsSocialMedia = [
    { Icon: Github, url: 'https://github.com/mvitta' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/maikoldevjs/' },
  ]

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (refHeader.current) {
        const scrollY = window.scrollY
        if (scrollY > 0) {
          refHeader.current.classList.add(
            'bg-white',
            'z-[9999]',
            'fixed',
            'opacity-90'
          )
        }
        if (scrollY === 0) {
          refHeader.current.classList.remove(
            'bg-white',
            'z-[9999]',
            'fixed',
            'opacity-90'
          )
        }
      }
    })
  }, [])

  return (
    <header ref={refHeader} {...props}>
      <ContainerHeader className='px-14'>
        <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-3'>
          <section>
            <Cv />
          </section>
          <section>
            <NavApp>
              {items.map(({ pathname, text }) => {
                return (
                  <MenuItem
                    pathname={pathname}
                    className='mr-4 text-center'
                    text={text}
                    key={crypto.randomUUID()}
                  />
                )
              })}
            </NavApp>
          </section>
        </div>
        <section className='flex gap-x-3'>
          {iconsSocialMedia.map(({ Icon, url }) => (
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              key={crypto.randomUUID()}
              aria-label='icons about social networks'
            >
              <Icon
                width={30}
                height={30}
                className='fill-slate-600 hover:fill-slate-900 dark:fill-dark-mode-fill-icons dark:hover:fill-white'
              />
            </a>
          ))}
          <DarkMode />
        </section>
      </ContainerHeader>
      {children}
    </header>
  )
}
