import React from "react";
import icons from "../../utils/icons/icons.js";

const { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } = icons;
export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      {/* Sidebar top */}
      <ul className="sidebar__generic">
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>

      {/* Sidebar middle */}
      <div className="sidebar_middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar_projects">Projects list</ul>
      {/* Add Project Compoenent */}
    </div>
  );
};
