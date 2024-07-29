import type { Metadata } from "next";
import "./globals.css";
import Menu from "./ui/menu";
import { lusitana, inter, roboto } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Attila Szepe",
  description: "Portfolio Website | Available for work",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased m-4 md:m-6 lg:m-10 xl:px-20`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
