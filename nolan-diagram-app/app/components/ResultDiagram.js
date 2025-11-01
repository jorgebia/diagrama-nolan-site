// components/ResultDiagram.js
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResultDiagram({ economic, social }) {
  // Mapear valores 0..1
  const left = economic * 100;     // 0 = esquerda, 1 = direita
  const top = (1 - social) * 100;  // 0 = autoritário, 1 = libertário

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto mt-6 sm:mt-10">
      {/* Grid de quadrantes */}
      <div className="grid grid-cols-10 grid-rows-10 w-full h-full absolute inset-0">
        {[...Array(100)].map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;

          // Quadrantes estáticos para Tailwind
          let bgClass = "bg-green-100"; // top-left
          if (row < 5 && col >= 5) bgClass = "bg-yellow-100"; // top-right
          if (row >= 5 && col < 5) bgClass = "bg-red-100"; // bottom-left
          if (row >= 5 && col >= 5) bgClass = "bg-blue-100"; // bottom-right

          return (
            <div
              key={i}
              className={`${bgClass} border border-gray-200 w-full h-full min-h-0`}
            />
          );
        })}
      </div>

      {/* Eixos */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-full h-[2px] bg-black top-1/2" />
        <div className="absolute h-full w-[2px] bg-black left-1/2" />
      </div>

      {/* Marcador do usuário */}
      <motion.div
        className="absolute w-4 h-4 bg-red-600 rounded-full z-10"
        style={{
          left: `calc(${left}%)`,
          top: `calc(${top}%)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Legendas */}
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

      {/* Rótulos externos */}
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
