import React, { useState } from 'react'

export default function Side() {
  // State for sidebar collapse
  const [collapsed, setCollapsed] = useState(false);

  // Function to handle sidebar toggle
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Sidebar content */}
      <h4>Email Module</h4>
    {!collapsed && <>
      <div className="dropdown">
            <a  className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Audience</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">All Contacts</a>
              <a className="dropdown-item" href="#">Email Subscriber List</a>
           
            </div>
          </div>
          <div className="dropdown">
            <a  className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Campaign</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">All Campaign List</a>
              
           
            </div>
          </div></> }

      {/* Sidebar toggle button */}
      <button className="toggle-button" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
 
}

