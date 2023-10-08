import { Icons, Subtitle } from "./utils";

export function Companies() {
  return (
    <div className="flex flex-col justify-center items-center mt-52">
      <Subtitle className="xl:text-3xl md:text-2xl sm:text-xl text-lg tracking-[1rem] mt-4 lg:mt-6 md:block hidden">
        Trusted by Companies
      </Subtitle>

      <div className="md:hidden text-center">
        <Subtitle className="xl:text-3xl md:text-2xl sm:text-xl text-lg tracking-[1rem] mt-4 lg:mt-6">
          Trusted
        </Subtitle>
        <Subtitle className="xl:text-3xl md:text-2xl sm:text-xl text-lg tracking-[1rem] mt-4 lg:mt-6">
          by Companies
        </Subtitle>
      </div>

      <div className="lg:flex mt-16 space-x-24 text-8xl text-zinc-400 hover:text-white transition-all duration-300 hidden">
        <Icons.acer />
        <Icons.activision />
        <Icons.cnn />
        <Icons.skillshare />
        <Icons.sony />
      </div>

      <div className="lg:hidden mt-10 sm:text-8xl text-7xl text-zinc-400 hover:text-white transition-all duration-300 flex flex-col items-center">
        <div className="flex space-x-12">
          <Icons.acer />
          <Icons.activision />
          <Icons.cnn />
        </div>

        <div className="flex space-x-12">
          <Icons.skillshare />
          <Icons.sony />
        </div>
      </div>
    </div>
  );
}
