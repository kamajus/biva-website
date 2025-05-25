import BackLink from '@/components/BackLink'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <BackLink />
        
        <div className="max-w-3xl mx-auto mt-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            Termos e Serviços
          </h1>

          <div className="prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-600 mb-4">
                Ao acessar e usar o aplicativo Kasa Ao, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2. Descrição do Serviço
              </h2>
              <p className="text-gray-600 mb-4">
                O Kasa Ao é uma plataforma que conecta compradores, vendedores e locadores de imóveis em Angola. Oferecemos ferramentas de busca, listagem e comunicação para facilitar transações imobiliárias.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3. Conta do Usuário
              </h2>
              <p className="text-gray-600 mb-4">
                Para utilizar alguns recursos do nosso serviço, você precisará criar uma conta. Você é responsável por manter a confidencialidade de sua conta e senha, bem como por restringir o acesso ao seu dispositivo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4. Conteúdo do Usuário
              </h2>
              <p className="text-gray-600 mb-4">
                Ao publicar conteúdo em nossa plataforma, você garante que tem os direitos necessários sobre esse conteúdo e que ele não viola direitos de terceiros ou leis aplicáveis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5. Privacidade
              </h2>
              <p className="text-gray-600 mb-4">
                O uso de suas informações pessoais é governado por nossa Política de Privacidade. Ao usar nossos serviços, você concorda com a coleta e uso de informações de acordo com essa política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6. Modificações dos Termos
              </h2>
              <p className="text-gray-600 mb-4">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão notificadas através do aplicativo ou por email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7. Contato
              </h2>
              <p className="text-gray-600">
                Para questões relacionadas a estes termos, entre em contato conosco através do email: suporte@kasaao.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}