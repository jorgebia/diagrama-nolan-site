"use client";
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './components/QuestionCard';
import ResultDiagram from './components/ResultDiagram';
import questions from './data/Questions';

const initialAnswers = Array(questions.length).fill(null);

export default function Home() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef(null);

  // Lógica da barra de progresso absoluta
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
        <p key="3" className="mb-2">Os autoritários tendem a ver a liberdade individual como secundária diante da necessidade de estabilidade, segurança e unidade nacional. A crença central é que, sem uma liderança firme e regulamentações claras, a sociedade corre o risco de cair no caos ou na decadência moral e econômica.</p>
      ]
    },
    libertario: {
      title: '🟡 Libertário(a) / Anarcocapitalista',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-yellow-700">A liberdade individual é o valor supremo. Você acredita que a cooperação voluntária e a propriedade privada são as únicas bases legítimas para a sociedade.</p>,
        <p key="2" className="mb-2">Seu posicionamento defende a máxima liberdade individual e econômica. Você tende a ver o Estado como uma instituição cujas intervenções, por mais bem-intencionadas que pareçam, frequentemente violam direitos individuais e distorcem a economia.</p>,
        <p key="3" className="mb-2">A visão libertária (que em seu grau máximo chega ao anarcocapitalismo) propõe que a sociedade deve ser organizada através de contratos voluntários, livre mercado e o respeito absoluto ao princípio de não-agressão. Para você, a verdadeira justiça surge quando os indivíduos são plenamente responsáveis por suas vidas e propriedades.</p>
      ]
    },
    progressista: {
      title: '🟢 Progressista / Socialista',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-green-700">Você acredita em um mundo onde a liberdade individual caminha lado a lado com a justiça social e a igualdade de oportunidades.</p>,
        <p key="2" className="mb-2">Seu perfil defende amplas liberdades civis e direitos individuais (como a liberdade de expressão e escolhas de estilo de vida), mas acredita que o Estado ou a comunidade devem intervir na economia para reduzir desigualdades e garantir serviços essenciais a todos.</p>,
        <p key="3" className="mb-2">A visão progressista busca proteger as minorias e os vulneráveis, acreditando que a verdadeira liberdade só é possível quando as necessidades básicas são supridas e o poder econômico é regulado para servir ao bem comum.</p>
      ]
    },
    liberal: {
      title: '🔵 Liberal / Conservador(a)',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-blue-700">Você defende a liberdade econômica como o motor da prosperidade, mantendo o respeito às instituições e à ordem social.</p>,
        <p key="2" className="mb-2">Este posicionamento favorece o livre mercado, a redução de impostos e a desestatização, acreditando que a eficiência econômica gera bem-estar para toda a sociedade. No campo social, você tende a ser mais conservador ou moderado, valorizando a segurança pública e as normas vigentes.</p>,
        <p key="3" className="mb-2">Para o liberal clássico ou de direita, a função do Estado deve ser limitada a garantir o cumprimento de contratos, a segurança e a proteção da propriedade, permitindo que a iniciativa privada floresça.</p>
      ]
    },
    centro: {
      title: '⚪ Centro',
      text: [
        <p key="1" className="font-semibold italic mb-2 text-gray-700">Você busca o equilíbrio e a moderação, evitando extremismos em ambas as áreas.</p>,
        <p key="2" className="mb-2">Suas opiniões sobre economia e sociedade não se encaixam perfeitamente em nenhum quadrante radical. Você tende a avaliar cada questão de forma pragmática, possivelmente aceitando algumas intervenções estatais na economia e certas liberdades sociais, sem abrir mão de um senso de ordem e estabilidade.</p>,
        <p key="3" className="mb-2">O centro é o ponto de convergência que busca soluções baseadas no consenso e na viabilidade prática.</p>
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

  const handleSubmit = async () => {
    setShowResult(true);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    try {
      await fetch('/api/contador', { method: 'POST' });
    } catch (e) {
      console.error("Erro ao computar voto");
    }
  };

  return (
    <main className="min-h-screen p-4 pb-20">
      <h1 className="text-3xl font-black text-center mb-8">Quiz Político</h1>

      {/* BARRA DE PROGRESSO ABSOLUTA */}
      <div className="sticky top-4 z-20 px-2 mb-10 max-w-2xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-4">
          <div className="flex justify-between items-end mb-2 px-1">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Progresso</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-gray-800 tabular-nums">{totalRespondidas}</span>
                <span className="text-gray-400 font-bold">/ {totalPerguntas}</span>
              </div>
            </div>
          </div>
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(totalRespondidas / totalPerguntas) * 100}%` }}
              className="h-full bg-blue-600 rounded-full"
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
          className={`px-10 py-4 rounded-xl font-bold text-lg transition-all ${
            totalRespondidas === totalPerguntas 
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg" 
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {totalRespondidas === totalPerguntas ? "Ver Meu Resultado" : `Faltam ${totalPerguntas - totalRespondidas} perguntas`}
        </button>
      </div>

      {showResult && (
        <section ref={resultRef} className="mt-16 p-6 bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto border border-gray-100">
          <h2 className="text-3xl font-black text-center mb-8 text-gray-800 tracking-tight">Seu Resultado</h2>
          <ResultDiagram economic={economic} social={social} />
          
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {ideologyDescriptions[getIdeologyLabel(economic, social)].title}
            </h3>
            <div className="text-gray-700 leading-relaxed">
              {ideologyDescriptions[getIdeologyLabel(economic, social)].text}
            </div>
          </div>

          <section className="mt-10 border-t pt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 uppercase tracking-wide">Saiba mais sobre o movimento libertário e a defesa da liberdade:</h3>
            <ul className="space-y-6">
              <li>
                <a href="https://rothbardbrasil.com/o-que-e-libertarianismo/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">
                  📚 O que é Libertarianismo? (Artigo Rothbard Brasil)
                </a>
                <p className="mt-1 text-gray-600 italic">O libertarianismo é uma filosofia política que mantém a soberania do indivíduo e a liberdade de escolha como seus princípios centrais.</p>
              </li>
              <li>
                <a href="/vamos-trocar-ebook.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">
                  📖 Ebook infantil: Vamos Trocar? (PDF para download)
                </a>
                <p className="mt-1 text-gray-600">"Vamos Trocar?" introduz e ensina o conceito básico de trocas e negociação, e mostra que a ausência de iniciativas agressivas, seja qual for a situação, é a base para uma sociedade livre e pacífica!</p>
              </li>
              <li>
                <a href="https://www.youtube.com/@TuttleTwins_br" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">
                  🧩 Desenho Infantil Educativo: Tuttle Twins (Canal do Youtube)
                </a>
                <p className="mt-1 text-gray-600"> Crianças, economia e liberdade. Tudo junto em uma única série! Junte-se à vovó Gabby enquanto ela leva seus netos em aventuras em uma máquina do tempo em cadeira de rodas para aprender sobre os princípios de liberdade, governo, economia e muito mais! Tuttle Twins ensina crianças, pré-adolescentes e adolescentes de uma maneira divertida e envolvente.</p>
              </li>
            </ul>
          </section>
        </section>
      )}
    </main>
  );
}