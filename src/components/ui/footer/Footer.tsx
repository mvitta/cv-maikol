import GridFooter from '@/components/ui/footer/GridFooter'
import SocialMedia from '@/components/ui/footer/SocialMedia'

export default async function Footer() {
  return (
    <footer className=' border-none p-8 w-full min-h-16 h-auto bg-gray-50 text-black dark:bg-dark-mode'>
      <GridFooter />
      <hr className='border border-blue-800 opacity-25 my-6 w-full' />
      <SocialMedia />
    </footer>
  )
}
