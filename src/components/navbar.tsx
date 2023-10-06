import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-12 mx-auto">
      <Image priority height={120} width={120} src="/images/kyue-logo.png" alt="logo" />

      <ul className="flex space-x-24 text-zinc-300 uppercase font-light text-sm">
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
