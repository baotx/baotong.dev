import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/global.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Profile } from "@/components/profile";

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="container mx-auto ">
            <div className="flex flex-col items-center py-6 lg:flex-row lg:items-start">
              <aside className="bg-white-600 px-2 w-1/4">
                <div className="sticky top-0 w-full p-4 text-center">
                  <Profile />
                </div>
              </aside>
              <main className="px-6 w-full md:max-w-3xl">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
