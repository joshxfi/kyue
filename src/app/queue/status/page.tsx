"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, Icons, Button } from "@/components/utils";

const queues = [
  {
    heading: "SA-29",
    subheading: "Cashier 1",
  },
  {
    heading: "SA-30",
    subheading: "Cashier 2",
  },
  {
    heading: "SA-31",
    subheading: "Cashier 3",
  },
];

export default function Status() {
  const searchParams = useSearchParams();

  const orgId = searchParams.get("org");
  const queueId = searchParams.get("id");

  return (
    <div className="max-w-screen-sm mx-auto px-8 pt-16 font-grotesk pb-24 flex flex-col">
      <div className="relative flex items-center justify-center">
        <Link href="/" className="text-3xl text-primary-200 absolute left-0">
          <Icons.arrowLeft />
        </Link>
        <p className="font-grotesk text-lg">Current Status</p>
      </div>

      <div className="bg-secondary-200 rounded-xl mt-12 p-12 text-center">
        <h1 className="text-4xl mb-4">{queueId}</h1>
        <p className="text-zinc-400">{orgId}</p>
      </div>

      <div className="h-2 mt-3 bg-primary-200 rounded-full w-[60%]"></div>
      <p className="text-sm text-zinc-400 italic mt-2">
        Estimated time: 13 mins left
      </p>

      <p className="mb-3 mt-24 text-zinc-400 text-sm">Currently Serving</p>
      <div className="space-y-4">
        {queues.map((q) => (
          <Card key={q.heading} heading={q.heading} subheading={q.subheading} />
        ))}
      </div>

      <Button dark action="/demo">
        Cancel Queue
      </Button>
    </div>
  );
}
