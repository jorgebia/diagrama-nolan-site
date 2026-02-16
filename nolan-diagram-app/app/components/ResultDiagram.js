import { motion } from "framer-motion";

export default function ResultDiagram({ economic, social }) {
  // Converte -2..2 → 0..100
  const mapValue = (value) => {
    const percentage = ((value + 2) / 4) * 100;
    return Math.min(100, Math.max(0, percentage)); // impede escapar da box
  };

  return (
    <div className="flex justify-center w-full my-8">
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-white shadow-xl border-4 border-white rounded-lg">

        {/* Quadrantes */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="bg-[#d1fae5]" title="Progressista"></div>
          <div className="bg-[#fef9c3]" title="Libertário"></div>
          <div className="bg-[#fee2e2]" title="Autoritário"></div>
          <div className="bg-[#bfdbfe]" title="Liberal"></div>
        </div>

        {/* Eixos centrais */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/10"></div>
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-black/10"></div>
        </div>

        {/* Marcador */}
        <motion.div
          key={`${economic}-${social}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute z-50"
          style={{
            left: `${mapValue(economic)}%`,
            top: `${100 - mapValue(social)}%`, // usa TOP invertido (muito mais estável)
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-8 h-8 rounded-full bg-red-500/40 animate-ping"></span>
            <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg" />
          </div>
        </motion.div>

        {/* Legendas */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase text-slate-500">
          Libertário
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase text-slate-500">
          Autoritário
        </div>
      </div>
    </div>
  );
}
