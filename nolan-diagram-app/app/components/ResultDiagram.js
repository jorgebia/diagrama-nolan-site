// components/ResultDiagram.js
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ResultDiagram({ economic, social }) {
  const containerRef = useRef(null);
  const [size, setSize] = useState(500);
  const gridSize = 10;

    useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setSize(containerRef.current.clientWidth);
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // função para mapear valor -2..2 para posição em px dentro do quadrante
  const mapValue = (value) => ((value + 2) / 4) * size;

  return (
    <div className="flex justify-center my-6 px-4">
      <div className="relative w-full max-w-[500px] aspect-square">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          let bg = 'white';
          if (row < gridSize / 2 && col < gridSize / 2) bg = '#d1fae5'; // verde claro
          if (row < gridSize / 2 && col >= gridSize / 2) bg = '#fef9c3'; // amarelo claro
          if (row >= gridSize / 2 && col < gridSize / 2) bg = '#fee2e2'; // vermelho claro
          if (row >= gridSize / 2 && col >= gridSize / 2) bg = '#bfdbfe'; // azul claro
          return <div key={i} style={{ border: '1px solid #e5e7eb', backgroundColor: bg }} />;
        })}
      </div>
    </div>

      {/* Eixos */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: 0,
          borderTop: '2px solid black',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: 0,
          height: '100%',
          borderLeft: '2px solid black',
        }}
      />

      {/* Marcador do usuário */}
      <motion.div
        style={{
          position: 'absolute',
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: 'red',
          left: mapValue(economic),
          top: size - mapValue(social),
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      />

      {/* Legendas */}
      <div style={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', fontSize: 12, fontWeight: 'bold' }}>Libertário(a)</div>
      <div style={{ position: 'absolute', bottom: -24, left: '50%', transform: 'translateX(-50%)', fontSize: 12, fontWeight: 'bold' }}>Autoritário(a)</div>
      <div style={{ position: 'absolute', top: '50%', left: -32, transform: 'translateY(-50%)', fontSize: 12, fontWeight: 'bold' }}>Esquerda</div>
      <div style={{ position: 'absolute', top: '50%', right: -32, transform: 'translateY(-50%)', fontSize: 12, fontWeight: 'bold' }}>Direita</div>
    </div>
  );
}