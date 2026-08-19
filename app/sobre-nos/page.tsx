import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function SobreNosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Sobre Nós</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p>
            O VelvetJackPT é um comparador independente dedicado a analisar os melhores casinos online licenciados em Portugal.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">A Nossa Missão</h2>
          <p>
            A nossa missão é fornecer informações claras, honestas e atualizadas sobre o mercado de jogo online, ajudando os jogadores portugueses a tomar decisões informadas e seguras.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Independência e Transparência</h2>
          <p>
            Operamos de forma independente dos casinos. Embora possamos receber comissões de afiliados, as nossas análises são baseadas em critérios objetivos de qualidade, segurança e conformidade legal com as normas do SRIJ.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Compromisso com o Jogador</h2>
          <p>
            Apenas listamos operadores que cumprem os mais altos padrões de proteção ao jogador e integridade do jogo. A sua segurança é o que nos move.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
