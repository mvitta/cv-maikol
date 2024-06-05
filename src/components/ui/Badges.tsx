import { cn } from '@/lib/utils'

interface PropsBadges {
  technologies?: { id: number; topic: string }[]
}

export default function Badges({ technologies = [] }: PropsBadges) {
  return (
    <div className='flex flex-wrap gap-x-3 gap-y-2 my-1'>
      {technologies.map(({ id, topic }) => {
        const formattedTopicText = topic.toLowerCase().trim()
        return (
          <span
            className={cn(
              'inline-block px-2 py-1 rounded text-xs font-bold border border-slate-700',
              formattedTopicText === 'javascript' &&
                'bg-yellow-300 text-yellow-700 ',
              formattedTopicText === 'typescript' &&
                'bg-blue-400 text-blue-800',
              formattedTopicText === 'html' && 'bg-red-400 text-red-700',
              formattedTopicText === 'python' &&
                'bg-yellow-500 text-yellow-700',
              formattedTopicText === 'mongodb' && 'bg-[#00ED64] text-gray-600',
              formattedTopicText === 'java' &&
                'border border-blue-600 text-blue-400',
              formattedTopicText === 'flask' && 'bg-[#004b6b] text-white',
              formattedTopicText === 'css' && 'bg-blue-600 text-white',
              formattedTopicText === 'sqlite' && 'bg-[#dddddd] text-[#044a64]',
              formattedTopicText === 'mongoose' &&
                'text-[#aa0000] border border-[#aa0000] dark:bg-slate-100',
              formattedTopicText === 'react js' &&
                'text-[#58c4dc] bg-[#404756]',
              formattedTopicText === 'node js' && 'bg-[#99cc7d] text-[#2c682c]',
              formattedTopicText === 'bootstrap 5' && 'bg-[#7952b3] text-white',
              formattedTopicText === 'express' && 'bg-gray-100 text-black'
            )}
            key={id}
          >
            {formattedTopicText.toUpperCase()}
          </span>
        )
      })}
    </div>
  )
}
