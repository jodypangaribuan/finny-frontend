import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finny - Financial Dashboard",
  description: "Finny - Your personal financial dashboard",
};



/**
 * Defines the root HTML layout for the application and wraps all pages with the theme provider.
 * @example
 * RootLayout({ children })
 * <html><body>...app content...</body></html>
 * @param {{ children: React.ReactNode }} children - The React node(s) to render within the application layout.
 * @returns {JSX.Element} The root layout structure containing the HTML, body, and wrapped child content.
 **/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
