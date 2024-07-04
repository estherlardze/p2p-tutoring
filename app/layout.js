import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peer to Peer Tutoring",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <MantineProvider className="flex-grow">{children}</MantineProvider>
      </body>
    </html>
  );
}
