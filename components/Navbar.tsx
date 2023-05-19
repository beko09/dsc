'use client'
import Link from 'next/link'
import { Button } from './ui/Button'
import CopyRight from './CopyRight'
import { Nosifer, Nova_Oval } from 'next/font/google'
const nosifer = Nosifer({ weight: '400', subsets: ['latin'] })
const nova = Nova_Oval({ weight: '400', subsets: ['latin'] })


export default function Navbar() {
  return (
    <div className="flex flex-col py-8 items-center justify-center">
        <CopyRight/>
      <div className='flex justify-center items-center  text-center'>
        <Link href='/' className={`pt-10 tracking-widest text-3xl font-semibold text-slate-800 capitalize  text-center ${nova.className}`}>
          <span className={`block pb-3 text-4xl ${nosifer.className}`}>Design system</span>
          <span className="mx-2 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-primary relative inline-block">
            <span className="relative text-white">with component</span>
          </span>
        </Link>

      </div>
      <div className='flex justify-center items-center pt-6  p-4'>

        <Button href='/button' intent='link' className='text-lg text-slate-700'>
          Ui
        </Button>
        <Button href='/button' intent='link' className='text-lg text-slate-700'>
          docs
        </Button>
        <Button href='/button' intent='link' className='text-lg text-slate-700'>
          test
        </Button>
      </div>
    </div>
  )
}