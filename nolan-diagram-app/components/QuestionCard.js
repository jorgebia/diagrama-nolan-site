//components/QuestionCard.js
import React from 'react';

export default function QuestionCard({ question, index, value, onChange }) {
  return (
    <div className="mb-4 bg-white/80 p-4 rounded-md shadow-sm">
      <p className="font-semibold mb-2">{question.text}</p>
      <div className="flex flex-col gap-1">
        {question.options.map((opt, oIdx) => {
          const inputId = `question-${index}-option-${oIdx}`;
          return (
            <label key={oIdx} htmlFor={inputId} className="flex items-center gap-2">
              <input
                id={inputId}
                type="radio"
                name={`question-${index}`}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(index, opt.value)}
                className="w-5 h-5"
              />
              {opt.text}
            </label>
          );
        })}
      </div>
    </div>
  );
}
