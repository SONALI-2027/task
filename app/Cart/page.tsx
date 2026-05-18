import Navbar from "../../components/Navbar";
import { products } from "../../data/products";

export default function Cart() {
  return (
    <>
      <Navbar />

      
      <section className="mx-auto w-full px-4 pt-10 md:px-10 lg:px-24">

        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-6">

          <h1 className="text-[36px] font-normal leading-[120%] tracking-[-1.28px] text-black md:text-[48px] lg:text-[64px]">
            Basket
          </h1>

          <p className="text-[20px] font-light leading-[130%] text-black">
            3 items
          </p>

        </div>

        <div className="mt-8 h-[1px] w-full bg-[#E6E6E6] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"></div>
      </section>

      
      <section className="mx-auto flex flex-col gap-8 px-4 pt-12 lg:flex-row lg:justify-between lg:px-24">

        <div className="flex flex-col gap-6">

          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[24px] border-2 border-[#E6E6E6] bg-[#FAFAF5] p-4 md:flex-row md:items-center lg:w-[821px]"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-[220px] w-full rounded-[16px] object-cover md:h-[120px] md:w-[120px] lg:h-[160px] lg:w-[160px]"
              />

              <div className="mt-4 flex flex-1 flex-col gap-3 md:ml-8 md:mt-0">

                <h2 className="text-[20px] font-semibold leading-[130%] text-black">
                  {item.name}
                </h2>

                <p className="text-[20px] font-semibold leading-[130%] text-[#426B1F]">
                  {item.price}
                </p>

                <button className="inline-flex w-fit items-center justify-end gap-[46px] rounded-[20px] border-2 border-black/10 bg-white py-[4px] pr-[8px] pl-[16px]">
                  <span className="text-[16px] font-semibold leading-[130%] text-black">
                    1 lb
                  </span>

                  <div className="flex h-[32px] w-[32px] items-center justify-center">
                    ✎
                  </div>
                </button>
              </div>

              <div className="mt-4 self-end md:mt-0 md:self-start md:pt-8 md:pr-8">
                <p className="text-right text-[20px] font-semibold leading-[130%] text-black">
                  {item.price}
                </p>
              </div>

            </div>
          ))}
        </div>

        <div className="w-full rounded-[24px] border-2 border-[#E6E6E6] bg-[#FAFAF5] p-8 lg:h-[350px] lg:w-[395px]">

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
  );
}