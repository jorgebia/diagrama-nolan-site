//data/questions.js
const questions = [
  {
    text: '01 - O Estado não deve cobrar impostos sobre medicamentos essenciais.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '02 - As empresas estatais (ex.: Correios, Petrobrás, etc.) devem ser privatizadas.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '03 - O Estado deve facilitar a entrada de estrangeiros que queiram trabalhar ou empreender no país.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '04 - A produção, comercialização e consumo de drogas devem ser legalizados.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '05 - O ensino domiciliar (home schooling) deve ser legalizado no Brasil.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '06 - Cidadãos sem antecedentes criminais devem poder comprar armas para defesa pessoal.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '07 - As universidades públicas (federais e estaduais) devem ser privatizadas.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '08 - O Banco Central do Brasil deve imprimir dinheiro em caso de crises (naturais, financeiras e etc.), mesmo que isso possa levar à inflação.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '09 - Além do salário, parlamentares devem receber benefícios custeados com dinheiro público, como assistência médica e auxílio-moradia.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '10 - O governo deve interferir na moderação de conteúdo das plataformas digitais.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '11 - A escala 6x1 deve ser proibida no Brasil, mesmo que a mudança aumente os custos para as empresas.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '12 - A liberdade de expressão deve ser amplamente garantida, mesmo para opiniões impopulares, críticas ao governo, expressões artísticas e humor.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '13 - O Estado deve poder julgar adolescentes como adultos quando cometerem crimes violentos.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '14 - O aborto deve ser proibido mesmo em casos de estupro, risco de vida para a mãe ou má formação do feto.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '15 - Toda religião deve ter liberdade para praticar seus rituais (cristianismo, candomblé, etc.).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '16 - O casamento entre pessoas do mesmo sexo deve ter os mesmos direitos legais.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '17 - O Estado brasileiro deve desburocratizar e reduzir impostos sobre a importação de produtos estrangeiros (ex.: eletrônicos, roupas, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '18 - As universidades públicas devem reservar vagas para estudantes negros por meio de cotas raciais.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 },
    ],
  },
  {
    text: '19 - O Estado deve intervir diretamente no controle de preços em setores essenciais como alimentos e combustíveis.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 },
    ],
  },
  {
    text: '20 - A iniciativa privada deve ter a liberdade em fornecer serviços essenciais, como saúde, educação, segurança e saneamento básico',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '21 - O Brasil deve ser o líder militar na América Latina.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '22 - O governo deve proibir as apostas esportivas online (bets).',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '23 - O Estado deve desburocratizar o investimento privado no setor de energia (ex.: solar, eólica, nuclear, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '24 - O Estado deve deter o monopólio sobre a infraestrutura de transporte do país (rodovias, ferrovias, portos, etc.).',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '25 - O Estado brasileiro deve promover uma reforma agrária, redistribuindo terras (privadas) improdutivas para pequenos agricultores.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
  {
    text: '26 - O Estado deve ser estritamente laico, garantindo que crenças religiosas não influenciem as leis e as políticas públicas.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '27 - Pequenos empreendedores e startups devem receber incentivos fiscais e desburocratização.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
  {
    text: '28 - A Previdência Social deve ser responsabilidade exclusiva do Estado, sendo proibida a participação do setor privado.',
    axis: 'economic',
    options: [
      { text: 'Concordo totalmente', value: -2 },
      { text: 'Concordo parcialmente', value: -1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: 1 },
      { text: 'Discordo totalmente', value: 2 }
    ],
  },
];

export default questions;
