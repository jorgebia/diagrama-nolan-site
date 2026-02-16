import { motion } from "framer-motion";

export default function ResultDiagram({ economic, social }) {
  // Converte o range -2 a +2 para 0% a 100%
  const mapValue = (value) => {
    // A fórmula ((valor + offset) / amplitude) * 100
    const percentage = ((value + 2) / 4) * 100;
    return Math.min(100, Math.max(0, percentage));
  };

  return (
    <div className="flex justify-center w-full my-8">
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-white shadow-xl border-4 border-white rounded-lg overflow-visible">

        {/* Quadrantes (Background) */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="bg-[#d1fae5]" title="Progressista"></div>
          <div className="bg-[#fef9c3]" title="Libertário"></div>
          <div className="bg-[#fee2e2]" title="Autoritário"></div>
          <div className="bg-[#bfdbfe]" title="Liberal"></div>
        </div>

        {/* Eixos centrais (Linhas guia) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/5"></div>
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black/5"></div>
        </div>

        {/* Marcador (Ping) */}
        <motion.div
          key={`point-${economic}-${social}`}
          initial={{ scale: 0 }}
          animate={{ 
          scale: 1,
          left: `${mapValue(economic)}%`,
          top: `${100 - mapValue(social)}%` 
          }}
          // Esta classe abaixo é o segredo da centralização absoluta
          className="absolute z-50 -translate-x-1/2 -translate-y-1/2"
          >
          <div className="relative flex items-center justify-center">
          {/* O ping (efeito de onda) */}
          <span className="absolute w-8 h-8 rounded-full bg-red-500/40 animate-ping"></span>
          {/* O ponto central */}
          <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg" />
          </div>
          </motion.div>

        {/* Legendas de Eixo */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-black uppercase text-slate-600 tracking-tighter">
          ↑ Libertário
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-black uppercase text-slate-600 tracking-tighter">
          ↓ Autoritário
        </div>
        <div className="absolute top-1/2 -right-16 -rotate-90 origin-center text-xs font-black uppercase text-slate-600 tracking-tighter">
          Direita →
        </div>
        <div className="absolute top-1/2 -left-16 rotate-90 origin-center text-xs font-black uppercase text-slate-600 tracking-tighter">
          ← Esquerda
        </div>
      </div>
    </div>
  );
}