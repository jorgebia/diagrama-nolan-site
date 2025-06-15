import "./globals.css";

export const metadata = {
  title: "Diagrama de Nolan",
  description: "Teste político brasileiro baseado no Diagrama de Nolan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
