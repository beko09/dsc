'use client'
import { Badged } from '@/components/ui/Badged'
import { Button } from '@/components/ui/Button'
export default function Page() {
  return (
    <div className='pb-20'>
      <h1 className='text-2xl text-slate-700  py-10 block capitalize underline decoration-primary decoration-wavy underline-offset-8 decoration-2'>
        Button Component
      </h1>
      <div className='component'>
        <Button intent='primary'>primary</Button>
        <Button intent='secondary'>secondary</Button>
        <Button intent='danger'>danger</Button>
      </div>
      <div className='component'>
        <Button intent='outlinePrimary'> outline primary</Button>
        <Button intent='outlineSecondary'>outlineSecondary</Button>
        <Button intent='outlineDanger'>outlineDanger</Button>
      </div>
      <div className='component'>
        <Button intent='primary' href='/'>
          {' '}
          link primary{' '}
        </Button>
        <Button intent='secondary' href='/'>
          {' '}
          link secondary{' '}
        </Button>
        <Button intent='danger' href='/'>
          {' '}
          link danger{' '}
        </Button>
        <Button intent='link' href='/'>
          {' '}
          link{' '}
        </Button>
      </div>
      <h1 className='text-2xl text-slate-700  py-10 block capitalize underline decoration-primary decoration-wavy underline-offset-8 decoration-2'>
        badged Component
      </h1>
      <div className='component'>
        <Badged intent='primary'>primary</Badged>
        <Badged intent='secondary'>secondary</Badged>
        <Badged intent='danger'>danger</Badged>
      </div>
      <div className='component'>
        <Badged intent='outlinePrimary'> outline primary</Badged>
        <Badged intent='outlineSecondary'>outlineSecondary</Badged>
        <Badged intent='outlineDanger'>outlineDanger</Badged>
      </div>
    </div>
  )
}
