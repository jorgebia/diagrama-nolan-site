//components/ResultDiagram.js
import React from 'react';
import { motion } from 'framer-motion';

export default function ResultDiagram({ economic, social }) {
    // Mapear economic/social de -1..1 para 0..1 para calcular posição do marcador
  const econ = (economic + 1) / 2;
  const soc = (1 - (social + 1) / 2); // invertido porque eixo Y CSS vai de cima para baixo
    // Definindo cores de forma estática para que o Tailwind inclua no build
  const quadrantColors = {
    "bg-green-100": "top-left",
    "bg-yellow-100": "top-right",
    "bg-red-100": "bottom-left",
    "bg-blue-100": "bottom-right",
  };
  return (
    <div className="relative w-full max-w-[500px] aspect-square border border-gray-400 mx-auto mt-6 sm:mt-10">
      {/* Grid colorido */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-0 w-full h-full">
        {[...Array(100)].map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;
          let bg = quadrantColors.topLeft;
          if (row < 5 && col < 5) bg = quadrantColors.topLeft;       // verde
          if (row < 5 && col >= 5) bg = quadrantColors.topRight;     // amarelo
          if (row >= 5 && col < 5) bg = quadrantColors.bottomLeft;   // vermelho
          if (row >= 5 && col >= 5) bg = quadrantColors.bottomRight; // azul
          return <div key={i} className={`${bg} border border-gray-200 w-full h-full`} />;
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
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold bg-white/80">Libertário(a)</div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold bg-white/80">Autoritário(a)</div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">Esquerda</div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">Direita</div>
      {/* Rótulos ideológicos externos */}
      <div className="absolute -top-8 left-0 text-[10px] sm:text-xs text-left leading-tight">Progressista /<br />Socialista</div>
      <div className="absolute -top-4 right-0 text-[10px] sm:text-xs text-right leading-tight">Libertário(a)</div>
      <div className="absolute -bottom-8 left-0 text-[10px] sm:text-xs text-left leading-tight">Autoritário(a) /<br />Totalitário(a)</div>
      <div className="absolute -bottom-8 right-0 text-[10px] sm:text-xs text-right leading-tight">Liberal /<br />Conservador(a)</div>
    </div>
  );
}
