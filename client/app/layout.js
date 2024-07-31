import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "connected",
  description: "Apeer to peer tutoring application",
  icons: {
    icon: '/public/logo.avif'
  }
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
