import Link from "next/link";


export default function Home() {
  return (
    <>
    <section className="mt-20 flex justify-center px-6">
        <h1 className="max-w-[950px] text-center text-[64px] font-normal leading-[120%] tracking-[-1.28px] text-black">
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
        <div className="mt-10 flex justify-center">
          <Link href="/Product">
              <button className="inline-flex items-center justify-center rounded-[8px] bg-[#426B1F] px-[32px] py-[19px] text-[20px] font-medium text-white">
                  Browse our shop
              </button>
            </Link> 
       </div>
       <div className="mt-20 flex justify-center gap-10">

  <img
    src="https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1778914964/11_b5dfcj.jpg"
    alt="green vegetables"
    className="h-[693px] w-[504px] object-cover"
  />


  <img
    src="https://res.cloudinary.com/dkie0ztb7/image/upload/q_auto/f_auto/v1778914983/22_owr9fn.jpg"
    alt="Food"
    className="h-[480px] w-[780px] object-cover"
  />
</div>
<section className="mx-auto mt-24 flex max-w-[1200px] justify-between px-10">

  <h3 className="w-[181px] text-[14px] font-semibold uppercase tracking-[0.56px] text-black leading-[160%]">
    WHAT WE BELIEVE
  </h3>

  
  <p className="w-[822px] text-[20px] font-normal leading-[160%] text-black">
    We believe in produce. Tasty produce. Produce like:
    <br />
    <br />
    Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. 
    <br />
    <br />
     What are we forgetting?
     <br />
     <br />
  Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...
  </p>

</section>
      </>
  );
}

