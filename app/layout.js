import { Geist, Geist_Mono ,Assistant} from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/UserContext";
import Head from 'next/head'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const assistant = Assistant({
  subsets: ['latin'],
  weight: ['400', '700'], // Match the font weights you're using
  variable: '--font-assistant', // CSS variable for the font
});

export const metadata = {
  title: "Watch Shree",
  description: "Strong Build,Stylish in look",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
    <html lang="en">
       <Head>
        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />

        {/* Social share preview */}
        <meta property="og:image" content="https://watchshree.store/logo.png" />
        <meta property="og:title" content="Watch Shree" />
        <meta property="og:description" content="Strong Build,Stylish in look" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${assistant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </UserProvider>
  );
}
