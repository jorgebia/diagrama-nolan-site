import React from 'react';
import { motion } from 'framer-motion';

export default function ResultDiagram({ economic, social }) {
  // Matemática pura: converte -2..2 para 0..100%
  const mapValue = (value) => ((value + 2) / 4) * 100;

  return (
    <div className="flex justify-center w-full my-8">
      {/* Container principal com tamanho fixo */}
      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-white shadow-md border-4 border-white rounded-lg">
        
        {/* AREA DE PADDING: Garante que o marcador não vaze nas bordas */}
        <div className="relative w-full h-full p-2">
          <div className="relative w-full h-full">
            
            {/* 1. Grid Colorida (Ajustada para preencher a área interna) */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 border border-gray-300">
              {[...Array(100)].map((_, i) => {
                const row = Math.floor(i / 10);
                const col = i % 10;
                let bg = 'white';
                if (row < 5 && col < 5) bg = '#d1fae5'; // Verde
                if (row < 5 && col >= 5) bg = '#fef9c3'; // Amarelo
                if (row >= 5 && col < 5) bg = '#fee2e2'; // Vermelho
                if (row >= 5 && col >= 5) bg = '#bfdbfe'; // Azul
                return <div key={i} className="border-[0.5px] border-gray-200/50" style={{ backgroundColor: bg }} />;
              })}
            </div>

            {/* 2. Eixos Centrais */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black/40" />
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-black/40" />

            {/* 3. Marcador do usuário (O PING) */}
            <motion.div
              key={`${economic}-${social}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute z-50"
              style={{
                left: `${mapValue(economic)}%`,
                top: `${100 - mapValue(social)}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-red-500/30 animate-ping"></span>
                <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-md" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* 4. Legendas (Posicionadas fora do padding para não moverem) */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-yellow-700">Libertário(a)</div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-red-700">Autoritário(a)</div>
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-wider text-green-700">Esquerda</div>
        <div className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 text-[10px] font-bold uppercase tracking-wider text-blue-700">Direita</div>
      </div>
    </div>
  );
}