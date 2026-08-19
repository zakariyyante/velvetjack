import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Política de Cookies</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p>
            O velvetjackpt.org utiliza cookies para melhorar a sua experiência de navegação e fornecer um serviço personalizado.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8">O que são Cookies?</h2>
          <p>
            Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um site. Eles ajudam o site a reconhecer o seu dispositivo e a lembrar informações sobre a sua visita.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Como utilizamos os Cookies?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
            <li><strong>Cookies de Análise:</strong> Ajudam-nos a compreender como os visitantes interagem com o site, recolhendo informações de forma anónima.</li>
            <li><strong>Cookies de Marketing:</strong> Utilizados para rastrear visitantes em sites para exibir anúncios relevantes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">Gestão de Cookies</h2>
          <p>
            Pode controlar e/ou eliminar cookies conforme desejar através das definições do seu navegador. No entanto, desativar cookies pode limitar a sua utilização de certas funcionalidades do site.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
