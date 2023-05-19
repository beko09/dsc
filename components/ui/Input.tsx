'use client'

import { InputHTMLAttributes } from 'react'


export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: Props) {
  return <input className={`placeholder:text-slate-600 focus:ring-primary  bg-white  text-gray-600  w-full rounded-md px-4 py-2 border focus:border-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-gray-200 disabled:bg-opacity-20 ${className}`} {...props} />
}