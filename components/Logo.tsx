'use client'
import Link from 'next/link'
import { Nosifer, Nova_Oval } from 'next/font/google'
const nosifer = Nosifer({ weight: '400', subsets: ['latin'] })
const nova = Nova_Oval({ weight: '400', subsets: ['latin'] })

export default function Logo() {
  return (
    <div className='flex items-center justify-center text-center'>
      <Link
        href='/'
        className={`pt-10 tracking-widest !text-3xl font-semibold !text-slate-800 capitalize  text-center ! ${nova.className} font-nova`}>
        <span className={`block pb-3 !text-4xl ! ${nosifer.className} `}>
          Design system
        </span>
        <span className='relative inline-block mx-2 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-primary'>
          <span className='relative text-white'>with component</span>
        </span>
      </Link>
    </div>
  )
}
