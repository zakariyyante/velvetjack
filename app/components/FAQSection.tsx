"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-white transition-colors"
      >
        <span className="text-base md:text-lg font-bold text-gray-200">{question}</span>
        <ChevronDown 
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

const faqData = [
  {
    category: "GERAL",
    items: [
      {
        question: "Os casinos online são legais em Portugal?",
        answer: "Sim, desde que possuam uma licença emitida pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Todos os casinos que listamos no VelvetJackPT são 100% legais e licenciados para operar no mercado português.",
      },
      {
        question: "Como decidem o casino número um?",
        answer: "A nossa classificação baseia-se numa combinação de fatores: segurança, variedade de jogos, qualidade do suporte ao cliente, rapidez nos pagamentos e, claro, a generosidade e transparência dos bónus oferecidos.",
      },
      {
        question: "O VelvetJackPT é gratuito?",
        answer: "Sim, o uso do nosso site é totalmente gratuito para os utilizadores. Recebemos comissões dos operadores quando os jogadores se registam através dos nossos links, o que nos permite manter o site ativo sem custos para si.",
      },
      {
        question: "Posso confiar nestas classificações?",
        answer: "Absolutamente. As nossas análises são independentes e baseadas em testes reais. O nosso objetivo é fornecer informações claras e honestas para que possa escolher o casino que melhor se adapta ao seu perfil.",
      },
    ],
  },
  {
    category: "BÓNUS",
    items: [
      {
        question: "O que é um requisito de apostas?",
        answer: "Também conhecido como 'rollover', é o número de vezes que deve apostar o valor do bónus (e às vezes o depósito) antes de poder levantar os ganhos associados. Por exemplo, um bónus de 10€ com rollover de 30x exige 300€ em apostas.",
      },
      {
        question: "Porque o bónus no site do casino parece diferente?",
        answer: "Os casinos atualizam as suas ofertas frequentemente. Embora tentemos manter os dados atualizados em tempo real, recomendamos sempre que verifique os termos e condições no site do operador antes de depositar.",
      },
      {
        question: "Os free spins têm requisitos?",
        answer: "Na maioria das vezes, sim. Os ganhos resultantes das jogadas grátis são geralmente convertidos em saldo de bónus, que está sujeito a requisitos de aposta antes de poder ser levantado como dinheiro real.",
      },
    ],
  },
  {
    category: "PAGAMENTOS",
    items: [
      {
        question: "Qual a forma mais rápida de levantar ganhos?",
        answer: "Métodos como MB Way, PayPal e Skrill costumam ser os mais rápidos, com levantamentos muitas vezes processados em poucas horas. Transferências bancárias tradicionais podem demorar de 2 a 5 dias úteis.",
      },
      {
        question: "Porque pedem documentos de identificação?",
        answer: "Este é um requisito legal imposto pelo SRIJ para prevenir a lavagem de dinheiro e garantir que o jogador é maior de idade. É um procedimento padrão de segurança conhecido como KYC (Know Your Customer).",
      },
      {
        question: "Posso depositar com Multibanco?",
        answer: "Sim, o Multibanco é um dos métodos de depósito mais populares e seguros em Portugal, estando disponível em praticamente todos os casinos licenciados pelo SRIJ.",
      },
    ],
  },
  {
    category: "JOGOS",
    items: [
      {
        question: "Que tipos de jogos posso encontrar?",
        answer: "Pode encontrar uma vasta gama de jogos, desde centenas de slots temáticas, roleta, blackjack, bacará e até jogos de casino ao vivo com croupiers reais. Todos os jogos são auditados para garantir resultados justos e aleatórios.",
      },
      {
        question: "Posso jogar no telemóvel?",
        answer: "Sim, todos os casinos que recomendamos são totalmente otimizados para dispositivos móveis, permitindo-lhe jogar através do navegador do seu smartphone ou, em alguns casos, através de apps dedicadas para iOS e Android.",
      },
    ],
  },
  {
    category: "JOGO RESPONSÁVEL",
    items: [
      {
        question: "O que é a autoexclusão?",
        answer: "A autoexclusão é uma ferramenta que permite ao jogador proibir-se de aceder a sites de jogo por um período determinado ou por tempo indeterminado. É um passo importante se sentir que o jogo está a tornar-se um problema.",
      },
      {
        question: "Onde posso obter ajuda?",
        answer: "Pode obter ajuda através da Linha Vida (1414), do SICAD, ou visitando o site jogoresponsavel.pt. Existem diversas organizações em Portugal que oferecem apoio gratuito e confidencial.",
      },
    ],
  },
  {
    category: "UTILIZAR O NOSSO SITE",
    items: [
      {
        question: "Como funcionam os links \"Obter Bónus\"?",
        answer: "Ao clicar em 'Obter Bónus', será redirecionado para a página oficial do casino. O link contém um código de rastreio que garante que recebe a oferta exclusiva mencionada no nosso site.",
      },
      {
        question: "Com que frequência atualizam a lista?",
        answer: "A nossa equipa monitoriza os casinos diariamente e atualiza as classificações e ofertas pelo menos uma vez por mês, ou sempre que há alterações significativas nos bónus ou regulamentação.",
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white italic">
          Perguntas Frequentes
        </h2>

        <div className="space-y-12">
          {faqData.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-6 uppercase">
                {group.category}
              </h3>
              <div className="flex flex-col">
                {group.items.map((item, idx) => (
                  <FAQItem key={idx} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
