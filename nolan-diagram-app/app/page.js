"use client";
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './components/QuestionCard';
import ResultDiagram from './components/ResultDiagram';
import questions from './data/Questions';

const initialAnswers = Array(questions.length).fill(null);

export default function Home() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef(null);

  // Variáveis da Barra de Progresso
  const totalRespondidas = answers.filter(a => a !== null).length;
  const totalPerguntas = questions.length;

  function getIdeologyLabel(economic, social) {
    if (economic < 0 && social > 0) return 'progressista';
    if (economic > 0 && social > 0) return 'libertario';
    if (economic > 0 && social < 0) return 'liberal';
    if (economic < 0 && social < 0) return 'autoritario';
    return 'centro';
  }

  const ideologyDescriptions = {
    autoritario: {
      title: '🔴 Autoritário(a) / Totalitário(a)',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-red-700">Para você, uma nação forte se constrói com lealdade, respeito às tradições e confiança no poder que mantém o país unido.</p>,
        <p key="2" className="mb-2">Seu posicionamento revela uma preferência por um Estado forte, centralizador e com alto grau de controle tanto sobre a economia quanto sobre os costumes sociais. Essa visão valoriza a autoridade, o nacionalismo e a ordem como fundamentos de uma sociedade funcional.</p>,
        <p key="3">Os autoritários tendem a ver a liberdade individual como secundária diante da necessidade de estabilidade, segurança e unidade nacional.</p>
      ]
    },
    libertario: {
      title: '🟡 Libertário(a) / Anarcocapitalista',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-yellow-700">A liberdade individual é o valor supremo. Você acredita que a cooperação voluntária e a propriedade privada são as únicas bases legítimas para a sociedade.</p>,
        <p key="2" className="mb-2">Sua visão defende a máxima liberdade econômica e individual, com a mínima (ou nenhuma) interferência estatal. No limite, o anarcocapitalismo propõe a substituição de serviços estatais por soluções de mercado baseadas no Princípio da Não-Agressão (PNA).</p>,
        <p key="3">Para você, a política deve ser substituída pela ética da liberdade e pelos contratos voluntários.</p>
      ]
    },
    progressista: {
      title: '🟢 Progressista / Socialista',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-green-700">Você acredita em um mundo onde a liberdade individual caminha lado a lado com a justiça social e a igualdade de oportunidades.</p>,
        <p key="2" className="mb-2">Seu perfil defende amplas liberdades civis e direitos individuais (como a liberdade de expressão e escolhas de estilo de vida), mas acredita que o Estado ou a comunidade devem intervir na economia para reduzir desigualdades e garantir serviços essenciais a todos.</p>
      ]
    },
    liberal: {
      title: '🔵 Liberal / Conservador(a)',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-blue-700">Você defende a liberdade econômica como o motor da prosperidade, mantendo o respeito às instituições e à ordem social.</p>,
        <p key="2" className="mb-2">Este posicionamento favorece o livre mercado, a redução de impostos e a desestatização, acreditando que a eficiência econômica gera bem-estar. No campo social, tende a ser mais conservador ou moderado, valorizando a segurança pública e as normas vigentes.</p>
      ]
    },
    centro: {
      title: '⚪ Centro',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-gray-700">Você busca o equilíbrio e a moderação, evitando extremismos em ambas as áreas.</p>,
        <p key="2">Suas opiniões variam conforme o tema, preferindo soluções pragmáticas do que puramente ideológicas.</p>
      ]
    }
  };

  const handleAnswer = useCallback((index, value) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  }, []);

  const { economic, social } = useMemo(() => {
    let ecoScore = 0, socScore = 0, ecoCount = 0, socCount = 0;
    answers.forEach((val, i) => {
      if (val !== null) {
        if (questions[i].axis === 'economic') { ecoScore += val; ecoCount++; }
        else { socScore += val; socCount++; }
      }
    });
    return {
      economic: ecoCount > 0 ? ecoScore / ecoCount : 0,
      social: socCount > 0 ? socScore / socCount : 0,
    };
  }, [answers]);

