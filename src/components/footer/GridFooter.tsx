import React from 'react'

export default function GridFooter() {
  const urlCertifications = [
    {
      text: 'python',
      url: 'https://github.com/mvitta/Certificados/blob/main/Coursera/Coursera%20VFX9BYPLETAJ%20PYTHON.pdf',
    },
    {
      text: 'estructuras de datos - python',
      url: 'https://github.com/mvitta/Certificados/blob/main/Coursera/credtificado%20estructuras%20de%20datos%20con%20python.pdf',
    },
    {
      text: 'POO - java',
      url: 'https://github.com/mvitta/Certificados/blob/main/Coursera/java%20programacion%20orientada%20a%20objetos.pdf',
    },
    {
      text: 'desarrollo web',
      url: 'https://github.com/mvitta/Certificados/blob/main/Mision%20Mintic%202022/Conocimientos%20academicos%20en%20habilidades%20de%20programacion.pdf',
    },
  ]

  const resources = [
    {
      text: 'next.js',
      url: 'https://nextjs.org/',
    },
    {
      text: 'tailwindcss',
      url: 'https://tailwindcss.com/',
    },
    {
      text: 'react',
      url: 'https://react.dev/',
    },
    {
      text: 'typescript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      text: 'Github',
      url: '',
    },
  ]

  return (
    <section className='grid gap-y-7 md:grid-cols-2'>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold capitalize mb-4'>Recursos</h2>
        {resources.map(({ text, url }) => (
          <a
            className='capitalize'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            key={crypto.randomUUID()}
          >
            {text}
          </a>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold capitalize mb-4'>Certificaciones</h2>
        {urlCertifications.map(({ text, url }) => (
          <React.Fragment key={crypto.randomUUID()}>
            <a
              className='capitalize'
              href={url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {text}
            </a>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
