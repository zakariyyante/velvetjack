import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p>
            Esta Política de Privacidade descreve como o velvetjackpt.org (&quot;nós&quot;, &quot;nosso&quot; ou &quot;site&quot;) recolhe, utiliza e protege as suas informações quando utiliza o nosso serviço.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">1. Recolha de Informação</h2>
          <p>
            Não exigimos que os utilizadores se registem ou forneçam informações pessoais para navegar no site. No entanto, podemos recolher dados não identificáveis, como o seu endereço IP, tipo de navegador e páginas visitadas, para melhorar a experiência do utilizador.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">2. Cookies</h2>
          <p>
            Utilizamos cookies para analisar o tráfego do site e personalizar o conteúdo. Pode optar por desativar os cookies nas definições do seu navegador, embora isso possa afetar a funcionalidade do site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">3. Links de Afiliados</h2>
          <p>
            O nosso site contém links para sites de terceiros (&quot;Casinos&quot;). Se clicar num destes links, será redirecionado para o site do operador. Não temos controlo sobre as políticas de privacidade desses sites externos e recomendamos que as leia atentamente.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">4. Segurança</h2>
          <p>
            Implementamos medidas de segurança para proteger as informações recolhidas. No entanto, lembre-se de que nenhum método de transmissão pela Internet é 100% seguro.
          </p>

          <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-xl">
            <p className="text-sm">
              Para mais informações, por favor contacte-nos através da nossa página de <Link href="/#contact" className="text-accent hover:underline font-bold">contacto</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
