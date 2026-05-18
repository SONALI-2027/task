import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <section className="mt-20 flex justify-center px-4 md:px-8 lg:px-6">
        <h1 className="max-w-[1000px] text-center text-[36px] font-normal leading-[120%] tracking-[-1.28px] md:text-[48px] lg:text-[64px]">
          We’re{" "}
          <span className="italic">
            farmers, purveyors,
          </span>{" "}
          and{" "}
          <span className="italic">
            eaters
          </span>{" "}
          of organically grown food.
        </h1>
      </section>

      <div className="mt-10 flex justify-center px-4">
        <Link
          href="/product"
          className="inline-flex items-center justify-center rounded-[8px] bg-[#426B1F] px-6 py-4 text-[18px] font-medium text-white md:px-[32px] md:py-[19px] md:text-[20px]"
        >
          Browse our shop
        </Link>
      </div>

      <div className="mt-20 flex flex-col gap-6 px-4 lg:flex-row lg:justify-center lg:gap-10">

        <img
          src="https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1778914964/11_b5dfcj.jpg"
          alt="green vegetables"
          className="h-auto w-full rounded-[12px] object-cover lg:h-[693px] lg:w-[504px]"
        />

        <img
          src="https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1778914983/22_owr9fn.jpg"
          alt="Food"
          className="h-auto w-full rounded-[12px] object-cover lg:h-[480px] lg:w-[780px]"
        />

      </div>

      <section className="mx-auto mt-24 flex flex-col gap-8 px-4 md:px-10 lg:max-w-[1200px] lg:flex-row lg:justify-between">

        <h3 className="text-[14px] font-semibold uppercase leading-[160%] tracking-[0.56px] text-black lg:w-[181px]">
          WHAT WE BELIEVE
        </h3>

        <p className="w-full text-[18px] font-normal leading-[160%] text-black md:text-[20px] lg:w-[822px]">
          We believe in produce. Tasty produce. Produce like:
          <br />
          <br />
          Apples. Oranges. Limes. Lemons. Guavas. Carrots.
          Cucumbers. Jicamas. Cauliflowers. Brussels sprouts.
          Shallots. Japanese eggplants. Asparagus. Artichokes—
          Jerusalem artichokes, too. Radishes. Broccoli.
          Baby broccoli. Broccolini. Bok choy. Scallions.
          Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
          <br />
          <br />
          What are we forgetting?
          <br />
          <br />
          Oh! Onions. Yams. Avocados. Lettuce. Arugula
          (to some, “rocket”). Persian cucumbers, in addition
          to aforementioned “normal” cucumbers. Artichokes.
          Zucchinis. Pumpkins. Squash. Sweet potatoes and
          potato-potatoes. Jackfruit. Monk fruit. Fruits of
          our labor (this website). Sorrel. Pineapple. Mango.
          Gooseberries. Blackberries. Tomatoes. Heirloom
          tomatoes. Beets. Chives. Corn. Endive. Escarole...
        </p>

      </section>
    </>
  );
}