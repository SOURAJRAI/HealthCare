import React from "react";
import { HiViewGrid } from "react-icons/hi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAddBox, MdPhone } from "react-icons/md";
import { TbGraphFilled } from "react-icons/tb";
import { BsChatDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { navItems } from "../../data/navlinks";
import "./Sidebar.css";

const iconMap = {
  Dashboard: <HiViewGrid className="menu-icon" />,
  History: <RiArrowUpDownFill className="menu-icon" />,
  Calendar: <FaRegCalendarAlt className="menu-icon" />,
  Appointments: <MdAddBox className="menu-icon" />,
  Statistics: <TbGraphFilled className="menu-icon" />,
  Chat: <BsChatDots className="menu-icon" />,
  Support: <MdPhone className="menu-icon" />,
  Setting: <IoSettingsOutline className="menu-icon" />,
  Settings: <IoSettingsOutline className="menu-icon" />
};

const Sidebar = () => {
  return (
    <div className="sidebar">
    
      <div className="logo-container">
        <h1 className="logo">
          <span className="logo-health">Health</span>
          <span className="logo-care">care.</span>
        </h1>
      </div>

    
      <div className="menu-section">
        <h3 className="section-title">General</h3>
        <ul className="menu-list">
          {navItems.general.map(item => (
            <li
              key={item.name}
              className={`menu-item${item.active ? " active" : ""}`}
            >
              {iconMap[item.icon]}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>


      <div className="menu-section">
        <h3 className="section-title">Tools</h3>
        <ul className="menu-list">
          {navItems.tools.map(item => (
            <li key={item.name} className="menu-item">
              {iconMap[item.icon]}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="menu-section bottom-section">
        <ul className="menu-list">
          {navItems.settings.map(item => (
            <li key={item.name} className="menu-item">
              {iconMap[item.icon] || iconMap.Settings}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;