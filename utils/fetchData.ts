export async function getData(id?: number) {
  let url
  if (id) {
    url = `https://fakestoreapi.com/products/${id}`
  } else {
    url = `https://fakestoreapi.com/products`
  }
  const res = await fetch(
    url
    // server side rendering => SSR
    //  {
    // cache:'no-store'
    // }

    // increment static re-generation ISR
    // next check data avery five second
    // {
    //   next: {
    //     revalidate:5
    //   }
    // }

    // if no thing nextjs by default use  SSG
    // Static side generation
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
