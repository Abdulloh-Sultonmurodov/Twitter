import { NavLink } from "react-router-dom";

const NavItem = ({ item, activeNav, setActiveNav }) => {
  return (
    <NavLink
      onClick={() => setActiveNav(item.path)}
      to={item.path}
      key={item.id}
      className={
        "flex items-center gap-[20px] font-semibold text-[18px] text-[#000000]"
      }
    >
      {activeNav == item.path ? item.activeIcon : item.icon}
      <span>{item.title}</span>
    </NavLink>
  );
};

export default NavItem;