useEffect(() => {
  fetch("/api/contador")
    .then(res => res.json())
    .then(data => setTotalRespostas(data.total));
}, []);

  return (
    <main className="p-4 sm:p-8 font-sans bg-[url('/paper-texture.jpg')] bg-repeat text-gray-900">
      <Head>
        <title>Teste de Espectro Político Brasileiro</title>
        <meta name="description" content="Descubra sua posição no espectro político brasileiro com este quiz baseado no Diagrama de Nolan." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <section className="mb-8 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 items-center justify-center">
          🧭 Quiz do Espectro Político Brasileiro<span className="italic text-sm ml-1">(beta)</span>
        </h1>
          {totalRespostas !== null && (
        <p className="text-sm text-gray-600">
          ✅ Este quiz já foi respondido <strong>{totalRespostas}</strong> vezes.
         </p>
          )}
      </section>

      <section className="mb-4 bg-white/70 p-4 rounded-xl shadow-md max-w-3xl mx-auto">
        <p className="mb-2">📝 Responda ao quiz e descubra sua posição em um espectro político mais amplo do que o tradicional “esquerda-direita”, com base no Diagrama de Nolan.</p>
      </section>

      {/* BARRA DE PROGRESSO MODERNA */}
      <div className="sticky top-4 z-20 px-2 mb-10 max-w-2xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md border border-white shadow-xl rounded-3xl p-5 transition-all">
          <div className="flex justify-between items-center mb-3 px-1">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 mb-1">Questões Respondidas</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-800 tabular-nums">{totalRespondidas}</span>
                <span className="text-slate-400 font-bold text-lg">/ {totalPerguntas}</span>
              </div>
            </div>
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${totalRespondidas === totalPerguntas ? 'bg-green-500 text-white shadow-lg shadow-green-200' : 'bg-slate-100 text-slate-400'}`}>
              {totalRespondidas === totalPerguntas ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : "🚀"}
            </div>
          </div>
          <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(totalRespondidas / totalPerguntas) * 100}%` }}
              transition={{ type: "spring", stiffness: 45, damping: 15 }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <QuestionCard key={i} index={i} question={q} value={answers[i]} onChange={handleAnswer} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={handleSubmit}
          disabled={totalRespondidas < totalPerguntas}
          className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg ${
            totalRespondidas === totalPerguntas 
            ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 active:scale-95 cursor-pointer" 
            : "bg-slate-300 text-slate-500 cursor-not-allowed"
          }`}
        >
          {totalRespondidas === totalPerguntas ? "Ver Meu Resultado" : `Faltam ${totalPerguntas - totalRespondidas} perguntas`}
        </button>
      </div>

      {showResult && (
        <section ref={resultRef} className="mt-16 p-6 bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto border border-slate-100">
          <h2 className="text-3xl font-black text-center mb-8 text-slate-800 tracking-tight">Seu Resultado</h2>
          <ResultDiagram economic={economic} social={social} />
          
          <div className="mt-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-black mb-4 text-indigo-900 uppercase tracking-tight">
              {ideologyDescriptions[getIdeologyLabel(economic, social)].title}
            </h3>
            <div className="text-slate-700 leading-relaxed text-lg">
              {ideologyDescriptions[getIdeologyLabel(economic, social)].text}
            </div>
          </div>

          {/* SESSÃO EDUCATIVA / LIBERTARIANISMO */}
          <section className="mt-12 border-t pt-10">
            <h3 className="text-2xl font-black mb-6 text-slate-800 tracking-tight">Explore mais sobre liberdade:</h3>
            <ul className="space-y-6 text-slate-700">
              <li className="flex flex-col gap-1">
                <a href="https://rothbardbrasil.com/o-que-e-libertarianismo/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline text-lg">
                  📚 O que é Libertarianismo? (Artigo Rothbard Brasil)
                </a>
                <p className="text-slate-500 text-sm italic">Entenda os conceitos fundamentais de propriedade privada e não-agressão.</p>
              </li>
              <li className="flex flex-col gap-1">
                <a href="/vamos-trocar-ebook.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline text-lg">
                  📖 Ebook infantil: Vamos Trocar? (PDF)
                </a>
                <p className="text-slate-500 text-sm">Ensina o conceito de trocas voluntárias para crianças.</p>
              </li>
              <li className="flex flex-col gap-1">
                <a href="https://www.youtube.com/@TuttleTwins_br" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline text-lg">
                  🧩 Canal Tuttle Twins Brasil
                </a>
                <p className="text-slate-500 text-sm">Desenhos animados sobre economia e liberdade para toda a família.</p>
              </li>
            </ul>
          </section>
        </section>
      )}
    </main>
  );
}