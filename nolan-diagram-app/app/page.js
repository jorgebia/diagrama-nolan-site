"use client";
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './components/QuestionCard';
import ResultDiagram from './components/ResultDiagram';
import questions from './data/Questions';
import Head from 'next/head';

const initialAnswers = Array(questions.length).fill(null);

export default function Home() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [showResult, setShowResult] = useState(false);
  const [totalRespostas, setTotalRespostas] = useState(0);
  const resultRef = useRef(null);

  // Lógica da barra de progresso absoluta
  const totalRespondidas = answers.filter(a => a !== null).length;
  const totalPerguntas = questions.length;

  useEffect(() => {
    fetch('/api/contador')
      .then(res => res.json())
      .then(data => setTotalRespostas(data.total || 0))
      .catch(err => console.error("Erro ao buscar contador", err));
  }, []);

function getIdeologyLabel(economic, social) {
    // Definimos o limite da "Zona de Centro"
    // Se o valor estiver entre -0.25 e 0.25, ele é considerado centro naquele eixo.
    const threshold = 0.25; 

    const isEconCenter = Math.abs(economic) <= threshold;
    const isSocialCenter = Math.abs(social) <= threshold;

    // Se estiver no centro de AMBOS os eixos, ou se a média geral for muito baixa
    if (isEconCenter && isSocialCenter) return 'centro';

    // Lógica para os quadrantes (usando o threshold para evitar saltos bruscos)
    if (economic < -threshold && social > threshold) return 'progressista';
    if (economic > threshold && social > threshold) return 'libertario';
    if (economic > threshold && social < -threshold) return 'liberal';
    if (economic < -threshold && social < -threshold) return 'autoritario';
    return 'centro';
  }

  const ideologyDescriptions = {
    autoritario: {
      title: '🔴 Autoritário(a) / Totalitário(a)',
      text: [
        <p className="font-semibold italic mb-2 text-red-700">Para você, uma nação forte se constrói com lealdade, respeito às tradições e confiança no poder que mantém o país unido.</p>,
        <p className="mb-2">Seu posicionamento revela uma preferência por um Estado forte, centralizador e com alto grau de controle tanto sobre a economia quanto sobre os costumes sociais. Essa visão valoriza a autoridade, o nacionalismo e a ordem como fundamentos de uma sociedade funcional.</p>,
        <p className="mb-2">Os autoritários tendem a ver a liberdade individual como secundária diante da necessidade de estabilidade, segurança e unidade nacional. Políticas coercitivas, vigilância, censura e centralização do poder são frequentemente defendidas como ferramentas legítimas para proteger o Estado e seus valores fundamentais.</p>,
        <p className="mb-2">Essa posição costuma emergir em contextos de crise ou desordem, onde a confiança na autoridade é vista como o melhor caminho para restaurar o controle e evitar a fragmentação social.</p>
      ]
    },
    libertario: {
      title: '🟡 Libertário(a) / Anarcocapitalista',
      text: [
        <p className="font-semibold italic mb-2 text-yellow-700">Você vê na liberdade o princípio mais elevado de uma sociedade justa — onde cada pessoa responde por si e coopera por escolha, não por imposição.</p>,
        <p className="mb-2">Você se identifica com uma visão que valoriza profundamente a autonomia individual e a liberdade em todas as esferas da vida. O pensamento libertário vai além de uma doutrina política — ele é também um movimento cultural que celebra a autodeterminação, a responsabilidade pessoal, a inovação descentralizada e o respeito à diversidade de escolhas.</p>,
        <p className="mb-2">Historicamente, o libertarianismo defende um Estado mínimo ou até inexistente, com alternativas privadas de governança e gestão de cidades e países. Culturalmente, essa corrente abraça o pluralismo, a paz voluntária entre os indivíduos e uma postura crítica a qualquer forma de coerção estatal ou social.</p>,
        <p className="mb-2">Ser identificado(a) como libertário(a) é fazer parte de um legado intelectual e ético que valoriza a liberdade acima de tudo — uma postura corajosa, inovadora e profundamente alinhada com o espírito de uma sociedade livre, pacífica, justa e voluntária.</p>,
        <p className="mb-2">Um dos desdobramentos mais radicais e coerentes dessa filosofia é o anarcocapitalismo — uma corrente que propõe a abolição completa do Estado em favor de instituições voluntárias, contratos privados e soluções de mercado para todos os aspectos da vida em sociedade, inclusive segurança e justiça. Para os anarcocapitalistas, a liberdade individual só é plena quando não existe nenhum monopólio estatal de poder, nem coerção institucional.</p>
      ]
    },
    progressista: {
      title: '🟢 Progressista / Socialista',
      text: [
        <p className="font-semibold italic mb-2 text-green-700">Você vê a política como um instrumento de transformação — um caminho para diminuir desigualdades e ampliar oportunidades.</p>,
        <p className="mb-2">Sua visão está alinhada com ideias modernas de justiça social, equidade e responsabilidade coletiva. Progressistas e socialistas acreditam que o papel do Estado é essencial para corrigir desigualdades históricas, garantir direitos civis, promover inclusão e construir uma sociedade mais plural, sustentável e empática.</p>,
        <p className="mb-2">A vertente progressista / socialista busca combinar políticas públicas robustas com inovação social, avançando pautas como saúde pública universal, educação de qualidade, igualdade de gênero, diversidade cultural e justiça climática.</p>,
        <p className="mb-2">A presença do Estado na economia é vista como ferramenta para redistribuir riquezas diminuindo a desigualdade social. Este posicionamento reflete uma postura ativa diante das injustiças e um compromisso com um futuro mais solidário e igualitário.</p>
      ]
    },
    liberal: {
      title: '🔵 Liberal / Conservador(a)',
      text: [
        <p className="font-semibold italic mb-2 text-blue-700">Você acredita que o verdadeiro progresso nasce da liberdade com responsabilidade — e que valores sólidos são o alicerce de uma sociedade próspera.</p>,
        <p className="mb-2">Você tende a valorizar os pilares clássicos do pensamento liberal-conservador: liberdade econômica, responsabilidade individual, respeito à propriedade privada, e a preservação das tradições culturais e institucionais.</p>,
        <p className="mb-2">Essa visão acredita que o progresso verdadeiro deve ser acompanhado de estabilidade moral e ordem social. Os liberais conservadores geralmente defendem mercados livres com o mínimo de intervenção estatal, acreditando que a iniciativa privada é o motor mais eficiente do desenvolvimento.</p>,
        <p className="mb-2">Ao mesmo tempo, reconhecem o valor das instituições, da família, da religião e da autoridade como fundamentos para a coesão social. Este posicionamento representa uma confiança nas virtudes do indivíduo, na importância dos costumes e na necessidade de preservar estruturas que resistiram ao teste do tempo.</p>
      ]
    },
    centro: {
      title: '⚪ Centro',
      text: [
        <p className="font-semibold italic mb-2 text-gray-700">Você enxerga o valor de cada lado e prefere o caminho do diálogo — e acredita que boas ideias podem vir de qualquer lugar do espectro político.</p>,
        <p className="mb-2">Você demonstra uma visão política equilibrada, que evita posições extremas e busca soluções ponderadas para os desafios da sociedade. A vertente centrista valoriza a razão prática, o diálogo e a capacidade de adaptar ideias conforme o contexto, recusando abordagens dogmáticas ou polarizadas.</p>,
        <p className="mb-2">Centristas costumam defender a liberdade individual, mas reconhecem o papel necessário do Estado em determinadas situações. Podem apoiar políticas sociais em algumas áreas e, ao mesmo tempo, preferir soluções de mercado em outras.</p>,
        <p className="mb-2">Essa postura se baseia em avaliações caso a caso, guiadas por evidências, pragmatismo e senso de justiça. Estar no centro do espectro político não significa indecisão — significa responsabilidade, ponderação e abertura para construir pontes entre visões distintas em busca de soluções sustentáveis e inclusivas.</p>
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

// Cálculo Econômico: Considera 0 para nulos e divide pelo total de questões do eixo
const economicScore = useMemo(() => {
  const econQuestions = questions.filter(q => q.axis === "economic");
  const sum = questions.reduce((acc, q, i) => {
    if (q.axis !== "economic") return acc;
    return acc + (answers[i] ?? 0); // Se null, soma 0
  }, 0);
  return sum / econQuestions.length;
}, [answers]);

// Cálculo Social: Considera 0 para nulos e divide pelo total de questões do eixo
const socialScore = useMemo(() => {
  const socQuestions = questions.filter(q => q.axis === "social");
  const sum = questions.reduce((acc, q, i) => {
    if (q.axis !== "social") return acc;
    return acc + (answers[i] ?? 0); // Se null, soma 0
  }, 0);
  return sum / socQuestions.length;
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

      {/* BARRA DE PROGRESSO ABSOLUTA */}
      <div className="sticky top-4 z-20 px-2 mb-10 max-w-2xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-xl p-4">
          <div className="flex justify-between items-end mb-2 px-1">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Questões Respondidas: <span className="text-indigo-600">{totalRespondidas} de {totalPerguntas}</span></span>
            </div>
          </div>
          <div className="h-3 w-full bg-gray-200 rounded-xl overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(totalRespondidas / totalPerguntas) * 100}%` }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <QuestionCard key={i} index={i} question={q} value={answers[i]} onChange={handleAnswer} />
        ))}
      </div>

<div className="flex justify-center my-10">
        <motion.button
          onClick={handleSubmit}
          disabled={totalRespondidas === 0} // Trava apenas se nada foi respondido
          whileTap={totalRespondidas > 0 ? { scale: 0.95 } : {}}
          whileHover={totalRespondidas > 0 ? { scale: 1.03 } : {}}
          className={`px-10 py-4 rounded-xl font-bold text-lg shadow-md transition-all ${
            totalRespondidas > 0 
            ? "bg-blue-600 text-white hover:bg-blue-700" 
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {totalRespondidas === 0 ? "Responda uma pergunta" : "Ver Meu Resultado"}
        </motion.button>
      </div>


      {showResult && (
        <section ref={resultRef} className="w-full max-w-4xl mx-auto py-10 px-4 md:px-0">
          <h2 className="text-3xl font-black text-center mb-8 text-gray-800 tracking-tight">Seu Resultado</h2>

<section className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 my-6">
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <p className="text-xs uppercase tracking-wider font-semibold text-indigo-600">Eixo Horizontal</p>
      <p className="text-sm">Eixo Econômico (↔️): Quanto mais à direita, maior o seu apoio ao livre mercado e à propriedade privada.</p>
    </div>
    <div>
      <p className="text-xs uppercase tracking-wider font-semibold text-indigo-600">Eixo Vertical</p>
      <p className="text-sm">Eixo Social (↕️): Quanto mais acima, maior o seu apoio nas liberdades sociais individuais.</p>
    </div>
  </div>
</section>

          <ResultDiagram economic={economicScore} social={socialScore} />
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              {ideologyDescriptions[getIdeologyLabel(economicScore, socialScore)].title}
            </h3>
            <div className="text-gray-700 leading-relaxed">
              {ideologyDescriptions[getIdeologyLabel(economicScore, socialScore)].text}
            </div>
          </div>

          <section className="mt-12 max-w-3xl mx-auto bg-white/70 p-4 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">📚 Links Complementares</h2>
            <ul className="list-none space-y-2 text-sm sm:text-base">
              <li>
             <h3 className="text-blue-700 font-semibold mb-2">🧭 Diagrama de Nolan</h3>
             <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.youtube.com/embed/QlsT1k1x5lA"
                title="Diagrama de Nolan - Explicação"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
             </div>
                  <p className="mb-2">O Diagrama de Nolan é uma ferramenta que ajuda a classificar as ideologias políticas de um indivíduo em dois eixos: econômico (esquerda/direita) e social (libertário/autoritário).</p>
                  <p className="mb-2">David Nolan propôs este modelo para demonstrar que as visões políticas vão além da tradicional divisão entre esquerda e direita, incluindo também o grau de liberdade pessoal que o indivíduo defende.</p>
              </li>
              
              <li>
                <a
                  href="/vamos-trocar-ebook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  📖 Ebook infantil: Vamos Trocar? (PDF para download)
                </a>
                <p className="mb-2">"Vamos Trocar?" introduz e ensina o conceito básico de trocas e negociação, e mostra que a ausência de iniciativas agressivas, seja qual for a situação, é a base para uma sociedade livre e pacífica!</p>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@TuttleTwins_br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  🧩 Desenho Infantil Educativo: Tuttle Twins (Canal do Youtube)
                </a>
                <p className="mb-2"> Crianças, economia e liberdade. Tudo junto em uma única série! Junte-se à vovó Gabby enquanto ela leva seus netos em aventuras em uma máquina do tempo em cadeira de rodas para aprender sobre os princípios de liberdade, governo, economia e muito mais! Tuttle Twins ensina crianças, pré-adolescentes e adolescentes de uma maneira divertida e envolvente.</p>
              </li>
            </ul>
          </section>
        </section>
      )}
    </main>
  );
}