// components/ResultDiagram.js
"use client"; // necessário se você estiver usando Next.js app router

import React from "react";
import { motion } from "framer-motion";

export default function ResultDiagram({ economic, social }) {
  // Mapear economic/social de -1..1 para 0..1
  const econ = (economic + 1) / 2;
  const soc = (1 - (social + 1) / 2); // inverter Y porque CSS vai de cima para baixo

  return (
    <div className="relative w-full max-w-[500px] aspect-square border border-gray-400 mx-auto mt-6 sm:mt-10 rounded-xl overflow-hidden">
      {/* Grid colorido */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-0 w-full h-full">
        {[...Array(100)].map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;

          // Usar classes estáticas para Tailwind
          if (row < 5 && col < 5)
            return (
              <div
                key={i}
                className="bg-green-100 border border-gray-200 w-full h-full min-h-0"
              />
            );
          if (row < 5 && col >= 5)
            return (
              <div
                key={i}
                className="bg-yellow-100 border border-gray-200 w-full h-full min-h-0"
              />
            );
          if (row >= 5 && col < 5)
            return (
              <div
                key={i}
                className="bg-red-100 border border-gray-200 w-full h-full min-h-0"
              />
            );
          return (
            <div
              key={i}
              className="bg-blue-100 border border-gray-200 w-full h-full min-h-0"
            />
          );
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
          left: `calc(${econ * 100}%)`,
          top: `calc(${soc * 100}%)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Legendas principais dos eixos */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold bg-white/80 px-1">
        Libertário(a)
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold bg-white/80 px-1">
        Autoritário(a)
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">
        Esquerda
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1 text-sm font-semibold bg-white/80 px-1 z-10">
        Direita
      </div>

      {/* Rótulos ideológicos externos */}
      <div className="absolute -top-8 left-0 text-[10px] sm:text-xs text-left leading-tight">
        Progressista /<br />Socialista
      </div>
      <div className="absolute -top-4 right-0 text-[10px] sm:text-xs text-right leading-tight">
        Libertário(a)
      </div>
      <div className="absolute -bottom-8 left-0 text-[10px] sm:text-xs text-left leading-tight">
        Autoritário(a) /<br />Totalitário(a)
      </div>
      <div className="absolute -bottom-8 right-0 text-[10px] sm:text-xs text-right leading-tight">
        Liberal /<br />Conservador(a)
      </div>
    </div>
  );
}