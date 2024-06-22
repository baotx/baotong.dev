import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/global.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Profile } from "@/components/profile";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Ryan Tong",
  description:
    "Personal website of Ryan Tong. I'm working on a doordash simulation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-JB531XVXS6`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JB531XVXS6');
        `}
      </Script>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="container mx-auto px-0">
            <div className="flex flex-col items-center py-6 lg:flex-row lg:items-start">
              <aside className="bg-white-600 px-2 w-full md:w-1/4">
                <div className="sticky top-0 w-full p-4 text-center">
                  <Profile />
                </div>
              </aside>
              <main className="px-0 w-full md:px-6 md:max-w-3xl">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
