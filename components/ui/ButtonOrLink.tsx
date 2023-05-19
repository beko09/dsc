"use client"

import Link from 'next/link'
import { ComponentProps } from 'react'

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>
export interface Props extends ButtonOrLinkProps {}


export function ButtonOrLink({ href, ...props }: Props) {
  const isLink = typeof href !== 'undefined'
  const ButtonOrLink = isLink ? 'a' : 'button'

  // still button or link but create let content to pass other props
  let content = <ButtonOrLink {...props} />
  // if its link then we need to use next link
  if (isLink) {
    return <Link legacyBehavior href={href}>{content}</Link>
  }
  // else then return content (button)
  return content
}