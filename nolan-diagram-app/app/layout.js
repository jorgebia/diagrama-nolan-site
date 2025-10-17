import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    default: "Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil",
    template: "%s | Quiz Político Brasil",
  },
  description:
    "Descubra sua posição no espectro político brasileiro com base no Diagrama de Nolan. Entenda suas ideias políticas de forma clara, moderna e educativa.",
  keywords: [
    "quiz político",
    "teste ideológico",
    "diagrama de nolan",
    "espectro político",
    "política brasileira",
    "libertário",
    "autoritário",
    "esquerda",
    "direita",
    "centro político",
    "libertarianismo",
  ],
  alternates: {
    canonical: "https://quizpolitico.com.br",
  },
  openGraph: {
    title: "Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil",
    description:
      "Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan).",
    url: "https://quizpolitico.com.br/",
    siteName: "Quiz Político Brasil",
    images: [
      {
        url: "https://quizpolitico.com.br/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Diagrama de Nolan - Quiz Político Brasileiro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil",
    description: "Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan).",
    images: ["https://quizpolitico.com.br/og-image.jpg"],
  },
  metadataBase: new URL("https://quizpolitico.com.br"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* SEO e metadados técnicos */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Equipe Quiz Político Brasil" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://quizpolitico.com.br" />
        <link
          rel="preload"
          as="image"
          href="https://quizpolitico.com.br/og-image.jpg"
        />

        {/* Schema.org aprimorado (Website + Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "url": "https://quizpolitico.com.br",
                  "name": "Quiz Político Brasil",
                  "alternateName": "Teste de Espectro Político Brasileiro",
                  "description":
                    "Descubra sua posição no espectro político brasileiro com base no Diagrama de Nolan.",
                },
                {
                  "@type": "Organization",
                  "name": "Quiz Político Brasil",
                  "url": "https://quizpolitico.com.br",
                  "logo": "https://quizpolitico.com.br/favicon.png",
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${inter.className} bg-[url('/paper-texture.jpg')] bg-repeat text-gray-900`}
      >
        {/* Conteúdo principal */}
        <main className="min-h-screen">{children}</main>

        {/* Rodapé discreto e neutro */}
        <footer className="text-center text-gray-600 py-6 text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} Quiz Político Brasil — Todos os
            direitos reservados.
          </p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
