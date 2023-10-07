import { Testimonial } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col lg:items-center pb-24 overflow-x-hidden lg:mt-32 mt-12">
      <div className="px-8">

      <h1 className="lg:text-7xl text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-widest font-grotesk">
        Redefining <br className="lg:hidden" />
        the Queueing
      </h1>
      <h2 className="font-bosch uppercase lg:text-5xl text-xl lg:tracking-[4rem] tracking-[1rem] mt-4 lg:mt-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary-100 to-60%">
        Experience
      </h2>

      <p className="lg:text-xl text-zinc-300 max-w-[750px] mt-8 font-light">
        Our vision is to transform the queue management landscape, making queues
        more convenient and enjoyable for everyone involved
      </p>

      <div className="flex space-x-3 lg:mt-14 mt-8 lg:text-xl">
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

      <div className="lg:mt-40 mt-32 flex space-x-12 overflow-x-scroll container lg:px-24 px-8">
        <Testimonial
          name="John Doe"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus magnam aut et provident blanditiis deserunt ipsa dolore pariatur ad nulla consectetur, qui quasi impedit, fugiat cupiditate veritatis, facilis porro esse."
        />

        <Testimonial
          name="Jane Bravo"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus magnam aut et provident blanditiis deserunt ipsa dolore pariatur ad nulla consectetur, qui quasi impedit, fugiat cupiditate veritatis, facilis porro esse."
        />

        <Testimonial
          name="Jerry Tom"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus magnam aut et provident blanditiis deserunt ipsa dolore pariatur ad nulla consectetur, qui quasi impedit, fugiat cupiditate veritatis, facilis porro esse."
        />

        <Testimonial
          name="Jerry Tom"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus magnam aut et provident blanditiis deserunt ipsa dolore pariatur ad nulla consectetur, qui quasi impedit, fugiat cupiditate veritatis, facilis porro esse."
        />
      </div>
    </main>
  );
}
