import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    default: "Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil",
    template: "%s | Quiz Político Brasil"
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
    "libertarianismo"
  ],
  alternates: {
    canonical: "https://quizpolitico.com.br"
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
        alt: "Diagrama de Nolan - Quiz Político Brasileiro"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Descubra seu lugar no espectro político brasileiro | Quiz Político Brasil",
    description:
      "Identifique sua posição ideológica em um espectro político mais amplo que o tradicional (baseado no Diagrama de Nolan).",
    images: ["https://quizpolitico.com.br/og-image.jpg"]
  },
  metadataBase: new URL("https://quizpolitico.com.br")
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Metatags essenciais */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Equipe Quiz Político Brasil" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://quizpolitico.com.br" />

        {/* Pré-carregamento de imagem OG (melhora performance e SEO social) */}
        <link rel="preload" as="image" href="https://quizpolitico.com.br/og-image.jpg" />

        {/* Dados estruturados combinados: Website + Organization */}
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
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://quizpolitico.com.br/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "Quiz Político Brasil",
                  "url": "https://quizpolitico.com.br",
                  "logo": "https://quizpolitico.com.br/favicon.png",
                  "sameAs": [
                    "https://www.youtube.com/@quizpoliticobrasil",
                    "https://twitter.com/quizpolitico",
                    "https://facebook.com/quizpoliticobrasil"
                  ]
                }
              ]
            })
          }}
        />
      </head>

      <body className={`${inter.className} bg-white text-gray-900`}>
        <header className="text-center py-6 bg-blue-50 border-b border-blue-200 shadow-sm">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-700">
            🧭 Quiz Político Brasileiro
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Descubra seu lugar no espectro político — baseado no Diagrama de Nolan
          </p>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="text-center text-gray-700 py-6 bg-blue-50 border-t border-blue-200 text-sm">
          <p>
            © {new Date().getFullYear()} Quiz Político Brasil — Todos os direitos reservados.
          </p>
          <p>
            Projeto pessoal desenvolvido com objetivo educacional.
            <a
              href="https://quizpolitico.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              Quiz Político Brasil
            </a>
            .
          </p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
