/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import logoLight from "../../assets/logo_white.png";
import logoColor from "../../assets/logo_color.png";
import { Button, Login, Modal } from "@/components";
import { TYPE_SIGN_LOGIN, navigations } from "@/utils/constants";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import WithRoute from "@/hocs/withRoute";
import { useAppStore } from "@/store/useAppStore";
import { useUserStore } from "@/store/useUserStore";

const Navigation = WithRoute(({ location }) => {
  const { isOpen, setOpen, setTypeSignLogin } = useAppStore();
  const { token } = useUserStore();
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
        {token ? (
          <Button
            onClick={() => {
              setTypeSignLogin(TYPE_SIGN_LOGIN.REGISTER);
              setOpen(!isOpen);
            }}
            type3={location?.pathname === "/"}
            type1={location?.pathname !== "/"}>
            Sign In
          </Button>
        ) : (
          <Button
            onClick={() => {
              setTypeSignLogin(TYPE_SIGN_LOGIN.LOGIN);
              setOpen(!isOpen);
            }}
            type3={location?.pathname === "/"}
            type1={location?.pathname !== "/"}>
            Login
          </Button>
        )}

        <Modal isOpen={isOpen} onRequestClose={() => setOpen(!isOpen)}>
          <Login />
        </Modal>
      </div>
    </nav>
  );
});

// eslint-disable-next-line react-refresh/only-export-components
export default Navigation;
