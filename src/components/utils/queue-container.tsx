import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Icons } from "@/components/utils";

type Props = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function QueueContainer({ title, className, children }: Props) {
  return (
    <div
      className={twMerge(
        "max-w-screen-sm mx-auto px-8 pt-16 font-grotesk",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <Link href="/" className="text-3xl text-primary-200 absolute left-0">
          <Icons.arrowLeft />
        </Link>
        <p className="font-grotesk text-lg">{title}</p>
      </div>

      {children}
    </div>
  );
}
