import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full bg-white items-center justify-between px-4 py-6 md:px-10 lg:px-24">

   
      <h1 className="font-serif text-[24px] font-medium tracking-[-0.32px] text-[#426B1F] md:text-[32px]">
        World Peas
      </h1>

      
      <div className="flex items-center gap-3 md:hidden">
        <Link href="/Cart">
          <button className="rounded-[8px] bg-[#426B1F] px-4 py-2 text-sm font-medium text-white">
            Basket (3)
          </button>
        </Link>
      </div>

      <div className="hidden items-center gap-10 text-[16px] font-normal text-black md:flex">

        <Link href="/Product" className="hover:text-gray-600">
          Shop
        </Link>

        <a href="#" className="hover:text-gray-600">
          Newstand
        </a>

        <a href="#" className="hover:text-gray-600">
          Who we are
        </a>

        <a href="#" className="hover:text-gray-600">
          My profile
        </a>

        <Link href="/Cart">
          <button className="flex h-[48px] w-[126px] items-center justify-center rounded-[8px] bg-[#426B1F] text-[16px] font-medium text-white">
            Basket (3)
          </button>
        </Link>

      </div>
    </nav>
  );
}