'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

const badgedStyles = cva(
  'flex items-center justify-center  text-center text-[9px]  rounded-full  w-max py-1 leading-tight px-2 my-1',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-white  ',
        secondary: 'bg-secondary text-gray-900 ',
        danger: 'bg-danger text-white',
        outlinePrimary: 'text-primary bg-white  !border-primary border',
        outlineSecondary: ' text-black !border-gray-900  bg-white border',
        outlineDanger: ' text-danger bg-white !border-danger border',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)
export interface Props extends VariantProps<typeof badgedStyles> {
  children: ReactNode
}

export function Badged({ intent, ...props }: Props) {
  return <span className={badgedStyles({ intent })} {...props} />
}
