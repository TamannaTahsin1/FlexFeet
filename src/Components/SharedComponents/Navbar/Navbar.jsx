import Container from "../Container/Container";
import logoImg from "../../../assets/logo/logo.png";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import SemiNav from "./SemiNav";

const 
Navbar = () => {
  return (
    <Container>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex w-[60%] items-center justify-center gap-3">
            <div>
              <img src={logoImg} className="w-[100px]" alt="" />
            </div>
            {/* search bar */}
            <div className="relative hidden h-12 w-full rounded-lg border-none bg-[#EFEFEF]  py-2 pl-12 pr-4 md:block">
              <label
                className="absolute left-4 top-[44%]  -translate-y-1/2 text-[26px] text-gray-500 dark:text-gray-300"
                htmlFor="search"
              >
                <IoIosSearch />
              </label>
              <input
                id="search"
                placeholder="FIND YOUR DRIP"
                className="border-none bg-transparent text-sm outline-none focus:border-none focus:outline-none"
                type="text"
              />
            </div>
          </div>
          {/* location and cart  */}
          <div className="flex justify-center gap-3">
            <div className="flex size-14 items-center justify-center gap-1 rounded-sm bg-[#EFEFEF] p-2">
              BN <MdKeyboardArrowDown />
            </div>
            <div className=" flex size-14  items-center  justify-center gap-1 rounded-sm bg-[#EFEFEF] p-2">
              <FaCartArrowDown className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      <SemiNav />
    </Container>
  );
};

export default Navbar;
