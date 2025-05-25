import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default async function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Encontre o Lar dos Seus Sonhos
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A plataforma mais completa para compra, venda e aluguel de imóveis
              em Angola
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher Kasa Ao?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Variedade de Imóveis
              </h3>
              <p className="text-gray-600">
                Encontre casas, apartamentos e terrenos em todo o país.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Segurança Garantida
              </h3>
              <p className="text-gray-600">
                Todas as transações são seguras e verificadas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Disponível 24/7</h3>
              <p className="text-gray-600">
                Acesse quando quiser, de onde estiver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">1. Busque</h3>
              <p className="text-gray-600">
                Encontre imóveis que correspondam aos seus critérios.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">2. Explore</h3>
              <p className="text-gray-600">
                Veja fotos e detalhes completos dos imóveis.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">3. Conecte</h3>
              <p className="text-gray-600">
                Entre em contato com proprietários e agentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Como posso começar a usar a plataforma?
              </h3>
              <p className="text-gray-600">
                Basta criar uma conta gratuita e começar a explorar os imóveis
                disponíveis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Posso anunciar meu imóvel?
              </h3>
              <p className="text-gray-600">
                Sim! Você pode criar anúncios gratuitamente e gerenciar suas
                publicações.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Como funciona o processo de aluguel?
              </h3>
              <p className="text-gray-600">
                Nossa plataforma facilita a conexão entre proprietários e
                inquilinos, com todo o suporte necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para encontrar seu lar ideal?
          </h2>
          <p className="text-xl mb-8">
            Junte-se a milhares de usuários satisfeitos
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Criar Conta Grátis
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
