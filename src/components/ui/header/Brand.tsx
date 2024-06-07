import Image from 'next/image'
import Link from 'next/link'

export default function Brand() {
  return (
    <Link href={'/'}>
      <div className='flex gap-2 px-3'>
        <Image
          className='rounded-full'
          src='https://media.licdn.com/dms/image/C4E03AQEI8GCWWGYdFw/profile-displayphoto-shrink_400_400/0/1638739857436?e=1722470400&v=beta&t=T0PM3BWY2KfODA63Ku092ONuWfvbCAlNrs2C1EyR5Co'
          alt='Mike Vitta'
          width={30}
          height={30}
        />
        <p className='hidden sm:grid place-content-center dark:text-dark-mode-text-p'>
          Maikol Vitta
        </p>
      </div>
    </Link>
  )
}
