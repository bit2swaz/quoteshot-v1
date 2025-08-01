import "~/styles/globals.css";
import { Inter } from "next/font/google"; // Import the font loader

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    // Apply the font class to the html element
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
