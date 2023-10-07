import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-12 mx-auto lg:px-24 px-8">
      <Image
        priority
        height={120}
        width={120}
        className="object-contain"
        src="/images/kyue-logo.png"
        alt="logo"
      />

      <ul className="lg:flex space-x-24 text-zinc-300 uppercase font-light text-sm hidden">
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
