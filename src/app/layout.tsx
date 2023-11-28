import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyue",
  description: "Redefining the Queueing Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen text-zinc-200 bg-[#0f0f0f]`}
      >
        <Toaster />
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
