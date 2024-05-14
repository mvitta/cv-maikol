import BoxExperience from '@/components/experience/BoxExperience'
import json from '@/app/experience/experience.json'
import ContainerMain from '@/components/containers/ContainerMain'
import Container from '@/components/containers/Container'

export default function Experience() {
  return (
    <ContainerMain>
      {json.experiences.map(({ job, company, time, location, description }) => {
        return (
          <Container key={crypto.randomUUID()}>
            <BoxExperience
              job={job}
              company={company}
              time={time}
              location={location}
              description={description}
            />
          </Container>
        )
      })}
    </ContainerMain>
  )
}
