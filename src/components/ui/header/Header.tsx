import Cv from '../../icons/Cv'
import Dark from '@/components/icons/Dark'
import Light from '@/components/icons/Light'
import ContainerHeader from '@/components/containers/ContainerHeader'
import MenuItem from '@/components/ui/header/MenuItem'
import NavApp from '@/components/ui/header/NavApp'

type PropsHeader = React.HTMLAttributes<HTMLElement>

export default function Header({ children, ...props }: PropsHeader) {
  const items = [
    { pathname: '/', text: 'Perfil' },
    { pathname: '/experience', text: 'Experiencia Laboral' },
    { pathname: '/certifications', text: 'Certificaciones' },
  ]
  return (
    <header {...props}>
      <ContainerHeader className='shadow-md shadow-blue-950'>
        <section>
          <Cv />
        </section>
        <section>
          <NavApp>
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
