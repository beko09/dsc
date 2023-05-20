import Card from '@/components/Card'
import { getData } from '@/utils/fetchData'

type rating = {
  rate: number,
  count: number
}
export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: rating
}

export default async function Home() {
  const data: Product[] = await getData()
  console.log("🚀 ~ Home ~ data:", data)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20'>
      {data && data.map(product => {
        return <Card key={product.id} product={product} />
      })}
    </div>
  )
}
