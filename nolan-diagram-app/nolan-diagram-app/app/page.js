import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    text: 'O governo deve ter controle total sobre o sistema de saúde?',
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
    text: 'A privatização de estatais é benéfica para o Brasil?',
    axis: 'economic',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'O Estado deve intervir para garantir igualdade social?',
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
    text: 'A legalização das drogas deve ser implementada?',
    axis: 'social',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'A educação deve ser 100% pública e gratuita?',
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
    text: 'O porte de armas deve ser legalizado para todos?',
    axis: 'social',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'O SUS deve continuar sendo o principal sistema de saúde?',
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
    text: 'O ensino religioso deve ser obrigatório nas escolas públicas?',
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
    text: 'A carga tributária deve ser reduzida?',
    axis: 'economic',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'O Estado deve regular as redes sociais?',
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
    text: 'Empresas devem ter liberdade para contratar e demitir sem restrições?',
    axis: 'economic',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'Pessoas do mesmo sexo devem poder adotar crianças?',
    axis: 'social',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'O Estado deve subsidiar a cultura e o cinema nacional?',
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
    text: 'O Brasil deve ter uma política externa independente dos EUA?',
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
    text: 'O serviço militar obrigatório deve ser extinto?',
    axis: 'social',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'O aborto deve ser legalizado?',
    axis: 'social',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'A reforma agrária deve ser prioridade do governo?',
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
    text: 'O governo deve financiar igrejas ou instituições religiosas?',
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
    text: 'O Brasil deve investir em tecnologia militar?',
    axis: 'economic',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
    ],
  },
  {
    text: 'A liberdade de expressão deve ser absoluta, mesmo para discursos controversos?',
    axis: 'social',
    options: [
      { text: 'Discordo totalmente', value: -2 },
      { text: 'Discordo', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Concordo', value: 1 },
      { text: 'Concordo totalmente', value: 2 },
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
        <h1 className="text-4xl font-bold mb-4">O Diagrama de Nolan</h1>
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
