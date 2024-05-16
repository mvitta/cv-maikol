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

const {
  listContent,
  paragraphs: [description, ...res],
} = json.profile

export default function Home() {
  return (
    <ContainerMain>
      <section>
        <FrontPage />
        <div className='pt-24 pb-64'>
          <Title className='mb-8 text-[40px]'>
            Maikol Vitta - Desarrollador Frontend Jr.
          </Title>
          <AddLinksToParagraph
            words={[
              { text: 'MisiónTic 2022', url: '' },
              { text: 'universidad del norte', url: '' },
              { text: 'Hackatón', url: '' },
            ]}
          >
            {description}
          </AddLinksToParagraph>
          <div className='w-full flex flex-wrap space-x-7 justify-center py-8'>
            {[
              { text: 'Habilidades', href: '#habilidades' },
              { text: 'Proyectos', href: '#proyectos' },
            ].map(({ text, href }) => (
              <InternalLink
                href={href}
                className={cn(
                  text === 'Habilidades' && 'bg-blue-900 text-white',
                  text === 'Proyectos' && 'bg-slate-700 text-white'
                )}
                text={text}
                key={crypto.randomUUID()}
              />
            ))}
          </div>
        </div>
        <Container id='habilidades'>
          <SubTitle>Habilidades</SubTitle>
          <List className='list-image-[url(../components/icons/check.svg)] list-inside'>
            {listContent.map((item) => (
              <AddLinksToItem
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
        </Container>
        <Container id='proyectos'>
          <SubTitle>Proyectos Anteriores y Actuales</SubTitle>
          {res.map((paragraph) => {
            return (
              <AddLinksToParagraph
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
        </Container>
      </section>
    </ContainerMain>
  )
}
