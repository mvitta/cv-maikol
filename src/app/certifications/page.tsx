import BoxCertifications from '@/components/certifications/BoxCertifications'
import ContainerMain from '@/components/containers/ContainerMain'
import { certifications } from '@/app/certifications/data_certifications'

export default function Certifications() {
  return (
    <ContainerMain>
      {certifications.map(({ id, ...res }) => {
        return <BoxCertifications key={id} {...res} />
      })}
    </ContainerMain>
  )
}
