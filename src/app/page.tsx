import Image from "next/image";
import { Testimonials } from "@/components";
import { Icons } from "@/components/utils";

export default function Home() {
  return (
    <main className="pb-24 lg:mt-32 mt-12">
      <div className="px-8 flex flex-col items-center text-center">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-widest font-grotesk">
          Redefining <br className="xl:hidden" />
          the Queueing
        </h1>
        <h2 className="font-bosch uppercase xl:text-5xl md:text-4xl sm:text-3xl text-xl xl:tracking-[4rem] md:tracking-[2rem] tracking-[1rem] mt-4 ml-4 lg:mt-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary-100 to-60%">
          Experience
        </h2>

        <p className="lg:text-xl md:text-lg sm:text-base text-sm text-zinc-300 md:max-w-[750px] max-w-[450px] lg:mt-8 mt-4 font-light">
          Our vision is to transform the queue management landscape, making
          queues more convenient and enjoyable for everyone involved
        </p>

        <div className="flex space-x-3 lg:mt-14 mt-8 lg:text-xl md:text-base text-sm">
          <button
            type="button"
            className="rounded-md bg-white lg:px-8 lg:py-4 px-6 py-3 font-medium text-zinc-800"
          >
            Get Started
          </button>

          <button
            type="button"
            className="rounded-md bg-zinc-900 text-white border border-zinc-800 lg:px-8 lg:py-4 px-6 py-3 font-medium"
          >
            Download App
          </button>
        </div>
      </div>

      <Testimonials />

      <div className="flex flex-col justify-center items-center mt-52">
        <h2 className="font-bosch uppercase xl:text-3xl md:text-2xl sm:text-xl text-lg tracking-[1rem] mt-4 ml-4 lg:mt-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary-100 to-60%">
          Trusted by Companies
        </h2>

        <div className="flex mt-16 space-x-24 text-8xl text-zinc-400 hover:text-white transition-all duration-300">
          <Icons.acer />
          <Icons.activision />
          <Icons.cnn />
          <Icons.skillshare />
          <Icons.sony />
        </div>
      </div>

      <section className="flex justify-center items-start lg:px-24 px-8 mt-52 space-x-12">
        <div className="mt-40 text-right flex flex-col items-end">
          <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-widest font-grotesk">
            Elevate your
            <br />
            Queueing Experience
          </h1>
          <p className="max-w-[600px] mt-4 text-lg text-zinc-300">
            Seamlessly join queues remotely, receive real-time updates, and
            transform your wait into a productive and enjoyable experience
          </p>
          <a href="#" className="text-primary-200 mt-2 hover:underline transition-all">
            Download Kyue &rarr;
          </a>
        </div>

        <Image
          width={1920}
          height={1080}
          className="object-contain w-96 pointer-events-none"
          src="/images/phone.png"
          alt="phone"
        />
      </section>
    </main>
  );
}
