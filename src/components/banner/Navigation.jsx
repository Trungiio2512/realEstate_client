/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import logoLight from "../../assets/logo_white.png";
import logoColor from "../../assets/logo_color.png";
import { Button } from "@/components";
import { navigations } from "@/utils/constants";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import WithRoute from "@/hocs/withRoute";
const Navigation = WithRoute(({ location }) => {
  console.log(location);
  return (
    <nav
      className={twMerge(
        clsx(
          "fixed z-20 py-2 top-[60px] w-full px-[100px] flex bg-transparent justify-between items-center mx-auto"
        )
      )}>
      <Link to={"/"}>
        <div className="w-[120px] h-auto">
          <img
            src={location?.pathname === "/" ? logoLight : logoColor}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="flex items-center gap-2">
        {navigations &&
          navigations.map((nav) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  clsx(
                    "text-sm p-2 uppercase active:text-base",
                    isActive && "font-semibold",
                    location?.pathname === "/" ? "text-white" : "text-main-500"
                  )
                }
                key={nav.id}
                to={nav.path}>
                {nav.text}
              </NavLink>
            );
          })}
        <Button type3>Add Listing</Button>
      </div>
    </nav>
  );
});

// eslint-disable-next-line react-refresh/only-export-components
export default Navigation;
