"use client";

import Marquee from "react-fast-marquee";
import { Testimonial } from "./utils";

const data = [
  {
    name: "Mattheus Gomes",
    content:
      "Kyue has been a game-changer for my daily routine. No more endless waits in queues! I can join from anywhere, get real-time updates, and use my time more efficiently. Kudos to the Kyue team!",
    position: "CEO of PinLabs",
    imgUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Jennifer Williams",
    content:
      "Kyue has made waiting in line a thing of the past for me. The safety features, real-time updates, and the ability to grab a coffee instead of standing in line — it's the future of queueing. Thanks, Kyue, for giving me back my time!",
    position: "Designer at Figna",
    imgUrl:
      "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Tom Hankies",
    content:
      "As someone with a hectic schedule, Kyue has been a lifesaver. I can't imagine going back to the traditional queuing nightmare. Joining queues remotely and getting updates? Brilliant! Kyue, you've earned a permanent spot on my home screen.",
    position: "Engineer at Googre",
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  },
  {
    name: "Flávia Holmes",
    content:
      "Queues used to be my arch-enemy until I discovered Kyue. It's like having a personal queue manager on my phone. I love the convenience, and the in-app entertainment makes waiting a breeze!",
    position: "CTO of TheForum",
    imgUrl:
      "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
  },
  {
    name: "Raj Patel",
    content:
      "Kyue is a lifesaver for anyone who values their time. I'm always on the move, and Kyue lets me join queues on the fly. The real-time updates keep me in the loop, and the app's simplicity is a winner. Highly recommend it!",
    position: "Manager at McDonard",
    imgUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
];

export function Testimonials() {
  return (
    <Marquee className="lg:mt-52 mt-40">
      {data.map((testimonial) => (
        <Testimonial key={testimonial.name} {...testimonial} />
      ))}
    </Marquee>
  );
}
