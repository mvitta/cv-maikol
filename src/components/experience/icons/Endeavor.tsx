import { ComponentProps } from 'react'

export default function Endeavor({
  width,
  height,
  ...props
}: ComponentProps<'svg'>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 152 152'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='152' height='152' rx='76' fill='#01000F'></rect>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M41.77 70.528c3.008-15.948 19.218-27.182 36.455-27.182 26.006 0 35.381 18.73 35.381 28.834 0 2.055-.429 3.694-1.573 4.792-1.137 1.09-2.784 1.458-4.755 1.458h-49.55c.847 7.268 4.16 12.815 8.921 16.597 4.986 3.96 11.612 6.021 18.764 6.021 8.73 0 16.474-1.94 24.253-5.174l.833-.346 2.922 7.099-.796.356c-11.438 5.122-21.75 6.901-33.464 6.901-10.005 0-19.467-2.817-26.447-8.501C46.249 96.12 41.97 88.441 41.35 78.429H22.54l4.193-7.901H41.77zm16.015 0h32.051c3.205.017 5.164-.45 6.3-1.168 1.052-.664 1.482-1.595 1.482-2.889 0-6.828-7.306-15.08-19.28-15.08-6.412 0-11.293 2.453-14.713 6.165-3.217 3.492-5.171 8.133-5.84 12.971z'
        fill='#09E1CD'
      ></path>
    </svg>
  )
}
