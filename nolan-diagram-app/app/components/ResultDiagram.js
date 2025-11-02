//components/ResultDiagram.js
import React from 'react';
import { motion } from 'framer-motion';

export default function ResultDiagram({ economic, social }) {
  const mapToPercent = (value) => ((value + 2) / 4) * 100;

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto border border-gray-400 mt-6 sm:mt-10">
      {/* Grid 10x10 colorida */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
        {[...Array(100)].map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;
          let bg = 'bg-white';
          if (row < 5 && col < 5) bg = 'bg-green-100';
          if (row < 5 && col >= 5) bg = 'bg-yellow-100';
          if (row >= 5 && col < 5) bg = 'bg-red-100';
          if (row >= 5 && col >= 5) bg = 'bg-blue-100';
          return <div key={i} className={`border border-gray-200 w-full h-full ${bg}`} />;
        })}
      </div>

      {/* Eixos */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-full h-0.5 bg-black top-1/2" />
        <div className="absolute h-full w-0.5 bg-black left-1/2" />
      </div>

      {/* Marcador do usuário */}
      <motion.div
        className="absolute w-4 h-4 bg-red-600 rounded-full z-10"
        style={{
          left: `${mapToPercent(economic)}%`,
          top: `${100 - mapToPercent(social)}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Legendas e rótulos */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold bg-white/80">Libertário(a)</div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold bg-white/80">Autoritário(a)</div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">Esquerda</div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">Direita</div>

      <div className="absolute -top-8 left-0 text-[10px] sm:text-xs text-left leading-tight">Progressista /<br />Socialista</div>
      <div className="absolute -top-4 right-0 text-[10px] sm:text-xs text-right leading-tight">Libertário(a)</div>
      <div className="absolute -bottom-8 left-0 text-[10px] sm:text-xs text-left leading-tight">Autoritário(a) /<br />Totalitário(a)</div>
      <div className="absolute -bottom-8 right-0 text-[10px] sm:text-xs text-right leading-tight">Liberal /<br />Conservador(a)</div>
    </div>
  );
}