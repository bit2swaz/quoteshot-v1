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

// Configure all the fonts we want to use
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
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Combine all font variable classes into the html tag
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${montserrat.variable} ${playfair.variable} ${robotoMono.variable} ${caveat.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
