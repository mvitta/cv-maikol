import { cn } from '@/lib/utils'
import Item from '../ui/Item'
import List from '../ui/List'
import Endeavor from './icons/Endeavor'
import Unknown from './icons/Unknown'
import { ComponentProps, useState } from 'react'
import Button from './Button'
import Certification from '../certifications/icons/IconCertification'
import { twMerge } from 'tailwind-merge'

interface PropsBoxExperience {
  id: number
  job: string
  company: string
  time: string
  location: string
  description: string[]
  Icon: (props: ComponentProps<'svg'>) => JSX.Element
}

export default function BoxExperience({
  job,
  company,
  time,
  location,
  description,
  Icon,
  id,
}: PropsBoxExperience) {
  ;[]
  return (
    <section
      className={twMerge(
        'grid grid-cols-[auto,_1fr] min-w-[300px] max-w-[700px]',
        'relative px-2 pt-3 pb-20  mx-auto ',
        'border-t-8 border-blue-500 rounded',
        'shadow-md dark:shadow-slate-700   overflow-hidden'
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
      <div className='px-3'>{<Icon width={50} height={50} />}</div>
      <div className='text-start'>
        {/* info job */}
        <div className='flex flex-col mb-4 leading-relaxed'>
          <div className='font-bold dark:text-white'>{job}</div>
          <div className='dark:text-white'>{company}</div>
          <div className='text-gray-600 dark:text-slate-400'>{time}</div>
          <div className='text-gray-600 dark:text-slate-400'>{location}</div>
        </div>
        {/* description job */}
        <div
          id={`description-job-${id}`}
          className='h-[100px] overflow-y-hidden'
        >
          <List className='list-inside list-["✅"] dark:text-dark-mode-text-p'>
            {description.map((experience) => (
              <Item className='mb-2 leading-loose' key={id}>
                {experience}
              </Item>
            ))}
          </List>
        </div>
        <div className='relative w-full h-[60px]'>
          <Button id={`description-job-${id}`} />
        </div>
      </div>
    </section>
  )
}
