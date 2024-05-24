import BoxCertifications from '@/components/certifications/BoxCertifications'
import ContainerMain from '@/components/containers/ContainerMain'
import json from '@/data/certifications.json'

export default function Certifications() {
  const { certifications } = json
  return (
    <ContainerMain>
      <div className='absolute right-0 top-5 z-[-1]'>
        <svg
          width='238'
          height='531'
          viewBox='0 0 238 531'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            opacity='0.3'
            x='422.819'
            y='-70.8145'
            width='196'
            height='541.607'
            rx='2'
            transform='rotate(51.2997 422.819 -70.8145)'
            fill='url(#paint0_linear_83:2)'
          ></rect>
          <rect
            opacity='0.3'
            x='426.568'
            y='144.886'
            width='59.7544'
            height='541.607'
            rx='2'
            transform='rotate(51.2997 426.568 144.886)'
            fill='url(#paint1_linear_83:2)'
          ></rect>
          <defs>
            <linearGradient
              id='paint0_linear_83:2'
              x1='517.152'
              y1='-251.373'
              x2='517.152'
              y2='459.865'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#4A6CF7'></stop>
              <stop offset='1' stop-color='#4A6CF7' stop-opacity='0'></stop>
            </linearGradient>
            <linearGradient
              id='paint1_linear_83:2'
              x1='455.327'
              y1='-35.673'
              x2='455.327'
              y2='675.565'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#4A6CF7'></stop>
              <stop offset='1' stop-color='#4A6CF7' stop-opacity='0'></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
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
