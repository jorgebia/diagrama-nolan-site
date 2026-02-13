//data/questions.js
const questions = [
  {
    text: '01 - Cidadãos e empresas de saúde devem ter liberdade para negociar planos de saúde personalizados, sem a interferência de órgãos reguladores do governo.',
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
    text: '05 - As escolas privadas devem ter liberdade para definir sua própria grade curricular, sem obrigatoriedade de seguir o currículo nacional estabelecido pelo Ministério da Educação.',
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
    text: '06 - A aquisição de armas de fogo deve ser menos burocrática para os cidadãos.',
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
    text: '08 - O Banco Central do Brasil deve imprimir dinheiro em caso de crises (naturais, financeiras e etc.).',
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
    text: '09 - Qualquer governo brasileiro (federal, estadual e municipal) deve reduzir seus gastos por meio de reformas administrativas e combater luxos e extravagâncias (viagens, jantares, etc.).',
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
    text: '11 - Patrões e empregados devem ter liberdade para negociar contratos de trabalho diretamente (Contrato PJ, escala 6x1 e 4x3, etc.).',
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
    text: '13 - O Estado brasileiro deve continuar financiando projetos culturais por meio da Lei Rouanet.',
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
    text: '14 - A decisão sobre a interrupção da gravidez deve caber exclusivamente à mulher, sem interferência ou proibição por parte do Estado.',
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
    text: '18 - O Estado deve impor cotas raciais nas universidades privadas, iguais às das públicas.',
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
    text: '20 - A iniciativa privada deve ter a liberdade em fornecer serviços essenciais, como saúde, educação, segurança, saneamento básico, etc.',
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
    text: '22 - O Estado não deve reconhecer relacionamentos não convencionais, como o poliamor ou relacionamentos abertos.',
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
    text: '28 - A educação domiciliar (homeschooling) deve ser permitida legalmente no Brasil.',
    axis: 'social',
    options: [
      { text: 'Concordo totalmente', value: 2 },
      { text: 'Concordo parcialmente', value: 1 },
      { text: 'Neutro', value: 0 },
      { text: 'Discordo parcialmente', value: -1 },
      { text: 'Discordo totalmente', value: -2 }
    ],
  },
];

export default questions;
