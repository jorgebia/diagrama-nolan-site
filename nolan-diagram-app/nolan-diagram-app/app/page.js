"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    text: '01 - O governo deve ter controle total sobre o sistema de saúde brasileiro (SUS, planos de saúde privados e etc.)',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '02 - A privatização de estatais (ex.: Correios, Petrobrás) é benéfica para o Brasil.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '03 - O estado deve planejar a economia brasileira para estimular o crescimento do Brasil (ex.: através do Plano de Crescimento e Aceleração).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '04 - A legalização das drogas (produção e consumo) deve ser implementada.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '05 - O estado deve ditar as regras da educação através do Ministério da Educação (ex.: legalização do homeschooling).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '06 - A posse de armas deve ser facilitada para todos (ex.: menos burocracia para compra e posse).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '07 - A privatização das universidades públicas não deve ser uma realidade no Brasil.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '08 - Bancos estatais (ex.: Caixa, BB e BNDES) devem ser utilizados para financiar projetos sociais e infraestrutura.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '09 - O governo deve buscar cortar gastos e reduzir despesas (através de reformas fiscais, administrativas, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '10 - O Estado deve regular ainda mais as redes sociais (além do marco civíl da internet já existente).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '11 - Empresas devem ter liberdade para contratar e demitir sem restrições (Contratar como PJ, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '12 - A liberdade de expressão absoluta deve ser garantida (seja para opiniões impopulares, arte e humor).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '13 - O Estado deve subsidiar a cultura e o cinema nacional (ex.: através da lei Rouanet).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '14 - O aborto deve ser permitido em qualquer circunstância (saúde da mãe, anencefalia, estupro, falta de planejamento, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '15 - Qualquer religião (cristianismo, candomblé, etc.) deve ter liberdade para praticar seus rituais.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '16 - O casamento entre pessoas do mesmo sexo deve ter os mesmos direitos legais.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '17 - O Brasil deve desburocratizar e reduzir impostos sobre a importação de produtos estrangeiros.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '18 - Deve haver cotas raciais em qualquer setor da sociedade brasileira (ex.: educação, emprego, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '19 - O Brasil deve aumentar seu orçamento militar.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '20 - A iniciativa privada deve ter a liberdade de fornecer todos os serviços públicos (saúde, justiça, educação, segurança, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '21 - O Brasil deve ser o líder militar na América Latina.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '22 - Não vejo problema nas pessoas se relacionarem de formas diferentes do tradicional. (relacionamento aberto, poliamor, etc).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '23 - O Brasil deve desburocratizar o investimento privado no setor de energia (ex.: solar, eólica, nuclear, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '24 - O estado brasileiro deve ter total controle da infraestrutura de transporte (rodovias, ferrovias, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '25 - O setor agropecuário do Brasil deveria ser estatizado (ex.: terras, produção, distribuição, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '26 - O cristianismo deve influenciar mais na política brasileira (ex.: valores cristãos, ética, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '27 - As terras indígenas devem ser controladas pelo estado brasileiro (ex.: demarcação, proteção, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '28 - Os brasileiros devem se tornar vegetarianos (ex.: por questões éticas, compaixão, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '29 - Meu corpo, minhas regras.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '30 - A imigração deve ser livre e aberta (ex.: sem restrições de entrada e saída).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
];

const initialAnswers = Array(questions.length).fill(0);

export default function Home() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculatePosition = () => {
    let economic = 0;
    let social = 0;
    questions.forEach((q, idx) => {
      if (q.axis === 'economic') economic += answers[idx];
      if (q.axis === 'social') social += answers[idx];
    });
    return { economic, social };
  };

  const { economic, social } = calculatePosition();

  return (
    <main className="p-8 font-sans bg-[url('/paper-texture.jpg')] bg-repeat text-gray-900">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 inline-flex items-center justify-center gap-2">
        Teste de Espectro Político Brasileiro
        </h1>
      </section>

      <section className="mb-8 bg-white/70 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <p className="mb-2">O Diagrama de Nolan é uma ferramenta que ajuda a classificar as ideologias políticas de um indivíduo em dois eixos: econômico (esquerda/direita) e social (libertário/autoritário).</p>
        <p className="mb-2">David Nolan (1943–2010) foi um ativista político norte-americano mais conhecido por ser o fundador do Partido Libertário dos Estados Unidos, criado em 1971. Ele também é o criador do Gráfico de Nolan, uma representação política em dois eixos — liberdade econômica e liberdade pessoal — usada para classificar ideologias políticas de forma mais precisa do que o tradicional espectro esquerda-direita.</p>
        <p className="mb-2">David Nolan propôs este modelo para demonstrar que as visões políticas vão além da tradicional divisão entre esquerda e direita, incluindo também o grau de liberdade pessoal que o indivíduo defende.</p>
        <p>Responda ao questionário para descobrir onde você se posiciona. Esta análise ajuda a compreender melhor sua filosofia política em um espectro mais amplo que o tradicional.</p>
      </section> 

      <section className="mb-8">
        {questions.map((q, idx) => (
          <div key={idx} className="mb-4 bg-white/80 p-4 rounded-md shadow-sm">
            <p className="font-semibold mb-2">{q.text}</p>
            <div className="flex flex-col gap-1">
              {q.options.map((opt, oIdx) => (
                <label key={oIdx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    value={opt.value}
                    onChange={() => handleAnswerChange(idx, opt.value)}
                  />
                  {opt.text}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={() => setSubmitted(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 items-center justify-center transition-colors"
        >
          Ver resultado
        </button>
      </section>

      {submitted && (
        <section>
          <h2 className="text-4xl font-bold mb-2 inline-flex items-center justify-center gap-4">Seu Resultado</h2>
          <div className="relative h-[500px] w-[500px] border border-gray-400 mx-auto">
            {/* Grid colorido */}
            <div className="absolute inset-0 grid grid-cols-15 grid-rows-15">
              {[...Array(100)].map((_, i) => {
                const row = Math.floor(i / 15);
                const col = i % 15;
                let bg = 'bg-white';
                if (row < 5 && col < 5) bg = 'bg-green-100';
                if (row < 5 && col >= 5) bg = 'bg-yellow-100';
                if (row >= 5 && col < 5) bg = 'bg-red-100';
                if (row >= 5 && col >= 5) bg = 'bg-blue-100';
                return <div key={i} className={`border border-gray-100 ${bg}`} />;
              })}
            </div>
            {/* Eixos */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-full h-0.5 bg-black top-1/2" />
              <div className="absolute h-full w-0.5 bg-black left-1/2" />
            </div>
            {/* Marcador do usuário */}
            <motion.div
              className="absolute w-4 h-4 bg-red-600 rounded-full"
              animate={{
                left: `calc(50% + ${economic * 15}px)`,
                top: `calc(50% - ${social * 15}px)`
              }}
            />
            {/* Legendas principais fora do quadrante */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">Libertário</div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">Autoritário</div>
            <div className="absolute top-1/2 -left-24 transform -translate-y-1/2 text-sm font-semibold">Esquerda</div>
            <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 text-sm font-semibold">Direita</div>
            {/* Descrições ideológicas */}
            <div className="absolute -top-12 left-0 text-xs text-left">Progressista<br/>Socialista</div>
            <div className="absolute -top-12 right-0 text-xs text-right">Libertário<br/>Progressista Liberal</div>
            <div className="absolute -bottom-12 left-0 text-xs text-left">Autoritário<br/>Totalitário</div>
            <div className="absolute -bottom-12 right-0 text-xs text-right">Liberal<br/>Conservador</div>
          </div>
        </section>
      )}
    </main>
  );
}