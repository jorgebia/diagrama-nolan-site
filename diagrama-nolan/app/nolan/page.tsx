// Website interativo do Diagrama de Nolan com perguntas políticas atuais do Brasil, adaptado para mobile com melhorias visuais
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
//import { Card, CardContent } from "../../components/ui/card";
//import { Slider } from "../../components/ui/slider";
import { motion } from "framer-motion";

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

const scaleLabels = ["Discordo totalmente", "Discordo", "Neutro", "Concordo", "Concordo totalmente"];

export default function NolanTest() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [resultHistory, setResultHistory] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("nolan-results");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculatePosition = () => {
    let authority = 0;
    let market = 0;
    questions.forEach((q, i) => {
      const val = answers[i];
      const [axis, direction] = q.axis;
      if (axis === "autoridade") authority += val * direction;
      if (axis === "mercado") market += val * direction;
    });
    return { authority, market };
  };

  const { authority, market } = calculatePosition();
  const positionText = authority < 0
    ? market < 0 ? "Libertário de Esquerda" : "Libertário de Direita"
    : market < 0 ? "Autoritário de Esquerda" : "Autoritário de Direita";

  const shareText = encodeURIComponent(`Minha posição no Diagrama de Nolan: ${positionText} (Autoridade: ${authority}, Economia: ${market})`);
  const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (submitted) {
      const newResult = { date: new Date().toLocaleDateString(), authority, market, positionText };
      const updatedHistory = [...resultHistory, newResult];
      setResultHistory(updatedHistory);
      localStorage.setItem("nolan-results", JSON.stringify(updatedHistory));
    }
  }, [submitted]);

  const mapX = (val) => 200 + val * 10;
  const mapY = (val) => 200 + val * 10;

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-indigo-100 to-white text-gray-800"} p-4 sm:p-6`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 dark:text-indigo-300">Diagrama de Nolan</h1>
          <Button variant="outline" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Modo Claro" : "Modo Escuro"}
          </Button>
        </div>

        <p className="mb-8 leading-relaxed">
          O <strong>Diagrama de Nolan</strong> representa posições políticas em dois eixos: o econômico (esquerda ↔ direita) e o eixo de autoridade (libertário ↔ autoritário). Responda ao questionário para descobrir onde você se posiciona. Esta análise ajuda a compreender melhor sua filosofia política em um espectro mais amplo que o tradicional.
        </p>

        {resultHistory.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Histórico de Resultados</h3>
            <ul className="space-y-1 text-sm">
              {resultHistory.map((r, i) => (
                <li key={i} className="flex justify-between">
                  <span>{r.date} - {r.positionText}</span>
                  <span>A:{r.authority} / E:{r.market}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!submitted ? (
          <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {questions.map((q, i) => (
              <Card key={i} className="shadow-md dark:bg-gray-800">
                <CardContent className="p-4">
                  <p className="mb-2 font-medium">{q.question}</p>
                  <Slider
                    min={-2}
                    max={2}
                    step={1}
                    value={[answers[i]]}
                    onValueChange={([val]) => handleAnswer(i, val)}
                  />
                  <div className="text-sm mt-1">{scaleLabels[answers[i] + 2]}</div>
                </CardContent>
              </Card>
            ))}
            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700" onClick={() => setSubmitted(true)}>
              Ver Resultado
            </Button>
          </motion.div>
        ) : (
          <motion.div className="text-center p-4 sm:p-6 rounded-lg shadow-lg dark:bg-gray-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">Resultado</h2>
            <p className="mb-2">Eixo de Autoridade: <strong>{authority}</strong></p>
            <p className="mb-2">Eixo Econômico: <strong>{market}</strong></p>
            <p className="mt-4 text-xl">Você se posiciona como: <strong className="text-indigo-900 dark:text-indigo-200">{positionText}</strong></p>
            <p className="mt-2 text-sm italic">Esse perfil indica uma inclinação {authority < 0 ? 'libertária (favorável à liberdade individual)' : 'autoritária (favorável à ordem e autoridade)'} e {market < 0 ? 'econômica de esquerda (intervenção estatal)' : 'econômica de direita (livre mercado)'}.</p>

            <div className="relative mt-10">
              <svg width="400" height="400" className="mx-auto border border-gray-400">
                <defs>
                  <linearGradient id="quad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="100%" stopColor="#b2ebf2" />
                  </linearGradient>
                  <linearGradient id="quad2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e8f5e9" />
                    <stop offset="100%" stopColor="#a5d6a7" />
                  </linearGradient>
                  <linearGradient id="quad3" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fff3e0" />
                    <stop offset="100%" stopColor="#ffcc80" />
                  </linearGradient>
                  <linearGradient id="quad4" x1="1" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#fce4ec" />
                    <stop offset="100%" stopColor="#f8bbd0" />
                  </linearGradient>
                </defs>

                <rect x="0" y="0" width="200" height="200" fill="url(#quad1)" />
                <rect x="200" y="0" width="200" height="200" fill="url(#quad2)" />
                <rect x="0" y="200" width="200" height="200" fill="url(#quad3)" />
                <rect x="200" y="200" width="200" height="200" fill="url(#quad4)" />

                <line x1="200" y1="0" x2="200" y2="400" stroke="gray" strokeWidth="1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="gray" strokeWidth="1" />

                <text x="205" y="15" fontSize="12">Libertário</text>
                <text x="205" y="395" fontSize="12">Autoritário</text>
                <text x="10" y="190" fontSize="12">Esquerda</text>
                <text x="350" y="190" fontSize="12">Direita</text>

                <circle cx={mapX(market)} cy={mapY(authority)} r="6" fill="black" />
              </svg>
            </div>

            <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Compartilhar no Twitter
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
