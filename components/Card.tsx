import Image from 'next/image'
import { Button } from '@/components/ui/Button'
export default function Card() {
  return (
    <div className='flex flex-col space-y-4 bg-white rounded w-full p-4 border'>
      <div className='w-full h-[150px] relative overflow-hidden'>
        <Image src='/profile.png' fill alt='Picture of the author' />
      </div>
      <h2 className='text-xl text-gray-900 capitalize'>title</h2>
      <p className='text-lg text-slate-600 line-clamp-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis
        laudantium quis explicabo quasi incidunt asperiores, voluptatum rerum
        perferendis ipsum.{' '}
      </p>
      <Button intent='primary' href='/' size='sm'>
        Read more
      </Button>
    </div>
  )
}
