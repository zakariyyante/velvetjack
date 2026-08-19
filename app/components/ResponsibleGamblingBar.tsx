import { Shield } from "lucide-react";
import Link from "next/link";

export default function ResponsibleGamblingBar() {
  return (
    <section className="container mx-auto px-4 mb-10">
      <div className="bg-[#0c1222] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        {/* Shield Icon */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full border border-orange-500/20 bg-orange-500/5 flex items-center justify-center">
          <Shield size={32} className="text-orange-500" />
        </div>

        {/* Text Content */}
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-lg font-bold text-white mb-2">Jogo Responsável</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            O jogo deve ser uma forma de entretenimento. Se sentir que o jogo está a afetar a sua vida, procure ajuda. Linha de apoio gratuita do SICAD: <span className="text-[#00b4ff] font-bold">800 256 256</span>
          </p>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <Link
            href="/jogo-responsavel"
            className="inline-block px-8 py-3 rounded-xl border border-orange-500/30 text-orange-500 font-bold hover:bg-orange-500/5 transition-colors"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  );
}
