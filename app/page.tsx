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
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Seu novo lar está <br />
              <span className="text-thirdly">aqui.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Descubra as melhores oportunidades imobiliárias em Angola
            </p>
            <div className="flex gap-4">
              <button className="bg-thirdly text-white px-8 py-4 rounded-lg font-semibold hover:brightness-90 transition-all transform hover:scale-105">
                Explorar Imóveis
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">2K+</p>
              <p className="text-gray-600">Imóveis Listados</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">18</p>
              <p className="text-gray-600">Províncias</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-gray-600">Suporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondly/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Por que escolher a <span className="text-primary">Kasa Ao</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos a melhor experiência para encontrar seu imóvel ideal
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-primary">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Amplo Catálogo
              </h3>
              <p className="text-gray-600">
                Milhares de opções de imóveis para compra e aluguel em toda Angola.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-primary">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Transações Seguras
              </h3>
              <p className="text-gray-600">
                Processo transparente e seguro do início ao fim da negociação.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-primary">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Qualidade Garantida
              </h3>
              <p className="text-gray-600">
                Imóveis verificados e proprietários autenticados para sua segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Como <span className="text-primary">Funciona</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Encontre seu imóvel em poucos passos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Pesquise
              </h3>
              <p className="text-gray-600">
                Use nossos filtros avançados para encontrar o imóvel ideal.
              </p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Compare
              </h3>
              <p className="text-gray-600">
                Analise detalhes, fotos e localizações dos imóveis.
              </p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Contate
              </h3>
              <p className="text-gray-600">
                Entre em contato direto com proprietários verificados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-thirdly">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Pronto para encontrar seu lar ideal?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de pessoas que já encontraram seu imóvel perfeito
            </p>
            <button className="bg-white text-thirdly px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}