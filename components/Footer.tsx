import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center border-t h-[10vh] bg-white px-4">
      <div className="w-full sm:w-[95%] flex justify-center items-center gap-4 text-xs sm:text-sm">
        <h1 className="font-medium">Todos direitos reservados.</h1>
        <span className="text-gray-300">|</span>
        <Link
          href="/termos"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Termos e Serviços
        </Link>
      </div>
    </footer>
  )
}
