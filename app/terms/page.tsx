import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Termos de Serviço</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p>
            Ao aceder ao velvetjackpt.net, o utilizador concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis em Portugal.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">1. Uso de Conteúdo</h2>
          <p>
            O conteúdo deste site é apenas para fins informativos e de entretenimento. As informações sobre bónus e ofertas de casinos podem mudar sem aviso prévio. Fazemos o nosso melhor para manter os dados atualizados, mas não garantimos a sua precisão total.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">2. Responsabilidade do Utilizador</h2>
          <p>
            É da responsabilidade do utilizador verificar se o jogo online é legal na sua localização. O utilizador deve ter pelo menos 18 anos de idade para utilizar os serviços dos casinos listados.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">3. Isenção de Responsabilidade</h2>
          <p>
            O velvetjackpt.net não é um operador de jogo. Não aceitamos apostas nem processamos transações financeiras. Não somos responsáveis por quaisquer perdas incorridas em sites de terceiros aos quais o utilizador acede através do nosso site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">4. Propriedade Intelectual</h2>
          <p>
            Todos os logótipos e marcas registadas apresentados são propriedade dos seus respetivos donos. O design e o conteúdo original do VelvetJack estão protegidos por direitos de autor.
          </p>

          <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
            <p className="text-sm">
              Ao continuar a utilizar este site, o utilizador confirma que compreende os riscos associados ao jogo e compromete-se a jogar de forma <Link href="/#about" className="text-primary hover:underline font-bold">responsável</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
