import "./globals.css";
import { Inter } from "next/font/google";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Giphy Search",
  description: "Search for gifs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={inter.className}>{children}</body>
      </QueryProvider>
    </html>
  );
}
