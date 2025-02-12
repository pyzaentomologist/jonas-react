import Header from "./_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css"
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s The wild Oasis",
    default: "Welcome / The wild Oasis",
  },
  description: "Projekt testowy do nauki Next.js. Pozdro Paweł xD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`antialiased bg-primary-950 text-primary-100 min-h-screen ${josefin.className} flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
