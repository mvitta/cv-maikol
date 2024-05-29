import { cn } from '@/lib/utils'
import Item from '../ui/Item'
import List from '../ui/List'
import Endeavor from './icons/Endeavor'
import Unknown from './icons/Unknown'
import { useState } from 'react'
import Button from './Button'
import Certification from '../certifications/icons/IconCertification'

interface PropsBoxExperience {
  job: string
  company: string
  time: string
  location: string
  description: string[]
  Icon: JSX.Element
  index?: number
}

export default function BoxExperience({
  job,
  company,
  time,
  location,
  description,
  Icon,
  index,
}: PropsBoxExperience) {
  ;[]
  return (
    <section className='relative px-2 pt-3 pb-20 grid grid-cols-[auto,_1fr] min-w-[300px] max-w-[700px] mx-auto shadow-md border-t-4 border-blue-500 rounded dark:shadow-white overflow-hidden'>
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
      <div className='px-3'>{Icon}</div>
      <div className='text-start'>
        {/* info job */}
        <div className='flex flex-col mb-4'>
          <div className='font-bold dark:text-white'>{job}</div>
          <div className='dark:text-white'>{company}</div>
          <div className='text-gray-600 dark:text-slate-400'>{time}</div>
          <div className='text-gray-600 dark:text-slate-400'>{location}</div>
        </div>
        {/* description job */}
        <div
          id={`description-job-${index}`}
          className='h-[100px] overflow-y-hidden'
        >
          <List className='list-inside list-["✅"] dark:text-dark-mode-text-p'>
            {description.map((experience) => (
              <Item className='mb-2' key={crypto.randomUUID()}>
                {experience}
              </Item>
            ))}
          </List>
        </div>
        <div className='relative w-full h-[60px]'>
          <Button id={`description-job-${index}`} />
        </div>
      </div>
    </section>
  )
}
