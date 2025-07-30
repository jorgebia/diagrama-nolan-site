import "./globals.css";

export const metadata = {
  description: "Este quiz ajuda a compreender melhor sua filosofia política em um espectro mais amplo que o tradicional.",
  openGraph: {
    description: "Este quiz ajuda a compreender melhor sua filosofia política em um espectro mais amplo que o tradicional.",
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
        <title>Quiz Político Brasil</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}