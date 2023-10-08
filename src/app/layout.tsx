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
          width={1920}
          height={1080}
          src="/images/grid-bg.png"
          className="object-cover pointer-events-none opacity-30 absolute -z-10 top-0"
          alt="grid background"
        />

        <Image
          priority
          width={1920}
          height={1080}
          src="/images/grid-bg.png"
          className="object-cover pointer-events-none opacity-30 absolute -z-10 bottom-0 -scale-y-100"
          alt="grid background"
        />

        <Image
          priority
          width={1920}
          height={1080}
          src="/images/gradient.png"
          className="object-cover pointer-events-none opacity-10 absolute -z-10 -scale-y-100 bottom-0"
          alt="grid background"
        />
      </body>
    </html>
  );
}
