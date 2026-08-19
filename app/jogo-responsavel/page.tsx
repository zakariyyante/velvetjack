import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function JogoResponsavelPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Jogo Responsável</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p>
            No VelvetJackPT, a segurança e o bem-estar dos nossos utilizadores são a nossa prioridade máxima. O jogo deve ser sempre uma atividade de lazer e entretenimento.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">Princípios do Jogo Responsável</h2>
          <p>
            Jogue apenas o que pode dar-se ao luxo de perder. Nunca tente recuperar perdas e estabeleça limites de tempo e dinheiro antes de começar a jogar.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Sinais de Alerta</h2>
          <p>
            Se sente que o jogo está a interferir com a sua vida pessoal, profissional ou financeira, é importante procurar ajuda. Sinais comuns incluem mentir sobre o jogo, pedir dinheiro emprestado para jogar ou sentir ansiedade quando não está a jogar.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Recursos de Apoio</h2>
          <p>
            Existem organizações especializadas em Portugal que oferecem apoio gratuito e anónimo:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Linha Vida (SICAD):</strong> Ligue 1414 (dias úteis, 10h-18h).
            </li>
            <li>
              <strong>Jogo Responsável:</strong> Visite <Link href="https://www.jogoresponsavel.pt" target="_blank" className="text-primary underline">jogoresponsavel.pt</Link> para recursos e ferramentas de autoavaliação.
            </li>
            <li>
              <strong>SRIJ:</strong> Informações sobre autoexclusão no site oficial da <Link href="https://www.srij.turismodeportugal.pt" target="_blank" className="text-primary underline">Inspeção de Jogos</Link>.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
