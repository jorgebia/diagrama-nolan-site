// app/layout.tsx
//import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Diagrama de Nolan",
  description: "Descubra seu posicionamento político no espectro Nolan",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}