import "./globals.css";

export const metadata = {
  title: "Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil",
  description: "Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan).",
  keywords: "quiz político, diagrama de nolan, espectro político, espectro ideológico, política brasileira, libertário, autoritário, esquerda, direita",
  openGraph: {
    title: "Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil",
    description: "Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan).",
    url: "https://quizpolitico.com.br/",
    images: [
      {
        url: "https://quizpolitico.com.br/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Diagrama de Nolan"
      }
    ],
    locale: "pt_BR",
    type: "website"
  }
};

import { Analytics } from '@vercel/analytics/next';
 
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="keywords" content="quiz político, diagrama de nolan, espectro político, espectro ideológico, libertário, libertarianismo, autoritário, esquerda, direita, centro político" />
        <meta property="og:title" content="Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil" />
        <meta property="og:description" content="Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan)." />
        <meta property="og:image" content="https://quizpolitico.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil" />
        <meta name="twitter:description" content="Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan)." />
        <meta name="twitter:image" content="https://quizpolitico.com.br/og-image.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Website",
          "name": "Quiz Político Brasil",
          "url": "https://quizpolitico.com.br",
          "description": "Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan).",
          "keywords": ["quiz político", "diagrama de nolan", "espectro político", "ideologia política", "teste político", "libertarianismo", "libertario"]
        }` }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}