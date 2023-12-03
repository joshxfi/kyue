import Link from "next/link";
import { Card, Icons, QueueContainer } from "@/components/utils";

const orgs = [
  {
    orgId: "up",
    subheading: "University of the Philippines",
    imgUrl: "/images/orgs/up.png",
  },
  {
    orgId: "usls",
    subheading: "University of St. La Salle",
    imgUrl: "/images/orgs/usls.jpg",
  },
  {
    orgId: "ust",
    subheading: "University of Santo Tomas",
    imgUrl: "/images/orgs/ust.jpg",
  },
  {
    orgId: "admu",
    subheading: "Ateneo de Manila University",
    imgUrl: "/images/orgs/admu.png",
  },
];

export default function Queue() {
  return (
    <QueueContainer title="Select Organization">
      <div className="flex items-center bg-secondary-200 rounded-xl mt-12 px-6 py-3">
        <Icons.search className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full text-lg text-zinc-200 pl-4 outline-none"
        />
      </div>

      <div className="mt-8 space-y-4">
        {orgs.map((org) => (
          <Link
            href={`/queue/${org.orgId}`}
            key={org.imgUrl}
            className="hover:scale-105 transition-all cursor-pointer block"
          >
            <Card
              heading={org.orgId.toUpperCase()}
              subheading={org.subheading}
              imgUrl={org.imgUrl}
            />
          </Link>
        ))}
      </div>
    </QueueContainer>
  );
}
