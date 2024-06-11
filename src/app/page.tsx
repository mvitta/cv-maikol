import List from '@/components/ui/List'
import SubTitle from '@/components/ui/SubTitle'
import Title from '@/components/ui/Title'
import Container from '@/components/containers/Container'
import FrontPage from '@/components/icons/FrontPage'
import AddLinksToItem from '@/components/formatters/AddLinksToItem'
import AddLinksToParagraph from '@/components/formatters/AddLinksToParagraph'
import ContainerMain from '@/components/containers/ContainerMain'
import InternalLink from '@/components/ui/InternalLink'
import { cn } from '@/lib/utils'
import Technologies from '@/components/ui/Technologies'
import ContentWrapper from '@/components/containers/ContentWrapper'
import IconSkills from '@/components/icons/IconSkills'
import IconProject from '@/components/icons/IconProject'
import { profile } from '@/app/data_profile'

export default function Home() {
  const {
    skills,
    description: [descriptionMain, descriptionExperience, ...resDescriptions],
  } = profile
  return (
    <ContainerMain>
      <section>
        <FrontPage />
        <div className='pt-24 pb-64 max-w-[800px] mx-auto'>
          <Title className='mb-8'>
            Maikol Vitta, Desarrollador Frontend Jr.
          </Title>
          <AddLinksToParagraph
            className='dark:text-dark-mode-text-p leading-loose'
            words={[
              {
                text: 'MisiónTic 2022',
                url: 'https://www.misiontic2022.gov.co/portal/Secciones/Mision-TIC-2022/',
              },
              {
                text: 'Universidad del Norte',
                url: 'https://www.uninorte.edu.co/web/educacion-continuada/misiontic2022#:~:text=MISI%C3%93N%20TIC%202022%20es%20una,las%20pol%C3%ADticas%20de%20reactivaci%C3%B3n%20econ%C3%B3mica',
              },
              {
                text: 'Hackatón',
                url: 'https://github.com/mvitta/Certificados/blob/main/Mision%20Mintic%202022/Hackaton.pdf',
              },
            ]}
          >
            {descriptionMain.text}
          </AddLinksToParagraph>
          {/* buttons */}
          <div className='w-full flex flex-wrap space-x-7 justify-center py-8'>
            {[
              {
                id: 1,
                text: 'Habilidades',
                href: '#habilidades',
                Icon: IconSkills,
              },
              {
                id: 2,
                text: 'Proyectos',
                href: '#proyectos',
                Icon: IconProject,
              },
            ].map(({ id, text, href, Icon }) => (
              <InternalLink
                href={href}
                className={cn(
                  'hover:brightness-125',
                  text === 'Habilidades' &&
                    'bg-blue-900 text-white dark:text-dark-mode-text-p',
                  text === 'Proyectos' &&
                    'bg-slate-700 text-white dark:text-dark-mode-text-p'
                )}
                text={text}
                key={id}
              >
                <Icon className='inline-block mr-3' />
              </InternalLink>
            ))}
          </div>
          {/* <------------> */}
        </div>
        <Container className='mb-10'>
          <ContentWrapper>
            <Technologies className='mb-10 mx-auto' />
          </ContentWrapper>
        </Container>
        <Container id='habilidades'>
          <ContentWrapper>
            <SubTitle className='dark:text-white uppercase text-3xl'>
              Habilidades
            </SubTitle>
            <List className='list-image-[url(../components/icons/check.svg)] list-inside'>
              {skills.map(({ id, text }) => (
                <AddLinksToItem
                  className='dark:text-dark-mode-text-p'
                  key={id}
                  words={[
                    { text: 'Golang', url: 'https://go.dev/' },
                    { text: 'Python', url: 'https://www.python.org/' },
                    {
                      text: 'Flask',
                      url: 'https://flask.palletsprojects.com/en/3.0.x/',
                    },
                    { text: 'React JS', url: 'https://react.dev/' },
                    { text: 'Tailwind', url: 'https://tailwindcss.com/' },
                    {
                      text: 'CSS',
                      url: 'https://developer.mozilla.org/es/docs/Web/CSS',
                    },
                    {
                      text: 'HTML',
                      url: 'https://developer.mozilla.org/es/docs/Web/HTML',
                    },
                    {
                      text: 'Client Components',
                      url: 'https://nextjs.org/docs/app/building-your-application/rendering/client-components',
                    },
                    {
                      text: 'Server Components',
                      url: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components',
                    },
                    {
                      text: 'node-postgres',
                      url: 'https://node-postgres.com/',
                    },
                    {
                      text: 'JavaScript',
                      url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
                    },
                    {
                      text: 'TypeScript',
                      url: 'https://www.typescriptlang.org/',
                    },
                    { text: 'ViteJS', url: 'https://vitejs.dev/' },
                    { text: 'NextJS', url: 'https://nextjs.org/' },
                    { text: 'NodeJS', url: 'https://nodejs.org/en' },
                    { text: 'Git', url: 'https://www.git-scm.com/' },
                    { text: 'GitHub', url: 'https://github.com/' },
                    { text: 'PostgreSQL', url: 'https://www.postgresql.org/' },
                    { text: 'ORM prisma', url: 'https://www.prisma.io/' },
                  ]}
                >
                  {text}
                </AddLinksToItem>
              ))}
            </List>
            <AddLinksToParagraph>
              {descriptionExperience.text}
            </AddLinksToParagraph>
          </ContentWrapper>
        </Container>
        <Container id='proyectos'>
          <ContentWrapper>
            <SubTitle className='dark:text-white uppercase text-3xl'>
              Proyectos Anteriores y Actuales
            </SubTitle>
            {resDescriptions.map(({ id, text }) => {
              return (
                <AddLinksToParagraph
                  className='dark:text-dark-mode-text-p'
                  key={id}
                  words={[
                    { text: 'Notion', url: 'https://www.notion.so/es-la' },
                    {
                      text: 'Route Handlers',
                      url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers',
                    },
                    { text: 'Endeavor', url: 'https://colombia.endeavor.org/' },
                    {
                      text: 'Dashboard en Salesforce',
                      url: 'https://drive.google.com/drive/u/0/folders/1xfcVB8CBBv5nvgfPqQyh6XRmBYQCbSzf',
                    },
                    {
                      text: 'mi GitHub',
                      url: 'https://github.com/mvitta',
                    },
                  ]}
                >
                  {text}
                </AddLinksToParagraph>
              )
            })}
          </ContentWrapper>
        </Container>
      </section>
    </ContainerMain>
  )
}
