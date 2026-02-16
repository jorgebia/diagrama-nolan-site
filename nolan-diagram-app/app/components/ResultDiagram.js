export default function ResultDiagram({ economic, social }) {
  // Converte a média de -2..2 para 0..100%
  // Se economic for 0, (0 + 2) / 4 = 0.5 (50% - centro exato)
  const mapValue = (value) => ((value + 2) / 4) * 100;

  return (
    <div className="flex justify-center w-full my-8">
      {/* Adicionado mx-auto e ajuste de overflow */}
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-white shadow-xl border-4 border-white rounded-lg mx-auto">
            
            {/* Grid de Cores */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="bg-[#d1fae5]" title="Progressista"></div> 
                <div className="bg-[#fef9c3]" title="Libertário"></div>
                <div className="bg-[#fee2e2]" title="Autoritário"></div>
                <div className="bg-[#bfdbfe]" title="Liberal"></div>
            </div>

            {/* Linhas de Eixo (Centralização Visual) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-black/10"></div>
                <div className="h-full w-[1px] bg-black/10 absolute"></div>
            </div>

            {/* O PING (Marcador) */}
            <motion.div
              key={`${economic}-${social}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute z-50"
              style={{
                left: `${mapValue(economic)}%`,
                bottom: `${mapValue(social)}%`, // Usamos bottom para que positivo suba
                transform: 'translate(-50%, 50%)', // Ajuste para centralizar o próprio ponto
              }}
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-red-500/40 animate-ping"></span>
                <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg" />
              </div>
            </motion.div>

            {/* Legendas ajustadas para não sumirem */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase text-slate-500">Libertário</div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase text-slate-500">Autoritário</div>
      </div>
    </div>
  );
}