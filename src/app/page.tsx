export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-7xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mt-32 tracking-widest font-grotesk">
        Redefining the Queueing
      </h1>
      <h2 className="font-bosch uppercase text-5xl tracking-[3rem] mt-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary-100 to-60%">
        Experience
      </h2>
      <p className="text-xl text-zinc-300 max-w-[700px] mt-8 font-light text-center">
        Our vision is to transform the queue management landscape, making queues
        more convenient and enjoyable for everyone involved
      </p>

      <div className="flex space-x-3 mt-14 text-xl">
        <button
          type="button"
          className="rounded-md bg-white px-8 py-4 font-medium text-zinc-800"
        >
          Get Started
        </button>
        <button
          type="button"
          className="rounded-md bg-zinc-900 text-white border border-zinc-800 px-8 py-4 font-medium"
        >
          Download App
        </button>
      </div>
    </main>
  );
}
