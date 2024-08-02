'use client'

import { type ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'

type Props = ComponentProps<'button'> & {
  pendingText?: string
}

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus()

  const isPending = pending && action === props.formAction

  return (
    <button
      className="bg-primary text-white rounded-md px-4 py-2 text-foreground mb-2"
      {...props}
      type="submit"
      aria-disabled={pending}
    >
      {isPending ? pendingText : children}
    </button>
  )
}
