import Navbar from "../../components/Navbar";
import { products } from "../../data/products";


export default function Cart(){
    return(
        <>
        <Navbar />
        <section className="mx-auto h-[149px] w-[1440px] px-24 pt-10">
  <div className="flex items-end gap-6">

    <h1 className="text-[64px] font-normal leading-[120%] tracking-[-1.28px] text-black">
      Basket
    </h1>

    <p className="text-[20px] font-light leading-[130%] text-black">
      3 items
    </p>

  </div>

  <div className="mt-8 h-[1px] w-[1248px] bg-[#E6E6E6] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"></div>
</section>
<section className="mx-auto flex h-[1024px] w-[1440px] justify-between px-24 pt-12">
  <div className="flex flex-col gap-6">
    {products.map((item) => (
  <div
    key={item.id}
    className="flex h-[159px] w-[821px] items-center rounded-[24px] border-2 border-[#E6E6E6] bg-[#FAFAF5]"
  >
    <img
  src={item.image}
  alt={item.name}
  className="h-[160px] w-[160px] object-cover"
/>
  <div className="ml-8 flex flex-1 flex-col gap-3">

  <h2 className="text-[20px] font-semibold leading-[130%] text-black">
    {item.name}
  </h2>

  <p className="text-[20px] font-semibold leading-[130%] text-[#426B1F]">
    {item.price}
  </p>

</div>
<button className="inline-flex w-fit items-center justify-end gap-[46px] rounded-[20px] border-2 border-black/10 bg-white py-[4px] pr-[8px] pl-[16px]">

  <span className="text-[16px] font-semibold leading-[130%] text-black">
    1 lb
  </span>

  <div className="flex h-[32px] w-[32px] items-center justify-center">
    ✎
  </div>

</button>
<div className="self-start pt-8 pr-8">

  <p className="text-right text-[20px] font-semibold leading-[130%] text-black">
    {item.price}
  </p>

</div>

  </div>
))}


  </div>
  <div className="w-[395px] h-[350px] rounded-[24px] border-2 border-[#E6E6E6] bg-[#FAFAF5] p-8">

 
  <h2 className="text-[20px] font-semibold leading-[130%] text-black">
    Order Summary
  </h2>

  
  <div className="mt-8 flex flex-col gap-5">

    <div className="flex justify-between">
      <p className="text-[16px] font-normal leading-[130%] text-black">
        Subtotal
      </p>

      <p className="text-right text-[16px] font-normal leading-[130%] text-black">
        $27.44
      </p>
    </div>

    <div className="flex justify-between">
      <p className="text-[16px] font-normal leading-[130%] text-black">
        Shipping
      </p>

      <p className="text-right text-[16px] font-normal leading-[130%] text-black">
        $3.99
      </p>
    </div>

   
    <div className="flex justify-between">
      <p className="text-[16px] font-normal leading-[130%] text-black">
        Tax
      </p>

      <p className="text-right text-[16px] font-normal leading-[130%] text-black">
        $2.00
      </p>
    </div>

    
    <div className="flex justify-between pt-3">
      <p className="text-[16px] font-semibold leading-[130%] text-black">
        Total
      </p>

      <p className="text-right text-[16px] font-semibold leading-[130%] text-black">
        $33.43
      </p>
    </div>

  </div>

 
  <button className="mt-10 inline-flex w-full items-center justify-between rounded-[8px] bg-[#426B1F] py-[8px] pr-[16px] pl-[24px]">

   
    <span className="text-[16px] font-semibold leading-[130%] text-white">
      Continue to payment
    </span>

  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M8 16H24M18 22L24 16L18 10"
        stroke="white"
      />
    </svg>

  </button>

</div>

</section>


        </>
    )
}