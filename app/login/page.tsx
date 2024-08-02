'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import BackLink from '@/components/BackLink'
import { SubmitButton } from '@/components/SubmitButton'
import { createClient } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
})

type LoginFormInputs = z.infer<typeof loginSchema>

export default function Login() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormInputs) => {
    const supabase = createClient()
    const { email, password } = data

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (!error) {
      router.replace('/')
    } else {
      toast.error('Não foi possivel iniciar sessão')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <BackLink />

        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            {...register('email')}
            className="rounded-md px-4 py-2 bg-inherit border"
            placeholder="eu@exemplo.com"
          />
          {errors.email && (
            <p className="text-alert text-sm">{errors.email.message}</p>
          )}

          <label className="mt-3 text-md" htmlFor="password">
            Palavra-passe
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-alert text-sm">{errors.password.message}</p>
          )}

          <SubmitButton pendingText="Iniciando sessão...">Entrar</SubmitButton>
        </form>
      </div>
    </main>
  )
}
