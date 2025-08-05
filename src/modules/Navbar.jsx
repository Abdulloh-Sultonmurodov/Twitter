import { TwitterIcon } from "../assets/images";
import { useState } from "react";
import { Button, Logout, NavItem, RouteList } from "../components";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/");

  return (
    <div className="w-[283px] relative h-[100vh] overflow-y-auto pt-[31px] pr-[15px]">
      <img
        className="mb-[49px]"
        src={TwitterIcon}
        alt="Twitter Icon"
        width={40}
        height={33}
      />
      <nav className="flex flex-col gap-[32px]">
        {RouteList.map((item) => (
          <NavItem
            key={item.id}
            setActiveNav={setActiveNav}
            activeNav={activeNav}
            item={item}
          />
        ))}
      </nav>
      <Button classList={`!py-[15px] !w-[230px] mt-[30px]`}>Tweet</Button>
      <Logout />
    </div>
  );
};

export default Navbar;
