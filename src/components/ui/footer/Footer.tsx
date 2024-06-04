import GridFooter from '@/components/ui/footer/GridFooter'
import SocialMedia from '@/components/ui/footer/SocialMedia'

export default async function Footer() {
  return (
    <footer className=' border-none p-8 w-full min-h-16 h-auto bg-gray-50 text-black dark:bg-dark-mode'>
      <GridFooter />
      <SocialMedia />
    </footer>
  )
}
