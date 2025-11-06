import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-100">
      <Header />

      <section className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-12 my-16 border border-gray-200 scroll-mt-20 space-y-16">

        {/* SOBRE */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-500 after:mx-auto after:mt-3">
            Sobre o <span className="text-amber-500">AedesControl</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            O <span className="font-semibold text-amber-500">AedesControl</span> é uma plataforma
            moderna desenvolvida para apoiar o monitoramento, controle e prevenção da dengue.
            Utilizando tecnologias inteligentes e uma interface intuitiva, o sistema permite o
            registro e acompanhamento de focos do mosquito de forma organizada e acessível.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
            Criado para uso por equipes de vigilância sanitária e órgãos de saúde pública,
            o AedesControl centraliza dados em um ambiente seguro e eficiente, ajudando a
            transformar informações em ações de combate mais eficazes.
          </p>
        </div>

        {/* COMO FUNCIONA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-500 after:mx-auto after:mt-3">
            Como Funciona
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            O sistema permite registrar endereços com <span className="font-semibold text-amber-500">casos suspeitos</span>, 
            <span className="font-semibold text-amber-500"> confirmados</span> e <span className="font-semibold text-amber-500">áreas livres</span> de dengue.
            Essas informações são processadas automaticamente e organizadas em relatórios claros,
            facilitando a identificação de padrões e áreas críticas.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
            Com base nesses registros, o AedesControl gera alertas e relatórios em tempo real, 
            oferecendo uma visão completa do panorama de infecções em cada região. Isso permite 
            que gestores e profissionais de saúde atuem de forma proativa e direcionada.
          </p>
        </div>

        {/* VISUALIZAÇÃO DE DADOS */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-500 after:mx-auto after:mt-3">
            Visualização de Dados
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A plataforma conta com gráficos e mapas interativos que tornam a análise visual simples e direta.
            É possível acompanhar o número de casos por bairro, cidade ou período, identificar
            zonas de risco e observar a evolução das notificações em tempo real.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 max-w-3xl mx-auto">
            Essa visualização intuitiva contribui para uma tomada de decisão rápida e embasada,
            auxiliando as equipes de campo a priorizarem locais de maior incidência e reduzirem
            o avanço da doença de forma mais estratégica.
          </p>
        </div>

        {/* CONTATO */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-500 after:mx-auto after:mt-3">
            Entre em Contato
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Quer saber mais sobre o projeto ou contribuir com melhorias?  
            Nossa equipe está aberta a parcerias, sugestões e colaborações para
            fortalecer o combate à dengue em todo o país.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 max-w-2xl mx-auto">
            <span className="font-semibold text-amber-500">AedesControl</span> é mais do que um sistema — 
            é uma ferramenta de impacto social, que une tecnologia, saúde e cidadania para proteger vidas.
          </p>
        </div>
      </section>
    </main>
  );
}
