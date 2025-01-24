import { AuthProvider } from "@/Provider/AuthProvider";
import Header from "@/components/Header/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "blog-viewer",
  description: "A blog viewer",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} text-black antialiased bg-white min-h-screen`}
        >
          <Header />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
