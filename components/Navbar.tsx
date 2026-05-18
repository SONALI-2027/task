import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex w-full items-center justify-between px-4 py-6 md:px-10 lg:px-24">
      
    
      <h1 className="font-serif text-[32px] font-medium tracking-[-0.32px] text-[#426B1F]">
        World Peas
      </h1>

   
      <div className="flex items-center gap-10 text-[16px] font-normal text-black md:flex">
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
        <button className="flex h-[44px] items-center justify-center rounded-[8px] bg-[#426B1F] px-4 text-sm font-medium text-white md:h-[48px] md:w-[126px] md:text-[16px]">
           Basket (3)
        </button>
        </Link>
      </div>
    </nav>
    )
}