import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-full flex justify-center items-center h-screen'>
      <Image
        src='assets/images/loader.svg'
        width={40}
        height={40}
        alt='loader'
        className='object-contain'
      />
    </div>
  )
}

export default Loading
