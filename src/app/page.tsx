import List from '@/components/List'
import SubTitle from '@/components/SubTitle'
import Title from '@/components/Title'
import Container from '@/components/containers/Container'
import FrontPage from '@/components/icons/FrontPage'
import json from '@/data/profile.json'
import AddLinks from '@/components/formatters/AddLinksToParagraph'
import AddLinksToItem from '@/components/formatters/AddLinksToItem'
import AddLinksToParagraph from '@/components/formatters/AddLinksToParagraph'
import ContainerMain from '@/components/containers/ContainerMain'

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
          <Title>Maikol Vitta - Desarrollador Frontend Jr.</Title>
          <AddLinks
            words={[
              { text: 'MisiónTic 2022', url: '' },
              { text: 'universidad del norte', url: '' },
              { text: 'Hackatón', url: '' },
            ]}
          >
            {description}
          </AddLinks>
          <div className='w-full flex flex-wrap space-x-7 justify-center py-8'>
            <a
              className='border rounded py-2 px-3 bg-slate-800 text-white'
              href='#habilidades'
            >
              Habilidades
            </a>
            <a
              className='border rounded py-2 px-3 bg-blue-900 text-white'
              href='#proyectos'
            >
              Proyectos
            </a>
          </div>
        </div>
        <Container id='habilidades'>
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
