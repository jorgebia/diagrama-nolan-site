import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionCard({ question, index, value, onChange }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Mantivemos o fundo branco transparente (bg-white/70) e o blur
      // Note o "px-4 md:px-8": ele dá respiro mas não espreme o texto em telas pequenas
      className="mb-8 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-sm border border-white/50 max-w-3xl mx-auto transition-all"
    >
      <h3 className="font-bold text-lg md:text-xl text-slate-800 mb-6 leading-tight">
        {question.text}
      </h3>
      
      <div className="flex flex-col gap-3">
        {question.options.map((opt, oIdx) => {
          const isSelected = value === opt.value;
          
          return (
            <motion.label 
              key={oIdx}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border-2 ${
                isSelected 
                  ? "bg-indigo-600 border-indigo-600 shadow-md shadow-indigo-200" 
                  : "bg-white/50 border-transparent hover:border-slate-200"
              }`}
            >
              <input
                type="radio"
                name={`question-${index}`}
                checked={isSelected}
                onChange={() => onChange(index, opt.value)}
                className="hidden" 
              />
              
              {/* Círculo customizado para o rádio */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                isSelected ? "border-white bg-white" : "border-slate-300 bg-transparent"
              }`}>
                {isSelected && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
              </div>

              <span className={`text-sm md:text-base transition-colors ${
                isSelected ? "font-bold text-white" : "text-slate-600 font-medium"
              }`}>
                {opt.text}
              </span>
            </motion.label>
          );
        })}
      </div>
    </motion.div>
  );
}