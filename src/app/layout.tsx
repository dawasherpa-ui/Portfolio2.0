import type { Metadata } from "next";
import { Outfit, Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const fira = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export const metadata: Metadata = {
  title: "Dawa Sherpa | Innovative Software Engineer & AI Architect",
  description: "Dawa Sherpa is an Innovative Software Engineer and AI & LLM Architect specializing in building scalable, secure, intelligent systems and digital experiences.",
  keywords: ["Dawa Sherpa", "Software Engineer", "AI Architect", "Full Stack Developer", "LLM Engineer", "Web3", "Next.js", "Dawa", "Nepal Technology", "System Creator"],
  authors: [{ name: "Dawa Sherpa" }],
  creator: "Dawa Sherpa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dawasherpaa.com",
    title: "Dawa Sherpa | Innovative Software Engineer & AI Architect",
    description: "Portfolio of Dawa Sherpa. Building innovative software, AI-powered agents, and intelligent systems that turn complex ideas into reality.",
    siteName: "Dawa Sherpa Portfolio",
    images: "https://res.cloudinary.com/djt69tcer/image/upload/v1771230043/localhost_3000__a8ydlf.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawa Sherpa | Innovative Software Engineer & AI Architect",
    description: "Building innovative software and AI-powered systems. View the portfolio of Dawa Sherpa.",
    creator: "@dawashe56776442",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${playfair.variable} ${fira.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>
            <CustomCursor />
            <div className="min-h-screen w-full">
              <Navbar />
              <main className="w-full relative">
                {children}
              </main>
              <Contact />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
