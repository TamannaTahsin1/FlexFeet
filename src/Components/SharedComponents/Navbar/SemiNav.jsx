import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import DropdownSm from "./DropdownSm";

const SemiNav = () => {
  const { pathname } = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Debounce the scroll event
    const debouncedHandleScroll = debounce(handleScroll, 150);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  // navlist ---------
  const navList = [
    {
      name: "Streetwear",
      href: "#aboutUs",
    },
    {
      route: "Luxury",
      subService: [
        {
          route: "mobileAppDevelopment",
          name: "Mobile App Development",
        },
        {
          route: "desktopAppDevelopment",
          name: "Desktop App Development",
        },
        {
          route: "webDevelopment",
          name: "Web App Development",
        },
        {
          route: "gameDevelopment",
          name: "Game Development",
        },
        {
          route: "uiUxDesign",
          name: "UI/UX Design",
        },
        {
          route: "sqa",
          name: "SQA",
        },
        {
          route: "itConsultancy",
          name: "IT Consultancy",
        },
        {
          route: "officeExpansion",
          name: "Offshore Office Expansion",
        },
        {
          route: "employeeAugmentation",
          name: "Employee Augmentation",
        },
      ],
      href: "#services",
    },
    {
      name: "Brands",
      href: "#team",
    },
    { name: "sneakers", route: "Our Portfolio" },
    {
      name: "Lifestyle & Accessories",
      href: "#contactUs",
    },
    {
      name: "Curated",
      href: "#contactUs",
    },
    {
      name: "Contact Us",
      href: "#contactUs",
    },
    {
      name: "FAQ",
      href: "#contactUs",
    },
    {
      name: "Track Order",
      href: "#contactUs",
    },
  ];
  const isHomePage = location.pathname !== "/";

  return (
    <div
      className={`sticky top-0 z-[999] mx-auto flex w-full items-center justify-around bg-white pb-3 ${scrollPosition > 450 ? "bg-white backdrop-blur-md" : isHomePage ? "bg-white backdrop-blur-md" : "bg-white"} duration-300`}
    >
      <div>
        {/* large device menu*/}
        <div className="hidden md:block">
          <ul className="flex  items-center justify-center gap-x-10">
            {navList?.map((navItem, idx) => (
              <a href={navItem?.href} key={idx}>
                {/* If navItem have any subMenu then show dropdown  */}

                {navItem?.subService ? (
                  <Dropdown navItem={navItem} />
                ) : pathname !== "/" && navItem?.href ? (
                  /* for hash navItem that doesnt redirect to any page . 
                  hash route work only in home page .
                  if the url path is not home . 
                  then it will redirect to home
               */
                  <li
                    onClick={() => (window.location.href = "/")}
                    className="hover:text-primary group relative flex cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300"
                  >
                    {navItem?.name || navItem?.route}
                    <span className=" bg-primary h-[3px]  w-0  rounded-full duration-300 ease-out group-hover:w-full">
                      <span className=" bg-primary absolute -bottom-[2px] left-0 rounded-full duration-300 ease-out group-hover:left-[95%] group-hover:size-[8px]"></span>
                    </span>
                  </li>
                ) : navItem?.route ? (
                  /* for link navItem that redirect to any page . 
                  if navItem has route property 
                  it wil redirect to that route Page.
               */
                  <Link
                    to={`/${(navItem?.route).replace(" ", "-").toLowerCase()}`}
                    className="hover:text-primary group relative flex cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300"
                  >
                    {navItem?.route}
                    <span className=" bg-primary h-[3px]  w-0  rounded-full duration-300 ease-out group-hover:w-full">
                      <span className=" bg-primary absolute -bottom-[2px] left-0 rounded-full duration-300 ease-out group-hover:left-[95%] group-hover:size-[8px]"></span>
                    </span>
                  </Link>
                ) : (
                  /* 
                if no condition matched then this 
                will be a normal hash route
               */

                  <li className="hover:text-primary group relative flex cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300">
                    {navItem?.name}
                    <span className=" bg-primary h-[3px]  w-0  rounded-full duration-300 ease-out group-hover:w-full">
                      <span className=" bg-primary absolute -bottom-[2px] left-0 rounded-full duration-300 ease-out group-hover:left-[95%] group-hover:size-[8px]"></span>
                    </span>
                  </li>
                )}
              </a>
            ))}
          </ul>
        </div>
        {/* small device  responsive menu */}
        <div className=" md:hidden">
          <ul
            className={`absolute left-0 top-[90px] z-[999] flex h-screen  w-[250px]  flex-col gap-y-8  ${scrollPosition > 450 ? "bg-white backdrop-blur-md" : isHomePage ? "bg-white backdrop-blur-md" : "bg-[#F7F7F5]"} p-6 ${isNavOpen ? "visible left-0 opacity-100" : "invisible -left-10 opacity-0"} duration-300`}
          >
            {navList?.map((navItem, idx) => (
              <a
                href={navItem?.href}
                className="w-full cursor-pointer "
                key={idx}
              >
                {navItem?.subService ? (
                  <DropdownSm navItem={navItem}></DropdownSm>
                ) : pathname !== "/" && navItem?.href ? (
                  <li
                    onClick={() => (window.location.href = "/")}
                    className="hover:text-primary group relative flex cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300"
                  >
                    {navItem?.name || navItem?.route}
                  </li>
                ) : navItem?.route ? (
                  <Link
                    to={`/${(navItem?.route).replace(" ", "-").toLowerCase()}`}
                    className="hover:text-primary group relative flex cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300"
                  >
                    {navItem?.route}
                  </Link>
                ) : (
                  <li className="hover:text-primary group relative flex cursor-pointer flex-col gap-[2px] text-lg font-medium text-slate-700 duration-300">
                    {navItem?.name}
                  </li>
                )}
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* hamburger menu */}
      <div className=" md:hidden">
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? (
            <svg
              width={35}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#EB0129"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16 8L8 16M8.00001 8L16 16"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              width={35}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Menu / Menu_Alt_02">
                  <path
                    id="Vector"
                    d="M11 17H19M5 12H19M11 7H19"
                    stroke="#EB0129"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default SemiNav;
