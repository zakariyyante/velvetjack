import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Contacto</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p>
            Tem alguma dúvida, sugestão ou precisa de mais informações? Estamos aqui para ajudar.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Envie-nos uma mensagem</h2>
            <p className="mb-8">
              Pode contactar-nos através do nosso e-mail oficial para questões gerais ou parcerias:
            </p>
            <div className="text-xl font-bold text-primary">
              info@velvetjackpt.net
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>
              Tentamos responder a todas as solicitações no prazo de 48 horas úteis.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
