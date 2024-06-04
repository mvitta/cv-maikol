import Image from 'next/image'
import IconCertification from './icons/IconCertification'
import IconLinkExternal from './icons/IconLinkExternal'
import { twMerge } from 'tailwind-merge'
import IconCompany from '../icons/IconCompany'
import Badges from '../ui/Badges'

interface PropsCertifications {
  title: string
  institution: string
  expedition_date: string
  url_certification: string
  institution_logo?: string
  technologies?: { id: number; topic: string }[]
}

export default function BoxCertifications({
  title,
  institution,
  expedition_date,
  url_certification,
  institution_logo,
  technologies,
}: PropsCertifications) {
  return (
    <section
      className={twMerge(
        'mb-7 px-2 pt-3 pb-20 relative',
        'grid grid-cols-[auto,_1fr] min-w-[300px] max-w-[700px]',
        'mx-auto border-t-4 border-t-blue-500 rounded',
        'shadow-md dark:shadow-slate-700 overflow-hidden',
        'hover:border-t-blue-800'
      )}
    >
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
              <stop stopColor='#4A6CF7'></stop>
              <stop offset='1' stopColor='#4A6CF7' stopOpacity='0'></stop>
            </linearGradient>
            <linearGradient
              id='paint1_linear_83:2'
              x1='455.327'
              y1='-35.673'
              x2='455.327'
              y2='675.565'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#4A6CF7'></stop>
              <stop offset='1' stopColor='#4A6CF7' stopOpacity='0'></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='px-3'>
        {institution_logo ? (
          <Image
            src={institution_logo}
            alt='logo institution'
            width={50}
            height={50}
          />
        ) : (
          <IconCompany width={50} height={50} />
        )}
      </div>
      <div className='text-start'>
        <div className='flex flex-col mb-4 leading-relaxed'>
          <a
            href={url_certification}
            target='_blank'
            rel='noopener noreferrer'
            className={twMerge(
              'font-bold',
              'hover:underline hover:underline-offset-4 hover:text-blue-500',
              'dark:text-white'
            )}
          >
            {title}
          </a>
          <div className='dark:text-dark-mode-text-p'>{institution}</div>
          <div className='text-gray-600 dark:text-gray-400'>
            {expedition_date}
          </div>
          <div>{<Badges technologies={technologies} />}</div>
        </div>
        <div>
          <a
            className={twMerge(
              'min-w-max space-x-2 max-w-max',
              'flex items-center justify-items-center',
              'py-1 px-6 border border-black w-1/2 rounded-md',
              'hover:text-white hover:border-white hover:bg-blue-600 hover:contrast-200',
              'transition duration-100 ease-out',
              'dark:text-dark-mode-text-p dark:border-white'
            )}
            target='_blank'
            rel='noopener noreferrer'
            href={url_certification}
          >
            <span className='inline-block'>Mostrar credencial</span>
            <div className='inline-block'>
              <IconLinkExternal width={20} height={20} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
