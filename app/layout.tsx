import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./globals.css";

const unageo = localFont({
  src: "../public/Unageo[wght].ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streaming TV",
  description: "Lecteur vidéo intégré",
  icons: {
    icon: "dede.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={`${unageo.className} min-h-screen bg-[#0a0a0a] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
