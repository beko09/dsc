import Image from 'next/image'
import { Product } from '@/app/page'
import { getData } from '@/utils/fetchData'
import { Badged } from '@/components/ui/Badged'
import { Button } from '@/components/ui/Button'

export default async function Page({
  params,
}: {
  params: { productId: number }
}) {
  const product: Product = await getData(params.productId)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-10'>
      <div className='w-full  h-[300px] bg-white flex justify-center items-center relative overflow-hidden'>
        <Image
          className='object-contain p-10 transition-transform duration-300 hover:scale-75 cursor-pointer'
          src={product.image}
          fill
          alt={product.title}
        />
      </div>
      <div>
        <Badged intent='outlinePrimary'>{product.category}</Badged>
        <div className='flex flex-row justify-between'>
          <span className='block text-gray-600 capitalize'>
            rating : <span className=' text-danger'>{product.rating.rate}</span>
          </span>
          <span className='block text-gray-600 capitalize'>
            count :{' '}
            <span
              className={`${product.rating.count <= 100 ? 'text-danger' : 'text-primary'
                }`}>
              {product.rating.count}
            </span>
          </span>
        </div>
        <h1>
          price:{' '}
          <span className='text-primary text-3xl capitalize'>
            {product.price}
            <span className='text-green-600 text-xl'>﹩</span>
          </span>
        </h1>
        <h2 className='text-2xl py-3 text-gray-900 capitalize '>
          {product.title}
        </h2>


        <p className='text-lg text-slate-500 '>{product.description}</p>
        <Button intent='primary' className='capitalize my-3 rounded-full'> add to cart</Button>
      </div>
    </div>
  )
}
