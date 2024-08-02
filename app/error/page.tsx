import BackLink from '@/components/BackLink'

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <BackLink />
        <p className="text-xl mx-auto max-w-xl text-center">
          Desculpe, algo deu errado
        </p>
      </div>
    </main>
  )
}
