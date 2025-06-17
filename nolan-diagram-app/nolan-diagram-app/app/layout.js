import "./globals.css";

export const metadata = {
  title: "Teste de Espectro Político",
  description: "Teste de espectro político baseado no Diagrama de Nolan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
