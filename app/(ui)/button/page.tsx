'use client'
import { Button } from '@/components/ui/Button'
export default function Page() {
  return (
    <>
      <h1 className='text-2xl text-slate-700  py-10 block capitalize underline decoration-primary decoration-wavy underline-offset-8 decoration-2'>
        Button Component
      </h1>
      <div className='component'>
        <Button intent='primary'>primary</Button>
        <Button intent='secondary'>secondary</Button>
        <Button intent='danger'>danger</Button>
      </div>
      <div className='component'>
        <Button intent='outlinePrimary'> decoration-4 outline primary</Button>
        <Button intent='outlineSecondary'>outlineSecondary</Button>
        <Button intent='outlineDanger'>outlineDanger</Button>
      </div>
      <div className='component'>
        <Button intent='link' href='/'>
          link
        </Button>
        <Button intent='primary' href='/'>
          link primary
        </Button>
        <Button intent='secondary' href='/'>
          link secondary
        </Button>
        <Button intent='danger' href='/'>
          link danger
        </Button>
      </div>
    </>
  )
}
