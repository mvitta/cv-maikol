import Cv from '@/components/icons/Cv'
import { cn } from '@/lib/utils'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import MenuItem from './MenuItem'
import styles from '@/components/icons/IconNavApp.module.css'

type PropsNavApp = React.HTMLAttributes<HTMLElement>

export default function NavApp({ className, ...props }: PropsNavApp) {
  const refNav = useRef<HTMLElement>(null)
  const refDiv = useRef<HTMLDivElement>(null)

  const items = [
    { id: 1, pathname: '/', text: 'Perfil' },
    { id: 2, pathname: '/experience', text: 'Experiencia' },
    { id: 3, pathname: '/certifications', text: 'Certificaciones' },
  ]

  function showNavApp() {
    if (refNav.current) {
      refNav.current.classList.toggle('hidden')
    }

    if (refDiv.current) {
      refDiv.current.classList.toggle(`${styles.notActive}`)
      refDiv.current.classList.toggle(`${styles.active}`)
    }
  }

  return (
    <>
      <button onClick={showNavApp} className={twMerge('xl:hidden')}>
        <div ref={refDiv} className={`${styles.btn} ${styles.notActive}`}>
          <span className={`${styles.item} dark:bg-white`}></span>
          <span className={`${styles.item} dark:bg-white`}></span>
          <span className={`${styles.item} dark:bg-white`}></span>
        </div>
      </button>

      <nav
        ref={refNav}
        className={cn('w-full hidden xl:block', className)}
        {...props}
      >
        <ul
          className={twMerge(
            `${styles.navApp} absolute h-min-[300px] h-[500px] pt-20 px-8 z-[99] w-[300px]`,
            'border-t-blue-500 border-t-4 rounded-md mt-12 bg-white shadow-md shadow-blue-500',
            // dark mode
            'dark:bg-dark-mode',
            // screens > 1024
            'xl:flex xl:gap-x-8 xl:z-0 xl:pt-0 xl:h-auto xl:w-auto xl:static xl:min- xl:mt-0 xl:border-none xl:shadow-none xl:dark:shadow-none xl:bg-transparent xl:px-0'
          )}
        >
          <section>
            <Cv className='absolute left-7 top-3 xl:static' />
          </section>
          <section
            className={cn(
              'h-[100px] relative border-l border-solid border-l-gray-300',
              'xl:border-l-0 xl:flex xl:gap-x-8 xl:justify-center xl:items-center xl:flex-wrap xl:h-auto'
            )}
          >
            {items.map(({ id, pathname, text }) => {
              return (
                <MenuItem
                  fn={showNavApp}
                  pathname={pathname}
                  className='mr-4 text-center'
                  text={text}
                  key={id}
                />
              )
            })}
          </section>
        </ul>
      </nav>
    </>
  )
}
