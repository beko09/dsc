'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink'

const buttonStyles = cva(
  ' flex items-center  justify-center px-4 py-2 rounded font-medium focus:outline-none  disabled:opacity-60 disabled:pointer-events-none transition-colors ease-in-out duration-150 capitalize active:scale-95 ',
  {
    variants: {
      intent: {
        primary: 'border border-transparent bg-primary text-white hover:bg-transparent hover:text-primary  hover:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2',
        secondary: 'border border-transparent bg-secondary text-gray-900  hover:text-gray-900 hover:bg-transparent hover:border-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2',
        danger: 'border border-transparent bg-danger text-white hover:bg-transparent hover:text-danger hover:border-danger focus:ring-2 focus:ring-danger focus:ring-offset-2',
        outlinePrimary: ' text-primary bg-transparent border border-primary hover:bg-primary hover:text-white',
        outlineSecondary: 'border  text-black border-secondary bg-transparent hover:bg-secondary hover:text-gray-900',
        outlineDanger: ' border text-danger bg-transparent border-danger hover:bg-danger hover:text-white',
        link: "bg-transparent  underline-offset-4 hover:underline text-primary  hover:bg-transparent dark:hover:bg-transparent",

      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 ',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'default'

    },
  }
)
export interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {}

export function Button({ intent, size, className, ...props }: Props) {
  return (<ButtonOrLink className={buttonStyles({ intent, size, className })} {...props} />)
}