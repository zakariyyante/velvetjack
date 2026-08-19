import { CheckCircle2, Landmark, RefreshCw, Zap, Smartphone } from "lucide-react";

export default function Hero() {
  const currentMonth = new Date().toLocaleString('pt-PT', { month: 'long' });
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-16 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* H1 */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
          Casinos Online em Portugal — Comparação Clara
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted max-w-3xl mb-10 leading-relaxed">
          Lista independente de operadores licenciados pelo SRIJ: bónus, levantamentos e jogos analisados este mês, sem ruído.
        </p>

        {/* Pills / Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { icon: CheckCircle2, text: "100% Legal em Portugal" },
            { icon: Landmark, text: "Licenciado pelo SRIJ" },
            { icon: RefreshCw, text: "+18 Jogo Responsável" },
            { icon: Zap, text: "Levantamentos Rápidos" },
            { icon: Smartphone, text: "MB Way aceite" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
            >
              <item.icon className="text-orange-500/80" size={14} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Update Date */}
        <p className="text-sm text-gray-500 mb-12">
          Última atualização: {currentMonth} de {currentYear}
        </p>

        {/* Update Banner */}
        <div className="w-full py-8 px-4 rounded-xl border border-white/5 bg-[#0c1222] flex items-center justify-center text-center">
          <p className="text-accent font-medium text-sm md:text-base tracking-wide">
            As nossas classificações estão a ser atualizadas — volte em breve.
          </p>
        </div>
      </div>

      {/* Background Decor - very subtle */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-0"></div>
    </section>
  );
}
