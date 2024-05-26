import Github from '@/components/icons/social_media/Github'
import Linkedin from '@/components/icons/social_media/Linkedin'

export default function SocialMedia() {
  const iconsSocialMedia = [
    { Icon: Github, url: 'https://github.com/mvitta' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/maikoldevjs/' },
  ]
  return (
    <section className='flex justify-around items-center gap-2'>
      <div className='flex flex-wrap gap-2'>
        <span className='block w-full'>
          <svg
            className='inline-block mr-4'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1'
            width='30px'
            height='30px'
            viewBox='0 0 1800 1800'
            enableBackground='new 0 0 1800 1800'
            xmlSpace='preserve'
          >
            <g id='Layer'>
              <g>
                <path
                  fill='#ffffff'
                  d='M1541.606,1540.146l0.009-0.008c35.598-35.594,35.598-93.52,0-129.121    c-17.24-17.236-40.178-26.745-64.569-26.745c-24.378,0-47.314,9.509-64.564,26.763c-35.588,35.584-35.588,93.51,0.009,129.104    C1448.096,1575.73,1506.014,1575.73,1541.606,1540.146z M1440.885,1511.743c-9.656-9.655-14.975-22.498-14.975-36.165    c0-13.659,5.318-26.511,14.975-36.167c9.665-9.655,22.512-14.979,36.175-14.979c13.659,0,26.497,5.323,36.161,14.979    c19.938,19.945,19.938,52.387-0.008,72.332C1493.271,1531.689,1460.831,1531.681,1440.885,1511.743z'
                />
                <path
                  fill='#ffffff'
                  d='M1700.934,402.736c0.021-0.026,0.047-0.043,0.068-0.065c0.044-0.043,0.083-0.091,0.127-0.134l5.504-5.505    l-0.138-0.139c81.836-87.814,80.038-225.814-5.507-311.356c-42.353-42.357-98.664-65.685-158.565-65.685    c-57.228,0-111.154,21.339-152.792,60.18l-0.134-0.134l-5.511,5.507c-0.043,0.046-0.09,0.085-0.134,0.131    c-0.021,0.021-0.039,0.045-0.061,0.069L66.371,1403.02l0.513,0.513c-7.364,4.749-12.699,12.548-13.98,21.907L9.578,1741.903    c-1.319,9.647,1.95,19.347,8.831,26.232c5.875,5.87,13.807,9.108,22.004,9.108c1.402,0,2.813-0.095,4.224-0.286l316.451-43.338    c9.365-1.276,17.163-6.617,21.912-13.98l0.512,0.513L1700.934,402.736z M1542.423,82.094c43.272,0,83.954,16.852,114.551,47.452    c55.643,55.638,62.276,142.02,19.897,204.983L1451.973,109.64C1478.482,91.724,1509.717,82.094,1542.423,82.094z     M1389.497,167.919l229.113,229.112L383.512,1632.129l-86.195-86.19l991.423-991.409l-59.351-59.342l-991.41,991.418    l-83.585-83.586L1389.497,167.919z M76.804,1709.731l35.68-260.604l224.915,224.916L76.804,1709.731z'
                />
                <path
                  fill='#ffffff'
                  d='M506.941,804.479l56.789-56.789l-454.446-454.45l185.432-185.437l87.924,87.932l-63.792,63.783    l50.362,50.359l63.792-63.779l51.262,51.258l-63.792,63.788l50.363,50.354l63.797-63.779l51.257,51.267l-94.375,94.353    l50.376,50.363l94.362-94.362l62.502,62.498l-63.792,63.801l50.363,50.354l63.792-63.792l0.043,0.047l56.789-56.789    L323.106,22.622c-15.682-15.686-41.102-15.686-56.784,0L24.102,264.845c-15.687,15.683-15.687,41.107,0,56.789L506.941,804.479z'
                />
                <path
                  fill='#ffffff'
                  d='M1778.944,1478.287c-0.726-0.729-1.478-1.424-2.241-2.085l-505.282-505.273l-151.159,151.159l50.259,50.26    l94.371-94.37l428.79,428.782l-185.441,185.432l-479.045-479.041l-56.789,56.798l507.437,507.427    c15.682,15.69,41.102,15.69,56.788,0l242.234-242.213c0.021-0.034,0.048-0.052,0.079-0.086    C1794.63,1519.402,1794.63,1493.969,1778.944,1478.287z'
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='30px'
            height='30px'
            viewBox='0 0 36 36'
            aria-hidden='true'
            role='img'
            className='inline-block'
            preserveAspectRatio='xMidYMid meet'
          >
            <path
              fill='#FBD116'
              d='M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z'
            />
            <path fill='#22408C' d='M0 18h36v7H0z' />
            <path
              fill='#CE2028'
              d='M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0v2z'
            />
          </svg>
        </span>
        <span className='block w-full'>
          {'❮❯ '}Diseñado y construido por Maikol Vitta 2024
        </span>
        <span className='block w-full'>Barranquilla - Colombia</span>
      </div>
      <div className='flex gap-x-3'>
        {iconsSocialMedia.map(({ Icon, url }) => (
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            key={crypto.randomUUID()}
            aria-label='icons about social networks'
          >
            <Icon width={30} height={30} fill='#ffffff' />
          </a>
        ))}
      </div>
    </section>
  )
}
