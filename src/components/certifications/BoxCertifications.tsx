import Image from 'next/image'
import IconCertification from './icons/IconCertification'
import IconLinkExternal from './icons/IconLinkExternal'
import { twMerge } from 'tailwind-merge'
import IconCompany from '../icons/IconCompany'

interface PropsCertifications {
  title: string
  institution: string
  expedition_date: string
  url_certification: string
  institution_logo?: string
}

export default function BoxCertifications({
  title,
  institution,
  expedition_date,
  url_certification,
  institution_logo,
}: PropsCertifications) {
  return (
    <section
      className={twMerge(
        'mb-7 px-2 pt-3 pb-20',
        'grid grid-cols-[auto,_1fr] min-w-[300px] max-w-[700px]',
        'mx-auto shadow-md border-t-4 border-blue-500 rounded'
      )}
    >
      <div className='px-3'>
        <IconCertification width={50} height={50} className='mb-4' />
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
        <div className='flex flex-col mb-4'>
          <a
            href={url_certification}
            target='_blank'
            rel='noopener noreferrer'
            className={twMerge(
              'font-bold',
              'hover:underline hover:underline-offset-4 hover:text-blue-500'
            )}
          >
            {title}
          </a>
          <div>{institution}</div>
          <div className='text-gray-600'>{expedition_date}</div>
        </div>
        <div>
          <a
            className={twMerge(
              'min-w-max space-x-2 max-w-max',
              'flex items-center justify-items-center',
              'py-1 px-6 border border-black w-1/2 rounded-md',
              'hover:text-white hover:border-white hover:bg-blue-600 hover:contrast-200',
              'transition duration-100 ease-out'
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
