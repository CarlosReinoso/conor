import { Playfair_Display, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "Conor O'Sullivan | Integrated Therapy & Movement",
  description:
    "Integrated therapeutic services including bodywork, movement therapy, and mind-body practices. Personalised care for healing, movement, and wellbeing.",
  keywords:
    "bodywork, movement therapy, physiotherapy, massage therapy, pain management, breathwork, meditation, integrated therapy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${figtree.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
