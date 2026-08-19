import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-12 pb-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <Link href="/" className="relative w-48 h-12">
            <Image src="/logo.png" alt="VelvetJackPT Logo" fill className="object-contain" />
          </Link>
          <p className="text-gray-400 text-sm md:text-right max-w-md">
            Comparador independente de casinos online licenciados pelo SRIJ em Portugal. Não somos um operador de jogo e não aceitamos apostas.
          </p>
        </div>

        {/* Compliance Logos */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[11px] font-bold text-gray-400">
            18+
          </div>
          <Link href="https://www.srij.turismodeportugal.pt/pt/jogo-responsavel/o-que-e-o-jogo-responsavel" target="_blank" className="bg-white rounded px-3 py-1.5 h-10 flex items-center hover:opacity-80 transition-opacity">
            <Image src="/srij.svg" alt="SRIJ" width={60} height={30} className="object-contain" />
          </Link>
          <Link href="https://jogoresponsavel.pt/" target="_blank" className="bg-white rounded px-3 py-1.5 h-10 flex items-center hover:opacity-80 transition-opacity">
            <Image src="/jogo-responsavel.png" alt="Jogo Responsável" width={120} height={30} className="object-contain" />
          </Link>
          <Link href="https://www.icad.pt/" target="_blank" className="bg-white rounded px-3 py-1.5 h-10 flex items-center hover:opacity-80 transition-opacity">
            <Image src="/icad.png" alt="ICAD" width={60} height={30} className="object-contain" />
          </Link>
        </div>

        {/* Legal Disclaimer Text */}
        <div className="space-y-4 mb-12">
          <p className="text-gray-500 text-[13px] leading-relaxed">
            GERMANO ALVES SOARES é o editor e operador do site <Link href="https://velvetjackpt.org/" className="underline hover:text-white transition-colors">https://velvetjackpt.org/</Link>. Ele opera este site em ligação com <Link href="https://velvetjackpt.org/" className="underline hover:text-white transition-colors">https://velvetjackpt.org/</Link>, incluindo relações comerciais e de afiliados refletidas no conteúdo e ofertas neste domínio.
          </p>
          <p className="text-gray-500 text-[13px] leading-relaxed">
            <strong className="text-gray-400">Divulgação de Afiliados:</strong> Este website é uma plataforma de comparação de afiliados independente. Poderemos receber uma compensação dos operadores listados quando os utilizadores utilizam os nossos links. Isto não compromete os nossos rigorosos padrões de avaliação. Os utilizadores devem verificar os termos do operador antes do registo.
          </p>
          <p className="text-gray-500 text-[13px] leading-relaxed">
            Jogar envolve riscos e pode causar dependência. Jogo proibido a menores de 18 anos — jogue com moderação e de forma responsável. Este site é um comparador independente e apenas recomenda operadores licenciados pelo SRIJ. Se precisar de ajuda, contacte a Linha 1414 (ICAD) ou visite <Link href="https://www.jogoresponsavel.pt" target="_blank" className="underline hover:text-white transition-colors">jogoresponsavel.pt</Link>.
          </p>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/5 mb-8"></div>

        {/* Bottom Menu & Copyright */}
        <div className="flex flex-col gap-6">
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/cookies" className="text-sm font-bold text-white hover:text-primary transition-colors">Política de Cookies</Link>
            <Link href="/terms" className="text-sm font-bold text-white hover:text-primary transition-colors">Termos e Condições</Link>
            <Link href="/privacy" className="text-sm font-bold text-white hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="/jogo-responsavel" className="text-sm font-bold text-white hover:text-primary transition-colors">Jogo Responsável</Link>
            <Link href="/sobre-nos" className="text-sm font-bold text-white hover:text-primary transition-colors">Sobre Nós</Link>
            <Link href="/contacto" className="text-sm font-bold text-white hover:text-primary transition-colors">Contacto</Link>
          </nav>
          
          <p className="text-gray-500 text-sm">
            © {year} VelvetJackPT.com — Todos os direitos reservados. Site comparador independente. Não é um operador de jogos de azar.
          </p>
        </div>
      </div>
    </footer>
  );
}
