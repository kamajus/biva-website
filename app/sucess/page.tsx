'use client'

import { useSearchParams } from 'next/navigation'

import BackLink from '@/components/BackLink'

export default function SuccessPage() {
  const params = useSearchParams()
  const message = params.get('message') || 'Operação concluída com sucesso!'

  return (
    <main className="min-h-screen flex flex-col items-center">
      <BackLink />
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-4">
        <h1 className="text-xl mx-auto max-w-xl text-center font-semibold">
          {message}
        </h1>

        <p className="text-base mx-auto max-w-xl text-center">
          Tudo foi processado corretamente. Você pode fechar esta página quando.
          desejar.
        </p>
      </div>
    </main>
  )
}
