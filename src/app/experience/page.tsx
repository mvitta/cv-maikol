import BoxExperience from '@/components/experience/BoxExperience'
import json from '@/data/experience.json'
import ContainerMain from '@/components/containers/ContainerMain'
import Container from '@/components/containers/Container'
import Unknown from '@/components/experience/icons/Unknown'
import Endeavor from '@/components/experience/icons/Endeavor'

export default function Experience() {
  const iconsCompanys = [Endeavor, Unknown, Unknown]
  const experiences = json.experiences.map((experience, index) => {
    return { ...experience, Icon: iconsCompanys[index] }
  })

  return (
    <ContainerMain>
      {experiences.map(
        ({ job, company, time, location, description, Icon }, index) => {
          return (
            <Container key={crypto.randomUUID()}>
              <BoxExperience
                Icon={<Icon width={50} height={50} />}
                job={job}
                company={company}
                time={time}
                location={location}
                description={description}
                index={index}
              />
            </Container>
          )
        }
      )}
    </ContainerMain>
  )
}
