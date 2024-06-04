import BoxExperience from '@/components/experience/BoxExperience'
import ContainerMain from '@/components/containers/ContainerMain'
import Container from '@/components/containers/Container'
import { experiences } from '@/app/experience/data_experience'

export default function Experience() {
  return (
    <ContainerMain>
      {experiences.map(({ IconCompany, id, ...res }, index) => {
        return (
          <Container key={id}>
            <BoxExperience Icon={IconCompany} id={id} {...res} />
          </Container>
        )
      })}
    </ContainerMain>
  )
}
