import BoxCertifications from '@/components/certifications/BoxCertifications'
import ContainerMain from '@/components/containers/ContainerMain'
import json from '@/data/certifications.json'

export default function Certifications() {
  const { certifications } = json
  return (
    <ContainerMain>
      {certifications.map(
        ({
          expedition_date,
          institution,
          title,
          url_certification,
          institution_logo,
          technologies,
        }) => {
          return (
            <BoxCertifications
              key={crypto.randomUUID()}
              expedition_date={expedition_date}
              institution={institution}
              title={title}
              url_certification={url_certification}
              institution_logo={institution_logo}
            />
          )
        }
      )}
    </ContainerMain>
  )
}
