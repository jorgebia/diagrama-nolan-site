"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    text: '01 - O estado deve controlar totalmente o sistema de saúde no Brasil, incluindo o SUS, os planos de saúde e hospitais privados.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '02 - A privatização de empresas estatais, como os Correios e a Petrobrás, traz benefícios para o Brasil.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '03 - O Banco Central deve emitir mais dinheiro em situações de crise econômica.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '04 - A produção, comercialização e consumo de drogas devem ser legalizados.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '05 - O Ministério da Educação deve definir um currículo nacional obrigatório para todas as escolas públicas e privadas.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '06 - A aquisição e posse de armas de fogo deve ser menos burocrática para os cidadãos.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '07 - As universidades públicas (federais e estaduais) devem ser privatizadas.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '08 - Bancos públicos, como a Caixa e o BNDES, devem ser usados para financiar programas sociais e infraestrutura.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '09 - O governo deve reduzir seus gastos por meio de reformas administrativas, privatizações e combate ao desperdício orçamentário.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '10 - O Estado deve ampliar sua regulação sobre a Internet e redes sociais, além do que já prevê o Marco Civil da Internet.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '11 - Empresas devem ter a liberdade para contratar e demitir sem restrições (Contratar como PJ, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '12 - A liberdade de expressão deve ser absoluta, mesmo para opiniões impopulares, ofensivas, expressões artísticas e humor.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '13 - O Estado deve continuar financiando projetos culturais por meio de incentivos como a Lei Rouanet.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '14 - O aborto deve ser proibido em qualquer circunstância (saúde da mãe, anencefalia, estupro, falta de planejamento, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '15 - Qualquer religião deve ter liberdade para praticar seus rituais (cristianismo, candomblé, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '16 - O casamento entre pessoas do mesmo sexo deve ter os mesmos direitos legais.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '17 - O Brasil deve desburocratizar e reduzir impostos sobre a importação de produtos estrangeiros (ex.: eletrônicos, roupas, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '18 - Deve haver cotas raciais em qualquer setor da sociedade brasileira (ex.: educação, emprego, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '19 - O Brasil deve aumentar seu orçamento militar.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '20 - A iniciativa privada deve ter mais liberdade de fornecer serviços públicos (saúde, justiça, educação, segurança, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '21 - O Brasil deve ser o líder militar na América Latina.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '22 - Formas não convencionais de relacionamento, como poliamor ou relacionamentos abertos, devem ser respeitadas e legalmente reconhecidas.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '23 - O Brasil deve desburocratizar o investimento privado no setor de energia (ex.: solar, eólica, nuclear, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '24 - A infraestrutura de transporte (rodovias, ferrovias, portos, etc.) deve ser de controle exclusivo do Estado.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '25 - O setor agropecuário do Brasil deve ser estatizado (ex.: terras, produção, distribuição, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '26 - Valores cristãos devem orientar decisões políticas e a elaboração de leis no Brasil.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '27 - Movimentos sociais, como o MST, devem ter o direito de ocupar terras improdutivas para fins de reforma agrária.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '28 - A educação domiciliar (homeschooling) deve ser permitida legalmente no Brasil.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
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
  let economicCount = 0;
  let socialCount = 0;

  questions.forEach((q, idx) => {
    if (q.axis === 'economic') {
      economic += answers[idx];
      economicCount++;
    }
    if (q.axis === 'social') {
      social += answers[idx];
      socialCount++;
    }
  });

  const normEconomic = economicCount ? economic / (economicCount * 2) : 0; // -1 a +1
  const normSocial = socialCount ? social / (socialCount * 2) : 0; // -1 a +1

  return { economic: normEconomic, social: normSocial };
};

  const { economic, social } = calculatePosition();

  return (
    <main className="p-4 sm:p-8 font-sans bg-[url('/paper-texture.jpg')] bg-repeat text-gray-900">
      <section className="mb-8 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 inline-flex items-center justify-center gap-2">
        Teste de Espectro Político Brasileiro (beta)
        </h1>
      </section>

      <section className="mb-8 bg-white/70 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <p className="mb-2">O Diagrama de Nolan é uma ferramenta que ajuda a classificar as ideologias políticas de um indivíduo em dois eixos: econômico (esquerda/direita) e social (libertário/autoritário).</p>
        <p className="mb-2">David Nolan (1943–2010) foi um ativista político norte-americano. Ele é o criador do Gráfico de Nolan, uma representação política em dois eixos — liberdade econômica e liberdade pessoal — usada para classificar ideologias políticas de forma mais precisa do que o tradicional espectro esquerda-direita.</p>
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
                    className="w-5 h-5"
                  />
                  {opt.text}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={() => setSubmitted(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded mt-4 hover:bg-blue-700 text-base sm:text-lg"
        >
          Ver resultado
        </button>
      </section>

      {submitted && (
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">Seu Resultado</h2>
          <div className="relative w-full max-w-[500px] aspect-square border border-gray-400 mx-auto mt-6 sm:mt-10">
            {/* Grid colorido */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-0 w-full h-full">
              {[...Array(100)].map((_, i) => {
                const row = Math.floor(i / 10);
                const col = i % 10;
                let bg = 'bg-white';
                if (row < 5 && col < 5) bg = 'bg-green-100';
                if (row < 5 && col >= 5) bg = 'bg-yellow-100';
                if (row >= 5 && col < 5) bg = 'bg-red-100';
                if (row >= 5 && col >= 5) bg = 'bg-blue-100';
                return <div key={i} className={`border border-gray-200 ${bg}`} />;
              })}
            </div>
            {/* Eixos */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="absolute w-full h-0.5 bg-black top-1/2" />
              <div className="absolute h-full w-0.5 bg-black left-1/2" />
            </div>
            {/* Marcador do usuário */}
            <motion.div
              className="absolute w-4 h-4 bg-red-600 rounded-full"
             style={{
              left: `calc(50% + ${economic * 50}%)`,
              top: `calc(50% - ${social * 50}%)`,
              transform: 'translate(-50%, -50%)',
            }}
            />
          {/* Legendas principais dos eixos */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold">Libertário</div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold">Autoritário</div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">Esquerda</div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">Direita</div>

          {/* Rótulos ideológicos externos */}
          <div className="absolute -top-8 left-0 text-[10px] sm:text-xs text-left leading-tight">Progressista<br />Socialista</div>
          <div className="absolute -top-8 right-0 text-[10px] sm:text-xs text-right leading-tight">Libertário<br />Progressista Liberal</div>
          <div className="absolute -bottom-8 left-0 text-[10px] sm:text-xs text-left leading-tight">Autoritário<br />Totalitário</div>
          <div className="absolute -bottom-8 right-0 text-[10px] sm:text-xs text-right leading-tight">Liberal<br />Conservador</div>
    </div>
        </section>
      )}
    </main>
  );
}