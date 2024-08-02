import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default async function Index() {
  return (
    <div className="flex-1 w-full min-h-screen flex items-center justify-center">
      <Header />
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Em construção!{' '}
      </p>
      <Footer />
    </div>
  )
}
