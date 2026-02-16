import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionCard({ question, index, value, onChange }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2}}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1], // Cubic-bezier para um efeito "premium"
        delay: 0.1
      }}
      style={{ 
        willChange: 'opacity, transform',
        WebkitFontSmoothing: 'antialiased',
        backfaceVisibility: 'hidden'
      }}
      className="mb-8 bg-white/70 p-6 md:p-8 rounded-3xl shadow-sm border border-white/50 max-w-3xl mx-auto transition-all"
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
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
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