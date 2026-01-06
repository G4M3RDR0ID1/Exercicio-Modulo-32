import Link from "next/link";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="pageBody">
        <div className="layout">
          <header className="header">
            <div className="headerInner">
              <Link href="/" className="logo">
                Portal de Viagens
              </Link>
              <nav className="nav">
                <Link href="/" className="navBtn">Home</Link>
                <Link href="/destinos" className="navBtn">Destinos</Link>
              </nav>
            </div>
          </header>

          <main className="mainContent">{children}</main>

          <footer className="footer">© 2025 Portal de Viagens</footer>
        </div>
      </body>
    </html>
  );
}
