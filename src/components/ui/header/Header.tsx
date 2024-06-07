'use client'

import ContainerHeader from '@/components/containers/ContainerHeader'
import NavApp from '@/components/ui/header/NavApp'
import { iconsSocialMedia } from '@/components/icons/social_media/index'
import { useEffect, useRef } from 'react'
import DarkMode from '../DarkMode'
import Brand from './Brand'
import { cn } from '@/lib/utils'

type PropsHeader = React.HTMLAttributes<HTMLElement>

export default function Header({ children, className, ...props }: PropsHeader) {
  const refHeader = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (refHeader.current) {
        const scrollY = window.scrollY
        if (scrollY > 0) {
          refHeader.current.classList.add('opacity-90')
        }
        if (scrollY === 0) {
          refHeader.current.classList.remove('opacity-90')
        }
      }
    })

    // remover el evento
  }, [])

  return (
    <header
      className={cn(className, 'z-[9999] fixed top-0')}
      ref={refHeader}
      {...props}
    >
      <ContainerHeader className='px-2 sm:px-6 md-2:px-14'>
        <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-3'>
          <section>
            <NavApp />
          </section>
        </div>
        <section className='flex items-center gap-x-3'>
          <Brand />
          {iconsSocialMedia.map(({ id, Icon, url }) => (
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              key={id}
              aria-label='icons about social networks'
              className='grid place-items-center'
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
