import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heztor",
  description: "Gestiona todo en un solo lugar.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/HeztorLogo2.svg",
        href: "/heztorI21.svg",
        // sizes: "32x32",
        // type: "image/png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/HeztorLogo1.svg",
        href: "/Heztor.svg",
        // href: "/heztorsquare1.svg",
        // sizes: "32x32",
        // type: "image/png"
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={` ${inter.className} overflow-x-hidden`} >
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="heztor-theme-2">
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
