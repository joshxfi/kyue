import { Testimonials } from "@/components";

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
    </main>
  );
}
