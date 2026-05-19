import Navbar from "../../components/Navbar";
import { products } from "../../data/products";

export default function Product() {
  return (
    <>
      <Navbar />

      <section className="mx-auto w-full bg-white px-4 pt-10 md:px-10 lg:px-24">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <h1 className="text-[36px] font-normal leading-[120%] tracking-[-1.28px] text-black md:text-[48px] lg:text-[64px]">
              Produce
            </h1>

            <div className="mt-2 flex items-center">
              <span className="text-[20px] font-medium leading-[130%] text-black">
                Fresh
              </span>

              <span className="mx-2 text-[20px] font-light leading-[130%] text-black">
                —
              </span>

              <span className="text-[20px] font-light leading-[130%] text-black">
                August 21, 2023
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center justify-center rounded-[20px] bg-[#426B1F] px-[16px] py-[9.5px]">
              <span className="text-center text-[16px] font-semibold leading-[130%] text-white">
                Default
              </span>
            </button>

            <button className="inline-flex items-center justify-center rounded-[20px] border border-[#C2C2C2] bg-white px-[16px] py-[9.5px]">
              <span className="text-center text-[16px] font-semibold leading-[130%] text-black">
                A-Z
              </span>
            </button>

            <button className="inline-flex items-center justify-center rounded-[20px] border border-[#C2C2C2] bg-white px-[16px] py-[9.5px]">
              <span className="text-center text-[16px] font-semibold leading-[130%] text-black">
                List view
              </span>
            </button>
          </div>

        </div>

        <div className="mt-8 h-[2px] w-full bg-[#E6E6E6]"></div>
      </section>

<section className="mx-auto flex flex-col items-center gap-8 px-4 pt-12 md:flex-row md:flex-nowrap md:justify-center md:gap-6 lg:justify-between lg:px-24">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[395px] overflow-hidden rounded-[24px] border-2 border-[#E6E6E6] bg-[#FAFAF5]"
          >

            <img
              src={item.image}
              alt={item.name}
              className="h-[240px] w-full object-cover md:h-[260px] lg:h-[296px]"
            />

            <div className="p-6">
              <h2 className="text-[20px] font-semibold leading-[130%] text-black">
                {item.name}
              </h2>

              <p className="mt-2 text-[20px] font-semibold leading-[130%] text-[#426B1F]">
                {item.price}
              </p>

              <p className="mt-2 text-[16px] font-normal leading-[150%] text-[#6D6D6D]">
                Grown in {item.location}
              </p>
            </div>

          </div>
        ))}
      </section>
    </>
  );
}