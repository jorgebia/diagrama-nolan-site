import React from 'react';
import { motion } from 'framer-motion';

export default function ResultDiagram({ economic, social }) {
  // Mapeia valor -2..2 para percentual
  const mapValue = (value) => ((value + 2) / 4) * 100;

  return (
    <div className="flex justify-center w-full my-10">
      <div className="relative w-full max-w-[350px] sm:max-w-[450px] aspect-square bg-white shadow-md border-2 border-gray-100 rounded-lg p-2">
        {/* Grid colorida */}
        <div
          className="absolute top-0 left-0 w-full h-full grid grid-cols-10 grid-rows-10"
          style={{ border: '1px solid #ccc' }}
        >
          {[...Array(100)].map((_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            let bg = 'white';
            if (row < 5 && col < 5) bg = '#d1fae5';
            if (row < 5 && col >= 5) bg = '#fef9c3';
            if (row >= 5 && col < 5) bg = '#fee2e2';
            if (row >= 5 && col >= 5) bg = '#bfdbfe';
            return <div key={i} className="border border-gray-200" style={{ backgroundColor: bg }} />;
          })}
        </div>

        {/* Eixos */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black" />
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-black" />

        {/* Marcador do usuário com pulsação */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
          className="absolute z-10"
          style={{
            left: `${mapValue(economic)}%`,
            top: `${100 - mapValue(social)}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            <span className="absolute -inset-2 rounded-full bg-red-500/30 animate-ping"></span>
            <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg" />
          </div>
        </motion.div>

        {/* Legendas */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-white/80 px-1">
          Libertário(a)
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-white/80 px-1">
          Autoritário(a)
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 text-xs font-semibold bg-white/80 px-1 z-10">
          Esquerda
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1 text-xs font-semibold bg-white/80 px-1 z-10">
          Direita
        </div>
      </div>
    </div>
  );
}