import List from '@/components/ui/List'
import SubTitle from '@/components/ui/SubTitle'
import Title from '@/components/ui/Title'
import Container from '@/components/containers/Container'
import FrontPage from '@/components/icons/FrontPage'
import json from '@/data/profile.json'
import AddLinksToItem from '@/components/formatters/AddLinksToItem'
import AddLinksToParagraph from '@/components/formatters/AddLinksToParagraph'
import ContainerMain from '@/components/containers/ContainerMain'
import InternalLink from '@/components/ui/InternalLink'
import { cn } from '@/lib/utils'
import Technologies from '@/components/ui/Technologies'
import ContentWrapper from '@/components/containers/ContentWrapper'
import IconSkills from '@/components/icons/IconSkills'
import IconProject from '@/components/icons/IconProject'

const {
  listContent,
  paragraphs: [description, ...res],
} = json.profile

export default function Home() {
  return (
    <ContainerMain>
      <section>
        <FrontPage />
        <div className='pt-24 pb-64 max-w-[800px] mx-auto'>
          <Title className='mb-8'>
            Maikol Vitta - Desarrollador Frontend Jr.
          </Title>
          <AddLinksToParagraph
            className='dark:text-dark-mode-text-p'
            words={[
              { text: 'MisiónTic 2022', url: '' },
              { text: 'universidad del norte', url: '' },
              { text: 'Hackatón', url: '' },
            ]}
          >
            {description}
          </AddLinksToParagraph>
          {/* buttons */}
          <div className='w-full flex flex-wrap space-x-7 justify-center py-8'>
            {[
              { text: 'Habilidades', href: '#habilidades', Icon: IconSkills },
              { text: 'Proyectos', href: '#proyectos', Icon: IconProject },
            ].map(({ text, href, Icon }) => (
              <InternalLink
                href={href}
                className={cn(
                  text === 'Habilidades' &&
                    'bg-blue-900 text-white dark:text-dark-mode-text-p',
                  text === 'Proyectos' &&
                    'bg-slate-700 text-white dark:text-dark-mode-text-p'
                )}
                text={text}
                key={crypto.randomUUID()}
              >
                <Icon className='inline-block mr-3' />
              </InternalLink>
            ))}
          </div>
          {/* <------------> */}
        </div>
        <Container className='mb-10'>
          <ContentWrapper>
            <Technologies className='mb-10' />
          </ContentWrapper>
        </Container>
        <Container id='habilidades'>
          <ContentWrapper>
            <SubTitle className='dark:text-white uppercase'>
              Habilidades
            </SubTitle>
            <List className='list-image-[url(../components/icons/check.svg)] list-inside'>
              {listContent.map((item) => (
                <AddLinksToItem
                  className='dark:text-dark-mode-text-p'
                  key={crypto.randomUUID()}
                  words={[
                    { text: 'Golang', url: '' },
                    { text: 'Python', url: '' },
                    { text: 'JavaScript', url: '' },
                    { text: 'TypeScript', url: '' },
                    { text: 'ViteJS', url: '' },
                    { text: 'NextJS', url: '' },
                    { text: 'NodeJS', url: '' },
                    { text: 'Git', url: '' },
                    { text: 'GitHub', url: '' },
                    { text: 'PostgreSQL', url: '' },
                    { text: 'ORM prisma', url: '' },
                  ]}
                >
                  {item}
                </AddLinksToItem>
              ))}
            </List>
          </ContentWrapper>
        </Container>
        <Container id='proyectos'>
          <ContentWrapper>
            <SubTitle className='dark:text-white uppercase'>
              Proyectos Anteriores y Actuales
            </SubTitle>
            {res.map((paragraph) => {
              return (
                <AddLinksToParagraph
                  className='dark:text-dark-mode-text-p'
                  key={crypto.randomUUID()}
                  words={[
                    { text: 'Notion', url: '' },
                    { text: 'Route Handlers', url: '' },
                    { text: 'Endeavor', url: '' },
                  ]}
                >
                  {paragraph}
                </AddLinksToParagraph>
              )
            })}
          </ContentWrapper>
        </Container>
      </section>
    </ContainerMain>
  )
}
