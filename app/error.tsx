'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error.message)
  }, [error])

  return (
    <div className='bg-danger/10 border border-danger text-danger w-max p-4 rounded'>
      <h2 className='text-xl'>{error.message || 'Something went wrong!'}</h2>
      <Button
        intent='outlineDanger'
        className='mt-4'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </Button>
    </div>
  )
}
