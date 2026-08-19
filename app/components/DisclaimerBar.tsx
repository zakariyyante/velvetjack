import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-4 px-4 my-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left text-xs text-gray-400">
        <div className="flex items-center gap-2 text-primary">
          <AlertTriangle size={16} />
          <span className="font-bold uppercase tracking-tighter">Aviso 18+</span>
        </div>
        <p>
          <strong>Apenas para adultos com 18+ anos.</strong> O jogo deve ser uma forma de entretenimento, não uma forma de ganhar dinheiro. Jogue com responsabilidade.
        </p>
        <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
          <Link href="https://www.srij.turismodeportugal.pt/pt/jogo-responsavel/o-que-e-o-jogo-responsavel" target="_blank" className="hover:text-white underline transition-colors">
            SRIJ - Regulação e Inspeção de Jogos
          </Link>
          <span className="text-white/20">|</span>
          <span>Linha de Apoio: 213 407 000</span>
        </div>
      </div>
    </div>
  );
}
