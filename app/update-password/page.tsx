'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import BackLink from '@/components/BackLink'
import Loading from '@/components/Loading'
import { SubmitButton } from '@/components/SubmitButton'
import { createClient } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'

const passwordSchema = z
  .object({
    newPassword: z
      .string({
        required_error: 'A palavra-passe é obrigatória',
        invalid_type_error: 'Palavra-passe inválida',
      })
      .min(8, 'A palavra-passe deve ter pelo menos 8 caracteres')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        'A palavra-passe deve conter pelo menos uma letra e um número',
      ),
    confirmPassword: z
      .string({
        required_error: 'A palavra-passe é obrigatória',
        invalid_type_error: 'Palavra-passe inválida',
      })
      .min(8, 'A palavra-passe deve ter pelo menos 8 caracteres')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        'A palavra-passe deve conter pelo menos uma letra e um número',
      ),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'As palavras-passe não são semelhantes',
    path: ['confirmPassword'],
  })

type PasswordFormInputs = z.infer<typeof passwordSchema>

export default function UpdatePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormInputs>({
    resolver: zodResolver(passwordSchema),
  })

  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const onSubmit = async ({ newPassword }: PasswordFormInputs) => {
    const supabase = createClient()

    const { error } = await supabase.auth.updateUser({ password: newPassword })
    await supabase.auth.signOut().catch(() => {})

    if (!error) {
      router.replace('/sucess?message=Palavra-passe atualizada com sucesso')
    } else {
      toast.error('Não foi possível alterar a palavra-passe')
    }
  }

  useEffect(() => {
    ;(async function () {
      const supabase = createClient()
      const user = await supabase.auth.getUser()

      if (!user.data?.user) {
        router.replace('/login')
      } else {
        setLoading(false)
      }
    })()
  }, [router])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <BackLink />
            <form
              className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-md" htmlFor="newPassword">
                Nova palavra-passe
              </label>
              <input
                id="newPassword"
                type="password"
                {...register('newPassword')}
                className="rounded-md px-4 py-2 bg-inherit border"
                placeholder="••••••••"
              />
              {errors.newPassword && (
                <p className="text-alert">{errors.newPassword.message}</p>
              )}

              <label className="text-md" htmlFor="confirmPassword">
                Confirmar palavra-passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                className="rounded-md px-4 py-2 bg-inherit border"
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-alert">{errors.confirmPassword.message}</p>
              )}

              <SubmitButton pendingText="Alterando senha...">
                Continuar
              </SubmitButton>
            </form>
          </div>
        </main>
      )}
    </>
  )
}
