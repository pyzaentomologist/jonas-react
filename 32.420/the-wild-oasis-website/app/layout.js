import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild Oasis",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer>
          Copyright by The Wild Oasis
        </footer>
      </body>
    </html>
  )
}
