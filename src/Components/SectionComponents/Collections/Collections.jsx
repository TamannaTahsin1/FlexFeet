import img1 from "../../../assets/collections/28_DZGrowU.jpg";
import img2 from "../../../assets/collections/acne_studios.jpg";
import img3 from "../../../assets/collections/aime_leon_dore (1).jpg";
import img5 from "../../../assets/collections/air_jordans.jpg";
import img6 from "../../../assets/collections/alpgaomegacirlce.png";
import img7 from "../../../assets/collections/bagpacks.jpg";
import img8 from "../../../assets/collections/bags.jpg";
import img9 from "../../../assets/collections/bape.jpg";
import img10 from "../../../assets/collections/beanies.jpg";
import img11 from "../../../assets/collections/belts.jpg";
import img12 from "../../../assets/collections/billionaire_boys.jpg";
import img13 from "../../../assets/collections/drip-project.jpg";
import img14 from "../../../assets/collections/for_her_icon.jpg";
import img15 from "../../../assets/collections/henney_bear_icon.jpg";
import img16 from "../../../assets/collections/new_circle_icons.png";
import img17 from "../../../assets/collections/thekhwaab.jpg";
import img18 from "../../../assets/collections/zouk_icon.jpg";

const Collections = () => {
  const allData = [
    {
      name: "View All",
      img: img1,
    },
    {
      name: "Acne Studios",
      img: img2,
    },
    {
      name: "Aime Leon Dore",
      img: img3,
    },
    {
      name: "Air Jordans",
      img: img5,
    },
    {
      name: "Alpha & Omega",
      img: img6,
    },
    {
      name: "Bag Packs",
      img: img7,
    },
    {
      name: "Bags",
      img: img8,
    },
    {
      name: "Bape",
      img: img9,
    },
    {
      name: "Beanies",
      img: img10,
    },
    {
      name: "Belts",
      img: img11,
    },
    {
      name: "Billionaire Boys",
      img: img12,
    },
    {
      name: "Drip Project",
      img: img13,
    },
    {
      name: "For Her",
      img: img14,
    },
    {
      name: "Henny Bear",
      img: img15,
    },
    {
      name: "3 Eleven",
      img: img16,
    },
    {
      name: "The Khwaab",
      img: img17,
    },
    {
      name: "ZOUK",
      img: img18,
    },
  ];
  return (
    <div className="flex justify-center gap-4 p-5">
      {allData.map((data, index) => (
        <div key={index}>
          <img
            className="size-[90px] rounded-full border-[3px] border-blue-500 p-[1px] "
            src={data.img}
            alt=""
          />
          <p className="p-2 uppercase text-center text-xs">{data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Collections;
