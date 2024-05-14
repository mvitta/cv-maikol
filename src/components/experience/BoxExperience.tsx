import Item from '../Item'
import List from '../List'
import Endeavor from './icons/Endeavor'

interface PropsBoxExperience {
  job: string
  company: string
  time: string
  location: string
  description: string[]
}

export default function BoxExperience({
  job,
  company,
  time,
  location,
  description,
}: PropsBoxExperience) {
  return (
    <section className='grid grid-cols-[60px,_1fr] min-w-[300px] max-w-[700px] mx-auto shadow-md border-t-4 border-blue-500 rounded p-2 mb-6'>
      <div className=''>
        <Endeavor width={50} height={50} />
      </div>
      <div className='text-start'>
        <div className='flex flex-col mb-4'>
          <div className='font-bold'>{job}</div>
          <div>{company}</div>
          <div className='text-gray-600'>{time}</div>
          <div className='text-gray-600'>{location}</div>
        </div>
        <div>
          <List className='list-inside list-["✅"]'>
            {description.map((experience) => (
              <Item className='mb-2' key={crypto.randomUUID()}>
                {experience}
              </Item>
            ))}
          </List>
        </div>
      </div>
    </section>
  )
}
