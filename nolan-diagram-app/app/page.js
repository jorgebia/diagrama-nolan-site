"use client";
import React, { useState, useCallback, useMemo } from 'react';
import QuestionCard from './components/QuestionCard';
import ResultDiagram from './components/ResultDiagram';
import questions from './data/Questions';

const initialAnswers = Array(questions.length).fill(0);

function getIdeologyLabel(economic, social) {
  if (economic < 0 && social > 0) return '🟢 Progressista / Socialista';
  if (economic > 0 && social > 0) return '🟡 Libertário / Progressista Liberal';
  if (economic > 0 && social < 0) return '🔵 Liberal / Conservador';
  if (economic < 0 && social < 0) return '🔴 Autoritário / Totalitário';
  return 'Centro';
}

$1
  const [answers, setAnswers] = useState(initialAnswers);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = useCallback((index, value) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  }, []);

  const { economic, social } = useMemo(() => {
    let economic = 0, social = 0, economicCount = 0, socialCount = 0;

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

    return {
      economic: economicCount ? economic / (economicCount * 2) : 0,
      social: socialCount ? social / (socialCount * 2) : 0,
    };
  }, [answers]);
{
  return (
    <main className="p-4 sm:p-8 font-sans bg-[url('/paper-texture.jpg')] bg-repeat text-gray-900">
      <section className="mb-8 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 inline-flex items-center justify-center gap-2">
          Teste de Espectro Político Brasileiro (beta)
        </h1>
      </section>

      <section className="mb-8 bg-white/70 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <p className="mb-2">O Diagrama de Nolan é uma ferramenta que ajuda a classificar as ideologias políticas de um indivíduo em dois eixos: econômico (esquerda/direita) e social (libertário/autoritário).</p>
        <p className="mb-2">David Nolan (1943-2010) foi um ativista político norte-americano. Ele é o criador do Gráfico de Nolan, uma representação política em dois eixos - liberdade econômica e liberdade pessoal - usada para classificar ideologias políticas de forma mais precisa do que o tradicional espectro esquerda-direita.</p>
        <p className="mb-2">David Nolan propôs este modelo para demonstrar que as visões políticas vão além da tradicional divisão entre esquerda e direita, incluindo também o grau de liberdade pessoal que o indivíduo defende.</p>
        <p>Responda o questionário para descobrir onde você se posiciona. Esta análise ajuda a compreender melhor sua filosofia política em um espectro mais amplo que o tradicional.</p>
      </section>

      <section className="mb-8">
        {questions.map((q, idx) => (
          <QuestionCard
            key={idx}
            question={q}
            index={idx}
            value={answers[idx]}
            onChange={handleAnswerChange}
          />
        ))}
        <button
          onClick={() => setSubmitted(true)}
          disabled={!answers.some(a => a !== 0)}
          className={`bg-blue-600 text-white px-6 py-3 rounded mt-4 text-base sm:text-lg ${answers.some(a => a !== 0) ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'}`}
        >
          Ver resultado
        </button>
      </section>

      {submitted && (
        <section>
          $1
          <p className="text-center text-base mb-6 text-gray-800">
            Você está posicionado como: <strong>{getIdeologyLabel(economic, social)}</strong>
          </p>
          $1

          <div className="mt-8 max-w-3xl mx-auto space-y-4 text-sm sm:text-base bg-white/70 p-4 rounded shadow">
            <div>
              <h3 className="font-semibold text-lg">🔴 Autoritário / Totalitário</h3>
              <p>Defende forte intervenção do Estado tanto na economia quanto nos costumes sociais. Valoriza a ordem, autoridade e o controle estatal como pilares fundamentais da sociedade.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🟢 Progressista / Socialista</h3>
              <p>Busca igualdade social por meio de políticas públicas e maior controle estatal da economia. É aberto a mudanças culturais e sociais em prol da justiça e inclusão.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🔵 Liberal / Conservador</h3>
              <p>Defende liberdade econômica com menor interferência do Estado, mas com valores sociais mais tradicionais e normas culturais preservadas.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🟡 Libertário / Progressista Liberal</h3>
              <p>Valoriza fortemente as liberdades individuais, tanto econômicas quanto pessoais. Promove um Estado mínimo e grande autonomia do cidadão em todas as esferas.</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}