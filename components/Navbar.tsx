'use client'

import { Button } from './ui/Button'
import CopyRight from './CopyRight'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <CopyRight />
      <Logo />
      <div className='flex items-center justify-center p-4 pt-6'>
        <Button href='/button' intent='link' className='text-lg text-slate-700'>
          Ui
        </Button>
        <Button href='/' intent='link' className='text-lg text-slate-700'>
          docs
        </Button>
        <Button href='/button' intent='link' className='text-lg text-slate-700'>
          test
        </Button>
      </div>
    </div>
  )
}
