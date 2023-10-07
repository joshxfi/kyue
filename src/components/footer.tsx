import React from "react";
import Link from "next/link";
import Image from "next/image";

export const footerItems = {
  withRoute: [
    {
      name: "Help",
      href: "/help",
    },
    {
      name: "Privacy",
      href: "/privacy-policy",
    },
  ],
  withUrl: [
    {
      name: "Socials",
      children: [
        {
          name: "Discord",
          href: "#",
        },
        {
          name: "Facebook",
          href: "#",
        },
      ],
    },
    {
      name: "Open Source",
      children: [
        {
          name: "Contribute",
          href: "#",
        },
        {
          name: "Bug Report",
          href: "mailto:report@kyue.com",
        },
        {
          name: "Feature Request",
          href: "mailto:request@kyue.com",
        },
      ],
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="contain py-12 lg:px-24 px-8">
      <div className="line mb-12" />

      <div className="grid grid-cols-2 flex-wrap justify-between gap-y-16 sm:flex md:text-lg">
        <ul className="flex flex-col gap-4">
          <li className="font-medium">Resources</li>
          {footerItems.withRoute.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-500 transition-colors hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {footerItems.withUrl.map((item) => (
          <ul key={item.name} className="flex flex-col gap-4">
            <li className="font-medium">{item.name}</li>
            {item.children.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        ))}

        <Image
          height={120}
          width={120}
          className="object-contain"
          src="/images/kyue-logo.png"
          alt="logo"
        />
      </div>

      <div className="mt-20 flex flex-col items-center md:items-start">
        <Image
          height={120}
          width={120}
          className="object-contain"
          src="/images/kyue-logo.png"
          alt="logo"
        />
        <a
          href="https://github.com/joshxfi"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 text-sm font-medium text-gray-500 hover:underline md:text-lg"
        >
          © 2023 Josh Daniel Bañares
        </a>
      </div>
    </footer>
  );
};
