import Image from "next/image";

type Props = {
  name: string;
  content: string;
  position: string;
  imgUrl: string;
};

export function Testimonial({ name, content, position, imgUrl }: Props) {
  return (
    <div className="bg-zinc-800 lg:p-8 p-6 min-w-[400px] lg:max-w-[500px] max-w-[400px] rounded-md text-sm lg:text-lg flex-none select-none cursor-grab">
      <div className="flex items-center space-x-4">
        <Image
          src={imgUrl}
          height={56}
          width={56}
          className="object-cover object-top lg:w-14 lg:h-14 h-10 w-10 flex-none bg-zinc-900 rounded-full"
          alt="profile picture"
        />
        <div>
          <p>{name}</p>
          <p className="text-primary-200 lg:text-base">{position}</p>
        </div>
      </div>

      <div className="mt-4">"{content}"</div>
    </div>
  );
}
