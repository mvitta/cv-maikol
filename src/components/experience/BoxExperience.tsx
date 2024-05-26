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
    <section className='px-2 pt-3 pb-20 grid grid-cols-[auto,_1fr] min-w-[300px] max-w-[700px] mx-auto shadow-md border-t-4 border-blue-500 rounded dark:shadow-white'>
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
