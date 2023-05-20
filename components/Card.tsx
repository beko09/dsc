import Image from 'next/image'
import { Product } from '@/app/page'
import Link from 'next/link'
import { Badged } from './ui/Badged'
interface Props {
  product: Product
}

export default function Card({ product }: Props) {
  return (
    <Link
      href={`/${product.id}`}
      className='flex flex-col space-y-4 bg-white rounded w-full p-4 '>
      <div className='w-full h-[150px] relative overflow-hidden'>
        <Image
          className='object-contain transition-transform duration-300 hover:scale-75 cursor-pointer'
          src={product.image}
          fill
          alt={product.title}
        />
      </div>
      <Badged intent='secondary'>{product.category}</Badged>
      <h2 className='text-xl text-gray-900 capitalize line-clamp-1'>
        {product.title}
      </h2>
      <h1 className='capitalize'>
        price:{' '}
        <span className='text-primary text-3xl'>
          {product.price}
          <span className='text-green-600 text-xl'>﹩</span>
        </span>
      </h1>
      <div className='flex flex-row justify-between'>
        <span className='block text-gray-600 capitalize'>
          rating : <span className=' text-danger'>{product.rating.rate}</span>
        </span>
        <span className='block text-gray-600 capitalize'>
          count :{' '}
          <span
            className={`${
              product.rating.count <= 100 ? 'text-danger' : 'text-primary'
            }`}>
            {product.rating.count}
          </span>
        </span>
      </div>
      <p className='text-sm text-slate-400 line-clamp-2'>
        {product.description}
      </p>
    </Link>
  )
}
