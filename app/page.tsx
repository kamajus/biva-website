import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default async function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary to-secondly">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Kasa Ao na <br />
                <span className="text-thirdly">palma da mão</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Baixe agora o aplicativo e tenha acesso às melhores oportunidades imobiliárias em Angola
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/80 transition-all transform hover:scale-105 flex items-center gap-2">
                  <span className="text-2xl">🍎</span>
                  App Store
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/80 transition-all transform hover:scale-105 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  Play Store
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-[280px] h-[560px] bg-black rounded-[3rem] p-4 relative">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="w-32 h-8 bg-black absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Por que usar o <span className="text-primary">aplicativo</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              Tenha todas as funcionalidades na palma da sua mão
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Busca Inteligente
              </h3>
              <p className="text-gray-600">
                Encontre imóveis próximos a você com nosso sistema de geolocalização.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Chat Integrado
              </h3>
              <p className="text-gray-600">
                Converse diretamente com proprietários e corretores pelo app.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Notificações
              </h3>
              <p className="text-gray-600">
                Receba alertas de novos imóveis que correspondam aos seus interesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-secondly/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Interface <span className="text-primary">moderna</span> e intuitiva
            </h2>
            <p className="text-gray-600 text-lg">
              Navegue facilmente por todas as funcionalidades do aplicativo
            </p>
          </div>
          <div className="flex justify-center gap-8">
            <div className="w-[220px] h-[440px] bg-black rounded-[2rem] p-3">
              <div className="w-full h-full bg-primary/10 rounded-[1.5rem]" />
            </div>
            <div className="w-[220px] h-[440px] bg-black rounded-[2rem] p-3">
              <div className="w-full h-full bg-primary/10 rounded-[1.5rem]" />
            </div>
            <div className="w-[220px] h-[440px] bg-black rounded-[2rem] p-3">
              <div className="w-full h-full bg-primary/10 rounded-[1.5rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-thirdly">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Baixe agora o aplicativo
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Disponível gratuitamente para iOS e Android
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/80 transition-all transform hover:scale-105 flex items-center gap-2">
                <span className="text-2xl">🍎</span>
                App Store
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/80 transition-all transform hover:scale-105 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                Play Store
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}