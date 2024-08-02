import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default async function Index() {
  return (
    <div>
      <Header />
      <div className="h-[80vh] w-full flex items-center justify-center">
        <p className="text-3xl lg:text-4xl !leading-tight mx-auto text-center">
          🚧 Em construção...
        </p>
      </div>
      <Footer />
    </div>
  )
}
