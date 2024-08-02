import Link from 'next/link'
import { redirect } from 'next/navigation'

import { SubmitButton } from '@/components/SubmitButton'
import { createClient } from '@/utils/supabase/server'

export default function UpdatePassword({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const signIn = async (formData: FormData) => {
    'use server'

    const newPassword = formData.get('newPassword') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (newPassword !== confirmPassword) {
      return redirect('/update-password?message=As palavras não coincedem')
    }

    const supabase = createClient()

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (error) {
      return redirect(
        '/update-password?message=Não foi possivel alterar a palavra-passe',
      )
    }

    await supabase.auth.signOut()
    return redirect(
      '/update-password?message=Palavra-passe atualizada com sucesso',
    )
  }

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <Link
          href="/"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{' '}
          Voltar
        </Link>

        <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <label className="text-md" htmlFor="newPassword">
            Nova palavra-passe
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="newPassword"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="confirmPassword">
            Confirmar palavra-passe
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <SubmitButton formAction={signIn} pendingText="Signing In...">
            Alterar a palavra-passe
          </SubmitButton>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </main>
  )
}
