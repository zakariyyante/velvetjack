import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Content from Screenshot */}
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
            Como Escolher um Casino Online em Portugal
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                Licença SRIJ: o filtro que não negociamos
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Em Portugal, só pode jogar legalmente em operadores com licença do SRIJ (Serviço de Regulação e Inspeção de Jogos). No VelvetJackPT essa é a primeira e mais rígida regra da lista: sem licença válida, o casino não entra. Uma licença SRIJ implica jogos certificados, proteção dos fundos dos jogadores e ferramentas obrigatórias de jogo responsável.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
                Somos um comparador independente — não um casino. Não aceitamos apostas nem depósitos. Quando se regista através dos nossos links, o operador pode pagar-nos uma comissão; isso financia o site e não compra posições no ranking.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Bónus de boas-vindas sem letras miúdas escondidas
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    O valor em destaque só conta quando se conhecem os requisitos de apostas, a ponderação por tipo de jogo e os limites de levantamento dos ganhos de bónus. Preferimos pacotes com requisito até cerca de 35x; acima de 50x só se a oferta for claramente excepcional no resto. Assinalamos também limites de aposta durante o rollover e prazos curtos de validade.
                  </p>
                  <p className="text-gray-400 leading-relaxed italic text-sm">
                    As promoções mudam com frequência. Atualizamos as classificações mensalmente, mas os termos no site do operador prevalecem sempre — leia-os antes de depositar.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Levantamentos: onde se vê a diferença
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Os melhores casinos portugueses processam levantamentos para cartão ou MB Way em poucas horas após a verificação de identidade. Operadores que deixam pedidos pendentes durante dias perdem posições. Avaliamos Multibanco, e-wallets e a clareza das taxas — se as houver.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Jogos, casino ao vivo e telemóvel
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Uma boa seleção inclui slots de estúdios estabelecidos (NetEnt, Pragmatic Play, Play&apos;n GO, entre outros) e mesas ao vivo com fornecedores como a Evolution. Verificamos se a pesquisa de jogos funciona bem no telemóvel, se o RTP é publicado e se o casino ao vivo tem variedade real — não só uma dúzia de mesas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Jogo responsável em primeiro lugar
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    O jogo deve ser entretenimento, nunca uma forma de ganhar dinheiro ou resolver problemas financeiros. Todos os operadores listados oferecem limites de depósito, pausas, autoexclusão e ligação ao sistema do SRIJ. Se o jogo está a causar preocupação, contacte a Linha 1414 (ICAD) ou visite <Link href="https://jogoresponsavel.pt/" target="_blank" className="underline hover:text-white transition-colors">jogoresponsavel.pt</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
