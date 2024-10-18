import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-[#222D31] text-white w-72 h-screen px-4 ">
        <h2 className="">Admin</h2>
        <div className="list-group list-group-flush flex flex-col gap-3 mt-5">
          <NavLink className="flex items-center  px-3" to="/">
          ◉ Control Panel
          </NavLink>
          <NavLink className="flex items-center px-3" to="/availableBook">
          ◉ Book Available
          </NavLink>
          <NavLink className="flex items-center px-3" to="/bookissue">
          ◉ Book Issue
          </NavLink>
          <NavLink className="flex items-center px-3" to="/returnbook">
          ◉ Return Book
          </NavLink>
          <NavLink className="flex items-center px-3" to="/finepay">
          ◉ Fine Pay
          </NavLink>
          <NavLink className="flex items-center px-3" to="/membershipForm">
          ◉ Membership Form 
          </NavLink>
          <NavLink className="flex items-center px-3" to="/updatemembershipForm">
          ◉ Update Membership Form 
          </NavLink>
          <NavLink className="flex items-center px-3" to="/additemform">
          ◉  Add Item Form updateBook
          </NavLink>
          <NavLink className="flex items-center px-3" to="/updateBook">
          ◉  Update Book
          </NavLink>
          <NavLink className="flex items-center px-3" to="/usermanagement">
          ◉  User Management
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
