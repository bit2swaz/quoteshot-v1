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
// We no longer import Footer here

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
  title: "Quoteshot",
  description: "Create aesthetic quote cards in seconds.",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${lora.variable} ${montserrat.variable} ${playfair.variable} ${robotoMono.variable} ${caveat.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-gray-900">
        {children}
        {/* The Footer component has been removed from here */}
      </body>
    </html>
  );
}
