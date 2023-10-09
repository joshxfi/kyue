import { Card, Icons } from "@/components/utils";

const orgs = [
  {
    heading: "UP",
    subheading: "University of the Philippines",
    imgUrl: "/images/orgs/up.png",
  },
  {
    heading: "USLS",
    subheading: "University of St. La Salle",
    imgUrl: "/images/orgs/usls.jpg",
  },
  {
    heading: "UST",
    subheading: "University of Santo Tomas",
    imgUrl: "/images/orgs/ust.jpg",
  },
  {
    heading: "ADMU",
    subheading: "Ateneo de Manila University",
    imgUrl: "/images/orgs/admu.png",
  },
];

export default function Demo() {
  return (
    <div className="max-w-screen-sm mx-auto min-h-screen px-8 pt-16 font-grotesk">
      <div className="relative flex items-center justify-center">
        <button
          type="button"
          className="text-3xl text-primary-200 absolute left-0"
        >
          <Icons.arrowLeft />
        </button>
        <p className="font-grotesk text-lg">Select Organization</p>
      </div>

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
          <div
            key={org.imgUrl}
            className="hover:scale-105 transition-all cursor-pointer"
          >
            <Card
              heading={org.heading}
              subheading={org.subheading}
              imgUrl={org.imgUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
