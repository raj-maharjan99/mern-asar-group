import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function NavList({ setOpenNav }) {
  const navData = [
    { title: "Home", to: "/", onClick: () => setOpenNav(false) },
    { title: "Contact", to: "contact", onClick: () => setOpenNav(false) },
    { title: "Form", to: "form", onClick: () => setOpenNav(false) },
    { title: "Movie", to: "movie", onClick: () => setOpenNav(false) },
  ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navData.map((nav, i) => (
        <Typography
          key={i}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <NavLink
            onClick={nav.onClick}
            to={nav.to}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {nav.title}
          </NavLink>
        </Typography>
      ))}

      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          onClick={() => setOpenNav(false)}
          to={"contact"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          onClick={() => setOpenNav(false)}
          to={"form"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Form
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          onClick={() => setOpenNav(false)}
          to={"movie"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Movie
        </NavLink>
      </Typography> */}
    </ul>
  );
}

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Samragi Maharjan
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} />
      </Collapse>
    </Navbar>
  );
}
export default Header;
