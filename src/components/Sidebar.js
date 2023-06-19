import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  
//  State for sidebar collapse
  const [collapsed, setCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Function to handle sidebar toggle
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h5><i className="fa-solid fa-envelope icon"></i> Email Module</h5>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="#" onClick={toggleDropdown} className="dropdown-toggle dropdownbtn">
          <i className="fa fa-people-roof icon"></i>  Audience
          </Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu1">
              <li>
                <Link to="#">All Contacts</Link>
              </li>
              <li>
                <Link to="#">Email Subscriber List</Link>
              </li>
            </ul>
          )}
        </li>
        <hr/>
        <li>
          <Link to="#" onClick={handleToggle} className="dropdown-toggle dropdownbtn">
          <i className="fa fa-bullhorn icon"></i>  Campaign
          </Link>
          {collapsed && (
            <ul className="dropdown-menu1">
              <li>
                <Link to="#">All Campaign List</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
