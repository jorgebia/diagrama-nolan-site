// components/QuestionCard.js
import React from 'react';

export default function QuestionCard({ question, index, value, onChange }) {
  return (
    <div className="mb-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-100 max-w-3xl mx-auto transition-all hover:shadow-md">
      <p className="font-bold text-lg text-slate-800 mb-4">{question.text}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, oIdx) => {
          const inputId = `question-${index}-option-${oIdx}`;
          const isSelected = value === opt.value;
          
          return (
            <label 
              key={oIdx} 
              htmlFor={inputId} 
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border-2 ${
                isSelected 
                  ? "bg-indigo-50 border-indigo-200" 
                  : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-100"
              }`}
            >
              <input
                id={inputId}
                type="radio"
                name={`question-${index}`}
                value={opt.value}
                checked={isSelected} // Ativa o feedback visual da bolinha
                onChange={() => onChange(index, opt.value)}
                className="w-5 h-5 accent-indigo-600"
              />
              <span className={`text-sm md:text-base ${isSelected ? "font-bold text-indigo-700" : "text-slate-600"}`}>
                {opt.text}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}