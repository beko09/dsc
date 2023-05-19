'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none  disabled:opacity-60 disabled:pointer-events-none transition-all ease-in-out duration-150 border border-transparent',
  {
    variants: {
      intent: {
        primary:
          'bg-primary text-white hover:bg-white hover:text-primary  hover:border-primary',
        secondary:
          'bg-secondary text-gray-900  hover:text-gray-900 hover:bg-white hover:border-gray-900',
        danger:
          'bg-danger text-white hover:bg-white hover:text-danger hover:border-re-500',
      },
      outline: {
        primary:
          'text-primary bg-white  !border-primary hover:bg-primary hover:text-white',
        secondary:
          ' text-black !border-gray-900  bg-white hover:bg-secondary hover:text-gray-900',
        danger:
          ' text-danger bg-white !border-danger hover:bg-danger hover:text-white',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)
export interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, outline, ...props }: Props) {
  return <button className={buttonStyles({ intent, outline })} {...props} />
}
