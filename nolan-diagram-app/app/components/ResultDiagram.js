import { motion } from "framer-motion";

export default function ResultDiagram({ economic, social }) {
  const mapValue = (value) => {
    const percentage = ((value + 2) / 4) * 100;
    return Math.min(100, Math.max(0, percentage));
  };

  // Estilo da grade discreta
  const gridStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
    `,
    backgroundSize: '10% 10%' // Cria 10 colunas e 10 linhas
  };

  return (
    <div className="flex justify-center w-full my-16 px-10">
      <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-white border-4 border-white rounded-sm overflow-visible">

        {/* Quadrantes (Background) */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
          <div className="bg-[#d1fae5]" title="Progressista"></div>
          <div className="bg-[#fef9c3]" title="Libertário"></div>
          <div className="bg-[#fee2e2]" title="Autoritário"></div>
          <div className="bg-[#bfdbfe]" title="Liberal"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none" style={gridStyle}></div>

        {/* Eixos centrais (Linhas guia) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/5"></div>
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black/5"></div>
        </div>

        {/* Marcador (Ping) */}
          <motion.div
              key={`marker-${economic}-${social}`}
              initial={false}
              animate={{
                left: `${mapValue(economic)}%`,
                top: `${100 - mapValue(social)}%`,
              }}
              transition={{ type: "spring", stiffness: 600, damping: 15 }}
              // A classe transform -translate garante que o meio da bola seja o ponto exato
              className="absolute z-50 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-red-500/40 animate-ping"></span>
                <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md" />
              </div>
            </motion.div>
    

          {/* Descrições dos Eixos*/}
        <div className="absolute -top-7 left-0 w-full text-center">
          <span className="text-[10px] sm:text-[11px] font-black uppercase text-slate-600 bg-white/90 px-2">
            Libertário
          </span>
        </div>
        
        <div className="absolute -bottom-6 left-0 w-full text-center">
          <span className="text-[10px] sm:text-[11px] font-black uppercase text-slate-600 bg-white/90 px-2">
            Autoritário
          </span>
        </div>

        {/* Esquerda e Direita (Rotacionadas) */}
        <div className="absolute inset-y-0 -left-9 flex items-center">
          <span className="transform -rotate-90 origin-center text-[10px] sm:text-[11px] font-black uppercase text-slate-600 bg-white/90 whitespace-nowrap">
            Esquerda
          </span>
        </div>

        <div className="absolute inset-y-1 -right-8 flex items-center">
          <span className="transform rotate-90 origin-center text-[10px] sm:text-[11px] font-black uppercase text-slate-600 bg-white/90 whitespace-nowrap">
            Direita
          </span>
        </div>
      </div>
      </div>
  );
}