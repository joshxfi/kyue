import "./globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import { Inter } from "next/font/google";

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
        <Image
          priority
          width={1920}
          height={1080}
          src="/images/gradient.png"
          className="object-cover pointer-events-none opacity-30 absolute -z-10 md:-top-12 -top-6"
          alt="grid background"
        />

        <div className="mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>

        <Image
          priority
          fill
          sizes="100vw"
          src="/images/grid-bg.png"
          className="object-cover pointer-events-none opacity-40  absolute -z-10"
          alt="grid background"
        />
      </body>
    </html>
  );
}
