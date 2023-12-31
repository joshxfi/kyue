import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  imgUrl?: string;
  heading: string;
  className?: string;
  subheading: React.ReactNode;
};

export function Card({ imgUrl, heading, className, subheading }: Props) {
  return (
    <div
      className={twMerge(
        "bg-secondary-200 p-6 rounded-xl border border-secondary-100 flex items-center space-x-4",
        className
      )}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          height={56}
          width={56}
          className="object-cover object-top lg:w-14 lg:h-14 h-10 w-10 flex-none rounded-full"
          alt="profile picture"
        />
      )}

      <div>
        <h3 className="text-lg">{heading}</h3>
        <p className="text-zinc-400">{subheading}</p>
      </div>
    </div>
  );
}
