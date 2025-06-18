import "./globals.css";

export const metadata = {
  description: "Descubra sua posição política com este quiz.",
  openGraph: {
    description: "Descubra sua posição política com este quiz.",
    url: "https://testepoliticobr.vercel.app/",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Diagrama de Nolan"
      }
    ],
    locale: "pt_BR",
    type: "website"
  }
};

//export const metadata = {
  //title: "Teste de Espectro Político",
  //description: "Teste de espectro político baseado no Diagrama de Nolan.",
//};

//export default function RootLayout({ children }) {
  //return (
    //<html lang="pt-BR">
      //<body>{children}</body>
    //</html>
  //)
//}

import { Analytics } from '@vercel/analytics/next';
 
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Teste de Espectro Político</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}