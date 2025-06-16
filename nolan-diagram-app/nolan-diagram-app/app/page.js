"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    text: 'O governo deve ter controle total sobre o sistema de saúde brasileiro (SUS, planos de saúde privados e etc.)',
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
    text: 'A privatização de estatais (ex.: Correios, Petrobrás) é benéfica para o Brasil.',
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
    text: 'O estado deve planejar a economia brasileira para estimular o crescimento (ex.: através de planos como o PAC).',
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
    text: 'A legalização das drogas (produção e consumo) deve ser implementada.',
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
    text: 'O estado deve ditar as regras da educação através do MEC (ex.: legalização do homeschooling).',
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
    text: 'A posse de armas deve ser facilitada para todos (ex.: menos burocracia para compra e posse).',
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
    text: 'A privatização das universidades públicas é maléfica para o Brasil.',
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
    text: 'O BNDES deve ser utilizado para financiar projetos sociais e infraestrutura.',
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
    text: 'O governo deve cortar gastos e reduzir despesas para evitar o déficit (através de reformas fiscais, administrativas, etc.).',
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
    text: 'O Estado deve regular as redes sociais (além do marco regulatório já existente).',
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
    text: 'Empresas devem ter liberdade para contratar e demitir sem restrições (Contratar como PJ, etc.).',
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
    text: 'A liberdade de expressão absoluta deve ser garantida (seja para opiniões impopulares, arte e humor).',
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
    text: 'O Estado deve subsidiar a cultura e o cinema nacional (ex.: através da lei Rouanet).',
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
    text: 'O aborto deve ser permitido em qualquer circunstância (saúde da mãe, anencefalia, estupro, falta de planejamento, etc.).',
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
    text: 'Qualquer religião (cristianismo, candomblé, etc.) deve ter liberdade para praticar seus rituais.',
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
    text: 'O casamento entre pessoas do mesmo sexo deve ter os mesmos direitos legais.',
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
    text: 'O Brasil deve desburocratizar e reduzir impostos sobre a importação de produtos estrangeiros.',
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
    text: 'Deve haver cotas raciais em qualquer setor da sociedade brasileira (ex.: educação, emprego, etc.).',
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
    text: 'O Brasil deve aumentar seu orçamento militar.',
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
    text: 'A iniciativa privada deve ter a liberdade de fornecer todos os serviços públicos (saúde, justiça, educação, segurança, etc.).',
    axis: 'economic',
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
    <main className="p-8 font-sans">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Espectro Político Brasil</h1>
        <p className="mb-2">O Diagrama de Nolan é uma ferramenta que ajuda a classificar as ideologias políticas de um indivíduo em dois eixos: econômico (esquerda/direita) e social (libertário/autoritário).</p>
        <p>David Nolan propôs este modelo para demonstrar que as visões políticas vão além da tradicional divisão entre esquerda e direita, incluindo também o grau de liberdade pessoal que o indivíduo defende.</p>
      </section>

      <section className="mb-8">
        {questions.map((q, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold">{q.text}</p>
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
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Ver resultado
        </button>
      </section>

      {submitted && (
        <section>
          <h2 className="text-2xl font-bold mb-2">Seu Resultado</h2>
          <div className="relative h-96 w-96 border border-gray-300">
            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-100"
                />
              ))}
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
                left: `calc(50% + ${economic * 10}px)`,
                top: `calc(50% - ${social * 10}px)`,
              }}
            />
            {/* Legendas */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0">Libertário</div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">Autoritário</div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0">Esquerda</div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0">Direita</div>
          </div>
        </section>
      )}
    </main>
  );
}
