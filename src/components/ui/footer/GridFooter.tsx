import React from 'react'

export default function GridFooter() {
  const urlCertifications = [
    {
      id: 1,
      text: 'python',
      url: 'https://github.com/mvitta/Certificados/blob/main/Coursera/Coursera%20VFX9BYPLETAJ%20PYTHON.pdf',
    },
    {
      id: 2,
      text: 'estructuras de datos - python',
      url: 'https://github.com/mvitta/Certificados/blob/main/Coursera/credtificado%20estructuras%20de%20datos%20con%20python.pdf',
    },
    {
      id: 3,
      text: 'POO - java',
      url: 'https://github.com/mvitta/Certificados/blob/main/Coursera/java%20programacion%20orientada%20a%20objetos.pdf',
    },
    {
      id: 4,
      text: 'desarrollo web',
      url: 'https://github.com/mvitta/Certificados/blob/main/Mision%20Mintic%202022/Conocimientos%20academicos%20en%20habilidades%20de%20programacion.pdf',
    },
  ]

  const resources = [
    {
      id: 1,
      text: 'next.js',
      url: 'https://nextjs.org/',
    },
    {
      id: 2,
      text: 'tailwindcss',
      url: 'https://tailwindcss.com/',
    },
    {
      id: 3,
      text: 'react',
      url: 'https://react.dev/',
    },
    {
      id: 4,
      text: 'typescript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      id: 5,
      text: 'Codigo de este proyecto',
      url: 'https://github.com/mvitta/cv-maikol',
    },
  ]

  return (
    <section className='grid gap-y-7 md:grid-cols-2 mb-10'>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold capitalize mb-4 dark:text-dark-mode-text-items after:content-["💻"] after:ml-4'>
          <span className='underline underline-offset-4'>Recursos</span>
        </h2>
        {resources.map(({ id, text, url }) => (
          <a
            className='capitalize dark:text-dark-mode-text-items hover:font-bold dark:hover:text-white'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            key={id}
          >
            {text}
          </a>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold capitalize mb-4 dark:text-dark-mode-text-items after:content-["🎓"] after:ml-4'>
          <span className='underline underline-offset-4'>Certificaciones</span>
        </h2>
        {urlCertifications.map(({ id, text, url }) => (
          <a
            key={id}
            className='capitalize dark:text-dark-mode-text-items hover:font-bold dark:hover:text-white'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {text}
          </a>
        ))}
      </div>
    </section>
  )
}
