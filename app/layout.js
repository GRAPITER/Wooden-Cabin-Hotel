import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | the wild hotel",
    default: "Welcome | the wild hotel",
  },

  description: "lorem sd sadsdsd sd sd sd sd d",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 grid px-8 py-12 ">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider> {children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
