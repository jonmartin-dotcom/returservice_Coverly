import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coverly – Returservice",
  description: "Registrer en retur av varer kjøpt hos Coverly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
