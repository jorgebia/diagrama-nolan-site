"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  { question: "O SUS deve continuar sendo totalmente gratuito.", axis: ["mercado", -1] },
  { question: "O governo deve investir mais em educação pública mesmo que aumente impostos.", axis: ["mercado", -1] },
  { question: "O Brasil deve adotar políticas econômicas mais liberais.", axis: ["mercado", 1] },
  { question: "Deve haver mais liberdade para empreender com menos regulamentações.", axis: ["mercado", 1] },
  { question: "A legalização das drogas deve ser debatida seriamente.", axis: ["autoridade", -1] },
  { question: "Pessoas devem poder escolher sua identidade de gênero livremente.", axis: ["autoridade", -1] },
  { question: "O Estado deve punir severamente crimes mesmo que afete liberdades individuais.", axis: ["autoridade", 1] },
  { question: "O homeschooling (educação domiciliar) deve ser permitido no Brasil.", axis: ["autoridade", -1] },
  { question: "A religião deve ter mais influência nas decisões do Estado.", axis: ["autoridade", 1] },
  { question: "A descriminalização do aborto é uma questão de saúde pública.", axis: ["autoridade", -1] },
  { question: "O Brasil deve manter uma política externa mais independente.", axis: ["mercado", -1] },
  { question: "O país deve se alinhar mais com potências ocidentais como EUA e Europa.", axis: ["mercado", 1] },
  { question: "O serviço militar obrigatório deve ser extinto.", axis: ["autoridade", -1] },
  { question: "Deve haver cotas raciais em universidades públicas.", axis: ["mercado", -1] },
  { question: "Empresas privadas devem administrar presídios.", axis: ["mercado", 1] },
  { question: "A liberdade de expressão deve ser protegida mesmo para discursos polêmicos.", axis: ["autoridade", -1] },
  { question: "O Estado deve intervir para combater desigualdades sociais.", axis: ["mercado", -1] },
  { question: "O casamento entre pessoas do mesmo sexo deve ter os mesmos direitos legais.", axis: ["autoridade", -1] },
  { question: "Grandes fortunas devem ser taxadas para financiar programas sociais.", axis: ["mercado", -1] },
  { question: "O Estado deve promover valores tradicionais na sociedade.", axis: ["autoridade", 1] }
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
