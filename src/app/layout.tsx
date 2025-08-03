import "~/styles/globals.css";
import {
  Inter,
  Lora,
  Montserrat,
  Playfair_Display,
  Roboto_Mono,
  Caveat,
  Poppins,
} from "next/font/google";
import Footer from "~/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "QuoteShot",
  description: "Create aesthetic quote cards in seconds.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add `scroll-smooth` to enable smooth scrolling for anchor links
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${lora.variable} ${montserrat.variable} ${playfair.variable} ${robotoMono.variable} ${caveat.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-gray-900">
        {children}
        <Footer />
      </body>
    </html>
  );
}
