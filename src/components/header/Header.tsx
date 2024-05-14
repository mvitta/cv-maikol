import Cv from '../icons/Cv'
import { Dark, Light } from '../icons/index'

import { ContainerHeader, MenuItem, NavApp } from './index'

type PropsHeader = React.HTMLAttributes<HTMLElement>

export default function Header({ children, ...props }: PropsHeader) {
  const items = [
    { pathname: '/', text: 'Perfil' },
    { pathname: '/experience', text: 'Experiencia Laboral' },
    { pathname: '/certifications', text: 'Certificaciones' },
  ]
  return (
    <header {...props}>
      <ContainerHeader className='shadow-md'>
        <section>
          <Cv />
        </section>
        <section>
          <NavApp className='flex gap-y-2 justify-center items-center flex-wrap min-h-16'>
            {items.map(({ pathname, text }) => {
              return (
                <MenuItem
                  pathname={pathname}
                  className='mr-4 text-center hover:text-slate-950 hover:font-bold transition-all duration-200 ease-out'
                  text={text}
                  key={crypto.randomUUID()}
                />
              )
            })}
          </NavApp>
        </section>
        <section>
          <Dark />
          <Light />
        </section>
      </ContainerHeader>
      {children}
    </header>
  )
}
