import { cn } from '@/lib/utils'

interface PropsBadges {
  technologies?: string[]
}

export default function Badges({
  technologies = [
    'python',
    'javascript',
    'typescript',
    'html',
    'mongodb',
    'java',
    'flask',
    'css',
    'sqlite',
    'mongoose',
    'reactjs',
    'node',
  ],
}: PropsBadges) {
  return (
    <div className='flex flex-wrap gap-x-3 gap-y-2 my-1'>
      {technologies.map((technologie) => {
        return (
          <span
            className={cn(
              'inline-block px-2 py-1 rounded text-xs font-bold',
              technologie === 'javascript' && 'bg-yellow-300 text-yellow-500 ',
              technologie === 'typescript' && 'bg-blue-400 text-blue-800',
              technologie === 'html' && 'bg-red-400 text-red-700',
              technologie === 'python' && 'bg-yellow-500 text-yellow-700',
              technologie === 'mongodb' &&
                'bg-white border border-[#00ED64] text-[#00ED64]',
              technologie === 'java' && 'border border-blue-600 text-blue-400',
              technologie === 'flask' && 'bg-[#004b6b] text-white',
              technologie === 'css' && 'bg-blue-600 text-white',
              technologie === 'sqlite' && 'bg-[#dddddd] text-[#044a64]',
              technologie === 'mongoose' &&
                'text-[#aa0000] border border-[#aa0000]',
              technologie === 'reactjs' && 'text-[#58c4dc] bg-[#404756]',
              technologie === 'node' && 'bg-[#99cc7d] text-[#2c682c]',
              technologie === '' && '',
              technologie === '' && '',
              technologie === '' && '',
              technologie === '' && '',
              technologie === '' && ''
            )}
            key={crypto.randomUUID()}
          >
            {technologie.toUpperCase()}
          </span>
        )
      })}
    </div>
  )
}
