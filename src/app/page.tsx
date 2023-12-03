import Image from "next/image";
import { Subtitle, Button } from "@/components/utils";
import { Companies, Footer, Navbar, Testimonials } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Image
        priority
        width={1920}
        height={1080}
        src="/images/gradient.png"
        className="object-cover pointer-events-none opacity-30 absolute -z-10 md:-top-12 -top-6"
        alt="gradient"
      />

      <Image
        priority
        width={1920}
        height={1080}
        src="/images/grid-bg.png"
        className="object-cover pointer-events-none opacity-30 absolute top-0 -z-10 flex flex-col"
        alt="grid background"
      />
      <Navbar />
      <div className="pb-24 lg:mt-32 mt-12">
        <div className="px-8 flex flex-col items-center text-center">
          <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-widest font-grotesk">
            Redefining <br className="xl:hidden" />
            the Queueing
          </h1>
          <Subtitle className="xl:text-5xl md:text-4xl sm:text-3xl text-xl xl:tracking-[4rem] md:tracking-[2rem] tracking-[1rem] mt-4 lg:mt-6">
            Experience
          </Subtitle>

          <p className="lg:text-xl md:text-lg sm:text-base text-sm text-zinc-300 md:max-w-[750px] max-w-[450px] lg:mt-8 mt-4 font-light">
            Our vision is to transform the queue management landscape, making
            queues more convenient and enjoyable for everyone involved
          </p>

          <div className="flex space-x-3 lg:mt-14 mt-8 lg:text-xl md:text-base text-sm">
            <Button action="/queue/scan">Get Started</Button>
            <Button dark action="/queue/scan">
              Download App
            </Button>
          </div>
        </div>

        <Testimonials />
        <Image
          priority
          width={1920}
          height={1080}
          src="/images/grid-bg.png"
          className="object-cover pointer-events-none opacity-30 absolute -z-10 -scale-y-100 lg:hidden"
          alt="grid background"
        />
        <Companies />

        <section className="flex flex-col md:flex-row justify-center md:items-start items-center lg:px-24 px-8 md:mt-52 lg:space-x-12 md:space-x-8">
          <div className="mt-40 md:text-right text-center flex flex-col md:items-end items-center mb-8 lg:mb-0">
            <h1 className="xl:text-5xl lg:4xl sm:text-3xl text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-widest font-grotesk">
              Elevate your
              <br />
              Queueing Experience
            </h1>
            <p className="max-w-[500px] mt-4 md:text-lg sm:text-base text-sm text-zinc-300">
              Seamlessly join queues remotely, receive real-time updates, and
              transform your wait into a productive and enjoyable experience
            </p>
            <a
              href="#"
              className="text-primary-200 mt-2 text-sm sm:text-base hover:underline transition-all"
            >
              Download Kyue &rarr;
            </a>
          </div>

          <div className="relative pointer-events-none">
            <Image
              width={1920}
              height={1080}
              className="object-contain lg:w-96 w-64"
              src="/images/phone.png"
              alt="phone"
            />

            <Image
              width={1920}
              height={1080}
              className="object-contain hidden md:block absolute top-0 mt-56 xl:-left-52 lg:-left-48 -left-32 -z-10 opacity-40 rotate-90"
              src="/images/gradient.png"
              alt="gradient"
            />
          </div>
        </section>
      </div>
      <Footer />

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
    </main>
  );
}
