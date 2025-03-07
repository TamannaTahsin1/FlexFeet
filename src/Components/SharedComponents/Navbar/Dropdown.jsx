import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-[999]">
      <div onClick={() => setIsOpen(!isOpen)} className="group  flex gap-2">
        <div className="hover:text-primary relative flex cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300">
          {navItem?.route}
          <span className=" bg-primary h-[3px] w-0  rounded-full duration-300 ease-out group-hover:w-full">
            <span className=" bg-primary absolute -bottom-[2px] left-0 rounded-full duration-300 ease-out group-hover:left-[95%] group-hover:size-[8px]"></span>
          </span>
        </div>
        <svg
          className={`${isOpen ? "rotate-0" : "-rotate-180"} group-hover:stroke-primary group stroke-slate-600    duration-200`}
          width={18}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M7 10L12 15L17 10"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </div>

      <div
        className={`${isOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"} absolute top-[80px] flex h-auto w-full max-w-[570px] -translate-x-[50%] flex-wrap justify-between gap-2 rounded-lg bg-white p-4 shadow-md duration-200`}
      >
        {navItem?.subService?.map((service, idx) => (
          <Link
            onClick={() => setIsOpen(false)}
            to={`/service/${service?.route}`}
            key={idx}
            className="hover:bg-primary/10 flex h-[60px] max-h-[80px] w-full max-w-[170px] items-center gap-2 rounded-lg bg-slate-50 px-4 font-medium text-slate-600 duration-300 hover:text-black"
          >
            <span>{service?.icon}</span>
            <span className="text-xs">{service?.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
