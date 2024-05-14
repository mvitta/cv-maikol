import { GridFooter, SocialMedia } from '@/components/footer/index'

export default function Footer() {
  return (
    <footer className='p-8 w-full min-h-16 h-auto border-t bg-blue-900 text-white'>
      <GridFooter />
      <hr className='border border-blue-800 opacity-25 my-6 w-full' />
      <SocialMedia />
    </footer>
  )
}
