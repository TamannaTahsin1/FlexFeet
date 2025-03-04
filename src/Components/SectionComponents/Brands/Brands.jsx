import Marquee from "react-fast-marquee";
import img1 from "../../../assets/brands/adidas.jpg";
import img2 from "../../../assets/brands/dior.jpg";
import img3 from "../../../assets/brands/drew.jpg";
import img4 from "../../../assets/brands/essentials.jpg";
import img5 from "../../../assets/brands/evo.jpg";
import img6 from "../../../assets/brands/jordan.jpg";
import img7 from "../../../assets/brands/kenzo.jpg";
import img8 from "../../../assets/brands/lv.jpg";
import img9 from "../../../assets/brands/nb.jpg";
import img10 from "../../../assets/brands/nike.jpg";
import img11 from "../../../assets/brands/off-white.jpg";
import img12 from "../../../assets/brands/plam-angels.jpg";
import img13 from "../../../assets/brands/supreme.jpg";
import img14 from "../../../assets/brands/vans.jpg";
import img15 from "../../../assets/brands/yeezy.jpg";
const Brands = () => {
  return (
    <div className=" pt-10 pb-40">
      <Marquee>
        <div className="flex justify-center gap-10">
          <img className="size-24" src={img1} alt="" />
          <img className="size-24" src={img2} alt="" />
          <img className="size-24" src={img3} alt="" />
          <img className="size-24" src={img4} alt="" />
          <img className="size-24" src={img5} alt="" />
          <img className="size-24" src={img6} alt="" />
          <img className="size-24" src={img7} alt="" />
          <img className="size-24" src={img8} alt="" />
          <img className="size-24" src={img9} alt="" />
          <img className="size-24" src={img10} alt="" />
          <img className="size-24" src={img11} alt="" />
          <img className="size-24" src={img12} alt="" />
          <img className="size-24" src={img13} alt="" />
          <img className="size-24" src={img14} alt="" />
          <img className="size-24" src={img15} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
