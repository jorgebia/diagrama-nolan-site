//data/questions.js
const questions = [
  {
    text: '01 - As operadoras de planos de saúde devem ter a liberdade de fornecer planos personalizados sem a necessidade de seguir o estabelecido pela ANS (Agência Nacional de Saúde Suplementar).',
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
    text: '03 - O Estado brasileiro deve restringir as regras de imigração.',
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
    text: '05 - As escolas privadas devem ter a liberdade de criar sua própria grade curricular, sem a necessidade de seguir o currículo nacional definido pelo Ministério da Educação.',
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
    text: '08 - Bancos públicos, como a Caixa e o BNDES, devem ser usados para financiar programas sociais e infraestrutura.',
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
    text: '09 - Qualquer governo brasileiro (federal, estadual e municipal) deve reduzir seus gastos por meio de reformas administrativas, privatizações e combate de luxos e extravagâncias (viagens, jantares, etc.).',
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
    text: '10 - O Estado brasileiro deve ampliar sua regulação sobre a Internet e redes sociais, além do que já prevê o Marco Civil da Internet.',
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
    text: '11 - Empresas devem ter a liberdade para contratar e demitir sem restrições (Contratar como PJ, escala 6x1 e 4x3, etc.).',
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
    text: '12 - A liberdade de expressão deve ser absoluta, mesmo para opiniões impopulares, ofensivas, expressões artísticas e humor.',
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
    text: '14 - O aborto deve ser proibido em qualquer circunstância (saúde da mãe, anencefalia, estupro, falta de planejamento, etc.).',
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
    text: '15 - Qualquer religião deve ter liberdade para praticar seus rituais (cristianismo, candomblé, etc.).',
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
    text: '18 - O Estado deve impor cotas raciais em qualquer setor da sociedade brasileira.',
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
    text: '20 - A iniciativa privada deve ter a liberdade de fornecer serviços essenciais, como saúde, educação, segurança, saneamento básico, etc.',
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
    text: '22 - Formas não convencionais de relacionamento, como poliamor e relacionamento aberto, devem ser respeitadas e legalmente reconhecidas.',
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
    text: '24 - O Estado deve ter a exclusividade em fornecer e gerir toda a infraestrutura de transporte (rodovias, ferrovias, portos, etc.).',
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
    text: '26 - Valores cristãos devem orientar decisões políticas e a elaboração de leis no Brasil.',
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
