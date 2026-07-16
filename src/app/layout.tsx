import type { Metadata } from "next";
import "./globals.css";

import ClientLayout from "@/components/ClientLayout";
import MouseStalker from "@/components/MouseStalker";


export const metadata: Metadata = {
  title: "Kenji Okuda Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ClientLayout>


          <MouseStalker />
          {children}

        </ClientLayout>
      </body>
    </html>
  );
}
