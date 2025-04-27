import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME,SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${APP_NAME} - E-commerce`,
  description: `${APP_DESCRIPTION} - DE...`,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
        className={`${inter.className} antialiased`}
      > 
        <ThemeProvider 
         attribute="class"
         defaultTheme="light"
         disableTransitionOnChange
         enableSystem>
          {children}
        </ThemeProvider>
        {children}
      </body>
    </html>
  );
}
