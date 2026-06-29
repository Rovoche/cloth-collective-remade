import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-ivory">
      <Header transparent={transparentHeader} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
